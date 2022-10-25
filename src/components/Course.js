import React from 'react';
import {
    
  BookmarkIcon
} from '@heroicons/react/24/solid'

const Course = ({title,subtitle,courseHours,amount,language,courseNo}) => {
  return (
    <div className='hover:bg-gray-200 rounded-md min-[320px]:w-full md:w-80 mr-8 mb-5 cursor-pointer'>
        <div className='p-4'>

            
            <p className='bg-gray-400 px-2 py-1 text-white rounded-md font-bold w-16 h-6 text-sm'>कोर्स {courseNo}</p>
            
            
            <h1 className='mt-4 font-bold mb-2'>{title}</h1>
            <h2 className='text-gray-500 mb-2'>{subtitle}</h2>
            <p className='text-gray-500 mb-2'>{courseHours} Hours</p>
            <p className='text-gray-500 mb-2'>Contributions: {amount} Rs.</p>
            <button className='bg-blue-200 py-1 px-2 rounded-md text-gray-800 text-xs mb-2'>{language}</button>
            <p className='text-gray-300'><span className='text-xs font-bold text-orange-500 hover:text-orange-700'>ADD TO CART</span>  |  <span className='text-xs font-bold text-orange-500 hover:text-orange-700'>ENROL</span></p>
            
        </div>
        <hr/>
    </div>
  )
}

export default Course