"use client"

import React from 'react'
import Image from 'next/image'
import "./Whyus.scss"
import { Container } from '@/components/Reusable/ContainerWU/ContainerWU'
import { motion } from 'framer-motion'

export const Whyus = () => {

    const propsBlank = {
      customer: "",
      name: "",
      position: ""
    }

    const svgArray = ["Audi" , "Chevrolet", "Citroen", "Ford", "Honda", "Jeep", "Kia", "Mitsubishi", "Nissan", "Subaru", "Suzuki"]

    const MapSvgs = svgArray.map( brand => {
        return (
            <Image key={brand}
            src={`Images/Logos/${brand}.svg`}
                width={80}
                height={80}
                alt={`${brand} Logo`}
                className='whitespace-nowrap mx-16'
            />
        )
    })

  return (
    <div className='Whyus-section relative'>


        <div className='logo-bar absolute top-0'>

            <div className='logo-slide'>
                <div className='flex '>
                  {MapSvgs}  
                </div>
            </div>

            <div className='logo-slide'>
                <div className='flex '>
                  {MapSvgs}  
                </div>
            </div>
        </div>

        <div className='max-w-[1440px] mx-auto text-neutral-700 px-6 sm:px-12'>

          <motion.h1 className='text-3xl lg:text-5xl md:text-4xl mt-6 lg:mt-20 font-semibold text-red-600 text-center'
           initial={{ opacity: 0, y: -40 }}
           whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
            Why choose Us?
          </motion.h1>
          <motion.p className=' text-md text-center  md:max-w-lg block mx-auto md:text-xl lg:text-xl my-2 text-neutral-500'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
            With 12 years of experience, our car rental service ensures convenient, affordable, and reliable journeys.
          </motion.p>

          <div className='container '>

                <Container
                title='Modern and customized fleet'
                paragraph="With an extensive fleet of over 500 vehicles available, you'll have the flexibility to select the ideal vehicle for a wide range of activities, whether it's for personal or business purposes."
                icon="BsReverseLayoutTextWindowReverse"
                styles= "border-b-8 border-red-600 text-center items-center"
                {...propsBlank}
                />

                <Container
                title='Comprehensive advisory services'
                paragraph='Receive comprehensive and ongoing guidance, get insights into vehicle performance, equipment types, and everything you need to carry out your activities efficiently and safely.'
                icon="BsBriefcase"
                styles= "border-b-8 border-red-600 text-center items-center"
                {...propsBlank}
                
                />

                <Container
                title='We have our own maintenance workshop'
                paragraph='Greater safety and reliability for equipped vehicles also result in cost savings on maintenance and repairs. We provide a quick and efficient solution to any issues that may arise with the vehicle.'
                icon="BsGear"
                styles= "border-b-8 border-red-600 text-center items-center"
                {...propsBlank}
                />
                <Container
                title='Immediate response to mechanical emergencies.'
                paragraph='Our team of experts will always be available to provide you with a quick and efficient response, ensuring that you can continue your activities without any disruptions.'
                icon="BsJournalMedical"
                styles= "border-b-8 border-red-600 text-center items-center"
                {...propsBlank}
                />
          </div>

        </div>



    </div>
  )
}
