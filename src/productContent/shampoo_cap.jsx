import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function ShampooCapPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Great for - Nursing Care | Elderly | Bedridden | Bed Bound | Kid | Confinement

Gentle on skin and efficient in cleaning.

Used by ICU, CCU, Ward and HDU departments.

**INGREDIENTS:**

Water, TEA Lauryl Sulphate, Phenopip, Diazolidinyl Urea, Cocoamide DEA, Propylene Glycol, Fragrance, Citric Acid.

**DIRECTIONS FOR USE:**

• Massage hair through shampoo cap for 2-3 minutes
• Remove the cap, dry hair and style as usual
• There is no need to wash off the shampoo
• Can be used at room temperature or heated in microwave for maximum of 45 seconds at 800W
• Check the temperature before use

**Ready Bath Body Wipe/ Body Wash**

Ready Bath features:
• Cleans surface with smooth and gentle wash cloth material suitable for all skin types
• Made with a cotton material, friendly towards any skin surface
• Used by patients all across Malaysia that are bed ridden or in intensive care units
• Suitable for cleaning wound and skin
• Can be warmed using a microwave

**Package Contents:**
1 packet contains 10 disposable wash gloves

**Ingredients:** Castor Oil, Poloxamer, Phenoxyaethanolum, Chlorhexidine, Glycerol, IPBC, Allantoin, Anhydrous Citric Acid, Aloe Vera.

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

export default ShampooCapPage

