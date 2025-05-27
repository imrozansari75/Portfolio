import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ProfilePic from '../assets/ProfilePic.png'
import { BiMenu } from 'react-icons/bi'

const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='flex justify-between items-center border-b'>
            {/* ________ Signal Light ________ */}
            <div className='flex pl-9 md:pl-8 py-4 md:border-r w-[220px] items-center gap-2 md:gap-4'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-red-600 rounded-full'></div>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-yellow-600 rounded-full'></div>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-green-600 rounded-full'></div>
            </div>

            {/* ________ Profile Image ________ */}
            <div className='w-full items-center md:w-10 p-2 md:p-0 md:flex flex justify-betweem md:justify-between'>
                <p>

                </p>
                <img src={ProfilePic} className='w-8 h-8 mr-12 md:mr-3 ml-auto' alt="" />
            </div>


        </div>
    )
}

export default Header