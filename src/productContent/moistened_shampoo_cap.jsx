import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Moistened Shampoo Cap is a convenient, waterless hair cleaning solution designed for patients who are unable to shower or bathe. This innovative cap contains pre-moistened cleaning solution that effectively cleans hair without requiring water, making it ideal for bedridden patients, post-surgical care, and long-term care settings.

**Key Features:**
• Waterless cleaning – effective hair cleaning without water or rinsing
• Pre-moistened solution – ready-to-use convenience
• Gentle formula – suitable for sensitive scalps and various hair types
• Easy application – simple cap design for straightforward use
• Disposable design – single-patient-use ensures hygiene
• Comfortable fit – accommodates various head sizes

**Clinical Applications:**
• Bedridden patient care
• Post-surgical hair care
• Long-term care facilities
• Intensive care unit patient hygiene
• Home healthcare settings

**Clinical Benefits:**
• Maintains hygiene – effective hair cleaning without water
• Patient comfort – gentle cleaning solution
• Convenience – eliminates need for traditional shampooing
• Time-saving – quick application for healthcare providers

**Technical Specifications:**
• Pre-moistened cleaning solution
• Disposable, single-patient-use design
• Comfortable cap fit
• Gentle, pH-balanced formula
• Suitable for various hair types

The Moistened Shampoo Cap provides healthcare professionals and caregivers with a convenient, effective solution for maintaining patient hair hygiene, ensuring comfort and cleanliness for patients unable to shower.`

function MoistenedShampooCapPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default MoistenedShampooCapPage
