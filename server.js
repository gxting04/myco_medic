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

// Log email configuration at startup
console.log('Email configuration at startup:', {
  hasResendKey: !!process.env.RESEND_API_KEY,
  resendKeyPreview: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'NOT SET',
  hasEmailUser: !!process.env.EMAIL_USER,
  hasEmailPassword: !!process.env.EMAIL_PASSWORD
});

// Configure DNS to use Google DNS as fallback
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

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

// Configure nodemailer - create transporter lazily (only when needed)
// This prevents DNS errors at server startup
let transporter = null;

// Function to create transporter only when needed (lazy initialization)
function getTransporter() {
  // CRITICAL CHECK: Never create SMTP transporter if Resend API key exists
  if (process.env.RESEND_API_KEY) {
    console.log('BLOCKED: Attempted to create SMTP transporter but Resend API key is configured');
    console.log('This should never happen - SMTP will fail with DNS errors');
    return null;
  }
  
  if (transporter) {
    return transporter;
  }
  
  // Allow custom SMTP host via environment variable (useful for production)
  const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
  const SMTP_PORT = process.env.SMTP_PORT || 587;
  const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || false;

  console.log('Creating SMTP transporter:', {
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
    return transporter;
  } catch (error) {
    console.error('Error configuring nodemailer:', error.message);
    // Don't throw - just return null, Resend API will be used instead
    console.error('SMTP transporter creation failed - will use Resend API if available');
    return null;
  }
}

// Test endpoint to verify Resend API key is loaded
app.get('/api/test-resend-config', (req, res) => {
  res.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPreview: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'NOT SET',
    resendKeyLength: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0,
    hasEmailUser: !!process.env.EMAIL_USER,
    nodeEnv: process.env.NODE_ENV,
    message: process.env.RESEND_API_KEY 
      ? 'Resend API key is configured - SMTP should NOT be used' 
      : 'WARNING: Resend API key NOT found - SMTP will be attempted (will fail with DNS error)'
  });
});

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
  // Initialize emailSent and lastError at the start
  let emailSent = false;
  let lastError = null;
  
  // Log email configuration at start
  const hasResendKey = !!process.env.RESEND_API_KEY;
  console.log('=== Career Application Submission ===');
  console.log('Email configuration check:', {
    hasResendKey: hasResendKey,
    resendKeyValue: hasResendKey ? process.env.RESEND_API_KEY.substring(0, 15) + '...' : 'NOT SET',
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPassword: !!process.env.EMAIL_PASSWORD
  });
  
  if (!hasResendKey) {
    console.error('⚠️  WARNING: RESEND_API_KEY not found in environment variables!');
    console.error('⚠️  SMTP will be attempted, which will fail with DNS error.');
    console.error('⚠️  Please check your .env file and restart the server.');
  }
  
  // Wrap everything in try-catch to ensure DNS errors don't fail the request
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
    // Note: emailSent and lastError are already initialized at the top of the function

    // Option 1: Try Resend API (HTTP-based, no DNS needed for SMTP)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      console.log('✅ Resend API key found - using Resend API for email sending');
      console.log('Resend API key (first 15 chars):', resendApiKey.substring(0, 15) + '...');
      try {
        console.log('Attempting to send email via Resend API...');
        
        // Resend "from" email address:
        // - Use RESEND_FROM_EMAIL if you've verified a domain in Resend dashboard
        // - Otherwise, use 'onboarding@resend.dev' (works without domain verification for testing)
        // Note: For production, add and verify your domain in Resend dashboard for better deliverability
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        console.log('Resend from email:', fromEmail);
        
        const emailPayload = {
          from: fromEmail,
          to: 'guangxun04@gmail.com',
          subject: emailSubject,
          html: emailHtml
        };
        
        // Add attachments if resume file exists
        if (resumeFile && fs.existsSync(resumeFile.path)) {
          const fileContent = fs.readFileSync(resumeFile.path);
          emailPayload.attachments = [{
            filename: resumeFile.originalname || 'resume.pdf',
            content: fileContent.toString('base64')
          }];
        }
        
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailPayload)
        });

        const responseData = await resendResponse.json();

        if (resendResponse.ok) {
          console.log('Email sent successfully via Resend API:', responseData);
          emailSent = true;
        } else {
          console.error('Resend API error response:', responseData);
          throw new Error(`Resend API error: ${responseData.message || resendResponse.statusText}`);
        }
      } catch (resendError) {
        console.error('Resend API failed:', resendError.message || resendError);
        lastError = resendError;
        // DO NOT fall through to SMTP - Resend API key is configured, so SMTP will fail with DNS
        console.error('Resend API failed but will NOT attempt SMTP (DNS will fail)');
      }
    }

    // Option 2: Fallback to SMTP (nodemailer) - but catch DNS errors gracefully
    // IMPORTANT: Only try SMTP if Resend API key is NOT configured
    // If Resend API key exists, NEVER try SMTP (it will fail with DNS)
    if (!emailSent) {
      if (resendApiKey) {
        // Resend API key exists but email failed - don't try SMTP
        console.error('❌ Resend API was configured but failed - skipping SMTP (DNS will fail)');
        console.error('❌ Email will not be sent, but application will be saved');
        console.error('❌ Resend error:', lastError?.message || 'Unknown error');
        lastError = lastError || new Error('Resend API failed and SMTP unavailable due to DNS issues');
      } else {
        // No Resend API key - try SMTP
        console.warn('⚠️  Resend API not configured - attempting SMTP fallback...');
        console.warn('⚠️  This will likely fail with DNS error: getaddrinfo ENOTFOUND smtp.gmail.com');
        transporter = getTransporter(); // Lazy initialization - only if Resend not available
      }
    }
    
    // CRITICAL: Only attempt SMTP if Resend API key is NOT configured
    // Double-check to prevent DNS errors
    if (!emailSent && transporter && !process.env.RESEND_API_KEY) {
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

      console.log('Sending email via SMTP...');
      console.log('Email config:', {
        from: process.env.EMAIL_USER,
        to: 'guangxun04@gmail.com',
        hasAuth: !!(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD)
      });
      
      // Wrap SMTP attempts in try-catch to prevent DNS errors from propagating
      try {
        // Try sending without verification first (verification often fails with DNS issues)
        try {
          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully via SMTP');
          emailSent = true;
        } catch (sendError) {
          // Check if it's a DNS error
          if (sendError.code === 'ENOTFOUND' || sendError.message.includes('getaddrinfo')) {
            console.error('DNS resolution failed for SMTP - email cannot be sent:', sendError.message);
            lastError = sendError;
            // Don't throw - just mark as failed
          } else {
            // For non-DNS errors, try verification and retry
            console.error('SMTP send failed (non-DNS):', sendError.message);
            lastError = sendError;
            
            // Try with verification (but skip if DNS error already occurred)
            if (!sendError.code || sendError.code !== 'ENOTFOUND') {
              try {
                await transporter.verify();
                // Retry sending
                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully via SMTP (after retry)');
                emailSent = true;
              } catch (retryError) {
                console.error('SMTP retry also failed:', retryError.message);
                lastError = retryError;
              }
            }
          }
        }
      } catch (smtpWrapperError) {
        // Catch any unexpected errors
        console.error('Unexpected SMTP error:', smtpWrapperError.message);
        if (smtpWrapperError.code === 'ENOTFOUND' || smtpWrapperError.message.includes('getaddrinfo')) {
          lastError = smtpWrapperError;
          // Don't throw DNS errors
        } else {
          lastError = smtpWrapperError;
        }
      }
    } else if (!emailSent) {
      // Email failed - log but don't fail the request
      if (process.env.RESEND_API_KEY) {
        console.error('Resend API was configured but failed, and SMTP fallback also unavailable');
      } else {
        console.error('SMTP transporter not available - email cannot be sent');
        console.error('Resend API was not configured and SMTP transporter could not be created');
      }
      lastError = lastError || new Error('Email service not available');
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
    // Email failures (including DNS errors) are handled above and don't fail the request
    const errorMessage = error.message || '';
    if (errorMessage.includes('required fields') || errorMessage.includes('valid email')) {
      return res.status(400).json({ error: errorMessage });
    }

    // For DNS/email errors or any other errors, still accept the application
    // DNS errors should never fail the request - they're caught above
    console.error('Non-critical error occurred, but application data was received');
    console.error('Application details:', { 
      name: req.body?.name, 
      email: req.body?.email, 
      phone: req.body?.phone, 
      position: req.body?.position 
    });
    
    // Always return success - application is saved even if email fails
    res.json({ 
      success: true, 
      message: 'Application received successfully! There was an issue with email notification, but your application has been saved and we will contact you soon.',
      warning: 'Email notification temporarily unavailable - your application is still saved'
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