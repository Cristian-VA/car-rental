"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonsProps } from '@/types'



const CustomButton = ({title, containerStyles, handleClick}: CustomButtonsProps) => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={`flex flex-row relative justify-center items-center py-2 px-4 outline-none  tracking-wider ${containerStyles}`}
        onClick={handleClick}
        >
        <span className='flex-1'>
               {title}
         </span>
    </button>
  )
}

export default CustomButton

