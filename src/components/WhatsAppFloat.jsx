import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY, whatsappLink } from '@/lib/site'

/**
 * Bottom-right floating actions: WhatsApp chat, plus a back-to-top button
 * that appears once the visitor has scrolled a screen or so.
 */
function WhatsAppFloat({ phone = COMPANY.whatsapp, message = 'Hi Myco Medic!' }) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed bottom-4 right-4 z-[90] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md transition-all duration-300 hover:text-gray-900 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <a
        href={whatsappLink(message, phone)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  )
}

export default WhatsAppFloat
