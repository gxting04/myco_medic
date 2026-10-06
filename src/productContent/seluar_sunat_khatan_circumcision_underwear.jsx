import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Seluar Sunat Khatan / Circumcision Underwear is a specialized garment designed for post-circumcision care and comfort. This innovative underwear provides protection, support, and comfort during the healing process following circumcision procedures.

**Key Features:**
• Specialized design – accommodates post-circumcision healing needs
• Comfortable material – soft, breathable fabric reduces irritation
• Protective design – shields surgical site from friction and trauma
• Easy to use – simple garment design for easy application
• Washable and reusable – designed for multiple uses
• Multiple sizes available – accommodates various patient sizes

**Clinical Applications:**
• Post-circumcision care
• Pediatric circumcision recovery
• Adult circumcision recovery
• Wound protection during healing
• Comfort management post-surgery

**Clinical Benefits:**
• Wound protection – shields surgical site from trauma
• Patient comfort – reduces discomfort during healing
• Easy care – simple garment for patient and caregiver use
• Cost-effective – reusable design provides value

**Technical Specifications:**
• Specialized garment design
• Soft, breathable material
• Protective construction
• Available in various sizes
• Washable and reusable

The Seluar Sunat Khatan / Circumcision Underwear provides patients with a comfortable, protective solution for post-circumcision care, ensuring optimal healing conditions and patient comfort during recovery.`

function SeluarSunatKhatanCircumcisionUnderwearPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SeluarSunatKhatanCircumcisionUnderwearPage
