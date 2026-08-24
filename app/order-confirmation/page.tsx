"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { OrderConfirmationData } from '@/lib/order-types';

export default function OrderConfirmationPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderConfirmationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve order data from sessionStorage
    const storedOrder = sessionStorage.getItem('orderConfirmation');
    
    if (!storedOrder) {
      // No order data found, redirect to home
      router.push('/');
      return;
    }
    try {
      const parsedOrder = JSON.parse(storedOrder) as OrderConfirmationData;
      setOrderData(parsedOrder);
      sessionStorage.removeItem('orderConfirmation');
    } catch (error) {
      console.error('Failed to parse order data:', error);
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDeliveryDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Success Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Order Confirmed!</h1>
          <p className="text-green-700 text-lg">
            Your order will be delivered in 14 days
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black mb-4">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order ID</p>
              <p className="font-bold text-black">{orderData.orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Tracking ID</p>
              <p className="font-bold text-black">{orderData.trackingInfo.trackingId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Date</p>
              <p className="font-medium text-black">{formatDate(orderData.createdAt)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
              <p className="font-medium text-black">{formatDeliveryDate(orderData.estimatedDelivery)}</p>
            </div>
          </div>

          {/* Tracking Status */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-black">Order Status: Processing</p>
                <p className="text-sm text-gray-600">Your order is being prepared for shipment</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <h3 className="font-bold text-black mb-3">Items Ordered</h3>
          <div className="space-y-4 mb-6">
            {orderData.items.map((item, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <div className="relative w-20 h-24 flex-shrink-0 bg-gray-100 rounded">
                  <Image
                    src={item.productImage}
                    alt={item.productName}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-black">{item.productName}</p>
                  <p className="text-sm text-gray-500 mb-1">{item.productCategory}</p>
                  <p className="text-sm text-gray-600">Color: {item.selectedColor}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="font-bold text-black mt-1">${item.subtotal.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Totals */}
          <div className="border-t border-gray-200 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${orderData.totals.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{orderData.totals.shipping === 0 ? 'FREE' : `$${orderData.totals.shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-black pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${orderData.totals.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black mb-4">Shipping Information</h2>
          <div className="space-y-2">
            <p className="text-black">
              <span className="font-medium">{orderData.customerInfo.firstName} {orderData.customerInfo.lastName}</span>
            </p>
            <p className="text-gray-600">{orderData.customerInfo.address}</p>
            <p className="text-gray-600">
              {orderData.customerInfo.city}, {orderData.customerInfo.state} {orderData.customerInfo.zip}
            </p>
            <p className="text-gray-600">{orderData.customerInfo.email}</p>
            <p className="text-gray-600">{orderData.customerInfo.phone}</p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black mb-4">Payment Information</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium text-black">PayPal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment ID</span>
              <span className="font-medium text-black">{orderData.paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Status</span>
              <span className="font-medium text-green-600">Completed</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black mb-3">What's Next?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>You'll receive a confirmation email at {orderData.customerInfo.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Your order will be processed within 1-2 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Estimated delivery: {formatDeliveryDate(orderData.estimatedDelivery)}</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Track your order using ID: {orderData.trackingInfo.trackingId}</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
          >
            Continue Shopping
          </Link>
          <Link
            href="/contact"
            className="flex-1 border border-black text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
