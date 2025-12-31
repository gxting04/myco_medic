import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function BodyWipesPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Great for - Nursing Care | Elderly | Bedridden | Bed Bound | Kid | Confinement

Gentle on skin and efficient in cleaning.

Used by ICU, CCU, Ward and HDU departments.

**Ready Bath Body Wipe/ Body Wash**

Ready Bath Body Wipe/ Body Wash - Nursing Care | Elderly | Bedridden | Bed Bound | Kid | Confinement | Postpartum period | No Water | No Rinsing | Microwaveable | Latex-Free | Alcohol-Free | Aloe Vera

**MYCO Ready Bath Features:**

• Cleans surface with smooth and gentle wash cloth material suitable for all skin types
• Made with a cotton material, friendly towards any skin surface
• Used by patients all across Malaysia that are bed ridden or in intensive care units
• Suitable for cleaning wound and skin
• Can be warmed using a microwave

**Package Contents:**
1 packet contains 10 disposable wash gloves

**Ingredients:**
Castor Oil, Poloxamer, Phenoxyaethanolum, Chlorhexidine, Glycerol, IPBC, Allantoin, Anhydrous Citric Acid, Aloe Vera.

**Features:**
• No Water Required
• No Rinsing Required
• Microwaveable
• Latex-Free
• Alcohol-Free
• Contains Aloe Vera`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BodyWipesPage

