# PayPal Live Mode Setup for Vercel

## Switching from Sandbox to Live Mode

### Prerequisites
1. **PayPal Business Account** - Must be verified and active
2. **Live PayPal App** - Created in PayPal Developer Dashboard with Live credentials
3. **Account Verification** - PayPal Business account must be fully verified

### Vercel Environment Variables (Production)

Set these variables specifically in **Vercel Production Environment** (not Preview/Development):

```bash
# PayPal Configuration - LIVE MODE
PAYPAL_MODE=live
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_live_client_id_here
PAYPAL_CLIENT_ID=your_live_client_id_here  
PAYPAL_CLIENT_SECRET=your_live_client_secret_here
```

### Important Notes:
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_ID` must be **exactly the same value**
- Both must be your **Live Client ID** (not Sandbox)
- `PAYPAL_CLIENT_SECRET` must be the **Live Secret** from the same PayPal app
- Never use Sandbox credentials when `PAYPAL_MODE=live`

### How to Set Vercel Environment Variables:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. **Important:** Select **Production** environment (not Preview/Development)
4. Add each variable with its value
5. Save changes
6. **Trigger a new deployment** - Environment variable changes don't apply to running deployments

### Testing Before Going Live:

1. **Check Configuration:**
   ```
   GET /api/debug/verify-paypal-config
   ```
   This will verify:
   - All credentials are present
   - Client IDs match
   - No sandbox patterns in live mode

2. **Test PayPal Authentication:**
   ```
   GET /api/debug/test-paypal-live-auth
   ```
   This will test your credentials against the PayPal API directly

3. **Run a Small Test Transaction:**
   - Make a small purchase ($1-2)
   - Use a real PayPal account
   - Verify payment appears in PayPal Business dashboard
   - Confirm order appears in Firestore

### Troubleshooting:

#### "Client Authentication Failed" Error:
- Verify credentials are from the **same PayPal app**
- Ensure both Client ID and Secret are **Live** credentials
- Check Business account is **verified** in PayPal
- Confirm the app is **active** in PayPal Developer Dashboard

#### Currency/Country Issues:
- Ensure your PayPal Business account supports USD
- Check the app is approved for your country/region
- Verify the business account can accept payments in USD

#### Mode Configuration Issues:
- Confirm `PAYPAL_MODE=live` in Production environment
- Check no hardcoded URLs in code (use shared helper)
- Verify API base resolves to `https://api-m.paypal.com`

### Safety Checks:

The code now includes automatic safety checks:
- Warns if `PAYPAL_MODE=live` but credentials contain "sandbox" patterns
- Errors if credentials start with "sb-" (indicates sandbox)
- Logs detailed configuration for debugging
- Verifies client ID consistency

### Post-Deployment Verification:

1. Check Vercel logs for any PayPal-related warnings
2. Monitor first few transactions for successful processing
3. Verify payments appear in PayPal Business dashboard
4. Confirm Firestore orders are being created correctly
5. Test refund process if needed

### Emergency Rollback:

If live mode causes issues, you can quickly rollback:
1. Set `PAYPAL_MODE=sandbox` in Vercel
2. Use Sandbox credentials temporarily
3. Redeploy
4. Fix the issue, then switch back to live

### PayPal Dashboard Monitoring:

After going live:
- Monitor transaction activity in PayPal Business dashboard
- Set up notifications for payment failures
- Watch for any unusual transaction patterns
- Reconcile payments with your order system regularly
