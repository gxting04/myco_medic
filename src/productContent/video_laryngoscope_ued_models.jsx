import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const DESCRIPTION_UEDA = `Fully cover disposable blade reduces contamination risks, ensuring safer procedures.
Handle with IPX7 water resistance supports immersion disinfection.
Advanced imaging technology combined with an ergonomic blade design offers ease of use for any healthcare professional.
Ideally suited for pre-hospital and emergency scenarios, eliminating the need for complex transportation and reprocessing procedure, streamlining urgent care.`

const DESCRIPTION_UEDC = `Crafted from sturdy plastic materials, ensuring reliable performance in critical situations.
Handle with IPX7 water resistance supports immersion disinfection.
Features hot-swappable function for quick and seamless transitions during procedures.
Six different handles with disposable blades, tailored to various patient anatomies, providing optimal intubation for pediatric, adult, and obese patients.`

const DESCRIPTION_UEDD = `One piece design of the disposable blade can avoid cross-contamination, no need for disinfection ensuring a ready-to-use device.
Features hot-swappable function for faster, more efficient changes during procedures.
Grab and go for anesthesiology department, ER, EMS, etc., suitable for patients of different ages and difficult airways.`

export function VideoLaryngoscopeUedaPage({ product }) {
  return (
    <ProductDetailDefault
      product={{ ...product, description: product?.description || DESCRIPTION_UEDA }}
    />
  )
}

export function VideoLaryngoscopeUedcPage({ product }) {
  return (
    <ProductDetailDefault
      product={{ ...product, description: product?.description || DESCRIPTION_UEDC }}
    />
  )
}

export function VideoLaryngoscopeUeddPage({ product }) {
  return (
    <ProductDetailDefault
      product={{ ...product, description: product?.description || DESCRIPTION_UEDD }}
    />
  )
}
