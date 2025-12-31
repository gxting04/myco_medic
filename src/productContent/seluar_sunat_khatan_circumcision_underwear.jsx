import React from 'react'
import ProductDetailDefault from '@/components/ProductDetailDefault'

const SIZE_OPTIONS = [
  { name: 'XS (Age 0-2) - Waist: 18-22 inches', value: 'XS' },
  { name: 'S (Age 2-5) - Waist: 20-26 inches', value: 'S' },
  { name: 'M (Age 5-8) - Waist: 21-28 inches', value: 'M' },
  { name: 'L (Age 8-12) - Waist: 22-35 inches', value: 'L' },
  { name: 'XL (Age 12-15) - Waist: 23-37 inches', value: 'XL' },
  { name: 'XXL (>Age 15) - Waist: 26-40 inches', value: 'XXL' },
  { name: 'XXXL (>Age 15) - Waist: 30-52 inches', value: 'XXXL' }
]

function SeluarSunatKhatanCircumcisionUnderwearPage({ product }) {
  const enhancedProduct = {
    ...product,
    variants: {
      sizes: SIZE_OPTIONS
    },
    description:
      product?.description ||
      `POS SETIAP HARI

*FOR BULK ORDER, MAY CHAT US :-)

🌟Circumcision Underwear | Seluar Khatan Sunat - Comfort and Support After Circumcision!

**Sizes Available:** XS, S, M, L, XL, XXL, XXXL

Introducing our Circumcision Underwear, designed for optimal comfort and support during the recovery period after circumcision. Please note that all sizes are manually measured, providing a tailored fit for your post-circumcision needs. Our size chart serves as a helpful guide to ensure you find the perfect fit during this important time.

**✨ Key Features:**
• Soft, breathable fabric
• Gentle support for post-circumcision care
• Thoughtful design for maximum comfort

**📏 Size Guide:**

All sizes are manually measured to provide the best fit during the recovery process. Refer to our size chart for guidance, and rest assured that our team is here to assist you with any sizing inquiries.

**Size & Waist Measurement (Inches):**
• XS (Age 0-2): 18 - 22 inches
• S (Age 2-5): 20 - 26 inches
• M (Age 5-8): 21 - 28 inches
• L (Age 8-12): 22 - 35 inches
• XL (Age 12-15): 23 - 37 inches
• XXL (>Age 15): 26 - 40 inches
• XXXL (>Age 15): 30 - 52 inches

**🌈 Why Choose Us?**
• Specifically designed for post-circumcision comfort
• High-quality materials for a soft and gentle feel
• Thoughtful design to enhance your recovery experience

**⚠️ Important Notes:**
• Sizes are manually measured and provided as guidance only, ensuring a personalized fit during your recovery
• Variations may exist, but our team is dedicated to assisting you in finding the most comfortable size
• Colour will be given randomly
• Made of recycled cloth
• NOT VALID FOR RETURN OR EXCHANGE

**💌 Customer Satisfaction Guaranteed!**

Your comfort and satisfaction are our top priorities. If you have any questions or concerns, please don't hesitate to contact our dedicated customer service team.`
  }

  return <ProductDetailDefault product={enhancedProduct} />
}

export default SeluarSunatKhatanCircumcisionUnderwearPage

