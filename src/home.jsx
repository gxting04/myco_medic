import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import HospitalDemo from './components/HospitalDemo'
import Events from './components/Events'
import Partners from './components/Partners'
import Category from './components/Category'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from "./components/Footer"
import PageSEO from './components/PageSEO'
import { DEFAULT_DESCRIPTION, organizationJsonLd } from './utils/seo'

function Home() {
  return (
    <div>
      <PageSEO
        title="Medical Supplies & Equipment Malaysia"
        description={DEFAULT_DESCRIPTION}
        path="/"
        jsonLd={organizationJsonLd()}
      />
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      <Events />

      {/* Partners Section */}
      <Partners />

      {/* Category Section */}
      <Category />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat phone='+60123822001' message='Hi Myco Medic!' />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
