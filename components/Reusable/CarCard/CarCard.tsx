"use client"

import { useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from '../CustomButton'
import { calculateCarRent } from '@/utils'
import { PiSteeringWheelFill } from "react-icons/pi"
import {GiCarWheel} from "react-icons/gi"
import {BsFillFuelPumpFill} from "react-icons/bs"
import {motion} from "framer-motion"
import CarDetails from '../CarDetails/CarDetails'
import { getCarImage } from '@/utils'

import "./CarCard.scss"

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
    const {city_mpg, make, model, transmission, year, drive} = car
    const carRentPrice =  calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen]= useState(false)

    const [isShowing, setIsShowing] = useState(false)

  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 transition car-card-bg  hover:shadow-md rounded-3xl group'>
        <div className='w-full flex justify-between items-start gap-2'>
            <h2 className='text-[22px] leading-[26px] font-bold capitalize text-neutral-700'>
                {make} {model}
            </h2>
        </div>
        
        <p className='flex mt-5 text-[32px] font-semibold text-neutral-700'>
            <span className='self-start text-[22px] mr-1 font-normal text-neutral-600'>
              $     
            </span>
            {carRentPrice}
            <span className='self-end text-[22px] ml-1 font-normal text-neutral-600'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image
            src={getCarImage(car)}
            alt='car'
            fill
            priority
            className='object-contain'
            />

        </div>

        <div className='relative flex w-full mt-2  '>
            <div className='flex group-hover:invisible w-full justify-center gap-2 transition   rounded-3xl text-neutral-300 font-semibold'>

                <div className='flex flex-col justify-center items-center gap-2  box-border	 py-3 bg-opacity-10 bg-neutral-50 w-24  rounded-3xl shadow-sm'>
                        <PiSteeringWheelFill className="w-7 h-7 mx-auto "/>
                        <p> {transmission === "a" ? "Automatic" : "Manual"}</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2  box-border	 py-3 bg-opacity-10 bg-neutral-50   w-24  rounded-3xl shadow-sm'>
                        <GiCarWheel className="w-7 h-7 mx-auto"/>
                        <p> {drive.toUpperCase()}</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2  box-border	 py-3 bg-opacity-10 bg-neutral-50   w-24  rounded-3xl shadow-sm'>
                        <BsFillFuelPumpFill className="w-7 h-7 mx-auto"/>
                        <p> {city_mpg} MPG</p>
                </div>

            </div>  

            <div 
            className='hidden group-hover:flex absolute bottom-0 w-full z-10'
            >


                <CustomButton
                handleClick={() => setIsOpen(true)}
                title='View Details'
                containerStyles="w-full py-[16px] bg-neutral-50 bg-opacity-20 rounded-3xl text-neutral-50 font-semibold text-lg transition"/>

            </div> 
        
        </div>

        <CarDetails isOpen = {isOpen} closeModal = {() => setIsOpen(false)} car={car} />

    </div>
  )
}

export default CarCard 
