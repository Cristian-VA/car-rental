"use client"

import React from 'react'
import { useState } from 'react'
import "./ContactForm.scss"
import { motion } from 'framer-motion' 

const ContactForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        inquiry: '',
        message: '',
        isMessageSent: false,
      });

      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e:any) => {
        e.preventDefault();
    
        
        setFormData({
          ...formData,
          isMessageSent: true,
        });
      };


  return (
    <motion.div className=' contact-form py-20'>

    <div className='max-w-[1440px] mx-auto text-neutral-700 md:flex-row flex-col px-12 sm:px- flex justify-center items-center '  >

        

    <motion.div className='form ' 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>

      {formData.isMessageSent ? (
        <p>Message sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>

          <h1 className='text-lg  md:text-2xl  font-semibold text-neutral-700  text-center mb-2'> Get In Touch</h1>
          <p className='text-neutral-500  px-6 text-sm md:text-md  leading-6 text-center mb-6'> Fill the form if you want to ask a question or subscribe to out newsletter</p>
          <div className='mb-4'>
            <label htmlFor="email">Email:</label>
            <input
               className='border-b-2 w-full bg-neutral-100 p-2'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="inquiry">Inquiry:</label>
            <input
             className='border-b-2 w-full bg-neutral-100 p-2'
              type="text"
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="message">Message:</label>
            <textarea
             className='border-b-2 w-full bg-neutral-100 p-2'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className='bg-red-600 w-full my-6 py-2 rounded text-neutral-50 transition hover:bg-neutral-700' type="submit">Send Message</button>
        </form>
      )}
    </motion.div>
    </div>
    </motion.div>
  )
}

export default ContactForm