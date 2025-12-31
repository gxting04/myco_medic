import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'Anesthesia Circuits(M) - BTM0112E (0.43m/1.2m)', value: 'BTM0112E' },
  { name: 'Anesthesia Circuits(M) - BTM0115E (0.54m/1.5m)', value: 'BTM0115E' },
  { name: 'Anesthesia Circuits(M) - BTM0115C (0.54m/1.5m)', value: 'BTM0115C' },
  { name: 'Anesthesia Circuits(M) - BTM0118C (0.65m/1.8m)', value: 'BTM0118C' },
  { name: 'Anesthesia Circuits(M) - BTM0212E (1.2m)', value: 'BTM0212E' },
  { name: 'Anesthesia Circuits(M) - BTM0215E (1.5m)', value: 'BTM0215E' },
  { name: 'Anesthesia Circuits(M) - BTM0215C (1.5m)', value: 'BTM0215C' },
  { name: 'Anesthesia Circuits(M) - BTM0218C (1.8m)', value: 'BTM0218C' },
  { name: 'Breathing Circuits(H) - BTH0212E (1.2m)', value: 'BTH0212E' },
  { name: 'Breathing Circuits(H) - BTH0215E (1.5m)', value: 'BTH0215E' },
  { name: 'Breathing Circuits(H) - BTH0215C (1.5m)', value: 'BTH0215C' },
  { name: 'Breathing Circuits(H) - BTH0218C (1.8m)', value: 'BTH0218C' }
]

function BreathingCircuitsPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `Circuits for breathing machine (with water traps, pediatric & adult). Circuits for anesthesia machine (1.2m, 1.5m, 1.8m, expandable & unexpandable, pediatric & adult). All of our circuits are made with only premium-quality materials and have proven reliable during use.

**Product Overview:**
• Circuits for breathing machine (with water traps, pediatric & adult)
• Circuits for anesthesia machine (1.2m, 1.5m, 1.8m, expandable & unexpandable, pediatric & adult)
• All of our circuits are made with only premium-quality materials and have proven reliable during use

**Available Options:**

**Anesthesia Circuits:**
Available in multiple lengths (1.2m, 1.5m, 1.8m) with both expandable and unexpandable options for pediatric and adult use.
• Expandable: 0.43m to 1.8m
• Fixed lengths: 1.2m, 1.5m, 1.8m

**Breathing Circuits:**
High-quality circuits with water traps, designed for breathing machines in pediatric and adult applications.
• With water traps included
• Fixed lengths: 1.2m, 1.5m, 1.8m

**Product Specifications:**
See size options above for complete reference numbers and length specifications.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BreathingCircuitsPage
