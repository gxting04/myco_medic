import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disinfection Tanks are specialized containers designed for holding and containing disinfection solutions during medical device reprocessing and sterilization procedures. These tanks provide a safe, organized solution for managing disinfection processes in clinical settings.

**Key Features:**
• Disinfection solution containment – safely holds disinfection solutions
• Durable construction – designed for repeated clinical use
• Easy to clean – smooth surfaces facilitate cleaning and maintenance
• Multiple sizes available – accommodates various disinfection needs
• Chemical resistance – resistant to disinfection chemicals
• Organized workflow – facilitates efficient disinfection processes

**Clinical Applications:**
• Medical device disinfection
• Instrument reprocessing
• Central sterile supply departments
• Operating room instrument care
• Device sterilization procedures
• Infection control protocols

**Clinical Benefits:**
• Safe containment – safely holds disinfection solutions
• Organized workflow – facilitates efficient disinfection processes
• Durable design – withstands repeated clinical use
• Chemical resistance – compatible with various disinfection solutions

**Technical Specifications:**
• Durable construction material
• Chemical-resistant design
• Multiple sizes available
• Easy-to-clean surfaces
• Compatible with standard disinfection protocols

The Disinfection Tanks provide healthcare professionals with safe, organized containers for disinfection processes, ensuring effective medical device reprocessing and infection control.`

function DisinfectionTanksPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisinfectionTanksPage
