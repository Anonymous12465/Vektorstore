import { NextResponse } from 'next/server';

export async function GET() {
  const paypalClientId = process.env.PAYPAL_CLIENT_ID;
  const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const publicClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const paypalMode = process.env.PAYPAL_MODE || 'sandbox';

  const checks = {
    mode: paypalMode,
    hasClientId: !!paypalClientId,
    hasSecret: !!paypalClientSecret,
    hasPublicClientId: !!publicClientId,
    clientIdsMatch: paypalClientId === publicClientId,
    clientIdPreview: paypalClientId?.substring(0, 8) + '...' || 'not set',
    publicClientIdPreview: publicClientId?.substring(0, 8) + '...' || 'not set',
    credentialsPresent: !!(paypalClientId && paypalClientSecret && publicClientId),
    allCredentialsMatch: paypalClientId === publicClientId && !!paypalClientId && !!publicClientId,
    warnings: [] as string[],
    errors: [] as string[]
  };

  // Check for environment variable consistency
  if (paypalClientId && publicClientId && paypalClientId !== publicClientId) {
    checks.errors.push('PAYPAL_CLIENT_ID and NEXT_PUBLIC_PAYPAL_CLIENT_ID do not match. Both must be the same value.');
  }

  if (!paypalClientId || !paypalClientSecret || !publicClientId) {
    checks.errors.push('One or more PayPal environment variables are missing.');
  }

  // Check for sandbox patterns in live mode
  if (paypalMode === 'live') {
    const clientIdLower = (paypalClientId || '').toLowerCase();
    const secretLower = (paypalClientSecret || '').toLowerCase();
    
    if (clientIdLower.includes('sandbox') || secretLower.includes('sandbox')) {
      checks.warnings.push('PAYPAL_MODE=live but credentials contain "sandbox" - verify these are LIVE credentials.');
    }
    
    if (clientIdLower.startsWith('sb-') || secretLower.startsWith('sb-')) {
      checks.errors.push('PAYPAL_MODE=live but credentials start with "sb-" which indicates sandbox credentials.');
    }
  }

  return NextResponse.json(checks);
}
