import React from 'react'
import logo from '../assets/Logo.png'
import { FaLinkedin, FaTwitterSquare, FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <div className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </div>
  )
}

export default Navbar
