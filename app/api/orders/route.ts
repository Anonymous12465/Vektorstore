import { NextRequest, NextResponse } from 'next/server';
import {admin,  adminDb } from '@/lib/firebase-admin';
import { Order } from '@/lib/order-types';

export async function POST(request: NextRequest) {
  try {
    const order: Order = await request.json();

    // Validate required fields
    if (!order.orderId || !order.customerInfo || !order.items || !order.paymentId) {
      return NextResponse.json(
        { error: 'Invalid order data' },
        { status: 400 }
      );
    }

    // Only write orders with verified payments
    if (order.paymentStatus !== 'COMPLETED') {
      return NextResponse.json(
        { error: 'Only verified payments can be saved' },
        { status: 400 }
      );
    }

    // Write order to Firestore
    const orderRef = adminDb.collection('orders').doc(order.orderId);
    await orderRef.set({
      ...order,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ 
      success: true, 
      orderId: order.orderId 
    });
  } catch (error) {
    console.error('Error saving order to Firestore:', error);
    return NextResponse.json(
      { error: 'Failed to save order' },
      { status: 500 }
    );
  }
}
