import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Partners from './components/Partners'
import Category from './components/Category'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from "./components/Footer"

function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Partners Section */}
      <Partners />

      {/* Category Section */}
      <Category />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat phone='+60196649622' message='Hi Myco Medic!' />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
