"use client"

import React from 'react'
import { Container } from '@/components/Reusable/ContainerWU/ContainerWU'
import "./Endorsements.scss"
import {motion} from "framer-motion"

const Endorsements = () => {

  const propsBlank = {
   icon: ""
  }


  return (
    <div className='endorsements-section '>
      <div className='max-w-[1440px] mx-auto text-neutral-700 px-6 w-full  '>

      <motion.h1 className='text-3xl lg:text-5xl md:text-4xl mt-6 lg:mt-20 font-semibold text-red-600 text-center'
           initial={{ opacity: 0, y: -40 }}
           whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
            Happy Customers
          </motion.h1>
          <motion.p className=' text-md text-center mb-14  md:max-w-lg block mx-auto md:text-xl lg:text-xl my-2 text-neutral-500'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
                Check out some success stories from our customers.
          </motion.p>

        <div className="grid  ">
              <Container
              title='Smooth Car Rental Experience!'
              paragraph="I recently used GoRentals for a weekend trip, and it was a fantastic experience. Booking online was effortless, and they had a great selection of cars. The staff at the rental location were friendly and quick, and the car was clean and in excellent shape. Returning the car was just as easy. Overall, GoRentals provided exceptional service, and I'll be using them again for future trips!"
              styles='text-left'

              customer= "/Images/Profiles/Profile1.jpg"
              name= "Robert"
              position= "Customer"

              {...propsBlank}
              />

              <Container
              title='Dependable Business Car Rentals'
              paragraph='GoRentals is our go-to partner for business car rentals. Their user-friendly website, well-maintained fleet, and accommodating customer service make our operations seamless. They offer transparent pricing, helping us manage our budget effectively. In the fast-paced business world, GoRentals delivers the reliability and efficiency we need. Highly recommended!'
              styles="text-left"

              customer= "/Images/Profiles/Profile2.jpg"
              name= "Thomas"
              position= "CEO"

              {...propsBlank}
              />

              <Container
              title='Streamlined Business Car Rentals'
              paragraph='GoRentals has streamlined our business car rental needs. Their user-friendly site, well-kept vehicles, and accommodating service make our operations smooth. Transparent pricing helps us manage our budget effectively. In the fast-paced business world, GoRentals ensures reliability and efficiency. Highly recommended for fellow businesses!'
              styles="text-left"

              customer= "/Images/Profiles/Profile3.jpg"
              name= "Amanda"
              position= "CEO"

              {...propsBlank}
              
              />
        </div>
      </div>

    </div>
  )
}

export default Endorsements