import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedReadyStock from './components/FeaturedReadyStock'
import AboutUs from './components/AboutUs'
import VideoShowcase from './components/VideoShowcase'
import HospitalDemo from './components/HospitalDemo'
import Events from './components/Events'
import Partners from './components/Partners'
import Category from './components/Category'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from "./components/Footer"
import PageSEO from './components/PageSEO'
import { ScrollProgress } from './lib/motion'
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
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Promoted ready-stock line */}
      <FeaturedReadyStock />

      {/* About Us Section */}
      <AboutUs />

      {/* Marketing Video Section */}
      <VideoShowcase />

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
