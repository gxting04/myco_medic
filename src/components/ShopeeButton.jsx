import React from 'react'

function ShopeeButton({ shopeeUrl, className = '' }) {
  if (!shopeeUrl) {
    return null // Don't render if no URL provided
  }

  return (
    <a 
      href={shopeeUrl}
      target='_blank'
      rel='noopener noreferrer'
      className={`block w-full bg-gradient-to-r from-[#EE4D2D] to-[#FF6B4A] text-white py-4 px-6 rounded-xl hover:from-[#FF6B4A] hover:to-[#EE4D2D] transition-all duration-200 font-semibold text-center shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 group ${className}`}
    >
      <img 
        src='/shopee.png' 
        alt='Shopee' 
        className='w-7 h-7 group-hover:scale-110 transition-transform object-contain'
      />
      <span className='text-lg'>Buy on Shopee</span>
      <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
      </svg>
    </a>
  )
}

export default ShopeeButton
