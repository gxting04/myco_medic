import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Thyroid Gland Positioning Pads are specialized positioning devices designed specifically for thyroid surgery procedures. These pads provide optimal head and neck positioning to facilitate surgical access to the thyroid gland while ensuring patient comfort.

**Key Features:**
• Thyroid-specific design – optimized for thyroid surgery procedures
• Head and neck positioning – provides optimal positioning for thyroid access
• Comfortable padding – soft material provides patient comfort
• Surgical access – allows optimal access to thyroid area
• Pressure relief – reduces risk of head and neck pressure injuries
• Easy to use – simple setup and adjustment

**Clinical Applications:**
• Thyroid surgery procedures
• Thyroidectomy procedures
• Head and neck surgery positioning
• Endocrine surgery
• Neck surgery procedures
• Thyroid examination positioning

**Clinical Benefits:**
• Optimal positioning – provides ideal positioning for thyroid access
• Surgical access – allows optimal access to thyroid area
• Patient comfort – comfortable padding reduces discomfort
• Pressure relief – reduces risk of pressure injuries

**Technical Specifications:**
• Thyroid-specific positioning design
• Soft padding material
• Secure positioning system
• Compatible with thyroid surgical procedures
• Available in various sizes

The Thyroid Gland Positioning Pads provide healthcare professionals with specialized support for thyroid procedures, ensuring optimal head and neck positioning and surgical access.`

function ThyroidGlandPositioningPadsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default ThyroidGlandPositioningPadsPage
