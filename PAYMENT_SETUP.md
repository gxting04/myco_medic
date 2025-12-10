# Payment Gateway Setup Guide

This guide will help you set up Touch n Go eWallet and other payment methods using Stripe.

## Prerequisites

- A Stripe account (sign up at [stripe.com](https://stripe.com))
- Node.js installed
- Your website deployed or running locally

## Step 1: Get Your Stripe API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on "Developers" → "API keys"
3. Copy your **Publishable key** (starts with `pk_test_` for test mode)
4. Copy your **Secret key** (starts with `sk_test_` for test mode)

## Step 2: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your Stripe publishable key:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

## Step 3: Enable Malaysian Payment Methods in Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods)
2. Under "Payment methods", enable:
   - **Touch 'n Go** (eWallet)
   - **Cards** (Visa, Mastercard)
   - **FPX** (Online Banking for Malaysia)
   - **GrabPay** (Optional)

3. Set your currency to **MYR** (Malaysian Ringgit)

## Step 4: Create a Backend API Endpoint

You need to create a backend server to handle Stripe checkout sessions. Here's a simple Node.js example:

### Install Backend Dependencies

```bash
npm install express stripe cors dotenv
```

### Create `server.js` in your project root

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, customerInfo, total } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'grabpay', 'fpx', 'touch_n_go'], // Malaysian payment methods
      line_items: items.map(item => ({
        price_data: {
          currency: 'myr',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
      customer_email: customerInfo.email,
      metadata: {
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone,
        address: customerInfo.address,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Add to your `.env` file

```env
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
CLIENT_URL=http://localhost:5173
PORT=3001
```

### Run the backend server

```bash
node server.js
```

## Step 5: Update Checkout.jsx

The checkout page is already configured! Just make sure:
1. Your `.env` file has the correct `VITE_STRIPE_PUBLISHABLE_KEY`
2. Your backend server is running on `http://localhost:3001` (or update the API URL in Checkout.jsx)

## Step 6: Test the Payment Flow

### Using Test Mode

Stripe provides test cards and payment methods:

**Test Cards:**
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Use any future expiry date, any CVC, any postal code

**Test Touch n Go:**
- In test mode, you can simulate Touch n Go payments
- Use test phone number: `+60123456789`

### Testing Steps:

1. Add products to cart
2. Go to checkout
3. Fill in customer information
4. Click "Pay with Stripe (Touch n Go / Card)"
5. You'll be redirected to Stripe's checkout page
6. Select Touch n Go eWallet (or other payment method)
7. Complete the test payment
8. You'll be redirected back to your success page

## Step 7: Go Live

When ready for production:

1. Switch to **Live mode** in Stripe Dashboard
2. Get your **live** API keys (starts with `pk_live_` and `sk_live_`)
3. Update your `.env` file with live keys
4. Verify your business information in Stripe
5. Enable live payment methods

## Troubleshooting

### Payment methods not showing
- Make sure you've enabled Malaysian payment methods in Stripe Dashboard
- Verify your currency is set to MYR
- Check that your Stripe account is activated for Malaysia

### API errors
- Verify your API keys are correct
- Check that your backend server is running
- Look at browser console and server logs for error messages

### Touch n Go not available
- Ensure you're using MYR currency
- Touch n Go must be enabled in your Stripe Dashboard
- Your Stripe account must support Malaysian payment methods

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Malaysian Payment Methods](https://stripe.com/docs/payments/my)
- [Touch n Go Integration](https://stripe.com/docs/payments/touch-n-go)

## Support

For issues with:
- **Stripe**: Contact Stripe Support at [support.stripe.com](https://support.stripe.com)
- **Website**: Contact your development team

---

## Demo Mode

For testing without backend setup:
- Click "Demo Payment (For Testing)" button on checkout page
- This simulates a successful payment
- **Remove this button before going live!**

