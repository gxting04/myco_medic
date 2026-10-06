import React from 'react'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Category from './components/Category'
import FeaturedReadyStock from './components/FeaturedReadyStock'
import AboutUs from './components/AboutUs'
import VideoShowcase from './components/VideoShowcase'
import Events from './components/Events'
import CtaBand from './components/CtaBand'
import PageSEO from './components/PageSEO'
import { DEFAULT_DESCRIPTION, organizationJsonLd } from './utils/seo'

function Home() {
  return (
    <>
      <PageSEO title="Medical Supplies & Equipment Malaysia" description={DEFAULT_DESCRIPTION} path="/" jsonLd={organizationJsonLd()} />
      <Hero />
      <Partners />
      <Category />
      <FeaturedReadyStock />
      <AboutUs />
      <VideoShowcase />
      <Events />
      <CtaBand />
    </>
  )
}

export default Home
