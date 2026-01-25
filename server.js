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
    const itemsHtml = lineItems.map(item => {
      const price = (item.price?.unit_amount ?? 0) / 100;
      return `<li>${item.description} x ${item.quantity} — RM${price.toFixed(2)}</li>`;
    }).join('');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'caylee.myco@gmail.com',
      subject: `New Order (${session.payment_status || 'pending'})`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Session ID:</strong> ${session.id}</p>
        <p><strong>Amount:</strong> RM${((session.amount_total ?? 0) / 100).toFixed(2)}</p>
        <p><strong>Customer:</strong> ${session.customer_details?.name || 'Unknown'} (${session.customer_details?.email || 'No email'})</p>
        <p><strong>Shipping Address:</strong> ${session.customer_details?.address ? `${session.customer_details.address.line1 || ''} ${session.customer_details.address.city || ''} ${session.customer_details.address.country || ''}` : 'N/A'}</p>
        <h3>Items</h3>
        <ul>${itemsHtml || '<li>No items</li>'}</ul>
        <p><strong>Payment Method:</strong> ${session.payment_method_types?.join(', ')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
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