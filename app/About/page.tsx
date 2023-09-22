import React from 'react'
import { NavLocation } from '@/components'
import Image from "next/image"
import "./About.scss"



const About = () => {
  return (
    <div className='about'>
    <div className='max-w-[1440px] mx-auto text-neutral-700 sm:px-12 px-6'>

      <NavLocation
      name="About"/>

         <h1 className="text-2xl md:text-4xl font-bold text-red-600 "> Who We Are </h1>
         <p className='text-md md:text-xl text-neutral-500 mt-2'>GoRentals represents the next step in mobility evolution.</p>

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

            <div>
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
                        className=' my-5 xl:my-auto '
                        src="/Images/CarLogoBig.png"
                        width={300}
                        height={300}
                        alt= "logo"
                        />
          </div>
         </div>
    </div>


    </div>
  )
}

export default About