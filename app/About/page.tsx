"use client"
import { NavLocation } from '@/components'
import Image from "next/image"
import "./About.scss"
import {motion} from "framer-motion"
import {ImHeadphones} from "react-icons/im"
import {FaMapLocationDot} from "react-icons/fa6"
import {BiSolidCarGarage, BiLogoTwitter,BiLogoDiscordAlt} from "react-icons/bi"
import {PiCertificateFill, PiSteeringWheelFill} from "react-icons/pi"
import {AiFillSafetyCertificate, AiFillInstagram, AiFillFacebook} from "react-icons/ai"
import Link from 'next/link'

const About = () => {
  return (
    <>
    <motion.div className='max-w-[1440px] mx-auto text-neutral-700 sm:px-12 px-6 about'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>

      <NavLocation
      name="About"/>
          <div>
         <h1 className="text-2xl md:text-4xl font-bold text-red-600 "> Who We Are </h1>
         <p className='text-md md:text-xl text-neutral-500 mt-2'>GoRentals represents the next step in mobility evolution.</p>
         </div>

         <div className='flex flex-col-reverse xl:flex-row xl:justify-between '>
          <div className='max-w-3xl mt-6 flex gap-4 flex-col text-neutral-600 text-justify leading-7'>

            <p>We specialize in managing our clients' transportation needs, and we began our operations in 1995. We boast modern vehicles equipped to meet your specific requirements and a dedicated staff committed to delivering the efficiency and security you seek. This allows you to focus on your business or enjoy exploring Peru in the company of GoRentals.</p>
            <p>
              <span className='font-semibold text-neutral-700'>Mission</span> <br />
              Our mission is to provide mobility solutions with top-tier safety and quality standards, consistently exceeding our clients' expectations.
            </p>

            <p>
              <span className='font-semibold text-neutral-700'>Vision</span> <br />
              We aspire to be the foremost company in customer satisfaction for mobile solution services, nurturing long-term trust and loyalty.
            </p>

            <div className='mb-4'>
              <h1 className='font-semibold text-neutral-700'> Our Core Values</h1>
              <ul>
                <li>Service Excellence</li>
                <li>Safety</li>
                <li>Integrity</li>
                <li>Empathy</li>
                <li>Dynamism</li>
              </ul>
            </div>

          </div>

          <div className=' flex justify-center' >
              <Image
                        className=' my-8 xl:hidden '
                        src="/Images/CarLogoBig.png"
                        width={300}
                        height={300}
                        alt= "logo"
                        />
          </div>
         </div>
    </motion.div>

<div className=' bg-neutral-200 '>
    <div className='max-w-[1440px] mx-auto text-neutral-700 sm:px-12 px-6 min-h-screen flex justify-center items-center flex-col'>

    <motion.h1 className='text-3xl lg:text-5xl md:text-4xl mt-6 lg:mt-20 font-semibold text-neutral-700 text-center'
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
            Benefits with <br /> 
            <span className='text-red-600 mt-2'>GoRentals</span>
          </motion.h1>


        <div className="grid-container mt-10 md:mt-20">

              <div className="grid-item flex flex-col py-12">
                <motion.span 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>

                     <FaMapLocationDot className=" mx-auto block w-20 h-20"/>

                </motion.span>

                <motion.h1 
                  className='text-red-600 font-semibold mt-6 lg:text-2xl'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  >
                    GPS tracking system
                </motion.h1>
                
                
              </div>
             
              <div className="grid-item flex flex-col">
                <motion.span 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>

                     <ImHeadphones className=" mx-auto block w-20 h-20"/>

                </motion.span>

                <motion.h1 
                  className='text-red-600 font-semibold mt-6 lg:text-2xl'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  >
                    Comprehensive support during extended hours
                </motion.h1>
                
                
              </div>

              <div className="grid-item flex flex-col">
                <motion.span 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>

                     <BiSolidCarGarage className=" mx-auto block w-20 h-20"/>

                </motion.span>

                <motion.h1 
                  className='text-red-600 font-semibold mt-6 lg:text-2xl'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  >
                    Vehicles adapted and equipped according to requirements
                </motion.h1>
                
                
              </div>


              <div className="grid-item flex flex-col">
                <motion.span 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>

                     <AiFillSafetyCertificate className=" mx-auto block w-20 h-20"/>

                </motion.span>

                <motion.h1 
                  className='text-red-600 font-semibold mt-6 lg:text-2xl'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  >
                    Technical certificates
                </motion.h1>
                
                
              </div>
              
              <div className="grid-item flex flex-col">
                <motion.span 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>

                     <PiSteeringWheelFill className=" mx-auto block w-20 h-20"/>

                </motion.span>

                <motion.h1 
                  className='text-red-600 font-semibold mt-6 lg:text-2xl'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  >
                    Variety of vehicles available
                </motion.h1>
                
                
              </div>

              <div className="grid-item flex flex-col">
                <motion.span 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>

                     <PiCertificateFill className=" mx-auto block w-20 h-20"/>

                </motion.span>

                <motion.h1 
                  className='text-red-600 font-semibold mt-6 lg:text-2xl'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  >
                    Over 15 years of commitment and experience
                </motion.h1>
                
                
              </div>
        </div>

    </div>

  </div>



    <div className='background'>
    <div className='max-w-[1440px] mx-auto text-neutral-700 sm:px-12 px-6 min-h-screen flex justify-center items-center flex-col  '>

      <motion.div 
     
     whileInView={{ scale: [0, 1] }}
     initial={{ opacity: 0 }} 
     animate={{ opacity: 1 }} 
     transition={{ duration: 0.6, ease: "easeInOut" }}>
      <Image
                        
                        src="/Images/GroupofCars.png"
                        width={950}
                        height={300}
                        alt= "logo"
                        />

      </motion.div>

      <div className='w-full flex flex-col md:flex-row gap-2  lg:gap-8'>

        <motion.div 
            className="bg-white flex-1 border-2 rounded-lg flex-col flex justify-center items-center
            py-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}> 
        
                <h1 className='text-4xl md:text-6xl font-bold text-red-600 '> +300</h1>
                <h1 className='text-lg md:text-2xl text-neutral-600  font-bold'> Cars <br /> in our fleet.</h1>
                
        </motion.div>

        <motion.div 
            className="bg-white  flex-1 border-2 rounded-lg flex-col flex justify-center items-center
            py-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}> 
        
                <h1 className='text-4xl md:text-6xl font-bold text-red-600 '> +320</h1>
                <h1 className='text-lg md:text-2xl text-neutral-600  font-bold'> Satisfied Clients <br /> In the last year.</h1>
                
        </motion.div>

        <motion.div 
            className="bg-white  flex-1 border-2 rounded-lg flex-col flex justify-center items-center
            py-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}> 
        
                <h1 className='text-4xl md:text-6xl font-bold text-red-600 '> 15</h1>
                <h1 className='text-lg md:text-2xl text-neutral-600  font-bold'> Years of experience <br /> In the Car Rental Business.</h1>
                
        </motion.div>

        
        </div>
    </div>
    </div>



    <div className='background-end flex flex-col justify-center items-end'>
         <div className='md:mr-16'>
              <h1 className="text-4xl md:text-7xl font-bold text-neutral-50 justify max-w-sm mb-1 ">So...</h1>
              <h1 className="text-3xl md:text-6xl font-bold text-neutral-50 justify md:max-w-xl max-w-sm mb-6"> Are You Ready to start your journey?</h1>
              
              <Link className=' bg-red-600 py-2 px-4 rounded  text-white text-md md:text-lg  lg:text-xl transition hover:bg-neutral-700  mt-6' href="/Cars">
                  Explore Our Cars
                </Link>

                <div className='flex gap-2 mt-4'>
                    <div className='bg-white flex justify-center items-center h-6 w-6 rounded-full cursor-pointer'>
                      <BiLogoTwitter className="text-red-600"/>
                    </div>

                    <div className='bg-white flex justify-center items-center h-6 w-6 rounded-full cursor-pointer'>
                      <AiFillInstagram className="text-red-600"/>
                    </div>

                    <div className='bg-white flex justify-center items-center h-6 w-6 rounded-full cursor-pointern'>
                      <AiFillFacebook className="text-red-600"/>
                    </div>

                    <div className='bg-white flex justify-center items-center h-6 w-6 rounded-full cursor-pointern'>
                      <BiLogoDiscordAlt className="text-red-600"/>
                    </div>
          </div>
         </div>

         
        </div>

    </>
  )
}

export default About