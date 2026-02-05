# Production Environment Variables Setup

## The Problem
Your production site is trying to connect to `http://localhost:3001`, which only works on your local machine. In production, you need to use your actual backend API URL.

## Solution: Set Production Environment Variables

### For Frontend (Vercel/Netlify/etc.)

You need to set these environment variables in your hosting platform:

#### If using Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```env
VITE_API_URL=https://api.mycomedic.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_ACTUAL_KEY
```

**Important:** After adding variables, **redeploy** your site!

#### If using Netlify:
1. Go to Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add the same variables as above
5. Redeploy

#### If using cPanel/Traditional Hosting:
Create a `.env.production` file in your project root before building:

```env
VITE_API_URL=https://api.mycomedic.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_ACTUAL_KEY
```

Then build:
```bash
npm run build
```

### For Backend (Railway/Heroku/VPS)

Set these environment variables on your backend server:

```env
CLIENT_URL=https://www.mycomedic.com.my
STRIPE_SECRET_KEY=sk_live_YOUR_ACTUAL_KEY
PORT=3001
NODE_ENV=production
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
OFFICE_ADDRESS=NO, 2A-G, FLOOR JALAN SIERRA 10/3, SECTION, Bandar 16 Sierra
OFFICE_CITY=Puchong
OFFICE_POSTCODE=47120
OFFICE_STATE=Selangor
OFFICE_COUNTRY=MY
OFFICE_LAT=3.0167
OFFICE_LNG=101.6167
```

## Quick Checklist

- [ ] Frontend `VITE_API_URL` = Your backend URL (e.g., `https://api.mycomedic.com`)
- [ ] Backend `CLIENT_URL` = Your frontend URL (e.g., `https://www.mycomedic.com.my`)
- [ ] Both URLs use `https://` (not `http://`)
- [ ] No `localhost` URLs in production
- [ ] Redeploy frontend after adding environment variables
- [ ] Restart backend after adding environment variables

## How to Find Your URLs

- **Frontend URL**: Where your website is hosted (e.g., `https://www.mycomedic.com.my`)
- **Backend URL**: Where your API server is hosted (e.g., `https://api.mycomedic.com` or Railway/Heroku URL)

## Testing

After setting up:
1. Visit your production site
2. Open browser console (F12)
3. Try checkout - should connect to your backend API
4. Check Network tab - API calls should go to your backend URL, not localhost

