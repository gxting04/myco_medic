import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Mercury Medical Disposable Pressure Manometer represents an industry-first innovation as the first disposable manometer capable of reliably monitoring both proper inflation pressure and PEEP (Positive End-Expiratory Pressure) during manual ventilation with Mercury's CPR and Hyperinflation Systems.

The Mercury Medical Disposable Colour-Coded Manometer is now available with an enhanced colour-coded label system, providing improved visibility and quick identification of pressure ranges for enhanced clinical efficiency.

**Key Features:**
• Dual pressure monitoring – simultaneously monitors both airway pressure and PEEP pressure during manual ventilation
• In-line monitoring capability – attaches directly onto CPR and hyperinflation resuscitation bags, allowing continuous pressure monitoring without diverting attention from the patient
• Colour-coded labeling system – enhanced visual indicators for rapid pressure range identification and improved clinical workflow
• Disposable design – eliminates infection control concerns and removes the need to locate or repair reusable manometers
• Ready-to-use convenience – eliminates time wasted searching for misplaced or broken reusable devices
• Latex-free construction – ensures patient and healthcare provider safety

**Technical Specifications:**
• High accuracy performance – ± 3 cm H₂O accuracy up to 15 cm H₂O
• Extended range accuracy – ± 5 cm H₂O accuracy over 15 cm H₂O
• Compatible with Mercury Medical CPR resuscitation bags and hyperinflation systems

The Mercury Medical Disposable Colour-Coded Manometer provides healthcare professionals with a reliable, convenient, and hygienic solution for pressure monitoring during critical respiratory interventions, ensuring optimal patient care while maintaining infection control standards.`

function DisposableManometerPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableManometerPage
