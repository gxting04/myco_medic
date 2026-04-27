import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Size: 10.1″ TFT LCD, 1920 × 1200 px

**Features**
• Touch-screen, Wi-Fi-ready, playback function, auto-shutdown

**Shared Video Monitor**
UED-A, UED-C, and UED-D models utilize a shared video monitor, reducing overall costs and enhancing operational efficiency.

**High-Definition Imaging**
Provide true-to-life color views with data storage for comprehensive documentation.

**Enhanced Connectivity**
Easily connect to a larger monitor, ideal for clear operating views and effective training sessions.

**Advanced Recording**
Support snapshot and video recording with built-in storage. UE-M10S includes 64G storage to enhance documentation capability.`

function UeM10sPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default UeM10sPage
