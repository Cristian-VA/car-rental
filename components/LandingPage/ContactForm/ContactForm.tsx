"use client"

import React from 'react'
import { useState } from 'react'
import "./ContactForm.scss"

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
    <div className=' contact-form py-20'>
    <div className='max-w-[1440px] mx-auto text-neutral-700 md:flex-row flex-col px-6 sm:px-12 flex justify-center items-center '  >

        

    <div className='form ' >
      {formData.isMessageSent ? (
        <p>Message sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className='text-center'> Get In Touch</h1>
          <div className='mb-4'>
            <label htmlFor="email">Email:</label>
            <input
               className='border-b-2 w-full'
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
             className='border-b-2 w-full'
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
             className='border-b-2 w-full'
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
    </div>
    </div>
    </div>
  )
}

export default ContactForm