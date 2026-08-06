import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The TruBaby X Lite is incredibly lifelike, with the appearance, weight, size and movement of a 50th percentile 5-month old infant. This model is ideal for nurses and various other pediatric medical professionals practicing Directly Observed Practical Skills (DOPS) and Paediatric Basic Life Support (PBLS).

**Why purchase this model**
• Realistic anatomy — appearance, weight, size and movement of a 50th percentile 5-month old infant
• Versatile training — practice a range of nursing procedures including the new and improved IV cannulation in the hand, arm and foot, or urethral catheterization
• Durable and cost-effective — all parts are cost effective and can be replaced quickly when required, and initial set-up takes under 5 minutes
• Certified to practice 80,000+ intubation cycles without fail, supported by a 2 year warranty
• Portable — delivered in a durable carry case for easy transportation and safe storage

**Ideal for training**
• Airway management techniques (oral and nasal)
• Peripheral venous cannulation (hand, arm and foot)
• IO tibia
• Intramuscular injection
• Urethral catheterization (male and female)
• Cardiopulmonary resuscitation (CPR)

**Features and benefits**
• IO tibia — realistic resistance when penetrating the medullary cavity, with a single use insert that gives each learner a lifelike training experience
• Urethral catheterization — interchangeable male and female inserts to practice both gender techniques, and fluid flows from the catheter upon successful entry
• CPR — the full recommended depth of 1.5 inches can be achieved, with full chest re-coil

**Delivered with additional consumables**
• x4 sets of IO inserts
• x1 male genitalia insert (female insert attached when delivered)
• x1 bottle of TruCorp lubrication (100ml)
• x1 bottle of artificial blood concentrate (250ml)

**Training you can trust — 2 year promise**
TruCorp are so confident in the quality and durability of their products that they provide a 2 year warranty on the TruBaby X Lite.`

const sizeGuide = `**Dimensions and weight**
• Dimensions: 79 x 46 x 28 cm
• Weight: 8.5 kg
• Patient profile: 50th percentile 5-month old infant
• Product code: TBL10001X`

function TruBabyXLitePage({ product }) {
  return <ProductDetailDefault product={{ ...product, description, sizeGuide }} />
}

export default TruBabyXLitePage
