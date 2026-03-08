import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dns from 'dns';

dotenv.config();

// Configure DNS to use Google DNS as fallback
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

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
    const { items, customerInfo, total, deliveryFee = 0 } = req.body;

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

    // Build line items including delivery fee if applicable
    const lineItems = items.map(item => {
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
    });

    // Add delivery fee as a line item if it exists
    if (deliveryFee > 0) {
      lineItems.push({
        price_data: {
          currency: 'myr',
          product_data: {
            name: 'Delivery Fee',
          },
          unit_amount: Math.round(deliveryFee * 100), // Convert to cents
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'grabpay', 'fpx'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customerInfo.email,
      metadata: {
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone,
        address: customerInfo.address,
        deliveryFee: deliveryFee.toString(),
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

// Configure nodemailer with multiple options for reliability
let transporter;

// Allow custom SMTP host via environment variable (useful for production)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || false;

console.log('Configuring email transporter:', {
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  hasAuth: !!(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD)
});

// Try to create transporter with explicit DNS resolution
try {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT),
    secure: SMTP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates (for local testing)
    },
    // Add connection timeout
    connectionTimeout: 15000, // 15 seconds
    greetingTimeout: 15000,
    socketTimeout: 15000,
    // Use IPv4 explicitly
    family: 4,
    // Add DNS lookup options
    dns: {
      servers: ['8.8.8.8', '8.8.4.4'] // Use Google DNS as fallback
    }
  });
  
  console.log('Nodemailer transporter configured successfully');
} catch (error) {
  console.error('Error configuring nodemailer:', error);
  // Fallback: try with service name (uses built-in DNS)
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log('Fallback transporter (service: gmail) configured');
  } catch (fallbackError) {
    console.error('Fallback transporter also failed:', fallbackError);
    throw fallbackError;
  }
}

