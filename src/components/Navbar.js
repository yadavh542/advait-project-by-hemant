import React from 'react';
import {
    PhoneIcon,
    Bars3Icon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className='flex bg-orange-700 justify-between h-auto'>

        {/* Left Side Nav */}
        <div className='items-center justify-center flex'>
            <img 
            src='https://acharyaprashant.org/images/ic_aplogo.png'
            className='h-8 w-8 rounded-full my-1 min-[320px]:ml-4 md:ml-7 mr-3 cursor-pointer'
            />

            <ul className='text-white font-semibold min-[320px]:hidden md:flex'>
                <li className='px-4 py-3 cursor-pointer hover:bg-orange-500'>Home</li>
                <li className='bg-orange-500 px-4 py-3 cursor-pointer'>Video Courses</li>
                <li className='px-4 py-3 cursor-pointer hover:bg-orange-500'>His Books</li>
                <li className='px-4 py-3 cursor-pointer hover:bg-orange-500'>Donate</li>
            </ul>
        </div>

        {/* Right Side Nav */}
        <div className='items-center justify-center flex'>
            <ul className='text-white min-[320px]:mr-4 md:mr-7 flex justify-center items-center'>

                <div className='flex px-2 justify-center items-center'>
                    <button className='rounded-sm border-2 text-xs px-1 py-0.5 mr-1'>EN</button>
                    <ChevronDownIcon 
                    className='h-5 text-white font-bold cursor-pointer'
                    />
                </div>

                    <PhoneIcon
                    className='h-5 px-2 cursor-pointer'
                    />

                    <button className='text-xs rounded-md px-1 py-0.5 md:hidden border-2'>Donate</button>

                    <Bars3Icon 
                    className='h-5 pl-2 cursor-pointer font-bold'
                    />


                <li className='px-2 cursor-pointer min-[320px]:hidden md:flex'>Menu</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar