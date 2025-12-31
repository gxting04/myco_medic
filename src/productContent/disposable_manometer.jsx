import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function DisposableManometerPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `The Mercury Medical Disposable Pressure Manometer is the first disposable manometer to reliably monitor BOTH proper inflation pressure and PEEP pressure during manual ventilation with Mercury's CPR and Hyperinflation Systems. And now the Mercury Medical Disposable Pressure Manometer is available with a colour-coded label for improved visibility of pressure ranges.

The Mercury Medical Disposable Colour-Coded Manometer allows for in-line monitoring of BOTH airway pressure and PEEP pressures, when used in conjunction with Mercury's CPR resuscitation bags.

The Mercury Medical Disposable Colour-Coded Manometer is ready when you need a manometer so you don't need to search or deal with a broken reusable manometer again!

**Only the Mercury Medical Colour-Coded Manometer offers all the following:**
• New colour-coding for improved visibility of pressure ranges
• In-line use attaches directly onto CPR and hyperinflation resuscitation bags reducing the need to look away from the patient while monitoring pressure
• Monitoring of BOTH airway and PEEP pressures
• Disposable feature to address potential infection control issues and eliminate search for misplaced or broken reusable devices
• Latex-Free
• Accuracy of ± 3 cm H2O up to 15 cm H2O
• Accuracy of ± 5 cm H2O over 15 cm H2O`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default DisposableManometerPage