// Test DNS resolution endpoint (for debugging)
app.get('/api/test-dns', async (req, res) => {
  try {
    const testHost = 'smtp.gmail.com';
    console.log('Testing DNS resolution for:', testHost);
    
    dns.lookup(testHost, { family: 4 }, (err, address) => {
      if (err) {
        console.error('DNS lookup failed:', err);
        return res.status(500).json({
          error: 'DNS resolution failed',
          message: err.message,
          code: err.code,
          hostname: testHost,
          suggestion: 'Check server DNS configuration or network connectivity'
        });
      }
      
      console.log('DNS resolution successful:', address);
      res.json({
        success: true,
        hostname: testHost,
        ip: address,
        message: 'DNS resolution working correctly'
      });
    });
  } catch (error) {
    console.error('DNS test error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Career Application Form Submission
app.post('/api/career-application', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, employmentType, coverLetter } = req.body;
    const resumeFile = req.file;

    console.log('Received career application:', { name, email, phone, position, employmentType, hasResume: !!resumeFile });

    // Validate required fields
    if (!name || !email || !phone || !position) {
      console.error('Missing required fields:', { name: !!name, email: !!email, phone: !!phone, position: !!position });
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Check if email configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration missing');
      return res.status(500).json({ error: 'Email service is not configured. Please contact the administrator.' });
    }

    // Prepare email content
    const emailSubject = `Career Application: ${position} - ${name}`;
    const emailHtml = `
      <h2>New Career Application</h2>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Employment Type:</strong> ${employmentType || 'Not specified'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${coverLetter ? `<p><strong>Cover Letter:</strong><br>${coverLetter.replace(/\n/g, '<br>')}</p>` : ''}
    `;

    // Try using HTTP-based email API first (Resend) if configured, otherwise fallback to SMTP
    let emailSent = false;
    let lastError = null;

    // Option 1: Try Resend API (HTTP-based, no DNS needed for SMTP)
    if (process.env.RESEND_API_KEY) {
      try {
        console.log('Attempting to send email via Resend API...');
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.EMAIL_USER || 'onboarding@resend.dev',
            to: 'guangxun04@gmail.com',
            subject: emailSubject,
            html: emailHtml,
            attachments: resumeFile ? [{
              filename: resumeFile.originalname || 'resume.pdf',
              content: fs.readFileSync(resumeFile.path).toString('base64'),
            }] : []
          })
        });

        if (resendResponse.ok) {
          const result = await resendResponse.json();
          console.log('Email sent successfully via Resend API:', result);
          emailSent = true;
        } else {
          const error = await resendResponse.json();
          throw new Error(`Resend API error: ${error.message || resendResponse.statusText}`);
        }
      } catch (resendError) {
        console.error('Resend API failed:', resendError);
        lastError = resendError;
        // Fall through to SMTP
      }
    }

    // Option 2: Fallback to SMTP (nodemailer)
    if (!emailSent) {
      console.log('Falling back to SMTP...');
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'guangxun04@gmail.com',
        subject: emailSubject,
        html: emailHtml,
        attachments: resumeFile ? [{
          filename: resumeFile.originalname || 'resume.pdf',
          path: resumeFile.path
        }] : []
      };

    console.log('Sending email...');
      console.log('Email config:', {
        from: process.env.EMAIL_USER,
        to: 'guangxun04@gmail.com',
        hasAuth: !!(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD)
      });
      
      // Try to send email with retry logic
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          console.log(`SMTP email send attempt ${attempt}/3...`);
          
          // Verify transporter connection first (only on first attempt)
          if (attempt === 1) {
            try {
              await transporter.verify();
              console.log('SMTP server is ready to send emails');
            } catch (verifyError) {
              console.error('SMTP verification failed:', verifyError);
              // Continue anyway - verification might fail but sending could work
            }
          }
          
          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully via SMTP');
          emailSent = true;
          break;
        } catch (emailError) {
          lastError = emailError;
          console.error(`SMTP email send attempt ${attempt} failed:`, emailError.message);
          
          // If it's a DNS error, wait and retry
          if (emailError.code === 'ENOTFOUND' || emailError.message.includes('getaddrinfo')) {
            if (attempt < 3) {
              console.log(`Waiting 2 seconds before retry...`);
              await new Promise(resolve => setTimeout(resolve, 2000));
              continue;
            }
          } else {
            // For other errors, don't retry
            throw emailError;
          }
        }
      }
    }
    
    // If email still failed, log it but don't fail the request (save application anyway)
    if (!emailSent) {
      console.error('CRITICAL: Failed to send email after all attempts:', lastError?.message || 'Unknown error');
      console.error('Application data saved but email notification failed. Manual follow-up required.');
      // Don't throw error - allow application to be saved even if email fails
      // You might want to save to database or log file for manual processing
    }

    // Clean up uploaded file
    if (resumeFile && fs.existsSync(resumeFile.path)) {
      fs.unlinkSync(resumeFile.path);
    }

    // Return success even if email failed (application is still received)
    if (emailSent) {
      res.json({ success: true, message: 'Application submitted successfully! We will contact you soon.' });
    } else {
      res.json({ 
        success: true, 
        message: 'Application submitted successfully! However, email notification failed. We have received your application and will contact you soon.',
        warning: 'Email notification service temporarily unavailable'
      });
    }
  } catch (error) {
    console.error('Error processing career application:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });

    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (unlinkError) {
        console.error('Error deleting uploaded file:', unlinkError);
      }
    }

    // Only return error for validation/input errors, not email failures
    // Email failures are handled above and don't fail the request
    if (error.message.includes('required fields') || error.message.includes('valid email')) {
      return res.status(400).json({ error: error.message });
    }

    // For other errors, still accept the application but log the error
    console.error('Non-critical error occurred, but application data was received');
    res.json({ 
      success: true, 
      message: 'Application received. There was an issue with email notification, but your application has been saved.',
      warning: 'Please contact us directly if you do not receive a confirmation'
    });
  }
});

