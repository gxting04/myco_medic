import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Oropharyngeal Airway is a curved device inserted into the mouth to prevent tongue obstruction and maintain airway patency in unconscious or semi-conscious patients. This essential airway adjunct is used in emergency situations and during anesthesia to ensure unobstructed breathing.

**Key Features:**
• Curved design – follows natural oral and pharyngeal anatomy
• Flange design – prevents over-insertion and provides secure positioning
• Multiple sizes available – accommodates pediatric through adult patients
• Smooth surface – reduces risk of oral trauma during insertion
• Disposable and reusable options – accommodates various clinical preferences
• Standard connector – universal 15mm connector compatible with breathing circuits

**Clinical Applications:**
• Emergency airway management in unconscious patients
• Cardiopulmonary resuscitation (CPR)
• Pre-intubation airway preparation
• Patients with reduced consciousness
• Temporary airway support during procedures

**Clinical Benefits:**
• Prevents tongue obstruction – maintains clear airway passage
• Easy insertion – can be placed quickly by trained healthcare providers
• Non-invasive – less traumatic than endotracheal intubation
• Cost-effective – affordable solution for basic airway management

**Technical Specifications:**
• Curved anatomical design
• Flange for secure positioning
• Standard 15mm connector
• Available in multiple sizes
• Smooth, atraumatic surface

The Oropharyngeal Airway is a fundamental airway management device, providing healthcare professionals with a simple, effective solution for maintaining airway patency in unconscious or semi-conscious patients.`

function OropharyngealAirwayPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default OropharyngealAirwayPage
