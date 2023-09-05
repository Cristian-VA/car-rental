"use client"

import React from 'react'
import styled from "styled-components"
import Image from 'next/image'
import { CustomButton } from '.'

const HeroSection = styled.section`
background-image: url(/Images/HeroBg.png);
background-size: cover;
min-height: 100vh;
`

export default function Hero() {

  const handleClick = () => {}

  return (
    <HeroSection >
      <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto text-neutral-800'>
        <div className="flex-1 pt-36  sm:px-12 px-6">
            <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-bold'>
                 Rent Your Dream Ride{' '}  
                    <span className='text-red-600 border-b-4 border-neutral-600'>
                         Today
                    </span>
              </h1>

                <p className='text-[27px] text-black-100 font-light mt-5'>
                   Explore Our Fleet of Luxury and Affordable Vehicles                
                </p>

                <CustomButton
                title="View Cars"
                containerStyles = {`bg-red-600 text-white mt-5 rounded`}
                handleClick = {handleClick}
                />
          </div>

          <div className='xl:flex-[1.5] md:flex justify-end items-end w-full xl:h-screen hidden '>
            <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
                <Image className='object-contain'
                src="/Images/hondaCar.png"
                fill
                alt="HondaCar"
                />
            </div>
                
          </div>
          </div>
    </HeroSection>
  )
}


//<div className='px-6 md:px-10 mt-28'>
//<h1 className='text-gray-800 text-3xl font-semibold'> Rent Your Dream Ride <span className='text-red-600'>Today</span></h1>
//<p className='my-3 text-xl max-w-lg'>Explore Our Diverse Fleet of Luxury, Economy, and Specialty Vehicles for the Ultimate Rental Experience.</p>
//<button className='bg-red-600  px-3 text-white font-thin text-md'> Explore </button>
//</div>