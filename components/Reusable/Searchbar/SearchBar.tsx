"use client"

import React, { use } from 'react'
import { useState } from 'react'
import SearchManufacturer from '../SearchManufacturer/SearchManufacturer'

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("")

  const handleSearch = () => {}
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <div className='search-bar-item'>
        <SearchManufacturer
        manufacturer = {manufacturer}
        setManufacturer = {setManufacturer}
        />
      </div>

    </form>
  )
}

export default SearchBar