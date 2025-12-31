import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function CBonaClosedSuctionSystemsPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Designed for mechanically ventilated patients with endotracheal or tracheotomy tubes. Allows suctioning without disconnecting the ventilator or oxygen source, reducing risks of infection and oxygen desaturation.

**Key Features:**
• Irrigation Port: Equipped with an irrigation port featuring a one-way valve for safety and efficiency
• MDI Port: Includes a Metered Dose Inhaler (MDI) port for medication administration
• Double Swivel Connector: Features a double swivel connector to minimize torque and patient discomfort
• Extended Use: Available for 24-hour and 72-hour continuous use options

**Why Choose Closed Suction?**
Closed suction systems are critical for maintaining lung volume and oxygenation in mechanically ventilated patients. By preventing the loss of PEEP (positive end-expiratory pressure), they support better patient outcomes and reduce the risk of VAP (Ventilator-Associated Pneumonia).`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CBonaClosedSuctionSystemsPage
