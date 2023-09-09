
"use client"
import React from 'react'
import "./ContainerWu.scss"
import {BsGear, BsReverseLayoutTextWindowReverse, BsBriefcase, BsJournalMedical} from "react-icons/bs"
import { ContainerWuProps } from '@/types'
import { motion } from 'framer-motion'


export const Container = ({title, paragraph, icon}:ContainerWuProps) => {

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

      const iconDisplay =  icon === "BsGear"? 
      <BsGear className=" w-16 h-16 text-red-600"/> :  icon === "BsReverseLayoutTextWindowReverse" ?
      <BsReverseLayoutTextWindowReverse className=" w-16 h-16 text-red-600"/> : icon === "BsBriefcase" ?
      <BsBriefcase className=" w-16 h-16 text-red-600"/> :  <BsJournalMedical className=" w-16 h-16 text-red-600"/>

  return (
    <motion.div 
      className='box'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      
    >
        
        <div className="circle-container">
        {iconDisplay}
        
        </div>

        <h1 className='text-lg  md:text-2xl  font-semibold text-neutral-700 text-center px-6 max-w-md'>{title}</h1>
        <p className='text-neutral-500  px-6 text-sm md:text-md text-center leading-6'>{paragraph}</p>

    
    </motion.div>
  )
}

