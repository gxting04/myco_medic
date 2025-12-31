import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: '5Fr (EBT0205)', value: 'EBT0205' },
  { name: '7Fr (EBT0207)', value: 'EBT0207' },
  { name: '9Fr (EBT0209)', value: 'EBT0209' }
]

function AutoInflationEndobronchialBlockerTubePage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `Unique automatic inflation system enables the operator to inflate the cuff with one hand and operate bronchi fiberscope simultaneously.

**Product Features:**
• Endobronchial Blocker Set allows one-lung ventilation by using a conventional endotracheal tube and a fiberoptic bronchoscope
• No need to replace trachea tubes
• The stability of cuff balloon's internal pressure is better than any other products, and the low pressure cuffs minimize trauma
• Package: 1 set/box, 10 sets/carton

**Available Sizes:**
• 5Fr – Reference NO#: EBT0205
• 7Fr – Reference NO#: EBT0207
• 9Fr – Reference NO#: EBT0209`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default AutoInflationEndobronchialBlockerTubePage
