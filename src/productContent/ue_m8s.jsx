import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Size: 8″ TFT LCD, 1024 × 768 px

**Shared Video Monitor**
UED-A, UED-C, and UED-D models utilize a shared video monitor, reducing overall costs and enhancing operational efficiency.

**High-Definition Imaging**
Provide true-to-life color views with data storage for comprehensive documentation.

**Enhanced Connectivity**
Easily connect to a larger monitor, ideal for clear operating views and effective training sessions.

**Advanced Recording**
Support snapshot and video recording with built-in storage, especially UE-M10S with 64G storage, which enhances documentation capability.`

function UeM8sPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default UeM8sPage
