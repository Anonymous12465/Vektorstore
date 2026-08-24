import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';
import { getPayPalAccessToken, PAYPAL_API_BASE } from '@/lib/paypal';

interface CartItem {
  productId: string;
  quantity: number;
  selectedColor: string;
}

interface CreateOrderRequest {
  cart: CartItem[];
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateOrderRequest = await request.json();
    const { cart } = body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      console.error('Invalid cart data received:', body);
      return NextResponse.json(
        { error: 'Invalid cart data' },
        { status: 400 }
      );
    }

    console.log('Creating PayPal order for cart items:', cart.length);

    // Calculate total server-side from products.ts
    let total = 0;
    const validatedItems = [];
    
    for (const item of cart) {
      const product = products.find(p => p.id === item.productId);
      if (!product) {
        console.error('Product not found:', item.productId);
        return NextResponse.json(
          { error: `Product ${item.productId} not found` },
          { status: 400 }
        );
      }
      total += product.price * item.quantity;
      validatedItems.push({
        productId: item.productId,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        selectedColor: item.selectedColor
      });
    }

    // Add shipping cost
    const shipping = total >= 50 ? 0 : 5;
    const orderTotal = total + shipping;

    console.log('Order total calculated server-side:', {
      subtotal: total,
      shipping,
      total: orderTotal,
      items: validatedItems
    });

    // Get PayPal access token using shared helper
    let accessToken: string;
    try {
      accessToken = await getPayPalAccessToken();
    } catch (error) {
      console.error('Failed to get PayPal access token:', error);
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to authenticate with PayPal' },
        { status: 500 }
      );
    }

    // Create PayPal order
    console.log('Creating PayPal order with total:', orderTotal.toFixed(2));
    
    const orderResponse = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: orderTotal.toFixed(2),
            },
          },
        ],
      }),
    });

    if (!orderResponse.ok) {
      const errorText = await orderResponse.text();
      console.error('PayPal order creation failed:', {
        status: orderResponse.status,
        statusText: orderResponse.statusText,
        responseBody: errorText
      });
      
      // Try to parse error for better diagnostics
      let errorDetails = {};
      try {
        errorDetails = JSON.parse(errorText);
      } catch (e) {
        // Use raw text if parsing fails
      }

      return NextResponse.json(
        { 
          error: 'Failed to create PayPal order',
          details: errorDetails,
          rawResponse: errorText
        },
        { status: 500 }
      );
    }

    const orderData = await orderResponse.json();
    console.log('PayPal order created successfully:', {
      orderId: orderData.id,
      status: orderData.status
    });

    return NextResponse.json({
      id: orderData.id,
      status: orderData.status,
    });
  } catch (error) {
    console.error('Unexpected error in create-order route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
