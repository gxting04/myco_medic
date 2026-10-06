import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Auto-inflation Endobronchial Blocker Tube features an innovative auto-inflation mechanism that simplifies lung isolation procedures. This advanced device enables selective lung deflation for thoracic surgeries while maintaining ventilation of the non-operative lung.

**Key Features:**
• Auto-inflation mechanism – automatic cuff inflation simplifies lung isolation setup
• Selective lung deflation – enables controlled collapse of operative lung
• High-volume, low-pressure cuff – reduces risk of bronchial trauma
• Flexible design – accommodates bronchial anatomy for optimal placement
• Radiopaque line – visible on X-ray for accurate positioning verification
• Standard connector – compatible with standard breathing circuits
• Color-coded components – facilitates identification and setup

**Clinical Applications:**
• Thoracic surgical procedures requiring lung isolation
• Video-assisted thoracoscopic surgery (VATS)
• Lung resection surgeries
• Esophageal surgeries
• Procedures requiring selective lung ventilation

**Clinical Benefits:**
• Simplified setup – auto-inflation reduces procedure complexity
• Precise lung isolation – enables controlled deflation of target lung
• Reduced setup time – automatic mechanism accelerates procedure preparation
• Enhanced safety – high-volume, low-pressure cuff minimizes trauma risk

**Technical Specifications:**
• Auto-inflation cuff mechanism
• High-volume, low-pressure cuff design
• Radiopaque material for X-ray visibility
• Standard connectors
• Available in multiple sizes

The Auto-inflation Endobronchial Blocker Tube provides anesthesiologists with an advanced, user-friendly solution for lung isolation, simplifying complex thoracic surgical procedures.`

function AutoInflationEndobronchialBlockerTubePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default AutoInflationEndobronchialBlockerTubePage
