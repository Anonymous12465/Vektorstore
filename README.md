# VektorStore

A premium e-commerce website built with Next.js, TypeScript, Tailwind CSS, PayPal payments, and Firebase backend.

## Features

- **Modern E-commerce**: Product catalog, search, filtering, and detailed product pages
- **Shopping Cart**: Full cart functionality with quantity management
- **PayPal Integration**: Secure payment processing with server-side verification
- **Order Management**: Automatic order creation with tracking information
- **Contact System**: Contact form with message storage
- **Admin Panel**: Protected admin interface for order and message management
- **Firebase Backend**: Firestore for persistent data storage
- **Responsive Design**: Mobile-first design using Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project created
- PayPal developer account

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up environment variables by copying `env.example` to `.env`:
```bash
cp env.example .env
```

3. Configure your environment variables (see Environment Setup below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Environment Setup

### PayPal Configuration

Get your PayPal credentials from [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/):

- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: Client ID for frontend use
- `PAYPAL_CLIENT_ID`: Client ID for server-side API calls
- `PAYPAL_CLIENT_SECRET`: Client secret for server-side API calls
- `PAYPAL_MODE`: Set to `sandbox` for testing, `live` for production

### Firebase Configuration

Get your Firebase credentials from [Firebase Console](https://console.firebase.google.com/):

#### Client Configuration (available in browser):
- `NEXT_PUBLIC_FIREBASE_API_KEY`: Found in Project Settings → General → Your apps
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Your project ID.firebaseapp.com
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Your project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Your project ID.appspot.com
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Found in Project Settings → Cloud Messaging
- `NEXT_PUBLIC_FIREBASE_APP_ID`: Found in Project Settings → General → Your apps

#### Admin Configuration (server-side only):
1. Go to Firebase Console → Project Settings → Service Accounts
2. Click "Generate New Private Key"
3. Download the JSON file
4. Extract these values from the JSON:
   - `FIREBASE_ADMIN_PROJECT_ID`: The project_id field
   - `FIREBASE_ADMIN_CLIENT_EMAIL`: The client_email field
   - `FIREBASE_ADMIN_PRIVATE_KEY`: The private_key field (include \n characters)
   - `FIREBASE_ADMIN_CLIENT_ID`: The client_id field

**Important**: Never commit the `.env` file or share Firebase admin credentials publicly.

## Project Structure

```
vektorstore/
├── app/                      # Next.js App Router pages
│   ├── admin/               # Admin panel (protected)
│   ├── api/                 # API routes
│   │   ├── paypal/         # PayPal payment endpoints
│   │   ├── orders/         # Order storage endpoint
│   │   └── contact-messages/ # Contact form endpoint
│   ├── checkout/           # Checkout with PayPal
│   ├── products/           # Product catalog
│   └── ...
├── components/             # React components
├── context/               # React Context providers
├── data/                  # Product data
├── lib/                   # Utility functions and configurations
│   ├── firebase-client.ts # Firebase client setup
│   ├── firebase-admin.ts  # Firebase admin setup
│   ├── admin-auth.ts      # Admin authentication
│   └── order-types.ts     # Order data structures
└── public/                # Static assets
```

## Admin Panel

Access the admin panel at `/admin` after setting up Firebase Authentication:

1. Enable Email/Password authentication in Firebase Console
2. Create an admin user in Firebase Authentication
3. Sign in at `/admin/login` with your admin credentials
4. Manage orders and contact messages from the admin dashboard

## Firebase Setup Guide

### 1. Create Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com/)
- Click "Add project" and follow the setup wizard

### 2. Enable Authentication
- Go to Authentication → Sign-in method
- Enable "Email/Password" sign-in provider
- Create an admin user account

### 3. Create Firestore Database
- Go to Firestore Database → Create database
- Choose production mode or test mode
- Set up security rules for your needs

### 4. Configure Environment Variables
- Copy the credentials as described in Environment Setup above
- Add them to your `.env` file or Replit Secrets

### 5. Test the Integration
- Run the development server
- Test the contact form (messages should appear in Firestore)
- Complete a test order (orders should appear in Firestore after PayPal payment)
- Access the admin panel to verify data appears correctly

## Deployment

The project is designed to work identically in development and production:

1. Set production environment variables (PayPal live mode, production Firebase credentials)
2. Deploy to your hosting platform (Replit, Vercel, etc.)
3. No code changes needed - the same code works in both environments

### Replit Deployment
1. Add all environment variables to Replit Secrets
2. Change `PAYPAL_MODE` to `live` for production
3. Use production Firebase credentials
4. Deploy and test with real transactions

## Security Notes

- Firebase admin credentials are server-side only
- PayPal client secrets are never exposed to the browser
- Orders are only created after successful PayPal verification
- Admin panel requires Firebase Authentication
- All API routes validate input and handle errors appropriately

## Support

For issues or questions:
- Check the [PAYPAL_SETUP.md](PAYPAL_SETUP.md) for PayPal integration details
- Review Firebase Console for any backend issues
- Check browser console for frontend errors

## License

This project is for demonstration purposes.
