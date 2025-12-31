import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: '3.5 Cuffed (ETT3525C)', value: 'ETT3525C' },
  { name: '4.0 Cuffed (ETT4025C)', value: 'ETT4025C' },
  { name: '4.5 Cuffed (ETT4525C)', value: 'ETT4525C' },
  { name: '5.0 Cuffed (ETT5025C)', value: 'ETT5025C' },
  { name: '5.5 Cuffed (ETT5525C)', value: 'ETT5525C' },
  { name: '6.0 Cuffed (ETT6025C)', value: 'ETT6025C' },
  { name: '6.5 Cuffed (ETT6525C)', value: 'ETT6525C' },
  { name: '7.0 Cuffed (ETT7025C)', value: 'ETT7025C' },
  { name: '7.5 Cuffed (ETT7525C)', value: 'ETT7525C' },
  { name: '8.0 Cuffed (ETT8025C)', value: 'ETT8025C' },
  { name: '8.5 Cuffed (ETT8525C)', value: 'ETT8525C' },
  { name: '9.0 Cuffed (ETT9025C)', value: 'ETT9025C' },
  { name: '9.5 Cuffed (ETT9525C)', value: 'ETT9525C' },
  { name: '3.5 Uncuffed (ETT3525)', value: 'ETT3525' },
  { name: '4.0 Uncuffed (ETT4025)', value: 'ETT4025' },
  { name: '4.5 Uncuffed (ETT4525)', value: 'ETT4525' },
  { name: '5.0 Uncuffed (ETT5025)', value: 'ETT5025' },
  { name: '5.5 Uncuffed (ETT5525)', value: 'ETT5525' },
  { name: '6.0 Uncuffed (ETT6025)', value: 'ETT6025' },
  { name: '6.5 Uncuffed (ETT6525)', value: 'ETT6525' },
  { name: '7.0 Uncuffed (ETT7025)', value: 'ETT7025' }
]

function BiteBlockSiliconeReinforcedEndotrachealTubePage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `Made of medical silicone material, non-toxic & non-stimulating, good biocompatibility.

**Product Features:**
• Bite block design can protect the teeth
• Steel wire reinforced tube can prevent biting & kinking
• High volume low pressure cuff reduces the pressure to trachea
• Accompanied with intubating stylet
• Package: 10pcs/box, 100pcs/carton

**Available Sizes:**

**Cuffed:**
• 3.5 – Reference NO#: ETT3525C
• 4.0 – Reference NO#: ETT4025C
• 4.5 – Reference NO#: ETT4525C
• 5.0 – Reference NO#: ETT5025C
• 5.5 – Reference NO#: ETT5525C
• 6.0 – Reference NO#: ETT6025C
• 6.5 – Reference NO#: ETT6525C
• 7.0 – Reference NO#: ETT7025C
• 7.5 – Reference NO#: ETT7525C
• 8.0 – Reference NO#: ETT8025C
• 8.5 – Reference NO#: ETT8525C
• 9.0 – Reference NO#: ETT9025C
• 9.5 – Reference NO#: ETT9525C

**Uncuffed:**
• 3.5 – Reference NO#: ETT3525
• 4.0 – Reference NO#: ETT4025
• 4.5 – Reference NO#: ETT4525
• 5.0 – Reference NO#: ETT5025
• 5.5 – Reference NO#: ETT5525
• 6.0 – Reference NO#: ETT6025
• 6.5 – Reference NO#: ETT6525
• 7.0 – Reference NO#: ETT7025`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default BiteBlockSiliconeReinforcedEndotrachealTubePage
