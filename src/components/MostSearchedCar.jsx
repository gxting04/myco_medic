import Data from '@/shared/Data'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function MostSearchedCar() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('myco_products')
    return saved ? JSON.parse(saved) : Data.initialProducts
  })
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16'>Featured Products</h2>
        <Carousel>
        <CarouselContent>
        {products.map((product,index)=>(
          <CarouselItem className='basis-1/4'>
            <Link to={`/product/${product.id}`} className='border rounded-xl overflow-hidden p-3 h-full flex flex-col hover:shadow-md transition-shadow'>
              <img src={product.image} className='w-full h-40 object-cover rounded-md'/>
              <div className='mt-3'>
                <h3 className='font-semibold'>{product.name}</h3>
                <p className='text-sm text-gray-500'>{product.category}</p>
                <p className='font-bold mt-1'>${product.price}</p>
              </div>
            </Link>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default MostSearchedCar