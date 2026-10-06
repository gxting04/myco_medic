import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Suction Swab is a specialized oral care device designed for cleaning and moistening patients' oral cavities when they are unable to perform routine oral hygiene independently. This device features integrated suction capability to remove secretions and debris.

**Key Features:**
• Integrated suction – removes secretions and debris during oral care
• Oral care design – provides effective oral cavity cleaning
• Aspiration prevention – suction prevents aspiration of oral contents
• Easy to use – simple operation for healthcare providers
• Patient comfort – gentle cleaning action
• Disposable design – single-use ensures hygiene

**Clinical Applications:**
• Patient oral care
• Bedridden patient care
• Intensive care unit oral hygiene
• Post-surgical oral care
• Long-term care facilities
• Patients unable to perform oral hygiene

**Clinical Benefits:**
• Aspiration prevention – suction prevents aspiration of oral contents
• Effective oral care – provides thorough oral cavity cleaning
• Patient comfort – gentle cleaning action
• Easy operation – simple use for healthcare providers

**Technical Specifications:**
• Integrated suction capability
• Oral care swab design
• Compatible with standard suction systems
• Disposable, single-use design
• Suitable for various patient populations

The Suction Swab provides healthcare professionals with an effective solution for patient oral care, ensuring thorough cleaning while preventing aspiration risks.`

function SuctionSwabPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SuctionSwabPage
