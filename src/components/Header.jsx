import ProfilePic from '../assets/ProfilePic.png'

const Header = () => {

    return (
        <div className='flex justify-between items-center border-b border-white/20'>
            {/* ________ Signal Light ________ */}
            <div className='border-r border-white/20'>
                <div className='invisible sm:visible sm:flex pl-9 md:pl-8 sm:py-4 sm:w-[249.5px] items-center gap-2 md:gap-4'>
                    <div className='cursor-pointer md:h-5 h-4 md:w-5 w-4 bg-red-600 rounded-full'></div>
                    <div className='cursor-pointer md:h-5 h-4 md:w-5 w-4 bg-yellow-600 rounded-full'></div>
                    <div className='cursor-pointer md:h-5 h-4 md:w-5 w-4 bg-green-600 rounded-full'></div>
                </div>
            </div>

            {/* ________ Profile Image ________ */}
            <div className='w-full items-center md:w-10 p-2 md:p-0 md:flex flex justify-between'>
                <p className=''>

                </p>
                <img src={ProfilePic} className='w-8 h-8 mr-2 border-2 rounded-full sm:mr-12 md:mr-3 ml-auto border-l' alt="" />
            </div>
        </div>
    )
}

export default Header