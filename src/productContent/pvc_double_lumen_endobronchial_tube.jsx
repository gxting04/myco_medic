import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The PVC Double Lumen Endobronchial Tube is a specialized airway device designed for one-lung ventilation during thoracic surgical procedures. This precision-engineered tube enables selective lung ventilation, allowing surgeons to work on one lung while maintaining ventilation of the other.

**Key Features:**
• Double lumen design – separate lumens for left and right lung ventilation
• Selective lung ventilation – enables independent control of each lung
• PVC construction – flexible, durable material suitable for clinical use
• High-volume, low-pressure cuffs – reduce risk of tracheal and bronchial trauma
• Radiopaque line – visible on X-ray for accurate positioning verification
• Color-coded cuffs – facilitates identification and positioning
• Standard connectors – compatible with standard breathing circuits

**Clinical Applications:**
• Thoracic surgical procedures requiring one-lung ventilation
• Lung resection surgeries
• Esophageal surgeries
• Video-assisted thoracoscopic surgery (VATS)
• Procedures requiring lung isolation

**Technical Specifications:**
• Double lumen design with separate ventilation channels
• High-volume, low-pressure cuffs for optimal seal
• Radiopaque material for X-ray visibility
• Standard 15mm connectors
• Available in various sizes for different patient populations

The PVC Double Lumen Endobronchial Tube provides anesthesiologists and surgeons with precise control over lung ventilation, enabling safe and effective thoracic surgical procedures.`

function PVCDoubleLumenEndobronchialTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PVCDoubleLumenEndobronchialTubePage
