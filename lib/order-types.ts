import { Product } from '@/data/products';

export interface OrderItem {
  productId: string;
  productName: string;
  productCategory: string;
  productImage: string;
  quantity: number;
  selectedColor: string;
  price: number;
  subtotal: number;
}

export interface TrackingInfo {
  trackingId: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  estimatedDelivery: string;
  updatedAt: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface Order {
  orderId: string;
  trackingInfo: TrackingInfo;
  items: OrderItem[];
  customerInfo: CustomerInfo;
  subtotal: number;
  shipping: number;
  total: number;
  paymentId: string;
  paymentStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderConfirmationData {
  orderId: string;
  trackingInfo: TrackingInfo;
  items: OrderItem[];
  customerInfo: CustomerInfo;
  totals: {
    subtotal: number;
    shipping: number;
    total: number;
  };
  paymentId: string;
  estimatedDelivery: string;
  createdAt: string;
}

/**
 * Generate a unique Order ID
 * Format: VEK-XXXXXXXX where X is alphanumeric
 */
export function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VEK-${timestamp}${random}`;
}

/**
 * Generate a unique Tracking ID
 * Format: TRK-XXXXXXXX where X is alphanumeric
 */
export function generateTrackingId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TRK-${timestamp}${random}`;
}

/**
 * Calculate estimated delivery date (14 days from order date)
 */
export function calculateEstimatedDelivery(orderDate: Date = new Date()): string {
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(deliveryDate.getDate() + 14);
  return deliveryDate.toISOString().split('T')[0]; // YYYY-MM-DD format
}

/**
 * Create tracking info object
 */
export function createTrackingInfo(): TrackingInfo {
  return {
    trackingId: generateTrackingId(),
    status: 'processing',
    estimatedDelivery: calculateEstimatedDelivery(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Convert cart items to order items with product details
 */
export function convertCartToOrderItems(
  cart: Array<{ product: Product; quantity: number; selectedColor: string }>
): OrderItem[] {
  return cart.map(item => ({
    productId: item.product.id,
    productName: item.product.name,
    productCategory: item.product.category,
    productImage: item.product.image,
    quantity: item.quantity,
    selectedColor: item.selectedColor,
    price: item.product.price,
    subtotal: item.product.price * item.quantity,
  }));
}

/**
 * Calculate order totals
 */
export function calculateOrderTotals(items: OrderItem[]): {
  subtotal: number;
  shipping: number;
  total: number;
} {
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const shipping = subtotal >= 50 ? 0 : 5;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}

/**
 * Create complete order object
 * This is structured for easy Firebase integration in Prompt 3
 */
export function createOrder(
  customerInfo: CustomerInfo,
  cartItems: Array<{ product: Product; quantity: number; selectedColor: string }>,
  paymentId: string,
  paymentStatus: string
): Order {
  const orderItems = convertCartToOrderItems(cartItems);
  const totals = calculateOrderTotals(orderItems);
  const trackingInfo = createTrackingInfo();
  const orderId = generateOrderId();
  const now = new Date().toISOString();

  return {
    orderId,
    trackingInfo,
    items: orderItems,
    customerInfo,
    subtotal: totals.subtotal,
    shipping: totals.shipping,
    total: totals.total,
    paymentId,
    paymentStatus,
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Create order confirmation data for display
 */
export function createOrderConfirmationData(order: Order): OrderConfirmationData {
  return {
    orderId: order.orderId,
    trackingInfo: order.trackingInfo,
    items: order.items,
    customerInfo: order.customerInfo,
    totals: {
      subtotal: order.subtotal,
      shipping: order.shipping,
      total: order.total,
    },
    paymentId: order.paymentId,
    estimatedDelivery: order.trackingInfo.estimatedDelivery,
    createdAt: order.createdAt,
  };
}
