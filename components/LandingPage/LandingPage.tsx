import React from 'react'
import { Hero, Whyus } from '..'
import { ContactBanner } from './ContactBanner/ContactBanner'
import Endorsements from './Endorsements/Endorsements'
import ContactForm from './ContactForm/ContactForm'

const LandingPage = () => {

  const scrollToContactForm = () => {
    // Use JavaScript to scroll to the ContactForm section
    const contactFormSection = document.getElementById('contact-form-section');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Hero/>
    <Whyus/>
    <ContactBanner
    action={scrollToContactForm}/>

    <Endorsements/>

    <div id='contact-form-section'>
      <ContactForm/>
    </div>
    </>
  )
}

export default LandingPage