# Deployment Guide for www.mycomedic.com

This guide will help you deploy your Myco Medic website to production.

## Overview

Your application consists of:
1. **Frontend**: React app (Vite) - needs to be built and deployed
2. **Backend**: Node.js/Express server - handles Stripe payments and email sending

## Step 1: Prepare Production Environment Variables

### Frontend (.env.production)
Create a `.env.production` file in your project root:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_PUBLISHABLE_KEY_HERE
VITE_API_URL=https://api.mycomedic.com
```

### Backend (.env on server)
On your backend server, create a `.env` file:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY_HERE
CLIENT_URL=https://www.mycomedic.com

# Server Configuration
PORT=3001
NODE_ENV=production

# Email Configuration
EMAIL_USER=you@example.com
EMAIL_PASSWORD=your-gmail-app-password

# Lalamove API Configuration (for delivery fee calculation)
LALAMOVE_API_KEY=your_lalamove_api_key
LALAMOVE_API_SECRET=your_lalamove_api_secret
LALAMOVE_BASE_URL=https://rest.lalamove.com

# Office Address (for delivery fee calculation)
OFFICE_ADDRESS=NO, 2A-G, FLOOR JALAN SIERRA 10/3, SECTION, Bandar 16 Sierra
OFFICE_CITY=Puchong
OFFICE_POSTCODE=47120
OFFICE_STATE=Selangor
OFFICE_COUNTRY=MY
OFFICE_LAT=3.0167
OFFICE_LNG=101.6167

# API URL (for frontend)
VITE_API_URL=https://api.mycomedic.com
```
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
todo_write

## Step 2: Build Frontend for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Step 3: Choose Hosting Platform

### Option A: Vercel (Recommended for Frontend)

**Advantages:**
- Free tier available
- Automatic HTTPS
- Easy deployment
- Great for React apps

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`
4. Add environment variables in Vercel dashboard
5. Configure custom domain: `www.mycomedic.com`

### Option B: Netlify

**Steps:**
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`
4. Configure environment variables in Netlify dashboard
5. Add custom domain

### Option C: Traditional Hosting (cPanel/VPS)

**Steps:**
1. Upload `dist` folder contents to `public_html` or `www` directory
2. Configure `.htaccess` for React Router (see below)
3. Set up SSL certificate
4. Configure domain DNS

**Create `.htaccess` file in public_html:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Step 4: Deploy Backend Server

### Option A: Railway (Recommended)

