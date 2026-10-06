import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Heat and Moisture Exchanger Filter (HMEF) is a dual-function device that combines humidification and filtration capabilities in a single, compact unit. This essential breathing system component preserves patient airway moisture while providing protection against bacterial and viral contamination.

**Key Features:**
• Dual functionality – combines heat and moisture exchange with bacterial/viral filtration in one device
• Efficient humidification – preserves patient's natural airway moisture, reducing risk of mucosal drying
• High filtration efficiency – protects breathing system from contamination while filtering exhaled pathogens
• Low resistance design – minimizes work of breathing and maintains optimal ventilation parameters
• Lightweight and compact – reduces dead space and system weight
• Easy to use – simple installation between breathing circuit and patient connection

**Clinical Benefits:**
• Maintains airway humidity – prevents complications associated with dry gas delivery
• Infection control – filters both inspired and expired gases, protecting patients and equipment
• Cost-effective solution – eliminates need for separate humidifiers and filters
• Reduced maintenance – single device simplifies breathing system management

**Technical Specifications:**
• High filtration efficiency for bacteria and viruses
• Effective heat and moisture exchange performance
• Low resistance to airflow
• Compatible with standard breathing circuit connectors
• Single-patient-use disposable design

The HMEF Filter provides an efficient, cost-effective solution for maintaining optimal airway conditions while ensuring infection control in mechanical ventilation systems.`

function HMEFFilterPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default HMEFFilterPage
