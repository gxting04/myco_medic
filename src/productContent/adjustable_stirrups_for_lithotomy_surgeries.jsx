import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Adjustable Stirrups for Lithotomy Surgeries are specialized positioning devices designed to support patients' legs in the lithotomy position during gynecological, urological, and colorectal surgical procedures. These stirrups provide secure leg positioning with adjustable height and angle.

**Key Features:**
• Adjustable height – accommodates various patient sizes and leg lengths
• Adjustable angle – allows optimal leg positioning for surgical access
• Secure leg support – prevents leg movement during procedures
• Comfortable padding – soft material provides patient comfort
• Easy adjustment – simple height and angle adjustments
• Durable construction – designed for repeated clinical use

**Clinical Applications:**
• Lithotomy position surgeries
• Gynecological procedures
• Urological procedures
• Colorectal procedures
• Perineal procedures
• Procedures requiring lithotomy positioning

**Clinical Benefits:**
• Optimal positioning – adjustable design provides ideal leg positioning
• Surgical access – enables optimal access to perineal area
• Patient comfort – comfortable padding reduces discomfort
• Secure support – prevents leg movement during procedures

**Technical Specifications:**
• Adjustable height mechanism
• Adjustable angle mechanism
• Secure leg support system
• Compatible with standard operating tables
• Durable clinical construction

The Adjustable Stirrups for Lithotomy Surgeries provide healthcare professionals with secure, adjustable leg positioning for lithotomy procedures, ensuring optimal surgical access and patient comfort.`

function AdjustableStirrupsForLithotomySurgeriesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default AdjustableStirrupsForLithotomySurgeriesPage
