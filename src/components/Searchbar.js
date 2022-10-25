import React from 'react';
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline'

const Searchbar = () => {
  return (
    <div className='shadow flex justify-between py-2 items-center z-50'>
        {/* Searrch Bar Left */}
        <div className='flex justify-center items-center'>
            <img
            className='h-6 min-[320px]:ml-4 md:ml-7 cursor-pointer md:mr-5'
            src='https://acharyaprashant.org/images/ic_courses.png'
            />

            {/* Search Bar */}
            <div className='flex justify-center items-center min-[320px]:hidden md:flex'>  
            <div className='text-xs font-semibold text-gray-500 flex items-center border-2 px-3 py-2 cursor-pointer'>
                <p>All</p>
                <ChevronDownIcon className='h-4 ml-0.5'/>
            </div>
            <input
            className='border-2 border-gray-200 px-4 py-1 outline-none md:w-64 lg:w-96'
            type='text'
            placeholder='Search for courses'
            />
            <div className='px-2 py-2.5 bg-orange-200 cursor-pointer rounded-r-md'>
            <MagnifyingGlassIcon className='h-4 font-bold text-gray-700'/>
            </div>
            </div>
        </div>

        {/* Search Bar Right - Login*/}
        <div className='flex items-center cursor-pointer '> 
          <MagnifyingGlassIcon className='h-4 font-bold text-gray-800 md:hidden mr-2'/>
          <button className='bg-orange-400 hover:bg-orange-600 rounded-md text-sm font-bold text-white px-4 py-2 min-[320px]:mr-4 md:mr-7'>Login</button>
        </div>
    </div>
  )
}

export default Searchbar