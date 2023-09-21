"use client"

import React from 'react'
import { useState, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import {BsFillFuelPumpFill} from "react-icons/bs"
import {FaCalendarDays} from "react-icons/fa6"
import { customFilterProps } from '@/types'
import {LuChevronsUpDown} from "react-icons/lu"
import { updateSearchParams } from '@/utils'

const CustomFilter = ({title,options}:customFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])
  
  const handleUpdateParams = (e: {title:string, value:string}) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())
    router.push(newPathName)
  }

  return (
    <div className='w-fit'>
      <Listbox value={selected} 
      onChange={(e) => {
        setSelected(e)
        handleUpdateParams(e)
        }}>
        <div className='relative w-fit cursor-pointer'>
          <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
              <div className='flex gap-1'> 
                <span className='tracking-wide text-neutral-700 block truncate '>{selected.title}</span>
                {selected.title === "Fuel" ? <BsFillFuelPumpFill className="my-auto text-red-600"/> : <FaCalendarDays className="my-auto text-red-600"/>}
              </div>

              <LuChevronsUpDown className="text-neutral-700"/>
          </Listbox.Button>
          <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >

            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option)=>(
                <Listbox.Option
                key={option.title}
                value={option}
                className={({active}) =>`relative cursor-default select-none py-2 px-4 ${ active ? "bg-red-50": "" }`}>
                  {({selected}) => (
                    <span className={ ` block truncate ${selected ? "font-semibold": "font-normal"}`}>
                      {option.value}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
            
          </Transition>

        </div>

      </Listbox>
    </div>
  )
}

export default CustomFilter