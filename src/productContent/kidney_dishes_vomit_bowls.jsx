import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Kidney Dishes & Vomit Bowls are specialized containers designed for collecting vomit, secretions, and waste materials during medical procedures and patient care. These kidney-shaped bowls provide convenient containment for various materials.

**Key Features:**
• Kidney-shaped design – ergonomic shape facilitates collection
• Vomit and secretion collection – designed for collecting waste materials
• Easy to handle – convenient size for clinical use
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning
• Multiple sizes available – accommodates various clinical needs

**Clinical Applications:**
• Vomit collection during procedures
• Secretion collection
• Patient care activities
• Operating room procedures
• Waste material containment
• Clinical procedure support

**Clinical Benefits:**
• Efficient collection – kidney shape facilitates material collection
• Organized workflow – facilitates efficient procedure organization
• Easy to use – convenient size for clinical handling
• Durable design – withstands repeated clinical use

**Technical Specifications:**
• Kidney-shaped design
• Durable construction material
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard clinical procedures

The Kidney Dishes & Vomit Bowls provide healthcare professionals with convenient containers for collecting vomit and secretions during medical procedures, ensuring efficient workflow and patient care.`

function KidneyDishesVomitBowlsPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default KidneyDishesVomitBowlsPage
