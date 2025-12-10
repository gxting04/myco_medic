import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppFloat({ phone = '', message = '' }) {
  const phoneDigits = phone.replace(/[^\d]/g, '')
  const href = `https://wa.me/${phoneDigits || ''}?text=${encodeURIComponent(message || 'Hello, I would like to know more about your products.')}`
  
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='fixed bottom-8 right-8 z-50 bg-[#25D366] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out group'
      aria-label='Contact on WhatsApp'
    >
      <FaWhatsapp className='text-3xl group-hover:animate-pulse' />
    </a>
  )
}

export default WhatsAppFloat
