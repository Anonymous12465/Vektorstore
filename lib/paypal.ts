/**
 * PayPal API helper functions for server-side payment processing
 */

/**
 * Resolve PayPal API base URL based on environment mode
 */
export const PAYPAL_API_BASE = (() => {
  const mode = process.env.PAYPAL_MODE || 'sandbox';
  if (mode === 'live') {
    return 'https://api-m.paypal.com';
  }
  return 'https://api-m.sandbox.paypal.com';
})();

/**
 * PayPal OAuth2 token response interface
 */
interface PayPalTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

/**
 * PayPal error response interface
 */
interface PayPalErrorResponse {
  name?: string;
  message?: string;
  debug_id?: string;
  details?: Array<{
    field?: string;
    issue?: string;
    description?: string;
  }>;
  error?: string;
  error_description?: string;
}

/**
 * Get PayPal OAuth2 access token
 * @throws Error with detailed PayPal error message if authentication fails
 */
export async function getPayPalAccessToken(): Promise<string> {
  const paypalClientId = process.env.PAYPAL_CLIENT_ID;
  const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const mode = process.env.PAYPAL_MODE || 'sandbox';

  // Validate credentials are present and not empty
  if (!paypalClientId || !paypalClientId.trim()) {
    throw new Error('PAYPAL_CLIENT_ID environment variable is missing or empty');
  }
  if (!paypalClientSecret || !paypalClientSecret.trim()) {
    throw new Error('PAYPAL_CLIENT_SECRET environment variable is missing or empty');
  }

  // Safety check: warn if PAYPAL_MODE=live but credentials look like sandbox values
  if (mode === 'live') {
    const clientIdLower = paypalClientId.toLowerCase();
    const secretLower = paypalClientSecret.toLowerCase();
    
    // Common patterns in sandbox credentials
    const sandboxPatterns = ['sandbox', 'test', 'demo', 'sb-'];
    const hasSandboxPattern = sandboxPatterns.some(pattern => 
      clientIdLower.includes(pattern) || secretLower.includes(pattern)
    );
    
    if (hasSandboxPattern) {
      console.warn('⚠️  WARNING: PAYPAL_MODE=live but credentials appear to be sandbox/test values. Please verify you are using LIVE PayPal credentials.');
    }
    
    // Additional check: live credentials typically don't start with specific test prefixes
    if (clientIdLower.startsWith('sb-') || secretLower.startsWith('sb-')) {
      console.error('🚨 CRITICAL: PAYPAL_MODE=live but credentials start with "sb-" which indicates sandbox credentials. This will cause authentication failures.');
    }
  }

  // Log configuration (without exposing secrets)
  console.log('PayPal Authentication Configuration:', {
    mode: process.env.PAYPAL_MODE || 'sandbox',
    apiBase: PAYPAL_API_BASE,
    clientIdPrefix: paypalClientId.substring(0, 8) + '...',
    clientIdLength: paypalClientId.length,
    hasSecret: !!paypalClientSecret,
    secretLength: paypalClientSecret.length,
    clientIdTrimmed: paypalClientId.trim(),
    secretTrimmed: paypalClientSecret.trim(),
    isLiveMode: mode === 'live'
  });

  // Build Basic Auth header
  const authString = `${paypalClientId}:${paypalClientSecret}`;
  const auth = Buffer.from(authString).toString('base64');

  console.log('PayPal Auth Request Details:', {
    url: `${PAYPAL_API_BASE}/v1/oauth2/token`,
    authStringLength: authString.length,
    authBase64Length: auth.length,
    authBase64Preview: auth.substring(0, 10) + '...',
    contentType: 'application/x-www-form-urlencoded',
    grantType: 'client_credentials'
  });

  try {
    const tokenResponse = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('PayPal token request failed:', {
        status: tokenResponse.status,
        statusText: tokenResponse.statusText,
        responseBody: errorText
      });

      // Try to parse PayPal's error response for better diagnostics
      let errorDetails: PayPalErrorResponse = {};
      try {
        errorDetails = JSON.parse(errorText);
      } catch (e) {
        // If parsing fails, use raw text
      }

      // Build comprehensive error message
      const errorMessage = [
        'PayPal authentication failed',
        `Status: ${tokenResponse.status} ${tokenResponse.statusText}`,
        errorDetails.error_description ? `PayPal error: ${errorDetails.error_description}` : '',
        errorDetails.message ? `Message: ${errorDetails.message}` : '',
        errorDetails.debug_id ? `Debug ID: ${errorDetails.debug_id}` : '',
        `Raw response: ${errorText}`
      ].filter(Boolean).join(' | ');

      throw new Error(errorMessage);
    }

    const tokenData: PayPalTokenResponse = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      throw new Error('PayPal token response missing access_token field');
    }

    console.log('PayPal authentication successful', {
      tokenType: tokenData.token_type,
      expiresIn: tokenData.expires_in,
      scope: tokenData.scope
    });

    return tokenData.access_token;
  } catch (error) {
    if (error instanceof Error) {
      // Re-throw our custom errors
      throw error;
    }
    // Wrap unexpected errors
    throw new Error(`Unexpected error during PayPal authentication: ${error}`);
  }
}
