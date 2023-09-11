
"use client"
import React from 'react'
import "./ContainerWu.scss"
import {BsGear, BsReverseLayoutTextWindowReverse, BsBriefcase, BsJournalMedical, BsFillStarFill} from "react-icons/bs"
import { ContainerWuProps} from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'


export const Container = ({title, paragraph, icon, styles, customer, position, name, ...props }:ContainerWuProps) => {



      const iconDisplay =  icon === "BsGear"? 
      <BsGear className=" w-16 h-16 text-red-600" /> :  icon === "BsReverseLayoutTextWindowReverse" ?
      <BsReverseLayoutTextWindowReverse className=" w-16 h-16 text-red-600"/> : icon === "BsBriefcase" ?
      <BsBriefcase className=" w-16 h-16 text-red-600"/> : icon === "BsJournalMedical" ?  <BsJournalMedical className=" w-16 h-16 text-red-600"/>: ""

  return (
    <motion.div 
      className={`box  ${styles}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      {...props}
    >
        {icon? (
            <div className="circle-container">
              {iconDisplay}
            </div>
        ): ""}

        {customer? (
          <div className='flex  px-6 my-3 gap-6'>

            <div className='w-28 h-28 flex justify-center items-center overflow-hidden rounded-full'>
                <Image className='w-full h-full object-cover'
                    src={customer}
                    width={112}
                    height={112}
                    quality={100}
                    alt='profile'
                />
                   
            </div>

            <div className='my-auto'>
              <h1 className='text-md  md:text-xl  font-semibold text-neutral-700'>{name}</h1>
              <p className='text-neutral-500   text-sm md:text-md  leading-6'>{position}</p>
            </div>
            
          </div>
        ): ""}

        <h1 className='text-lg  md:text-2xl  font-semibold text-neutral-700  px-6 max-w-md'>{title}</h1>
        <p className='text-neutral-500  px-6 text-sm md:text-md  leading-6'>{paragraph}</p>
      
        {customer? (
          <div className='flex  px-6 my-2 justify-between'>
            <h1 className='text-neutral-700   text-sm md:text-md  leading-6'>9/12/2023</h1>

            <motion.div 
            className='flex text-red-600 gap-2 my-auto' 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >

                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
            </motion.div>
            
          </div>
        ): ""}
    
    </motion.div>
  )
}

