"use client"
import { useState } from 'react'
import { motion } from "framer-motion"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import {styled} from "styled-components"
import { BiMenu, BiX } from "react-icons/bi";

import "./Navbar.scss"


export default function Navbar() {

  const [toggle, setToggle] = useState(false)


  return (
    <nav className='Navbar '>
        
              <div className='flex gap-2'>
                    <Image
                    className='logo my-auto'
                    src="/Images/CarLogo.png"
                    width={45}
                    height={45}
                    alt= "logo"
                    />

                    <h1 className='my-auto lg:text-3xl font-semibold text-neutral-800 tracking-wide uppe'> 
                      Go {""}
                        <span className='text-red-600'> Rentals </span>
                    </h1>                    
              </div>

              <ul className='navbar-links '>
                <li>
                  <a href="" className='hover:text-red-600 transition'> Cars</a>
                </li>

                <li>
                  <a href="" className='hover:text-red-600 transition'> About</a>
                </li>

                <li>
                  <a href="" className='hover:text-red-600 transition'> Sign Up</a>
                </li>
              </ul>


              <div className='app__navbar-menu'>
                <BiMenu onClick={() => setToggle(true)}/>

                { toggle?  (
                    
                        <motion.div className="app_navbar-menu-motion"
                       initial={{ opacity: 0.5, right: '-100%' }}
                       animate={{ opacity: 1, right: 0 }}
                       exit={{ opacity: 0, right: '-100%' }}
                       transition={{ duration: 0.3 }}
                        >

                            <BiX onClick={() => setToggle(false)}/>
                            <ul>

                            {["home", "about", "work", "skills", "contact"].map((link) =>(
                                
                                    <li key={link}>
                                            <a href={`#${link}`} onClick={() => setToggle(false)}>
                                                {link}
                                            </a>    
                                    </li>                 
                            ))}

                            </ul>
                        </motion.div>   
                 
                ): ""}
       </div>


             

        
    </nav>
  )
}
