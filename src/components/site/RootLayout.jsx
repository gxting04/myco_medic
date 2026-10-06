import React from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import SearchPalette from './SearchPalette'
import QuoteDrawer, { QuoteToast } from './QuoteDrawer'
import { CAREERS } from '@/lib/site'

/**
 * Shared chrome for every route. Pages used to mount their own header and
 * footer, and nothing reset the scroll position, so opening a product from
 * the bottom of a list landed you at the bottom of the product page.
 */
function RootLayout() {
  const { pathname } = useLocation()
  // The internship page lists its own contact (the main sales line), so only /career switches.
  const careers = pathname === '/career'

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat
        phone={careers ? CAREERS.whatsapp : undefined}
        message={careers ? "Hi, I'd like to ask about career opportunities at Myco Medic." : undefined}
      />
      <SearchPalette />
      <QuoteDrawer />
      <QuoteToast />
      {/* Per-history-entry: new links start at the top, Back restores the old position.
          Catalogue filter changes pass preventScrollReset so they stay put. */}
      <ScrollRestoration />
    </div>
  )
}

export default RootLayout
