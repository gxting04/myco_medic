# E-commerce & Payment Integration - Myco Medic

## What's Been Added

✅ **Shopping Cart System**
- Cart context for global state management
- Add to cart functionality on product pages
- Quantity adjusters
- Cart icon in header with item count
- Persistent cart (saved in localStorage)

✅ **Cart Page** (`/cart`)
- View all cart items
- Update quantities
- Remove items
- See total price
- Clear cart option

✅ **Checkout Page** (`/checkout`)
- Customer information form
- Order summary
- Stripe payment integration
- Touch n Go eWallet support
- Multiple payment methods (Cards, FPX, GrabPay)

✅ **Product Pages Updated**
- "Add to Cart" button
- "Buy Now" button (quick checkout)
- Quantity selector
- Visual feedback when items added

## How to Use

### For Customers:
1. Browse products
2. Click "Add to Cart" on any product
3. Adjust quantities as needed
4. Click cart icon in header to view cart
5. Proceed to checkout
6. Fill in delivery information
7. Choose payment method (Touch n Go eWallet recommended)
8. Complete payment

### For Admin/Developer:

#### Initial Setup

1. **Install Dependencies** (Already done)
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

2. **Get Stripe Account**
   - Sign up at [stripe.com](https://stripe.com)
   - Get API keys from Dashboard

3. **Configure Environment**
   - Create `.env` file in project root
   - Add your Stripe key:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

4. **Enable Touch n Go in Stripe**
   - Go to Stripe Dashboard → Settings → Payment Methods
   - Enable "Touch 'n Go"
   - Set currency to MYR (Malaysian Ringgit)

5. **Set Up Backend** (Required for production)
   - See `PAYMENT_SETUP.md` for detailed instructions
   - Create Node.js server to handle Stripe checkout sessions
   - Deploy backend server

## Testing

### Demo Mode (Current)
- Use "Demo Payment (For Testing)" button
- Simulates successful payment
- No actual payment processing
- **Remove before going live!**

### Test with Stripe
1. Set up backend server (see PAYMENT_SETUP.md)
2. Use Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
3. Test Touch n Go with test phone number

## File Structure

```
src/
├── context/
│   └── CartContext.jsx          # Shopping cart state management
├── pages/
│   ├── Cart.jsx                 # Shopping cart page
│   └── Checkout.jsx             # Checkout & payment page
├── components/
│   ├── Header.jsx               # Updated with cart icon
│   └── ProductDetailDefault.jsx # Updated with cart buttons
└── main.jsx                     # Updated with cart routes
```

## Features

### Shopping Cart
- ✅ Add/remove items
- ✅ Update quantities
- ✅ Persistent storage
- ✅ Real-time total calculation
- ✅ Cart count badge

### Payment Methods Supported
- 💳 Credit/Debit Cards (Visa, Mastercard, Amex)
- 📱 Touch n Go eWallet
- 🏦 FPX (Online Banking Malaysia)
- 🚗 GrabPay
- 💰 Other Stripe payment methods

### Security
- ✅ Stripe PCI compliance
- ✅ Secure payment processing
- ✅ No card data stored on your server
- ✅ 3D Secure authentication support

## Next Steps

1. **Read PAYMENT_SETUP.md** for detailed integration steps
2. **Set up Stripe account** and get API keys
3. **Create backend server** for checkout sessions
4. **Test payment flow** with test cards
5. **Enable Malaysian payment methods** in Stripe
6. **Remove demo payment button** before going live
7. **Add success/cancel pages** for post-payment
8. **Configure webhook** for payment confirmations
9. **Add order management** system (optional)
10. **Go live** with real API keys

## Important Notes

⚠️ **Before Going Live:**
- Remove "Demo Payment" button from Checkout.jsx
- Use live Stripe API keys (pk_live_* and sk_live_*)
- Test all payment flows thoroughly
- Set up proper error handling
- Configure payment confirmation emails
- Add terms and conditions
- Add privacy policy

⚠️ **Backend Required:**
- The checkout page needs a backend API to create Stripe sessions
- Cannot process payments from frontend only (security reasons)
- See PAYMENT_SETUP.md for backend setup guide

## Support

- **Stripe Documentation**: [stripe.com/docs](https://stripe.com/docs)
- **Touch n Go Integration**: [stripe.com/docs/payments/touch-n-go](https://stripe.com/docs/payments/touch-n-go)
- **Malaysian Payments**: [stripe.com/docs/payments/my](https://stripe.com/docs/payments/my)

## Demo Video / Screenshots

### Cart Page
- Shows all items in cart
- Update quantities or remove items
- View total price
- Proceed to checkout

### Checkout Page
- Customer information form
- Payment method selection (Touch n Go, Cards, etc.)
- Order summary
- Secure Stripe checkout

---

**Need help?** Check PAYMENT_SETUP.md for detailed setup instructions.

