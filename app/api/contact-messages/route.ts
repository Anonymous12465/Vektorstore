import { NextRequest, NextResponse } from 'next/server';
import { admin, adminDb } from '@/lib/firebase-admin';

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const contactMessage: ContactMessage = await request.json();

    // Validate required fields
    if (!contactMessage.name || !contactMessage.email || !contactMessage.message) {
      return NextResponse.json(
        { error: 'Invalid contact message data' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactMessage.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Write contact message to Firestore
    const messagesRef = adminDb.collection('contactMessages');
    const newMessageRef = await messagesRef.add({
      ...contactMessage,
      read: false,
      handled: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ 
      success: true, 
      messageId: newMessageRef.id 
    });
  } catch (error) {
    console.error('Error saving contact message to Firestore:', error);
    return NextResponse.json(
      { error: 'Failed to save contact message' },
      { status: 500 }
    );
  }
}