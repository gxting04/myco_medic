import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Size: 3″ TFT LCD, 720 × 480 px

**Features**
• Touch-screen, Wi-Fi-ready, playback function, auto-shutdown

**Shared Video Monitor**
UED-A, UED-C, and UED-D models utilize a shared video monitor, reducing overall costs and enhancing operational efficiency.

**High-Definition Imaging**
Provide true-to-life color views with data storage for comprehensive documentation.

**Enhanced Connectivity**
Easily connect to a larger monitor, ideal for clear operating views and effective training sessions.

**Advanced Recording**
Support snapshot and video recording with built-in storage, especially UE-M10S with 64G storage, which enhances documentation capability.`

function UedM3sPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default UedM3sPage
