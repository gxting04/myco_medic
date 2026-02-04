# Lalamove Delivery Fee Integration Setup

This document explains how to set up and use the Lalamove delivery fee calculation feature.

## Overview

The system now automatically calculates delivery fees using Lalamove API when customers enter their delivery address during checkout. The fee is displayed in real-time and included in the order total.

## Features

- ✅ Automatic delivery fee calculation when address is entered
- ✅ Real-time fee display in checkout
- ✅ Delivery fee included in order total
- ✅ Fallback to default fee if Lalamove API is unavailable
- ✅ Recalculate button for manual fee refresh

## Environment Variables Required

Add these to your `.env` file on the backend server:

```env
# Lalamove API Configuration
LALAMOVE_API_KEY=your_lalamove_api_key_here
LALAMOVE_API_SECRET=your_lalamove_api_secret_here
LALAMOVE_BASE_URL=https://rest.lalamove.com

# Office Address (Pickup Location)
OFFICE_ADDRESS=NO, 2A-G, FLOOR JALAN SIERRA 10/3, SECTION, Bandar 16 Sierra
OFFICE_CITY=Puchong
OFFICE_POSTCODE=47120
OFFICE_STATE=Selangor
OFFICE_COUNTRY=MY
OFFICE_LAT=3.0167
OFFICE_LNG=101.6167
```

## Getting Lalamove API Credentials

1. Sign up for a Lalamove Partner account at https://developers.lalamove.com/
2. Create an application to get your API Key and Secret
3. Make sure your account is approved for API access
4. Add the credentials to your `.env` file

## How It Works

1. **Customer enters address**: When a customer fills in their delivery address in the checkout form
2. **Fee calculation**: The system automatically calls the Lalamove API to get a delivery quote
3. **Display fee**: The calculated fee is shown in the order summary
4. **Include in total**: The delivery fee is added to the order total before payment

## Fallback Behavior

If Lalamove API credentials are not configured or the API call fails:
- A default delivery fee of RM 15.00 will be applied
- A notification message will be shown to the customer
- The checkout process will continue normally

## API Endpoints

### Calculate Delivery Fee
- **Endpoint**: `POST /api/calculate-delivery-fee`
- **Request Body**:
  ```json
  {
    "address": "Customer street address",
    "city": "City name",
    "postcode": "Postcode",
    "state": "State name"
  }
  ```
- **Response**:
  ```json
  {
    "fee": 15.00,
    "currency": "MYR",
    "estimatedTime": "30-60 minutes",
    "quoteId": "optional-quote-id"
  }
  ```

## Notes

- The Lalamove API integration may require address geocoding (converting addresses to coordinates)
- You may need to adjust the API request format based on Lalamove's current API documentation
- The default coordinates (3.1390, 101.6869) are for Kuala Lumpur - update them to your office location
- Consider implementing address autocomplete/validation for better accuracy

## Testing

1. Fill in the checkout form with a delivery address
2. Watch for the delivery fee to appear automatically
3. Verify the fee is included in the total
4. Test with different addresses to ensure accurate calculation

## Troubleshooting

- **Fee not calculating**: Check that Lalamove API credentials are set correctly
- **Default fee always shown**: Verify API credentials and check server logs for errors
- **Incorrect fees**: Ensure office address coordinates are accurate

