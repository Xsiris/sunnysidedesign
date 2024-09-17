import React from 'react'
import {useEffect} from 'react'
import ContactForm from '../components/ContactForm'

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default ContactUsPage
