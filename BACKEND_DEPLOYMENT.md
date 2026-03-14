# Backend Deployment Guide for api.mycomedic.com

## Current Issue
Your frontend is trying to connect to `https://api.mycomedic.com`, but the backend server is not deployed there. You need to deploy your backend server (`server.js`) to make the career application form work.

## Hosting Options Comparison

### Option 1: Railway ⭐ (Easiest - Recommended)
**Best for:** Quick deployment, beginners, small to medium traffic
- ✅ Free tier available ($5/month after)
- ✅ Very easy setup (GitHub integration)
- ✅ Automatic HTTPS
- ✅ Built-in environment variables
- ✅ Good documentation
- ❌ Can get expensive with high traffic

### Option 2: Render (Great Alternative)
**Best for:** Similar to Railway, good free tier
- ✅ Free tier (spins down after inactivity)
- ✅ Easy GitHub integration
- ✅ Automatic HTTPS
- ✅ Good for small projects
- ❌ Free tier has cold starts (slow first request)
- Website: https://render.com

### Option 3: Fly.io (Performance Focused)
**Best for:** Global edge deployment, low latency
- ✅ Global edge network (fast worldwide)
- ✅ Generous free tier
- ✅ Good performance
- ✅ Docker-based
- ❌ Slightly more complex setup
- Website: https://fly.io

### Option 4: DigitalOcean App Platform
**Best for:** Balance of ease and control
- ✅ $5/month starter plan
- ✅ Easy deployment
- ✅ Good documentation
- ✅ Reliable infrastructure
- ❌ Paid only (no free tier)
- Website: https://www.digitalocean.com/products/app-platform

### Option 5: Heroku
**Best for:** Traditional PaaS, familiar to many developers
- ✅ Easy deployment
- ✅ Good ecosystem
- ✅ Add-ons marketplace
- ❌ No free tier anymore ($5/month minimum)
- ❌ Can get expensive
- Website: https://www.heroku.com

### Option 6: DigitalOcean Droplet (VPS)
**Best for:** Full control, cost-effective for high traffic
- ✅ $4-6/month for basic VPS
- ✅ Full server control
- ✅ Can host multiple services
- ✅ Predictable pricing
- ❌ Requires server management
- ❌ Need to set up SSL, monitoring yourself
- Website: https://www.digitalocean.com/products/droplets

### Option 7: AWS/Google Cloud/Azure
**Best for:** Enterprise, high scale, complex needs
- ✅ Very powerful and scalable
- ✅ Many services available
- ✅ Free tier available (limited)
- ❌ Complex setup
- ❌ Steep learning curve
- ❌ Can get expensive quickly

### Option 8: Vercel/Netlify (Serverless)
**Best for:** If you convert to serverless functions
- ✅ Free tier available
- ✅ Great for frontend + API
- ✅ Automatic HTTPS
- ❌ Requires converting Express to serverless functions
- ❌ More complex migration

## Quick Solution: Deploy to Railway (Recommended)

### Step 1: Sign up for Railway
1. Go to https://railway.app
2. Sign up with your GitHub account
3. Create a new project

### Step 2: Deploy Backend
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `myco_medic` repository
4. Railway will auto-detect Node.js

### Step 3: Configure Settings
1. Go to **Settings** → **Service**
2. Set **Start Command**: `node server.js`
3. Set **Root Directory**: `/` (root)

### Step 4: Add Environment Variables
In Railway dashboard, go to **Variables** and add all these from your `.env` file:

```env
PORT=3001
NODE_ENV=production
CLIENT_URL=https://www.mycomedic.com.my
STRIPE_SECRET_KEY=sk_live_YOUR_STRIPE_SECRET_KEY_HERE
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
RESEND_API_KEY=re_YOUR_RESEND_API_KEY_HERE
RESEND_FROM_EMAIL=noreply@mycomedic.com.my
OFFICE_ADDRESS=No. 2A-G Jalan Sierra 10/3, Bandar 16 Sierra
OFFICE_CITY=Puchong
OFFICE_POSTCODE=47120
OFFICE_STATE=Selangor
OFFICE_COUNTRY=MY
OFFICE_LAT=3.0167
OFFICE_LNG=101.6167
```

### Step 5: Get Your Backend URL
1. After deployment, Railway will give you a URL like: `https://mycomedic-api.railway.app`
2. Copy this URL

### Step 6: Configure Custom Domain
1. In Railway, go to **Settings** → **Networking**
2. Click "Add Domain"
3. Enter: `api.mycomedic.com`
4. Railway will give you DNS instructions
5. Add a CNAME record in your DNS:
   - **Type**: CNAME
   - **Name**: `api`
   - **Value**: `your-railway-url.railway.app`

### Step 7: Update Frontend (if needed)
Your frontend already uses `https://api.mycomedic.com`, so once DNS propagates (can take a few minutes to 24 hours), it should work automatically.

## Alternative Option 1: Deploy to Render

