import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

// Sourced from TruCorp's own TruALS Adult product page, not from a brochure —
// the Smart TruALS Adult sheet covers the sensor-equipped model only. Claims are
// limited to what TruCorp publishes for this model: no product code, dimensions
// or weight are asserted, since that page states none.
const description = `TruALS Adult is a full-body ALS and ACLS training manikin from TruCorp, built for advanced airway management, CPR, needle decompression, intraosseous access and drug administration. Its modular limbs assemble in under five minutes, and it is tested to withstand 80,000+ intubations and 250,000+ chest compressions.

This is the standard model, without CPR feedback. For real-time compression depth, rate and recoil feedback delivered wirelessly to the SmartRESUS app, together with a monitor bag for 3-lead ECG, SpO2, BP, ETCO2 and AED pads, see the Smart TruALS Adult.

**Procedure training**
• Advanced airway procedures including oral and nasal intubation, bag-mask ventilation, LMA and supraglottic device insertion, OPA and NPA insertion
• Cardiopulmonary resuscitation (CPR) with realistic compression depth, rate and recoil
• Needle decompression of a pneumothorax (2nd intercostal space midclavicular line and 4th/5th intercostal space anterior axillary line)
• Humeral and tibial intraosseous (IO) insertion with fluid flashback
• IV and IM drug administration
• Identification of stomach distension

**Anatomically accurate**
• Full-body adult manikin with modular limbs
• Tongue edema for difficult airway scenarios
• Visible lung isolation
• Visible stomach distension

**Delivered with**
• x1 TruALS Adult manikin supplied in components for quick assembly in under 5 minutes (right arm, left arm, right leg, left leg, torso)
• Humeral IO inserts (fluid and non-fluid varieties)
• Tibial IO inserts (fluid and non-fluid varieties)
• Arm IO skin pads
• Leg IO wrap-around skins
• Arm IM skin pad
• IV fluid management bag (1 litre)
• Training shorts
• TruCorp lubrication (100ml)
• ALS Adult carrier bag

**Training you can trust — 2 year promise**
TruCorp provide a 2 year warranty on the TruALS Adult as standard.`

function TruALSAdultPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default TruALSAdultPage
