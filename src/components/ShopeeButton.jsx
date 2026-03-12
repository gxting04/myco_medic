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
      className={`block w-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] group ${className}`}
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
