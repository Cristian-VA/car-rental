import React from 'react'
import { Hero, Whyus } from '..'
import { ContactBanner } from './ContactBanner/ContactBanner'
import Endorsements from './Endorsements/Endorsements'
import ContactForm from './ContactForm/ContactForm'

const LandingPage = () => {
  return (
    <>
    <Hero/>
    <Whyus/>
    <ContactBanner/>
    <Endorsements/>
    <ContactForm/>
    </>
  )
}

export default LandingPage