import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const DESCRIPTION_FLEXIBLE_VIDEOSCOPE = `Applying CMOS technology provides more durability and high-resolution images; 32GB storage can enhance documentation capability.
Display can be vertically and horizontally rotated 180°, providing multiple angle observations.
Extra-long depth of field 3–100mm coverage.
Built-in cold light source for optimal visibility.
Equipped with built-in lithium battery, allowing portable operation and supporting photo taking and video recording.`

const DESCRIPTION_VIDEO_LARYNGEAL_MASK = `Revolutionary visualization technology provides real-time monitoring that facilitates safe and comfortable airway management.
With characteristics of 2nd generation supraglottic devices.
Optimal product structure can improve the glottis alignment accuracy and facilitate safe intubation.`

const DESCRIPTION_AIRWAY_WORKSTATION = `- Offer flexibility: all-in-one system offers quick access to the visual tools during airway procedure, configured with new trolley to improve efficiency and enhance visualization; supports battery use for over hours, as well as AC power supply.
- Configured with 10.1" HD touchscreen monitor. Support multi-product combination uses, maximum 4 split-screen display, providing access to more comprehensive airway management information.
- Featuring data management, process traceability, and wireless fast connection. The monitor includes 64GB of storage and supports real-time data collection and storage, allowing the entire anesthesia airway management process to be traced.`

const DESCRIPTION_TDC_SHARED = `Designed to reduce the risk of cross-infection for safer procedures.
Features a portable 2.7" display with 130° vertical and 270° horizontal rotation, allowing for efficient one-hand operation.
Anti-fog coated blades ensure clear and timely visuals.`

const DESCRIPTION_TDC_K_ONLY = `TDC-K series with additional key for snapshot and video recording, with 32GB of documentation capability.`

const DESCRIPTION_TDC_K = `${DESCRIPTION_TDC_SHARED}
${DESCRIPTION_TDC_K_ONLY}`

const DESCRIPTION_TDC_C = DESCRIPTION_TDC_SHARED

function withDefaultDescription(product, fallback) {
  return { ...product, description: product?.description || fallback }
}

export function FlexibleVideoscopePage({ product }) {
  return <ProductDetailDefault product={withDefaultDescription(product, DESCRIPTION_FLEXIBLE_VIDEOSCOPE)} />
}

export function UEScopeVideoLaryngealMaskPage({ product }) {
  return <ProductDetailDefault product={withDefaultDescription(product, DESCRIPTION_VIDEO_LARYNGEAL_MASK)} />
}

export function AirwayWorkstationPage({ product }) {
  return <ProductDetailDefault product={withDefaultDescription(product, DESCRIPTION_AIRWAY_WORKSTATION)} />
}

export function VideoLaryngoscopeTdcKPage({ product }) {
  return <ProductDetailDefault product={withDefaultDescription(product, DESCRIPTION_TDC_K)} />
}

export function VideoLaryngoscopeTdcCPage({ product }) {
  return <ProductDetailDefault product={withDefaultDescription(product, DESCRIPTION_TDC_C)} />
}
