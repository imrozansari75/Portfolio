import React from 'react'
import { CONTACT } from '../Constants'

function Contact() {
  return (
    <div className='border-b border-neuteral-900 pb-20'>
        <h1 className='my-20 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <p className='border-b'>{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact
