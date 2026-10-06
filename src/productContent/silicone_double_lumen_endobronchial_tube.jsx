import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Silicone Double Lumen Endobronchial Tube offers superior biocompatibility and durability for one-lung ventilation procedures. Constructed from medical-grade silicone, this tube provides enhanced patient comfort and extended use capability compared to PVC alternatives.

**Key Features:**
• Medical-grade silicone construction – superior biocompatibility and reduced risk of tissue reaction
• Double lumen design – enables selective lung ventilation for thoracic procedures
• Enhanced durability – silicone material provides extended service life
• High-volume, low-pressure cuffs – minimize risk of tracheal and bronchial trauma
• Soft, flexible material – reduces patient discomfort during prolonged procedures
• Radiopaque line – visible on X-ray for positioning verification
• Color-coded cuffs – facilitates accurate placement and identification

**Clinical Applications:**
• Long-duration thoracic surgical procedures
• Patients with sensitivity to PVC materials
• Procedures requiring extended one-lung ventilation
• Complex thoracic surgeries
• Reusable option for cost-effective care

**Technical Specifications:**
• Medical-grade silicone construction
• Double lumen design with independent ventilation channels
• High-volume, low-pressure cuff system
• Standard 15mm connectors
• Available in multiple sizes
• Designed for sterilization and reuse

The Silicone Double Lumen Endobronchial Tube provides healthcare professionals with a durable, biocompatible solution for one-lung ventilation, combining superior material properties with clinical effectiveness.`

function SiliconeDoubleLumenEndobronchialTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default SiliconeDoubleLumenEndobronchialTubePage