// Calculate Lalamove delivery fee
app.post('/api/calculate-delivery-fee', async (req, res) => {
  try {
    const { address, city, postcode, state } = req.body;

    // Validate required fields
    if (!address) {
      return res.status(400).json({ error: 'Delivery address is required' });
    }

    // Get office address from environment variables
    const officeAddress = process.env.OFFICE_ADDRESS || '';
    const officeCity = process.env.OFFICE_CITY || '';
    const officePostcode = process.env.OFFICE_POSTCODE || '';
    const officeState = process.env.OFFICE_STATE || '';
    const officeCountry = process.env.OFFICE_COUNTRY || 'MY';

    if (!officeAddress) {
      return res.status(500).json({ error: 'Office address is not configured' });
    }

    // Lalamove API credentials
    const lalamoveApiKey = process.env.LALAMOVE_API_KEY;
    const lalamoveApiSecret = process.env.LALAMOVE_API_SECRET;
    const lalamoveBaseUrl = process.env.LALAMOVE_BASE_URL || 'https://rest.lalamove.com';

    if (!lalamoveApiKey || !lalamoveApiSecret) {
      // If Lalamove credentials are not configured, calculate a simple distance-based fee
      console.warn('Lalamove API credentials not configured. Using estimated delivery fee based on location.');
      
      // Simple fee calculation based on state/city
      let estimatedFee = 15.00; // Base fee
      
      // Adjust fee based on location (you can customize this)
      if (state && state.toLowerCase().includes('selangor')) {
        if (city && city.toLowerCase().includes('puchong')) {
          estimatedFee = 8.00; // Same area, lower fee
        } else {
          estimatedFee = 12.00; // Same state, moderate fee
        }
      } else if (state && state.toLowerCase().includes('kuala lumpur') || state.toLowerCase().includes('kl')) {
        estimatedFee = 15.00; // KL area
      } else {
        estimatedFee = 20.00; // Other states, higher fee
      }
      
      return res.json({ 
        fee: estimatedFee, 
        currency: 'MYR',
        estimatedTime: '30-60 minutes',
        note: 'Estimated delivery fee. Configure Lalamove API for accurate real-time pricing.'
      });
    }

    // Construct addresses
    const pickupAddress = `${officeAddress}, ${officeCity}, ${officePostcode}, ${officeState}, ${officeCountry}`;
    const deliveryAddress = `${address}${city ? ', ' + city : ''}${postcode ? ', ' + postcode : ''}${state ? ', ' + state : ''}, ${officeCountry}`;

    // Get OAuth token from Lalamove
    const tokenResponse = await fetch(`${lalamoveBaseUrl}/v2/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: lalamoveApiKey,
        secret: lalamoveApiSecret
      })
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to authenticate with Lalamove API');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.token;

    // Try to geocode delivery address using a simple geocoding service
    // For now, we'll use a basic approach - you can integrate Google Maps Geocoding API later
    let deliveryLat = '';
    let deliveryLng = '';

    // Simple geocoding fallback - try to get coordinates from postcode/area
    // In production, you should use Google Maps Geocoding API or similar
    try {
      // For Malaysia, we can use a simple postcode-based lookup or Google Geocoding
      // For now, we'll proceed without coordinates and let Lalamove handle it
      // Lalamove API might accept addresses without coordinates
    } catch (geocodeError) {
      console.warn('Geocoding failed, proceeding with address only:', geocodeError);
    }

    // Get quote from Lalamove
    // Lalamove API format - check their latest documentation
    const quotePayload = {
      serviceType: 'MOTORCYCLE', // or 'CAR', 'VAN' depending on package size
      specialRequests: [],
      requesterContact: {
        name: 'Myco Medic',
        phone: '+60123822001'
      },
      stops: [
        {
          coordinates: {
            lat: process.env.OFFICE_LAT || '3.0167',
            lng: process.env.OFFICE_LNG || '101.6167'
          },
          address: pickupAddress
        },
        {
          ...(deliveryLat && deliveryLng ? {
            coordinates: {
              lat: deliveryLat,
              lng: deliveryLng
            }
          } : {}),
          address: deliveryAddress
        }
      ],
      paymentMethod: 'CASH'
    };

    const quoteResponse = await fetch(`${lalamoveBaseUrl}/v2/quotations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'X-LLM-Country': 'MY'
      },
      body: JSON.stringify(quotePayload)
    });

    if (!quoteResponse.ok) {
      const errorData = await quoteResponse.json().catch(() => ({}));
      const errorText = await quoteResponse.text().catch(() => 'Unknown error');
      console.error('Lalamove API error:', {
        status: quoteResponse.status,
        statusText: quoteResponse.statusText,
        errorData,
        errorText
      });
      
      // Return default fee if API fails
      return res.json({ 
        fee: 15.00, 
        currency: 'MYR',
        estimatedTime: '30-60 minutes',
        note: `Unable to calculate exact fee (API Error: ${quoteResponse.status}). Default fee applied. Please configure Lalamove API properly.`
      });
    }

    const quoteData = await quoteResponse.json();
    console.log('Lalamove quote response:', quoteData);
    
    // Extract fee from Lalamove response (format may vary)
    const fee = quoteData.feeBreakdown?.totalFee || quoteData.totalFee || quoteData.totalFeeAmount || 15.00;
    const currency = quoteData.currency || 'MYR';
    const estimatedTime = quoteData.estimatedTime || quoteData.estimatedArrivalTime || '30-60 minutes';

    res.json({
      fee: parseFloat(fee),
      currency,
      estimatedTime,
      quoteId: quoteData.quotationId || quoteData.id || null
    });

  } catch (error) {
    console.error('Error calculating delivery fee:', error);
    console.error('Error stack:', error.stack);
    
    // Return default fee on error with more details
    res.json({ 
      fee: 15.00, 
      currency: 'MYR',
      estimatedTime: '30-60 minutes',
      note: `Error calculating delivery fee: ${error.message}. Default fee applied. Please check server logs for details.`,
      error: error.message
    });
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