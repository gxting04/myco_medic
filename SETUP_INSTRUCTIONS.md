# Quick Setup Instructions

## The Problem
You're seeing "Cannot connect to server" because the **backend server is not running**.

## Solution: Run Both Frontend and Backend

You need to run **TWO separate servers**:

### 1. Backend Server (Terminal 1)
```bash
cd /Users/guangxun/Desktop/myco_medic
npm run dev:server
# or
node server.js
```

This will start the backend API server on port 3001.

### 2. Frontend Server (Terminal 2)
```bash
cd /Users/guangxun/Desktop/myco_medic
npm run dev
```

This will start the Vite frontend server (usually on port 5173).

## Environment Variables Setup

### Frontend `.env` file (in project root):
```env
VITE_API_URL=http://localhost:3001
CLIENT_URL=http://localhost:5173
```

**Important:** After changing `.env`, restart the Vite dev server!

### Backend `.env` file (same location, but backend reads different variables):
```env
CLIENT_URL=http://localhost:5173
PORT=3001
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

## Quick Check

1. **Is backend running?** 
   - Open http://localhost:3001/api/calculate-delivery-fee in browser
   - Should see an error (that's OK - means server is running)

2. **Is frontend running?**
   - Open http://localhost:5173
   - Should see your website

3. **Check browser console (F12)**
   - Look for any API errors
   - Check Network tab to see if requests are reaching the backend

## Common Issues

### Issue: "Cannot connect to server"
- **Solution:** Make sure backend server is running (`npm run dev:server`)

### Issue: "CLIENT_URL is not configured"
- **Solution:** Add `CLIENT_URL=http://localhost:5173` to backend `.env` file

### Issue: CORS errors
- **Solution:** Backend already has CORS enabled, but make sure backend is running

### Issue: Environment variables not working
- **Solution:** Restart both servers after changing `.env` files

## For Production

When deploying:
- Frontend: Set `VITE_API_URL=https://api.mycomedic.com` (your backend URL)
- Backend: Set `CLIENT_URL=https://www.mycomedic.com.my` (your frontend URL)

