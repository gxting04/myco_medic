import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Pressure Transducer is a precision medical device used to convert physiological pressure signals into electrical signals for monitoring and display. This essential component enables accurate measurement of blood pressure, central venous pressure, and other hemodynamic parameters in critical care and surgical settings.

**Key Features:**
• High accuracy measurement – provides precise pressure readings
• Compatible with standard monitoring systems – works with most patient monitors
• Disposable and reusable options – accommodates various clinical preferences
• Easy to use – simple setup and calibration procedures
• Durable construction – designed for reliable performance in clinical environments
• Standard connectors – compatible with standard pressure monitoring lines

**Clinical Applications:**
• Continuous arterial blood pressure monitoring
• Central venous pressure measurement
• Pulmonary artery pressure monitoring
• Intracranial pressure monitoring
• Operating room hemodynamic monitoring

**Clinical Benefits:**
• Accurate monitoring – provides reliable pressure measurements
• Real-time data – enables continuous patient monitoring
• Essential for critical care – fundamental component of hemodynamic monitoring
• Versatile application – suitable for various pressure measurement needs

**Technical Specifications:**
• High accuracy pressure measurement
• Compatible with standard monitoring equipment
• Standard pressure line connectors
• Available in disposable and reusable configurations
• Designed for clinical use

The Pressure Transducer is an essential component of modern patient monitoring systems, providing healthcare professionals with accurate, real-time pressure measurements for optimal patient care.`

function PressureTransducerPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default PressureTransducerPage
