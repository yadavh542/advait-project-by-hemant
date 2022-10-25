import React, { useEffect, useState } from 'react';
import {
    ArrowLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

const Header = () => {
    const[details, setDetails] = useState();

    useEffect(()=>{

       const fetchDetails = async ()=> {

        const response = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
        const parseData= await response.json()
        setDetails(parseData)
    };
        fetchDetails();
    },[])
    
    console.log(details);

  return (
    <div className='min-[320px]:mx-4 md:mx-7'>
        
        <div className='min-[320px]:hidden md:flex text-xs font-semibold my-5'> 
        <p>Home</p>
        <ChevronRightIcon className='h-4'/>
        <p>{details?.details.title}</p>
        </div>

        <div className='flex items-center mt-4'>
        <ArrowLeftIcon className='text-orange-400 h-6 md:hidden font-bold'/>
        <h1 className='text-2xl font-bold ml-2'>{details?.details.title}</h1>
        </div>

        {/* Header Content */}
        <div className='lg:flex'>
            <img
            className='rounded-md h-80 my-5 min-[320px]:w-auto'
            src={`${details?.details.thumbnail.domain}/${details?.details.thumbnail.basePath}/10/${details?.details.thumbnail.key}`}
            />
            
            <div className='my-5 min-[320px]:mx-4'> 
            <h2 className='font-semibold mb-4 text-lg'>{details?.details.subtitle}</h2>
            <p className='text-gray-600 text-md leading-8'>{details?.details.description}</p>
            </div>
        </div>

        {/* Share Buttons */}

        <div className='min-[320px]:hidden md:block'>
            <p className='font-semibold mb-2'>Share this series :</p>

            <div className='flex space-x-4'>
            <i className="bi bi-whatsapp cursor-pointer text-gray-500 hover:text-orange-400 h-8"></i>
            <i className="bi bi-twitter cursor-pointer text-gray-500 hover:text-orange-400 h-8"></i>
            <i className="bi bi-facebook cursor-pointer text-gray-500 hover:text-orange-400 h-8"></i>
            <i className="bi bi-linkedin cursor-pointer text-gray-500 hover:text-orange-400 h-8"></i>
              
            </div>
        </div>

    </div>
  )
}

export default Header