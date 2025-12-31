import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

function CatheterMountPage({ product }) {
  const enhancedProduct = {
    ...product,
    description:
      product?.description ||
      `Disposable Catheter Mount Double Swivel Elbow. Including standard and collapsible tube. Providing convenience for surgery or other clinical process. A variety of connectors for airway management options.

**Product Overview:**
• Disposable Catheter Mount Double Swivel Elbow
• Including standard and collapsible tube
• Providing convenience for surgery or other clinical process
• A variety of connectors for airway management options

**Key Features:**

**Double Swivel Design:**
Features a double swivel elbow design that provides maximum flexibility and ease of positioning during procedures.

**Versatile Options:**
Available with standard and collapsible tube configurations to suit different clinical requirements and patient needs.

**Multiple Connectors:**
Comes with a variety of connectors compatible with different airway management equipment and ventilation systems.

**Disposable Design:**
Single-use disposable design ensures optimal hygiene and eliminates the risk of cross-contamination between patients.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default CatheterMountPage
