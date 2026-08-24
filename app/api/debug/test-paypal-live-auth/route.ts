import { NextResponse } from 'next/server';

export async function GET() {
  const paypalClientId = process.env.PAYPAL_CLIENT_ID;
  const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const paypalMode = process.env.PAYPAL_MODE || 'sandbox';

  const baseUrl = paypalMode === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  if (!paypalClientId || !paypalClientSecret) {
    return NextResponse.json({
      error: 'PayPal credentials not configured',
      hasClientId: !!paypalClientId,
      hasSecret: !!paypalClientSecret
    }, { status: 500 });
  }

  try {
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

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      mode: paypalMode,
      apiBase: baseUrl,
      response: responseData,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return NextResponse.json({
      error: 'Test request failed',
      details: error instanceof Error ? error.message : String(error),
      mode: paypalMode,
      apiBase: baseUrl
    }, { status: 500 });
  }
}
