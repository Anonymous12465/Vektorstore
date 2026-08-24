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
    clientIdPreview: paypalClientId ? paypalClientId.substring(0, 8) + '...' : 'not set',
    publicClientIdPreview: publicClientId ? publicClientId.substring(0, 8) + '...' : 'not set',
    clientIdLength: paypalClientId?.length || 0,
    secretLength: paypalClientSecret?.length || 0,
    credentialsPresent: !!(paypalClientId && paypalClientSecret && publicClientId),
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

  // Test actual PayPal authentication
  let authTest = null;
  if (paypalClientId && paypalClientSecret) {
    try {
      const baseUrl = paypalMode === 'live'
        ? 'https://api-m.paypal.com'
        : 'https://api-m.sandbox.paypal.com';

      const auth = Buffer.from(`${paypalClientId}:${paypalClientSecret}`).toString('base64');
      
      const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json',
          'Accept-Language': 'en_US',
        },
        body: 'grant_type=client_credentials',
      });

      const responseText = await response.text();
      
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        responseData = { raw: responseText };
      }

      authTest = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        apiBase: baseUrl,
        response: responseData
      };

      if (!response.ok) {
        checks.errors.push(`PayPal API authentication failed: ${response.status} ${response.statusText}`);
        if (responseData.error_description) {
          checks.errors.push(`PayPal error: ${responseData.error_description}`);
        }
      }

    } catch (error) {
      authTest = {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
      checks.errors.push(`PayPal API test failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return NextResponse.json({
    ...checks,
    authTest,
    timestamp: new Date().toISOString()
  });
}
