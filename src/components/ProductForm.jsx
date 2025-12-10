import React, { useState } from 'react'
import { Button } from './ui/button'

function ProductForm({ onAdd }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [pageId, setPageId] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !category || !price) return
    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      image: image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      ...(pageId ? { pageId } : {})
    }
    onAdd?.(newProduct)
    setName('')
    setCategory('')
    setPrice('')
    setImage('')
    setPageId('')
  }

  return (
    <form onSubmit={handleSubmit} className='border rounded-xl p-4 flex flex-col gap-3'>
      <h3 className='font-semibold text-lg'>Add Product</h3>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder='Product name' className='border rounded-md p-2'/>
      <input value={category} onChange={e=>setCategory(e.target.value)} placeholder='Category' className='border rounded-md p-2'/>
      <input value={price} onChange={e=>setPrice(e.target.value)} placeholder='Price' type='number' step='0.01' className='border rounded-md p-2'/>
      <input value={image} onChange={e=>setImage(e.target.value)} placeholder='Image URL (optional)' className='border rounded-md p-2'/>
      <input value={pageId} onChange={e=>setPageId(e.target.value)} placeholder='Custom page ID (optional)' className='border rounded-md p-2'/>
      <Button type='submit' className='self-start'>Add</Button>
    </form>
  )
}

export default ProductForm


