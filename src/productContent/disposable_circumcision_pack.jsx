import React from 'react'
import ProductDetailDefault from '../components/ProductDetailDefault'

const description = `The Disposable Circumcision Pack provides a complete, sterile package containing all essential components for circumcision procedures. This convenient kit ensures healthcare professionals have immediate access to all necessary instruments and materials for safe, effective circumcision surgery.

**Key Features:**
• Complete kit – includes surgical instruments, drapes, gauze, and essential components
• Sterile packaging – ensures aseptic technique during procedures
• Single-patient-use design – eliminates infection control concerns
• Standard components – universally compatible instruments
• Convenient packaging – easy to store and access
• Pediatric and adult options – accommodates various patient populations

**Kit Contents:**
1x Adson Forceps 12cm, Toothed
1x Adson Forceps 13cm, Non-Toothed
1x Kilner Needle Holder 13.5cm
1x Iris Scissors Straight 11cm
1x Rampley Sponge Holding Forceps 18cm
1x Strabismus Dressing Scissors Straight 11cm
4x Mosquito Artery Forceps Curve 13cm
1x Tray Polypropene + 2 Gallipot Section
1x Fenestrated Drape 60cm x 60cm (10ml)
1x Adhesive Small Yellow Bag
1x Folded Dressing Towel (43cm x 38cm)
5x Plain Gauze Swabs (7.5cm x 7.5cm x 8ply)
1x Kocher Forcep Straight 7 Inch
1x Azo Resist Green 90cm x 90cm - sterile field

**Clinical Applications:**
• Elective circumcision procedures
• Medical circumcision
• Religious circumcision ceremonies
• Pediatric and adult circumcision
• Outpatient surgical procedures

**Clinical Benefits:**
• Time-saving – all components in one package
• Infection control – sterile, single-patient-use design
• Convenience – eliminates need to gather individual components
• Standardization – ensures consistent equipment availability

**Technical Specifications:**
• Sterile, single-patient-use packaging
• Standard surgical instruments
• Compatible with standard circumcision techniques
• Available in various sizes

The Disposable Circumcision Pack provides healthcare professionals with a convenient, complete solution for circumcision procedures, ensuring all necessary components are readily available for successful surgery.`

function DisposableCircumcisionPackPage({ product }) {
  return <ProductDetailDefault product={{ ...product, description }} />
}

export default DisposableCircumcisionPackPage
