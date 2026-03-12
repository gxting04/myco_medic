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
      className={`block w-full border-2 border-primary text-primary py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-center shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-3 group ${className}`}
    >
      <img 
        src='/shopee.png' 
        alt='Shopee' 
        className='w-6 h-6 group-hover:scale-110 transition-transform object-contain'
      />
      Buy on Shopee
    </a>
  )
}

export default ShopeeButton
