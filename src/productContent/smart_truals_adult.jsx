import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `Smart TruALS Adult is a full-body Advanced Life Support manikin with integrated smart sensor technology, designed for intensive ALS and ACLS training. Trainees can practice advanced airway management, CPR, needle decompression, intraosseous access, intravenous and intramuscular administration, with real-time performance data delivered wirelessly to the SmartRESUS app. Featuring a comprehensive monitor bag, cardiac training tools, palpable carotid and femoral pulses, tongue edema, visible lung isolation and anatomically correct landmarks, Smart TruALS Adult delivers high-fidelity simulation for clinical and prehospital training environments.

**Procedure training**
• Advanced airway management including oral and nasal intubation, oropharyngeal (OPA) and nasopharyngeal (NPA) airway insertion, bag-mask ventilation, Laryngeal Mask Airway (LMA) and supraglottic device insertion
• Airway maneuvers including head tilt/chin lift and jaw thrust
• CPR with depth, rate and recoil via the SmartRESUS app
• Identification of stomach distension
• Needle decompression of a pneumothorax (2nd, 4th, 5th intercostal space)
• Humeral and tibial intraosseous insertion
• IV (median cubital vein) and IM (humeral) drug administration
• 12-lead ECG placement and cardiac rhythm training
• AED and defibrillation training
• Cardiac pacing

**Ideal for training**
• Paramedics and EMTs
• Emergency medicine physicians
• Anesthesiologists and critical care providers
• ALS and ACLS instructors and course facilitators
• Military medics
• ICU nurses and advanced healthcare providers
• Medical students and residents in emergency care
• Prehospital care practitioners

**Advanced ALS and ACLS training capabilities**
• Advanced airway management including intubation and bag-mask ventilation
• CPR training with realistic compression depth, rate and recoil
• Visible left and right lung isolation during chest rise
• Visible stomach distension through the torso skin
• Needle decompression at the 2nd intercostal space midclavicular line and 4th/5th intercostal space anterior axillary line, in line with current ALS and ACLS guidelines
• Patent pending humeral and tibial intraosseous insertion with anatomically correct landmarks. Fluid-filled inserts give realistic blood flashback to confirm correct needle placement.

**Anatomically accurate**
• Realistic size appearance of an adult male
• Fully articulated joints replicating human range of motion
• Palpable carotid pulse on the left jugular and right femoral pulse
• Simulate difficult airway scenarios with optional tongue edema

**Cardiac and monitoring**
• Monitor bag with leads for 3-lead ECG, SpO2, BP, ETCO2 and AED pads
• AED pads and ECG pads can be applied and removed up to 100 times
• Cardiac pacing and defibrillation training
• Velcro tablet mounting system included

**SmartRESUS app**
• CPR feedback via live dials: compression depth, rate, recoil and hand positioning displayed as visual indicators
• Real-time visual airflow feedback for left and right lungs displayed as a live volume bar
• Controllable neck and femoral pulse
• Compatible with mechanical ventilators
• Image library with chest X-ray, ultrasound and ECG results
• Real-time CPR performance tracking
• Wireless connectivity with real-time sensor data
• Compatible with Android and iOS

**Versatility**
• Modular design with interchangeable limbs for quick replacement
• Interchangeable consumables including IO inserts (patent pending)

**Team training ready**
• Ideal for practicing communication, role allocation and decision-making under pressure
• Supports multi-responder ALS and ACLS scenarios in clinical and prehospital environments

**Portable and ready to use**
• Supplied in a wheeled carry case for easy transportation and safe storage
• Powered via AC mains adapter or DC power bank

**Training you can trust — 1 year promise**
TruCorp are so confident in the quality and durability of their products that they provide a 1 year warranty on the Smart TruALS Adult.`

const sizeGuide = `**Dimensions and weight**
• Dimensions: 113 x 57 x 60 cm
• Weight: 50 kg
• Patient profile: adult male
• Product code: ALSAS01`

function SmartTruALSAdultPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description, sizeGuide }} />
}

export default SmartTruALSAdultPage
