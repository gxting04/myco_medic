import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Neo-Tee® Infant T-Piece Resuscitator represents a significant advancement in neonatal respiratory care as the first disposable infant T-piece resuscitator featuring a built-in manometer with optional pressure relief override capability.

**Key Features:**
• Flow-controlled and pressure-limited design for precise ventilation management
• Consistent measurement of Peak Inspiratory Pressure (PIP) and Positive End-Expiratory Pressure (PEEP)
• Built-in manometer with clear, easy-to-read display for real-time pressure monitoring
• Optional pressure relief override for enhanced control in critical situations
• Completely disposable design eliminates the need for capital equipment investment
• Bag-free operation eliminates operator fatigue associated with manual bag compression
• Clinically proven performance with over 10 years of successful use in neonatal care settings

**Product Specifications:**
• DEHP-free construction for enhanced safety
• MR Conditional design for compatibility with magnetic resonance imaging environments
• Single-patient-use disposable device ensures infection control and eliminates cross-contamination risks

The Neo-Tee® provides healthcare professionals with a reliable, cost-effective solution for delivering consistent positive pressure ventilation to infant patients, combining clinical excellence with operational efficiency.`

function InfantTPieceResuscitatorPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default InfantTPieceResuscitatorPage
