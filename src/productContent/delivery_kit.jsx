import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Delivery Kit is a comprehensive, sterile disposable pack designed specifically for obstetric and delivery procedures. This essential kit provides healthcare professionals with all necessary sterile components needed for safe, effective delivery procedures.

**Key Features:**
• Complete delivery procedure kit – includes all necessary instruments and supplies
• Sterile packaging – ensures aseptic technique during delivery procedures
• Single-patient-use design – eliminates cross-contamination risks
• Standard components – universally compatible equipment
• Convenient packaging – easy to store and access
• Professional quality – meets medical standards for delivery procedures

**Components:**
• 2 X SPENCER WELLS ARTERY FORCEPS 13CM
• 1 X MAYO SCISSOR STRAIGHT 18CM
• 1 X UMBILICAL CORD SCISSOR 10CM
• 2 X CORD CLAMP GATED
• 5 X GAUZE SWABS 10 X 10CM
• 1 X TROLLEY COVER 112 X112 CM
• 1 X POLYPROPYLENE TRAY WITH 2 INTEGRATED POTS
• 1 X DRAPE 50 X 50CM

**Applications:**
• Obstetric delivery procedures
• Cesarean section procedures
• Delivery room settings
• Maternity wards
• Emergency delivery situations
• General obstetric care

The Delivery Kit streamlines delivery procedures by providing a complete, ready-to-use sterile pack that ensures efficiency, safety, and convenience for healthcare providers and patients during one of the most important moments in healthcare.`

function DeliveryKitPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DeliveryKitPage
