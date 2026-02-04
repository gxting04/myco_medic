import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, customerInfo, total } = req.body;

    // Validate CLIENT_URL
    const clientUrl = process.env.CLIENT_URL;
    if (!clientUrl) {
      return res.status(500).json({ error: 'CLIENT_URL is not configured in environment variables' });
    }

    // Ensure URL is properly formatted and validate
    let baseUrl = clientUrl.trim();
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    
    // Validate URL format
    try {
      new URL(baseUrl);
    } catch (e) {
      return res.status(500).json({ error: `Invalid CLIENT_URL format: ${baseUrl}. Must be a valid URL (e.g., https://yourdomain.com or http://localhost:5173)` });
    }

    const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/cart`;

    // Convert relative image URLs to absolute URLs
    const getAbsoluteImageUrl = (imageUrl) => {
      if (!imageUrl) return undefined;
      
      // If already an absolute URL (starts with http:// or https://), return as is
      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
      }
      
      // If relative path, convert to absolute URL using baseUrl
      return imageUrl.startsWith('/') 
        ? `${baseUrl}${imageUrl}`
        : `${baseUrl}/${imageUrl}`;
    };

    console.log('Creating checkout session with URLs:', { 
      clientUrl: process.env.CLIENT_URL,
      baseUrl,
      successUrl, 
      cancelUrl 
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'grabpay', 'fpx'],
      line_items: items.map(item => {
        const imageUrl = getAbsoluteImageUrl(item.image);
        return {
          price_data: {
            currency: 'myr',
            product_data: {
              name: item.name,
              ...(imageUrl && { images: [imageUrl] }),
            },
            unit_amount: Math.round(item.price * 100), // Convert to cents
          },
          quantity: item.quantity,
        };
      }),
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customerInfo.email,
      metadata: {
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone,
        address: customerInfo.address,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      clientUrl: process.env.CLIENT_URL
    });
    res.status(500).json({ error: error.message || 'Failed to create checkout session' });
  }
});

// Configure multer for file uploads
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Career Application Form Submission
app.post('/api/career-application', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, employmentType, coverLetter } = req.body;
    const resumeFile = req.file;

    if (!name || !email || !phone || !position) {
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'caylee.myco@gmail.com',
      subject: `Career Application: ${position} - ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Employment Type:</strong> ${employmentType || 'Not specified'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${coverLetter ? `<p><strong>Cover Letter:</strong><br>${coverLetter.replace(/\n/g, '<br>')}</p>` : ''}
      `,
      attachments: resumeFile ? [{
        filename: resumeFile.originalname || 'resume.pdf',
        path: resumeFile.path
      }] : []
    };

    await transporter.sendMail(mailOptions);

    // Clean up uploaded file
    if (resumeFile && fs.existsSync(resumeFile.path)) {
      fs.unlinkSync(resumeFile.path);
    }

    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error sending career application email:', error);

    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({ error: 'Failed to submit application. Please try again.' });
  }
});

// Notify admin after successful Stripe session
app.post('/api/order-notify', async (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId) {
    return res.status(400).json({ error: 'sessionId is required' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer_details']
    });

    const lineItems = session.line_items?.data || [];
    const totalAmount = ((session.amount_total ?? 0) / 100).toFixed(2);
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'Valued Customer';
    const shippingAddress = session.customer_details?.address;

    // Format shipping address
    const formattedAddress = shippingAddress 
      ? `${shippingAddress.line1 || ''}${shippingAddress.line2 ? ', ' + shippingAddress.line2 : ''}, ${shippingAddress.city || ''}, ${shippingAddress.postal_code || ''}, ${shippingAddress.state || ''}, ${shippingAddress.country || ''}`.replace(/^,\s*|,\s*$/g, '').replace(/,\s*,/g, ',')
      : session.metadata?.address || 'N/A';

    // Admin notification email
    const itemsHtml = lineItems.map(item => {
      const price = (item.price?.unit_amount ?? 0) / 100;
      return `<li>${item.description} x ${item.quantity} — RM${price.toFixed(2)}</li>`;
    }).join('');

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'caylee.myco@gmail.com',
      subject: `New Order (${session.payment_status || 'pending'})`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Session ID:</strong> ${session.id}</p>
        <p><strong>Amount:</strong> RM${totalAmount}</p>
        <p><strong>Customer:</strong> ${customerName} (${customerEmail || 'No email'})</p>
        <p><strong>Shipping Address:</strong> ${formattedAddress}</p>
        <h3>Items</h3>
        <ul>${itemsHtml || '<li>No items</li>'}</ul>
        <p><strong>Payment Method:</strong> ${session.payment_method_types?.join(', ')}</p>
      `
    };

    // Customer confirmation email
    const customerItemsHtml = lineItems.map(item => {
      const price = (item.price?.unit_amount ?? 0) / 100;
      const itemTotal = price * item.quantity;
      return `
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 0;">
            <strong>${item.description}</strong>
          </td>
          <td style="padding: 12px 0; text-align: center;">${item.quantity}</td>
          <td style="padding: 12px 0; text-align: right;">RM${price.toFixed(2)}</td>
          <td style="padding: 12px 0; text-align: right;">RM${itemTotal.toFixed(2)}</td>
        </tr>
      `;
    }).join('');

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: `Order Confirmation - Thank You for Your Purchase!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1f2937; margin: 0;">Order Confirmation</h1>
            </div>
            
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
              <p style="font-size: 16px; margin-bottom: 20px;">
                Dear ${customerName},
              </p>
              
              <p style="font-size: 16px; margin-bottom: 20px;">
                Thank you for your order! We're excited to confirm that your payment has been processed successfully.
              </p>
              
              <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #065f46;">
                  <strong>✓ Payment Status:</strong> ${session.payment_status === 'paid' ? 'Paid' : 'Processing'}
                </p>
              </div>
              
              <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 30px;">Order Details</h2>
              
              <p style="margin-bottom: 10px;"><strong>Order ID:</strong> ${session.id}</p>
              <p style="margin-bottom: 10px;"><strong>Order Date:</strong> ${new Date(session.created * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <h3 style="color: #1f2937; margin-top: 25px; margin-bottom: 15px;">Items Ordered</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                  <tr style="background-color: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
                    <th style="padding: 12px 0; text-align: left;">Product</th>
                    <th style="padding: 12px 0; text-align: center;">Quantity</th>
                    <th style="padding: 12px 0; text-align: right;">Unit Price</th>
                    <th style="padding: 12px 0; text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${customerItemsHtml}
                </tbody>
              </table>
              
              <div style="border-top: 2px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                  <span style="font-size: 18px; font-weight: bold; color: #1f2937;">Total Amount:</span>
                  <span style="font-size: 18px; font-weight: bold; color: #1f2937;">RM${totalAmount}</span>
                </div>
              </div>
              
              <h3 style="color: #1f2937; margin-top: 30px; margin-bottom: 15px;">Shipping Information</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${customerName}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${customerEmail}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${session.customer_details?.phone || session.metadata?.customerPhone || 'N/A'}</p>
                <p style="margin: 5px 0;"><strong>Address:</strong> ${formattedAddress}</p>
              </div>
              
              <h3 style="color: #1f2937; margin-top: 30px; margin-bottom: 15px;">What's Next?</h3>
              <p style="margin-bottom: 10px;">
                • Your order is being processed and will be shipped soon.<br>
                • You will receive a shipping confirmation email with tracking information once your order ships.<br>
                • If you have any questions, please don't hesitate to contact us.
              </p>
              
              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af;">
                  <strong>Need Help?</strong> If you have any questions about your order, please contact us at <a href="mailto:caylee.myco@gmail.com" style="color: #3b82f6;">caylee.myco@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p style="margin: 0;">Thank you for shopping with us!</p>
              <p style="margin: 5px 0;">Myco Medic</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      customerEmail ? transporter.sendMail(customerMailOptions) : Promise.resolve()
    ]);

    res.json({ success: true });
  } catch (error) {
    console.error('Order notify error:', error);
    res.status(500).json({ error: 'Failed to send order email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});