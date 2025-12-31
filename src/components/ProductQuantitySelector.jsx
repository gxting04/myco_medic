import React from 'react'

function ProductQuantitySelector({ quantity, onDecrease, onIncrease, onChange }) {
  return (
    <div className='flex items-center gap-4'>
      <label className='text-gray-900 font-medium text-sm'>Quantity</label>
      <div className='flex items-center border border-gray-300'>
        <button
          onClick={onDecrease}
          className='px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700 font-medium'
        >
          −
        </button>
        <input
          type='number'
          value={quantity}
          onChange={onChange}
          className='w-16 text-center border-x border-gray-300 py-2 focus:outline-none focus:ring-0'
          min='1'
        />
        <button
          onClick={onIncrease}
          className='px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700 font-medium'
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductQuantitySelector

