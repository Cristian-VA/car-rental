"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { BiMenu, BiX  } from "react-icons/bi";

import "./Navbar.scss"


export default function Navbar() {
  const pathname = usePathname()

  const navLinks = ["Cars", "About"]
  const [toggle, setToggle] = useState(false)


  return (
    <nav className='Navbar '>
              <Link  href="/" >
              <div className='flex gap-2'>
                    <Image
                    className='logo my-auto'
                    src="/Images/CarLogo.png"
                    width={45}
                    height={45}
                    alt= "logo"
                    />

                    <h1 className='my-auto lg:text-3xl font-semibold text-neutral-800 text-xl tracking-wide '> 
                      Go {""}
                        <span className='text-red-600'> Rentals </span>
                    </h1>                    
              </div>
              </Link>

              <ul className='navbar-links '>
              {navLinks.map((link) => {
                const isActive = pathname === `/${link}`
                
                        return (
                          <Link
                            className={isActive ? 'text-red-600 ml-6' : 'link  ml-6'}
                            href={`/${link}`}
                            key={link}
                          >
                            {link}
                          </Link>
                        )
                      })}

                <li>
                  <Link href="" className='link'> Sign Up</Link>
                </li>
              </ul>


              <div className='app__navbar-menu '>
                <BiMenu onClick={() => setToggle(true)}/>
          
                
                <AnimatePresence>
                { toggle?  (
                    
                        <motion.div className="app_navbar-menu-motion "
                       initial={{ opacity: 0.5, right: '-100%' }}
                       animate={{ opacity: 1, right: 0 }}
                       exit={{ opacity: 0, right: '-100%' }}
                       transition={{ duration: 0.3 }}
                     
                        >
                            
                            <BiX onClick={() => setToggle(false)}/>

                            <div className='flex gap-2 mx-auto absolute top-0  right-0 mt-[34px] mr-[32px]'>
                                <Image
                                className='logo my-auto'
                                src="/Images/CarLogo.png"
                                width={45}
                                height={45}
                                alt= "logo"
                                />

                                <h1 className='my-auto lg:text-3xl font-semibold text-neutral-800 text-xl tracking-wide  '> 
                                  Go {""}
                                    <span className='text-red-600'> Rentals </span>
                                </h1>                    
                          </div>


                          <div>
                            <ul>
                            
                            

                            {["Cars", "About", "Sign Up"].map((link) =>(
                                
                                    <li key={link}>
                                            <Link className='links' href={`${link}`} onClick={() => setToggle(false)}>
                                                {link}
                                            </Link>    
                                    </li>                 
                            ))}

                            </ul>
                            </div>

    
                                
                        </motion.div>   
                 
                ): ""}
              </AnimatePresence>

       </div>


             

        
    </nav>
  )
}
