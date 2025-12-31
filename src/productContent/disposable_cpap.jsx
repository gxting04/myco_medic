import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposableCPAPPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `A totally disposable CPAP system, uses standard flowmeters and includes a manometer for verifying pressure.

**All Masks Feature:**
• Built in Manometer
• Build-in Pressure Relief Valve
• Titratable CPAP Pressure
• Highly Portable, Easy Set-up
• Latex-Free

**Four Different Mask Styles:**

**Deluxe Mask with Straight Rotating Port**
Ideal for EMS.
• Netted headgear is easily stretch when placing on patients
• Accept standard nebulizer in-line with the port
• Easy access for delivering nitroglycerin or other medication
• Available with or without oxygen ports

**Deluxe Mask with 90° Swivel Port and Anti-Asphyxia Valve**
• Anti-asphyxia valve with open system for CPAP patients
• Netted headgear is easily stretch when placing on patients
• Accept standard nebulizer in-line with the port
• Easy access for delivering nitroglycerin or other medication
• Available with or without oxygen ports

**Intermediate Cushion Mask with Fabric Headstrap**
• Include an inflation valve
• Comfortable non-stretchy fabric material for headstrap
• Easy access for administering medication

**Cushion Mask with Blue Neoprene Headstrap**
• Accept standard nebulizer in-line with the port
• Cushion mask contain color-coded hook ring for attaching the blue neoprene headstrap
• Easy access for administering medication`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposableCPAPPage
