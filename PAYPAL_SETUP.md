# PayPal Payment Integration Setup Guide

## Overview
This document explains the PayPal payment integration implemented for VektorStore in Prompt 2.

## Environment Variables Setup

### Required Environment Variables
Create a `.env` file in the project root (or configure in Replit Secrets) with the following variables:

```bash
# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_sandbox_client_id_here
PAYPAL_CLIENT_ID=your_sandbox_client_id_here
PAYPAL_CLIENT_SECRET=your_sandbox_client_secret_here
PAYPAL_MODE=sandbox
```

### Getting PayPal Credentials
1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
2. Log in with your PayPal account
3. Navigate to "Apps & Credentials"
4. Create a new app or select an existing one
5. Copy the **Client ID** for both `NEXT_PUBLIC_PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_ID`
6. Copy the **Client Secret** for `PAYPAL_CLIENT_SECRET`
7. For testing, use Sandbox credentials
8. For production, switch to Live credentials and change `PAYPAL_MODE=live`

## Implementation Details

### API Routes

#### 1. POST /api/paypal/create-order
- Creates a PayPal order using server-side authentication
- Calculates total server-side from products.ts (never trusts client data)
- Switches between sandbox and live based on PAYPAL_MODE
- Returns PayPal order ID for client-side completion

#### 2. POST /api/paypal/capture-order
- Captures and verifies PayPal payment
- **Critical**: Only returns success if PayPal capture status is COMPLETED
- Prevents order creation for failed/declined payments
- Returns payment verification details

### Payment Flow

1. **User fills checkout form** → Form validation (required fields, email format)
2. **User clicks PayPal button** → Creates order via `/api/paypal/create-order`
3. **User completes PayPal payment** → Returns to site with order ID
4. **Server verifies payment** → `/api/paypal/capture-order` checks PayPal API directly
5. **Payment verification gate**:
   - ✅ COMPLETED → Creates order, clears cart, shows confirmation
   - ❌ Any other status → Redirects to payment failed page, no order created

### Order Confirmation

#### Order Structure (Ready for Firebase - Prompt 3)
```typescript
{
  orderId: string,              // Format: VEK-XXXXXXXX
  trackingInfo: {
    trackingId: string,         // Format: TRK-XXXXXXXX
    status: 'processing',
    estimatedDelivery: string,  // 14 days from order date
    updatedAt: string
  },
  items: OrderItem[],
  customerInfo: CustomerInfo,
  subtotal: number,
  shipping: number,
  total: number,
  paymentId: string,
  paymentStatus: string,
  createdAt: string,
  updatedAt: string
}
```

#### Confirmation Page Features
- Displays order ID and tracking ID
- Shows estimated delivery (14 days)
- Lists all ordered items with details
- Displays customer information
- Shows payment verification status
- Provides next steps for the customer

### Payment Failed Page
- Clear error message: "Payment could not be verified — your order was not placed"
- Explains possible reasons for failure
- No order is created in this case
- Options to retry, return to cart, or contact support

## Security Features

1. **Server-side total calculation**: Never trusts client-submitted totals
2. **Direct PayPal verification**: Server checks PayPal API, not just client callbacks
3. **Environment-based mode switching**: Same code works in sandbox and live
4. **Secure credential handling**: Client secrets never exposed to browser
5. **Payment verification gate**: Orders only created after successful verification

## Testing

### Sandbox Testing
1. Set `PAYPAL_MODE=sandbox`
2. Use PayPal sandbox credentials
3. Test with PayPal sandbox buyer accounts
4. Verify payment flow works end-to-end
5. Test payment failure scenarios

### Production Deployment
1. Set `PAYPAL_MODE=live`
2. Use PayPal live credentials
3. Update Replit Secrets with production values
4. Test with small real transaction
5. Monitor payment verification logs

## Key Files

- `app/api/paypal/create-order/route.ts` - PayPal order creation
- `app/api/paypal/capture-order/route.ts` - Payment verification
- `app/checkout/page.tsx` - Checkout form with PayPal integration
- `app/order-confirmation/page.tsx` - Order confirmation display
- `app/payment-failed/page.tsx` - Payment failure handling
- `lib/order-types.ts` - Order data structures and utilities
- `env.example` - Environment variable template

## Important Notes

- The same code works in both sandbox and live mode - just change PAYPAL_MODE
- Orders are ONLY created after successful PayPal verification
- No silent failures - users always see clear success/error messages
- Order data is structured for easy Firebase integration in Prompt 3
- Cart is only cleared after successful payment verification
