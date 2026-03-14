# Render Deployment - Environment Variables Setup

## The Error You're Seeing

The error `Error: Neither apiKey nor config.authenticator provided` means that `STRIPE_SECRET_KEY` is not set in Render's environment variables.

## Solution: Add Environment Variables in Render Dashboard

### Step 1: Go to Your Render Service
1. Log into https://render.com
2. Click on your web service (`mycomedic-api` or whatever you named it)
3. Go to the **Environment** tab (on the left sidebar)

### Step 2: Add Each Environment Variable

Click **"Add Environment Variable"** and add these one by one:

#### Required Variables (MUST HAVE):

```
PORT=3001
```

```
NODE_ENV=production
```

```
CLIENT_URL=https://www.mycomedic.com.my
```

```
STRIPE_SECRET_KEY=sk_live_YOUR_STRIPE_SECRET_KEY_HERE
```

```
RESEND_API_KEY=re_YOUR_RESEND_API_KEY_HERE
```

```
RESEND_FROM_EMAIL=noreply@mycomedic.com.my
```

#### Email Variables (for fallback):

```
EMAIL_USER=guangxun04@gmail.com
```

```
EMAIL_PASSWORD=Travellife0419%
```

#### Office Address Variables:

```
OFFICE_ADDRESS=NO, 2A-G, FLOOR JALAN SIERRA 10/3, SECTION, Bandar 16 Sierra
```

```
OFFICE_CITY=Puchong
```

```
OFFICE_POSTCODE=47120
```

```
OFFICE_STATE=Selangor
```

```
OFFICE_COUNTRY=MY
```

```
OFFICE_LAT=3.0167
```

```
OFFICE_LNG=101.6167
```

### Step 3: Save and Redeploy

1. After adding all variables, click **"Save Changes"**
2. Render will automatically redeploy your service
3. Wait for deployment to complete (check the **Events** tab for progress)

### Step 4: Verify Deployment

1. Go to **Events** tab to see deployment logs
2. Look for: `Server running on port 3001`
3. If you see errors, check the logs

## Quick Copy-Paste Format

If Render allows bulk import, you can use this format:

```
PORT=3001
NODE_ENV=production
CLIENT_URL=https://www.mycomedic.com.my
STRIPE_SECRET_KEY=sk_live_YOUR_STRIPE_SECRET_KEY_HERE
RESEND_API_KEY=re_YOUR_RESEND_API_KEY_HERE
RESEND_FROM_EMAIL=noreply@mycomedic.com.my
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
OFFICE_ADDRESS=NO, 2A-G, FLOOR JALAN SIERRA 10/3, SECTION, Bandar 16 Sierra
OFFICE_CITY=Puchong
OFFICE_POSTCODE=47120
OFFICE_STATE=Selangor
OFFICE_COUNTRY=MY
OFFICE_LAT=3.0167
OFFICE_LNG=101.6167
```

## After Adding Variables

1. **Check Logs**: Go to **Logs** tab and verify you see:
   ```
   Email configuration at startup: {
     hasResendKey: true,
     resendKeyPreview: 're_D3x2i3y...',
     hasEmailUser: true,
     hasEmailPassword: true
   }
   Server running on port 3001
   ```

2. **Test Health Endpoint**: Visit `https://your-app-name.onrender.com/api/health`
   - Should return: `{"status":"ok","message":"Backend server is running",...}`

3. **Test Career Form**: Once health check works, test the career application form

## Common Issues

### Still Getting Stripe Error?
- Double-check `STRIPE_SECRET_KEY` is exactly correct (no extra spaces)
- Make sure you're using the **live** key (starts with `sk_live_`) not test key

### Still Getting Email Errors?
- Verify `RESEND_API_KEY` is correct
- Check `RESEND_FROM_EMAIL` matches your verified domain in Resend dashboard

### Variables Not Appearing?
- Make sure you clicked "Save Changes" after adding each variable
- Check that variable names match exactly (case-sensitive)
- Redeploy manually if needed: **Manual Deploy** → **Deploy latest commit**
