"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signOutAdmin, onAdminAuthStateChange } from '@/lib/admin-auth';
import { db } from '@/lib/firebase-client';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { Order } from '@/lib/order-types';

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'orders' | 'messages'>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAdminAuthStateChange((currentUser) => {
      if (!currentUser) {
        router.push('/admin/login');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (!user) return;

    // Load orders
    const ordersQuery = query(
      collection(db, 'orders'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeOrders = onSnapshot(ordersQuery, (snapshot) => {
      const ordersData = snapshot.docs.map(doc => ({
        ...doc.data(),
        orderId: doc.id,
      })) as Order[];
      setOrders(ordersData);
      setLoading(false);
    });

    // Load contact messages
    const messagesQuery = query(
      collection(db, 'contactMessages'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(messagesData);
    });

    return () => {
      unsubscribeOrders();
      unsubscribeMessages();
    };
  }, [user]);

  const handleSignOut = async () => {
    await signOutAdmin();
    router.push('/admin/login');
  };

  const updateOrderStatus = async (orderId: string, newStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled') => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, {
        'trackingInfo.status': newStatus,
        'trackingInfo.updatedAt': new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const markMessageAsRead = async (messageId: string) => {
    try {
      const messageRef = doc(db, 'contactMessages', messageId);
      await updateDoc(messageRef, {
        read: true,
        handled: true,
      });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">VektorStore Admin</h1>
              <p className="text-sm text-gray-300">Welcome, {user.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-gray-300 hover:text-white"
              >
                View Store
              </Link>
              <button
                onClick={handleSignOut}
                className="text-sm bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'orders'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'messages'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Messages ({messages.filter(m => !m.read).length} unread)
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Orders</h2>
              
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
                </div>
              ) : orders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No orders yet</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Order ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Items</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Total</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Tracking ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Delivery</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.orderId} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{order.orderId}</td>
                          <td className="py-3 px-4">
                            <div>{order.customerInfo.firstName} {order.customerInfo.lastName}</div>
                            <div className="text-sm text-gray-500">{order.customerInfo.email}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              {order.items.map((item, idx) => (
                                <div key={idx}>{item.productName} x{item.quantity}</div>
                              ))}
                            </div>
                          </td>
                          <td className="py-3 px-4 font-medium">${order.total.toFixed(2)}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              order.trackingInfo.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              order.trackingInfo.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                              order.trackingInfo.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.trackingInfo.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm">{order.trackingInfo.trackingId}</td>
                          <td className="py-3 px-4 text-sm">{order.trackingInfo.estimatedDelivery}</td>
                          <td className="py-3 px-4 text-sm">{formatDate(order.createdAt)}</td>
                          <td className="py-3 px-4">
                            <select
                              value={order.trackingInfo.status}
                              onChange={(e) => updateOrderStatus(order.orderId, e.target.value as any)}
                              className="px-2 py-1 border rounded text-sm"
                            >
                              <option value="processing">Processing</option>
                              <option value="shipped">Shipped</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
              
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
                </div>
              ) : messages.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No messages yet</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg border ${
                        message.read ? 'bg-gray-50 border-gray-200' : 'bg-white border-blue-200'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{message.name}</h3>
                          <p className="text-sm text-gray-500">{message.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{formatDate(message.createdAt)}</span>
                          {!message.read && (
                            <button
                              onClick={() => markMessageAsRead(message.id)}
                              className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                              Mark as Read
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700">{message.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
