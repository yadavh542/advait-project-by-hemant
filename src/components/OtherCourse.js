import React from 'react'

const OtherCourse = ({title,subtitle,noOfCourses,image}) => {
  return (
    <div className='hover:bg-gray-200 rounded-md min-[320px]:w-full cursor-pointer mr-5 mb-2'>
    <div className='p-4 flex'>
        <div className='w-42'> 

      
        <img 
        className='rounded-md h-28 bg-gradient-to-t from-black'
        src={image}/>
        
        
        <button className='bg-green-100 py-1 px-2 rounded-md text-gray-800 text-xs mb-2 mt-2'>Series</button>

        </div>
        <div className='ml-4'> 
           
            <h1 className='mt-4 font-bold mb-2'>{title}</h1>
            <h2 className='text-gray-500 mb-2'>{subtitle}</h2>
            <p className='text-gray-500 mb-2'>{noOfCourses} Courses</p>
            
        </div>
    </div>
    <hr/>
</div>
  )
}

export default OtherCourse