import React, { useEffect, useRef, useState } from 'react';
import {
    ArrowLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { useGlobalContext } from '../context';
import {
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share";

const Header = () => {
    const[details, setDetails] = useState();
    const{langEng, halfText, setHalfText, toggleHalfText} = useGlobalContext();
    const shareUrl='https://acharyaprashant.org/en/courses/series/course-series-eeb9d3';
    const phoneBackRef = useRef();
    

    useEffect(()=>{

       const fetchDetails = async ()=> {

        const response = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
        const parseData= await response.json()
        setDetails(parseData)
    };
        fetchDetails();
    },[])
    
    //console.log(details);

    useEffect(()=>{
        if(window.innerWidth<600){
            setHalfText(true);
        }
        // console.log(window.innerWidth);
    },[])

   
    

  return (
    <div className='min-[320px]:mx-4 md:mx-7'>
        
        <div className='min-[320px]:hidden md:flex text-xs font-semibold my-5'> 
        <p
         onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/home`)}
         className='cursor-pointer'
        >{langEng?'Home':'होम'}</p>
        <ChevronRightIcon className='h-4'/>
        <p>{details?.details.title}</p>
        </div>

        <div className='flex items-center mt-4'>
        <ArrowLeftIcon 
        ref={phoneBackRef}
        onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses`)}
        className='text-orange-400 h-6 md:hidden font-bold cursor-pointer'/>
        <h1 className='text-2xl font-bold ml-2'>{details?.details.title}</h1>
        </div>

        {/* Header Content */}
        <div className='lg:flex'>
            <img
            className='rounded-md h-80 sm:my-5 min-[320px]:w-auto object-contain'
            src={`${details?.details.thumbnail.domain}/${details?.details.thumbnail.basePath}/10/${details?.details.thumbnail.key}`}
            />
            
            <div className='my-5 min-[320px]:mx-4'> 
            <h2 className='font-semibold mb-4 text-lg'>{details?.details.subtitle}</h2>
            {halfText?<p className='text-gray-600 text-md leading-8'>{details?.details.description.slice(0,155)}<span onClick={()=>toggleHalfText()} className='text-orange-500 font-semibold cursor-pointer '>...और पढ़ें</span></p>:
            <p className='text-gray-600 text-md leading-8 duration-700'>{details?.details.description}<span onClick={()=>toggleHalfText()} className='text-orange-500 font-semibold cursor-pointer'>...कम दिखाएँ</span></p>
            }
            </div>
        </div>

        {/* Share Buttons */}

        <div className='min-[320px]:hidden md:block'>
            <p className='font-semibold mb-2'>{langEng?'Share this series :':'इस श्रृंखला को साझा करें'}</p>

            <div className='flex space-x-4'>

            <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={30} round={true}/>
            </WhatsappShareButton>
            {/* <i className="bi bi-whatsapp cursor-pointer text-gray-800 hover:text-orange-400 bg-gray-300 p-1 rounded-full mr-2"></i> */}
            <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={30} round={true}/>
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={30} round={true}/>
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={30} round={true}/>
            </LinkedinShareButton>
              
            </div>
        </div>

    </div>
  )
}

export default Header