import { NextRequest, NextResponse } from 'next/server';
import { getPayPalAccessToken, PAYPAL_API_BASE } from '@/lib/paypal';

interface CaptureOrderRequest {
  orderID: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CaptureOrderRequest = await request.json();
    const { orderID } = body;

    if (!orderID) {
      console.error('Capture order request missing orderID');
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    console.log('Capturing PayPal order:', orderID);

    // Get PayPal access token using shared helper
    let accessToken: string;
    try {
      accessToken = await getPayPalAccessToken();
    } catch (error) {
      console.error('Failed to get PayPal access token for capture:', error);
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to authenticate with PayPal' },
        { status: 500 }
      );
    }

    // Capture the PayPal order
    console.log('Requesting capture for order:', orderID);
    
    const captureResponse = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!captureResponse.ok) {
      const errorText = await captureResponse.text();
      console.error('PayPal capture failed:', {
        orderID,
        status: captureResponse.status,
        statusText: captureResponse.statusText,
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
          error: 'Failed to capture PayPal order',
          details: errorDetails,
          rawResponse: errorText
        },
        { status: 500 }
      );
    }

    const captureData = await captureResponse.json();
    console.log('PayPal capture response received:', {
      orderID,
      status: captureData.status
    });

    // Verify the capture status is COMPLETED
    const captureStatus = captureData.status;
    if (captureStatus !== 'COMPLETED') {
      console.error('Payment not completed:', {
        orderID,
        status: captureStatus,
        fullResponse: captureData
      });
      return NextResponse.json(
        { 
          error: 'Payment verification failed',
          status: captureStatus,
          details: captureData
        },
        { status: 400 }
      );
    }

    // Extract relevant capture information
    const purchaseUnits = captureData.purchase_units || [];
    const capture = purchaseUnits[0]?.payments?.captures?.[0];
    
    if (!capture || capture.status !== 'COMPLETED') {
      console.error('Capture not completed:', {
        orderID,
        capture,
        fullResponse: captureData
      });
      return NextResponse.json(
        { 
          error: 'Payment capture verification failed',
          status: capture?.status || 'UNKNOWN'
        },
        { status: 400 }
      );
    }

    console.log('Payment captured successfully:', {
      orderID,
      captureId: capture.id,
      amount: capture.amount,
      status: capture.status
    });

    // Return successful verification with payment details
    return NextResponse.json({
      success: true,
      status: captureData.status,
      captureId: capture.id,
      captureStatus: capture.status,
      amount: capture.amount,
      createTime: capture.create_time,
      updateTime: capture.update_time,
    });
  } catch (error) {
    console.error('Unexpected error in capture-order route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
