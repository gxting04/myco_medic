import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

// Combine size and type options
const SIZE_OPTIONS = [
  { name: '1001*PER', value: '1001-PER' },
  { name: '1001*MESH', value: '1001-MESH' },
  { name: '1002*PER', value: '1002-PER' },
  { name: '1002*MESH', value: '1002-MESH' },
  { name: '1003*PER', value: '1003-PER' },
  { name: '1003*MESH', value: '1003-MESH' },
  { name: '1004*PER', value: '1004-PER' },
  { name: '1004*MESH', value: '1004-MESH' },
  { name: '1005*PER', value: '1005-PER' },
  { name: '1005*MESH', value: '1005-MESH' },
  { name: '1006*PER', value: '1006-PER' },
  { name: '1006*MESH', value: '1006-MESH' },
  { name: '1007*PER', value: '1007-PER' },
  { name: '1007*MESH', value: '1007-MESH' },
  { name: '1008*PER', value: '1008-PER' },
  { name: '1008*MESH', value: '1008-MESH' },
  { name: '1009*PER', value: '1009-PER' },
  { name: '1009*MESH', value: '1009-MESH' },
  { name: '1010*PER', value: '1010-PER' },
  { name: '1010*MESH', value: '1010-MESH' },
  { name: '1011*PER', value: '1011-PER' },
  { name: '1011*MESH', value: '1011-MESH' },
  { name: '1012*PER', value: '1012-PER' },
  { name: '1012*MESH', value: '1012-MESH' }
]

function StainlessSteelDinsPage({ product }) {
  const enhancedProduct = {
      ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description: product.description || `Our stainless steel range of DINS are a quality product available as a Flat Base Basket with Perforated Sides or Full Wire Mesh Baskets. Manufactured to DIN 58952 standard using 304 Stainless Steel.

**Product Specifications:**
• Manufactured to DIN 58952 standard
• 304 Stainless Steel construction
• Electro-Polished finish
• Burr Free edges
• Spot-welded at cross points
• Cross-hatched flat mesh base
• 2 inner mounted drop down handles

**Basket Types:**

*PER - Flat Base Basket with Perforated Sides
• Prevents finer, delicate instruments from slipping through

*MESH - Full Wire Mesh Basket
• Complete wire mesh design for maximum ventilation

**Available Sizes:**

1001*PER / 1001*MESH | 1002*PER / 1002*MESH | 1003*PER / 1003*MESH | 1004*PER / 1004*MESH | 1005*PER / 1005*MESH | 1006*PER / 1006*MESH | 1007*PER / 1007*MESH | 1008*PER / 1008*MESH | 1009*PER / 1009*MESH | 1010*PER / 1010*MESH | 1011*PER / 1011*MESH | 1012*PER / 1012*MESH`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default StainlessSteelDinsPage
