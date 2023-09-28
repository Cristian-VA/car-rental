import React from 'react'
import {BsTelephone} from "react-icons/bs"
import "./ContactBanner.scss"
import { contactBannerProps } from '@/types'


export const ContactBanner = ({action}:contactBannerProps) => {
  return (
    <div className='Banner'>
        <p className='text-lg lg:text-3xl md:text-xl  font-semibold text-neutral-50 text-center'>Willing to assist you.</p>
        <h1 className='text-2xl px-6 lg:text-5xl md:text-4xl   font-semibold text-neutral-50 text-center'>We have a Comprehensive Assistance Center</h1>
        <p className='text-md lg:text-xl md:text-lg   text-neutral-50 text-center px-6'>All our facilities have a great support team ready to assist you</p>

        <div className='m-4 flex gap-4'>
          <button onClick={action} className='mr-4 bg-red-600 py-2 px-4 rounded uppercase text-white text-md md:text-lg  lg:text-xl transition hover:bg-neutral-700 '> Contact us</button>
          <BsTelephone className="my-auto  lg:w-8 lg:h-8 w-6 h-6 text-white"/>
          <h1 className='my-auto text-lg lg:text-3xl md:text-xl   text-neutral-50 text-center'>1300 975 707</h1>
        </div>
    </div>
  )
}
