"use client"

import React, { Fragment } from 'react'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import {useState} from "react"
import { manufacturers } from '@/components/Info/info'

const SearchManufacturer = ({setManufacturer, manufacturer}:SearchManufacturerProps) => {
  
    const [query, setQuery] = useState("")

    //makes the search posible if the user includes spaces between or caps or lowercase
    const filteredManufacturers = query === "" ? manufacturers: 
    manufacturers.filter((item) =>(
        item.toLowerCase().replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

    return (

    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
        <Combobox
        value={manufacturer}
        onChange={setManufacturer}>
            <div className=' relative w-full'>

                <Combobox.Button className="absolute top-[14px]">
                    <Image
                    src="Volkswagen.svg"
                    width={20}
                    height={20}
                    alt='car logo'
                    className='ml-4 opacity-70 my-auto'
                    />
                </Combobox.Button>

                <Combobox.Input
                className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-neutral-50 outline-none cursor-pointer text-sm"
                placeholder="Volkswagen"
                displayValue={(manufacturer:string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opactity-100'
                leaveTo='opacity-0'
                afterLeave={()=>setQuery("")}
                >
                <Combobox.Options>
                    {filteredManufacturers.length === 0 &&
                    query !== "" ? (
                        <Combobox.Option
                        value={query}
                        className="cursor-default select-none py-2 pl-10 pr-4">

                            Create "{query}"

                        </Combobox.Option>
                        

                    ): filteredManufacturers.map((item) =>(
                        <Combobox.Option
                        key={item}
                        className={({active}) => `
                        relative cursor-default select-none py-2 pl-10 pr-4 ${active? "bg-red-50": "text-neutral-700" }`}
                        value={item}
                        >
                         {item}
                        </Combobox.Option>
                    ))
                    }
                </Combobox.Options>

                </Transition>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer