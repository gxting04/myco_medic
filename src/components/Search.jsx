import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { FaSearch } from "react-icons/fa";
import Data from '@/shared/Data';
  

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
        <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {Data.productCategories.map((category, index)=>(
                <SelectItem value={category.name}>{category.name}</SelectItem>
            ))}
        </SelectContent>
        </Select>

        <Separator orientation='vertical' className='hidden md:block'/>

        <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="0-25">$0 - $25</SelectItem>
            <SelectItem value="25-50">$25 - $50</SelectItem>
            <SelectItem value="50-100">$50 - $100</SelectItem>
            <SelectItem value=">100">$100+</SelectItem>
        </SelectContent>
        </Select>

        <Separator orientation="vertical" className='hidden md:block'/>

        <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Availability" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="in-stock">In Stock</SelectItem>
            <SelectItem value="preorder">Preorder</SelectItem>
        </SelectContent>
        </Select>
        
        <div>
        <FaSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer'/>
        </div>

    </div>
  )
}

export default Search