### Step 1: Sign up for Render
1. Go to https://render.com
2. Sign up with your GitHub account
3. Create a new account

### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository (`myco_medic`)
3. Select the repository

### Step 3: Configure Service
- **Name**: `mycomedic-api`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Plan**: Free (or choose Starter for $7/month)

### Step 4: Add Environment Variables
Click "Environment" tab and add all variables from your `.env` file (same as Railway list above)

### Step 5: Deploy
1. Click "Create Web Service"
2. Render will build and deploy automatically
3. You'll get a URL like: `https://mycomedic-api.onrender.com`

### Step 6: Configure Custom Domain
1. Go to **Settings** → **Custom Domain**
2. Add `api.mycomedic.com`
3. Follow DNS instructions (add CNAME record)

**Note:** Free tier spins down after 15 minutes of inactivity (first request will be slow)

---

## Alternative Option 2: Deploy to Fly.io

### Step 1: Install Fly CLI
```bash
curl -L https://fly.io/install.sh | sh
```

### Step 2: Sign up and Login
```bash
fly auth signup  # or fly auth login
```

### Step 3: Create Fly App
```bash
cd /Users/guangxun/Desktop/myco_medic
fly launch
```

Follow the prompts:
- App name: `mycomedic-api` (or choose your own)
- Region: Choose closest to Malaysia (e.g., `sin` for Singapore)
- Don't deploy yet (we need to configure first)

### Step 4: Create fly.toml
Fly.io will create a `fly.toml` file. Update it:

```toml
app = "mycomedic-api"
primary_region = "sin"

[build]

[env]
  PORT = "3001"
  NODE_ENV = "production"

[[services]]
  internal_port = 3001
  protocol = "tcp"

  [[services.ports]]
    port = 80
    handlers = ["http"]
    force_https = true

  [[services.ports]]
    port = 443
    handlers = ["tls", "http"]
```

### Step 5: Set Secrets (Environment Variables)
```bash
fly secrets set CLIENT_URL=https://www.mycomedic.com.my
fly secrets set STRIPE_SECRET_KEY=sk_live_YOUR_STRIPE_SECRET_KEY_HERE
fly secrets set EMAIL_USER=guangxun04@gmail.com
fly secrets set EMAIL_PASSWORD=Travellife0419%
fly secrets set RESEND_API_KEY=re_D3x2i3y8_PXngN79eESBtyW5w54n4ZRLJ
fly secrets set RESEND_FROM_EMAIL=noreply@mycomedic.com.my
# ... add all other environment variables
```

### Step 6: Deploy
```bash
fly deploy
```

### Step 7: Configure Custom Domain
```bash
fly certs add api.mycomedic.com
```

Then add DNS record (CNAME) as instructed.

---

## Alternative Option 3: Deploy to DigitalOcean App Platform

### Step 1: Sign up
1. Go to https://www.digitalocean.com/products/app-platform
2. Sign up for account ($5/month minimum)

### Step 2: Create App
1. Click "Create App"
2. Connect GitHub repository
3. Select `myco_medic` repository

### Step 3: Configure
- **Type**: Web Service
- **Build Command**: `npm install`
- **Run Command**: `node server.js`
- **HTTP Port**: `3001`

### Step 4: Add Environment Variables
Add all variables from your `.env` file in the Environment Variables section

### Step 5: Deploy
Click "Create Resources" and deploy

### Step 6: Add Custom Domain
1. Go to **Settings** → **Domains**
2. Add `api.mycomedic.com`
3. Follow DNS instructions

---

## Alternative Option 4: Deploy to Vercel (Serverless Functions)

**Note:** This requires converting your Express server to serverless functions. More complex but free tier available.

If you want to use Vercel, you'll need to:
1. Convert Express routes to Vercel serverless functions
2. Handle file uploads differently (use Vercel Blob or similar)
3. More setup work required

**Recommendation:** Use Railway, Render, or Fly.io for easier deployment with your current Express setup.

## Testing After Deployment

1. **Test Backend Health:**
   ```bash
   curl https://api.mycomedic.com/api/health
   ```
   Should return: `{"status":"ok","message":"Backend server is running",...}`

2. **Test Career Application:**
   - Go to your career page
   - Fill out the form
   - Submit
   - Check your email (guangxun04@gmail.com)

## Troubleshooting

### If backend still not accessible:
1. Check Railway logs for errors
2. Verify environment variables are set correctly
3. Check DNS propagation: https://dnschecker.org
4. Wait 24-48 hours for DNS to fully propagate

### If emails not sending:
1. Check Railway logs for email errors
2. Verify Resend API key is correct
3. Check if domain is verified in Resend dashboard
4. Check spam folder

## Quick Local Test

To test locally first:
1. Run backend: `npm run dev:server`
2. Temporarily change frontend `.env` to: `VITE_API_URL=http://localhost:3001`
3. Test the form locally
4. Then deploy to production
