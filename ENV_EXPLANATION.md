# Environment Variables Explanation

## Quick Answer: One `.env` File for Both!

You only need **ONE** `.env` file in your project root. Both frontend and backend can read from it, but they use different variables.

## How It Works

### Frontend (Vite/React)
- **Only reads** variables that start with `VITE_` prefix
- Example: `VITE_API_URL`, `VITE_STRIPE_PUBLISHABLE_KEY`
- These are bundled into your frontend code at build time

### Backend (Express/Node.js)
- **Reads ALL** variables (no prefix needed)
- Example: `CLIENT_URL`, `STRIPE_SECRET_KEY`, `PORT`
- These are read when the server starts

## Variables Breakdown

### 🔵 Frontend Variables (VITE_*)

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_API_URL` | Where frontend calls backend API | `http://localhost:3001` |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe public key for payments | `pk_live_...` |

### 🟢 Backend Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `CLIENT_URL` | Frontend URL (for Stripe redirects) | `http://localhost:5173` |
| `STRIPE_SECRET_KEY` | Stripe secret key (keep private!) | `sk_live_...` |
| `PORT` | Backend server port | `3001` |
| `EMAIL_USER` | Email for sending order confirmations | `your_email@gmail.com` |
| `EMAIL_PASSWORD` | Gmail app password | `your_app_password` |
| `OFFICE_ADDRESS` | Your office address | `NO, 2A-G...` |
| `LALAMOVE_API_KEY` | (Optional) Lalamove API key | `your_key` |

## Setup Steps

1. **Copy the template:**
   ```bash
   cp .env.template .env
   ```

2. **Edit `.env` file** and fill in your actual values:
   - Replace `YOUR_PUBLISHABLE_KEY_HERE` with your Stripe publishable key
   - Replace `YOUR_SECRET_KEY_HERE` with your Stripe secret key
   - Set `CLIENT_URL` to your frontend URL
   - Set `VITE_API_URL` to your backend URL
   - Add your email credentials

3. **For Local Development:**
   ```env
   VITE_API_URL=http://localhost:3001
   CLIENT_URL=http://localhost:5173
   ```

4. **For Production:**
   ```env
   VITE_API_URL=https://api.mycomedic.com
   CLIENT_URL=https://www.mycomedic.com.my
   ```

## Important Notes

- ✅ `.env` is already in `.gitignore` - it won't be committed to GitHub
- ✅ Never share your `.env` file or commit it to git
- ✅ Restart servers after changing `.env`:
  - Frontend: Stop and restart `npm run dev`
  - Backend: Stop and restart `npm run dev:server`

## Troubleshooting

### "Cannot connect to server"
- Check `VITE_API_URL` matches your backend URL
- Make sure backend server is running

### "CLIENT_URL is not configured"
- Add `CLIENT_URL` to your `.env` file
- Restart backend server

### Variables not working?
- Make sure variable names are correct (case-sensitive)
- Frontend variables MUST start with `VITE_`
- Restart both servers after changes

