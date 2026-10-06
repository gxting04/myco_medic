import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Body Wipes are pre-moistened cleaning wipes designed for patient hygiene and skin care when traditional bathing is not possible. These convenient wipes provide effective cleaning and refreshing for patients in various care settings.

**Key Features:**
• Pre-moistened wipes – ready-to-use cleaning solution
• Gentle formula – suitable for sensitive skin
• Effective cleaning – removes dirt, oils, and bacteria
• Easy to use – simple wipe application
• Disposable design – single-use ensures hygiene
• Convenient packaging – easy to store and access

**Clinical Applications:**
• Patient hygiene care
• Bedridden patient care
• Post-surgical care
• Long-term care facilities
• Intensive care unit patient hygiene
• Home healthcare settings

**Clinical Benefits:**
• Maintains hygiene – effective body cleaning without water
• Patient comfort – gentle cleaning solution
• Convenience – eliminates need for traditional bathing
• Time-saving – quick application for healthcare providers

**Technical Specifications:**
• Pre-moistened cleaning wipes
• Disposable, single-use design
• Gentle, pH-balanced formula
• Suitable for sensitive skin
• Convenient packaging

The Body Wipes provide healthcare professionals and caregivers with a convenient, effective solution for maintaining patient hygiene, ensuring comfort and cleanliness for patients unable to bathe.`

function BodyWipesPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default BodyWipesPage
