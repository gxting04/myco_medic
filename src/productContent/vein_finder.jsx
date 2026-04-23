import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `This system uses near-infrared light, which hemoglobin absorbs more strongly than surrounding tissue, to project a clear map of superficial veins on the skin. It helps staff locate, assess, and line up venipuncture sites, supports patient comfort, and can lower stress and complication risk in routine access. It is used across emergency, outpatient, pediatrics, geriatrics, ICU, dermatology, hemodialysis, and aesthetics settings.

**Imaging and display**
• High-resolution view from precision cameras and projection paired with vascular imaging algorithms
• Several color modes (e.g. black/white, green, red, purple, with background options) to suit different skin types
• Four image sizes and four brightness levels
• Viewing modes: Normal, Enhanced, and Depth — Depth offers deep, medium, and shallow puncture guidance
• Can be used on a mobile stand, as a benchtop unit, or handheld`

function VeinFinderPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default VeinFinderPage