**Steps:**
1. Sign up at [railway.app](https://railway.app)
2. Create new project
3. Connect your GitHub repo
4. Add `server.js` as start script
5. Add environment variables
6. Deploy
7. Get your backend URL (e.g., `https://mycomedic-api.railway.app`)

### Option B: Heroku

**Steps:**
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create mycomedic-api`
4. Set environment variables: `heroku config:set KEY=value`
5. Deploy: `git push heroku main`
6. Scale: `heroku ps:scale web=1`

### Option C: VPS (DigitalOcean, AWS EC2, etc.)

**Steps:**
1. Set up Node.js on server
2. Install PM2: `npm install -g pm2`
3. Clone your repo
4. Install dependencies: `npm install --production`
5. Set up environment variables
6. Start with PM2: `pm2 start server.js --name mycomedic-api`
7. Save PM2 config: `pm2 save`
8. Set up PM2 startup: `pm2 startup`

**PM2 Ecosystem File (ecosystem.config.js):**
```javascript
module.exports = {
  apps: [{
    name: 'mycomedic-api',
    script: 'server.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
}
```

## Step 5: Configure Domain DNS

### For Frontend (www.mycomedic.com)

**If using Vercel/Netlify:**
- Add CNAME record: `www` → `your-deployment-url.vercel.app` or `your-site.netlify.app`

**If using traditional hosting:**
- Add A record: `www` → your server IP address
- Or CNAME: `www` → `mycomedic.com`

### For Backend API (api.mycomedic.com)

**Create subdomain:**
- Add A record: `api` → your backend server IP
- Or CNAME: `api` → your backend hosting URL

**Example DNS Records:**
```
Type    Name    Value
A       @       YOUR_SERVER_IP
CNAME   www     YOUR_FRONTEND_HOST
A       api     YOUR_BACKEND_IP
```

## Step 6: Set Up SSL/HTTPS

### Using Let's Encrypt (Free)

**On your server:**
```bash
sudo apt-get update
sudo apt-get install certbot

# For frontend
sudo certbot certonly --standalone -d www.mycomedic.com

# For backend API
sudo certbot certonly --standalone -d api.mycomedic.com
```

**Auto-renewal:**
```bash
sudo certbot renew --dry-run
```

### Using Cloudflare (Recommended)

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your domain
3. Update nameservers
4. Enable SSL/TLS (Full mode)
5. Automatic HTTPS for free

## Step 7: Update All URLs

### Update Frontend Environment Variables

In your hosting platform (Vercel/Netlify), set:
- `VITE_API_URL=https://api.mycomedic.com`

### Update Backend Environment Variables

On your backend server:
- `CLIENT_URL=https://www.mycomedic.com`
- `VITE_API_URL=https://api.mycomedic.com`

## Step 8: Test Production Deployment

1. **Test Frontend:**
   - Visit `https://www.mycomedic.com`
   - Check all pages load correctly
   - Test navigation

2. **Test Backend:**
   - Test API endpoint: `https://api.mycomedic.com/api/create-checkout-session`
   - Test career application: `https://api.mycomedic.com/api/career-application`

3. **Test Payment Flow:**
   - Add items to cart
   - Go to checkout
   - Test Stripe payment (use test mode first!)

4. **Test Career Application:**
   - Go to Career page
   - Click Apply
   - Submit form with resume
   - Verify email received

## Step 9: Production Checklist

- [ ] Frontend deployed and accessible at `https://www.mycomedic.com`
- [ ] Backend API deployed and accessible at `https://api.mycomedic.com`
- [ ] SSL certificates installed (HTTPS working)
- [ ] Environment variables configured correctly
- [ ] Stripe live keys configured
- [ ] Email configuration working
- [ ] DNS records configured
- [ ] All URLs updated to production
- [ ] Payment flow tested
- [ ] Career application form tested
- [ ] File uploads working
- [ ] Error handling tested
- [ ] Performance optimized
- [ ] Analytics/tracking set up (optional)

## Step 10: Monitoring & Maintenance

### Set Up Monitoring

**Uptime Monitoring:**
- UptimeRobot (free)
- Pingdom
- StatusCake

**Error Tracking:**
- Sentry
- LogRocket

### Backups

- Regular database backups (if using database)
- Code repository (GitHub)
- Environment variables backup (secure location)

### Updates

- Keep dependencies updated: `npm audit fix`
- Monitor security advisories
- Regular backups before updates

## Troubleshooting

### Frontend Issues

**404 errors on routes:**
- Check `.htaccess` configuration
- Verify server supports client-side routing

**API calls failing:**
- Check CORS configuration
- Verify `VITE_API_URL` is correct
- Check browser console for errors

### Backend Issues

**Server not starting:**
- Check environment variables
- Verify Node.js version
- Check port availability
- Review server logs

**Email not sending:**
- Verify Gmail App Password
- Check email credentials
- Review server logs

**File uploads failing:**
- Check `uploads` directory permissions
- Verify file size limits
- Check disk space

## Quick Deploy Commands

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### Backend (Railway)
```bash
# Push to GitHub, Railway auto-deploys
git add .
git commit -m "Deploy to production"
git push origin main
```

### Backend (VPS with PM2)
```bash
git pull origin main
npm install --production
pm2 restart mycomedic-api
```

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **PM2 Docs**: https://pm2.keymetrics.io
- **Let's Encrypt**: https://letsencrypt.org/docs

---

**Need Help?** Review server logs and check error messages for specific issues.

