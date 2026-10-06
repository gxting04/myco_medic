import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Endobronchial Blocker Tube (Without Auto-inflation) provides manual control over lung isolation for thoracic surgical procedures. This cost-effective alternative offers precise lung deflation control while maintaining all essential features for successful one-lung ventilation.

**Key Features:**
• Manual inflation control – allows precise cuff pressure management
• Selective lung deflation – enables controlled collapse of operative lung
• High-volume, low-pressure cuff – reduces risk of bronchial trauma
• Flexible design – accommodates bronchial anatomy for optimal placement
• Radiopaque line – visible on X-ray for accurate positioning verification
• Standard connector – compatible with standard breathing circuits
• Cost-effective design – provides essential functionality at lower cost

**Clinical Applications:**
• Thoracic surgical procedures requiring lung isolation
• Video-assisted thoracoscopic surgery (VATS)
• Lung resection surgeries
• Esophageal surgeries
• Procedures requiring selective lung ventilation

**Clinical Benefits:**
• Precise control – manual inflation allows fine-tuning of cuff pressure
• Cost-effective – provides essential lung isolation capabilities
• Reliable performance – proven design for lung isolation procedures
• Versatile application – suitable for various thoracic surgical scenarios

**Technical Specifications:**
• Manual inflation mechanism
• High-volume, low-pressure cuff design
• Radiopaque material for X-ray visibility
• Standard connectors
• Available in multiple sizes

The Endobronchial Blocker Tube (Without Auto-inflation) provides anesthesiologists with a reliable, cost-effective solution for lung isolation in thoracic surgical procedures.`

function EndobronchialBlockerTubeWithoutAutoInflationPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default EndobronchialBlockerTubeWithoutAutoInflationPage
