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
      className={`block w-full border-2 border-primary rounded-xl hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] overflow-hidden group ${className}`}
    >
      <img 
        src='/shopee.png' 
        alt='Buy on Shopee' 
        className='w-full h-auto object-contain group-hover:opacity-90 transition-opacity'
      />
    </a>
  )
}

export default ShopeeButton
