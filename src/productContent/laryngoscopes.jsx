import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Laryngoscopes are essential medical instruments used for direct visualization of the larynx and vocal cords during endotracheal intubation procedures. These precision-engineered devices enable healthcare professionals to safely and effectively secure the airway in emergency situations, surgical procedures, and critical care settings.

**Key Features:**
• Ergonomic handle design – provides comfortable grip and optimal control during intubation procedures
• Durable construction – manufactured from high-quality materials to ensure reliability and longevity
• Multiple blade sizes available – accommodates patients of various ages and anatomical variations
• Bright illumination – integrated light source provides clear visualization of airway structures
• Easy to clean and maintain – designed for efficient sterilization and infection control protocols
• Standardized design – compatible with standard laryngoscope blades and accessories

**Clinical Applications:**
• Emergency airway management in trauma and critical care scenarios
• Elective surgical procedures requiring general anesthesia
• Intensive care unit intubations and airway maintenance
• Pre-hospital emergency medical services
• Operating room procedures across various surgical specialties

**Product Specifications:**
• Compatible with standard laryngoscope blade sizes (Macintosh, Miller, and specialty blades)
• Battery-powered illumination system for reliable light source
• Durable metal construction for extended service life
• Designed to meet international medical device standards

Laryngoscopes are fundamental tools in airway management, providing healthcare professionals with the visualization necessary for successful endotracheal intubation and optimal patient outcomes.`

function LaryngoscopesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default LaryngoscopesPage
