import React from 'react'
import ProfilePic from '../assets/ProfilePic.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b'>
            {/* ________ Signal Light ________ */}
            <div className='md:pl-8 py-4 flex border-r w-[220px] items-center gap-4'>
                <div className='h-5 w-5 bg-red-600 rounded-full'></div>
                <div className='h-5 w-5 bg-yellow-600 rounded-full'></div>
                <div className='h-5 w-5 bg-green-600 rounded-full'></div>
            </div>

            {/* ________ Profile Image ________ */}
            <div className='flex justify-between'>
                <p></p>
                <img src={ProfilePic} className='w-8 h-8 mr-3' alt="" />
            </div>

        </div>
    )
}

export default Header