import React from 'react'
import { contactContext } from './Contact'

 const ContactDetails = () => {
  return (
    <div>Contact information
      <p>Name:{contactData.name}</p>
      <p>Email:{contactData.email}</p>
      <p>Phone:{contactData.phone}</p>
    </div>
  )
}
 export default ContactDetails
