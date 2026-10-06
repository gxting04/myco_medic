import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Designed for effective and gentle cleaning of cannulas and narrow instruments. Durable nylon bristles on a flexible steel shaft allow smooth access and reliable cleaning performance. Available in various sizes and lengths to meet different cleaning requirements.

**Length options**
• 30 cm, 40 cm, 60 cm

**Tip dimensions / diameter**
• 1.5 mm, 1.8 mm, 2.0 mm, 2.5 mm, 3.0 mm, 4.0 mm, 5.0 mm, 6.0 mm, 7.0 mm, 8.0 mm

**Material**
• Nylon bristle brush + stainless steel

**Suitable for**
• Hospital (medical grade product), medical centre, clinics, dermatology, veterinary, laboratory, household, and similar settings

Contact us for the length and tip size best suited to your devices.`

function CannulaInstrumentPipeCleanersPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default CannulaInstrumentPipeCleanersPage
