"use client"

import React, { use } from 'react'
import { useState } from 'react'
import SearchManufacturer from '../SearchManufacturer/SearchManufacturer'
import {ImSearch} from "react-icons/im"
import {FaCarAlt} from "react-icons/fa"
import { useRouter } from 'next/navigation'

const SearchButton = ( {classes}:{classes:string}) => (
  <button title='search button' type="submit" className={` -ml-8  ${classes}`}>
    <ImSearch/>
  </button>
)





const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")
  const router = useRouter()
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer === "" && model === "") {
      alert("Please fill the search bar correctly.")
    }

    updateParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateParams = (model:string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)
  
    if (model) {
      searchParams.set("model", model)
    } else {
      searchParams.delete( model)
    }
  
  
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer)
    } else {
      searchParams.delete(manufacturer)
    }
  
  
    const pathName = `${window.location.pathname}?${searchParams.toString()}`
  
    router.push(pathName);
  
  }
  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchManufacturer
        manufacturer = {manufacturer}
        setManufacturer = {setManufacturer}
        />

        <SearchButton
        classes="sm:hidden h-5 w-5 opacity-50"/>
      </div>

      <div className='flex-1 max-sm:w-full flex justify-start items-center relative  '>
      <FaCarAlt className="h-5 w-5 absolute ml-4 text-neutral-700 opacity-50"/>
      <input type="text" 
      name='model'
      value={model}
      onChange={(e) => setModel(e.target.value)}
      placeholder='Arteon'
      className='w-full h-[48px] pl-12 p-4  rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm bg-neutral-50 '/>
      <SearchButton
        classes="sm:hidden h-5 w-5 opacity-50"/>
        </div>
        <SearchButton
        classes="max-sm:hidden h-5 w-5 opacity-50"/>

    </form>
  )
}

export default SearchBar