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

      {/*
        The homepage had no <h1> at all: the hero's headline is baked into the
        banner PNGs, so crawlers and screen readers saw an untitled page. The
        banners already carry their own wording, and overlaying live text would
        collide with it, so the heading is exposed to assistive tech and search
        only. Replacing the baked-in banner text with real markup is the better
        long-term fix.
      */}
      <h1 className="sr-only">
        Myco Medic — Medical Supplies &amp; Equipment Distributor in Malaysia
      </h1>

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
