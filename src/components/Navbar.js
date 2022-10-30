import React, { useEffect, useRef, useState } from 'react';
//import "../App.css";
import {
    PhoneIcon,
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'
import SingleMenu from './SingleMenu';
import { useGlobalContext } from '../context';


const Navbar = () => {
    const[langBoxOpen, setLangBoxOpen] = useState(false);
    const[menuOpen, setMenuOpen] = useState(false);
    const{toggleBgGray,setBgGray} = useGlobalContext();
    const{langEng,langHindi,setLangHindi,setLangEng} = useGlobalContext();
    const menuRef = useRef();
    const langRef = useRef();
    

    // Click Outside to Close Popup Function

    useEffect(()=>{
        let handler=(e)=>{
            if( (menuOpen && !menuRef.current.contains(e.target)) || (langBoxOpen && !langRef.current.contains(e.target))){
                setMenuOpen(false);
                setLangBoxOpen(false);
                setBgGray(false);
            }
            
        };
        document.addEventListener("mousedown",handler);
        return()=>{
            document.removeEventListener("mousedown",handler)
        }
    })

    const handleMenuOpen=(e)=>{
        setMenuOpen(true);
        setBgGray(true);
    }
    const handleLangBoxOpen=(e)=>{
        setLangBoxOpen(!langBoxOpen);
        toggleBgGray();
    }

    const handleHindi=(e)=>{
        setLangHindi(true);
        setLangEng(false);
        setLangBoxOpen(false);
        setBgGray(false);
    }
    const handleEng=(e)=>{
        setLangEng(true);
        setLangHindi(false);
        setLangBoxOpen(false);
        setBgGray(false);
    }

  return (
    <div className='flex bg-orange-700 justify-between h-auto'>

        {/* Left Side Nav */}
        <div className='items-center justify-center flex'>
            <img 
            onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/home`)}
            alt='applogo'
            src='https://acharyaprashant.org/images/ic_aplogo.png'
            className='h-8 w-8 rounded-full my-1 min-[320px]:ml-4 md:ml-7 mr-3 cursor-pointer'
            />

            <ul className='text-white font-semibold min-[320px]:hidden md:flex'>
                <li 
                onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/home`)}
                className='px-4 py-3 cursor-pointer hover:bg-orange-500'>{langEng?'Home':'होम'}
                </li>
                <li 
                onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses`)}
                className='bg-orange-500 px-4 py-3 cursor-pointer'>{langEng?'Video Courses':'वीडियो कोर्सेज'}</li>
                <li 
                onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/books`)}
                className='px-4 py-3 cursor-pointer hover:bg-orange-500'>{langEng?'His Books':'उनकी पुस्तकें'}</li>
                <li 
                onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/contribute`)}
                className='px-4 py-3 cursor-pointer hover:bg-orange-500'>{langEng?'Donate':'योगदान करें'}</li>
            </ul>
        </div>

        {/* Right Side Nav */}
        <div className='items-center justify-center flex'>
            <ul className='text-white min-[320px]:mr-4 md:mr-7 flex justify-center items-center'>

                {/* select language */}
                <div 
                ref={langRef}
                onClick={handleLangBoxOpen}
                className='flex px-2 justify-center items-center'>
                    <button className='rounded-md border-2 text-xs px-0.5 py-0.2 mr-1'>{langEng?'EN':'HI'}</button>
                    <ChevronDownIcon 
                    className='h-4 text-white font-bold cursor-pointer'
                    />
                </div>

                {/* Language Popup Box */}
                
                <div 
                ref={langRef}
                className={`${langBoxOpen?'h-24 w-21':'h-0'} duration-[700ms] ease-in absolute ${langBoxOpen?'min-[320px]:top-9 md:top-10':'-top-10 '} min-[320px]:right-[138px] lg:right-[135px] rounded-md bg-white font-semibold border-1 border-gray-200 shadow-md flex flex-col justify-center items-center z-50`}>
                    <p 
                    onClick={handleEng}
                    className={`${langBoxOpen?'py-2 text-base':'py-0 text-sm'} px-5 duration-[700ms]  hover:bg-gray-200 cursor-pointer ${langEng? "text-orange-500":"text-black"}`}>
                        <span className='px-[3px]'>English</span>
                    </p>
                    <p 
                    onClick={handleHindi}
                    className={`${langBoxOpen?'py-2 text-base':'py-0 text-sm'} px-5 duration-[700ms] hover:bg-gray-200 cursor-pointer ${langHindi? "text-orange-500":"text-black"}`}><span className='px-[6px]'>हिंदी&emsp;</span></p>
                </div>


                    <PhoneIcon
                    onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/enquiry`)}
                    className='h-4 px-2 cursor-pointer'
                    />

                    <button 
                    onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/contribute`)}
                    className='text-xs rounded-md px-1 py-0.5 md:hidden border-2 mx-2'>{langEng?'Donate':'योगदान करें'}</button>

                    <Bars3Icon 
                    onClick={handleMenuOpen}
                    className='h-5 pl-2 cursor-pointer font-bold'
                    />


                <li 
                onClick={handleMenuOpen}
                className='px-2 text-sm cursor-pointer min-[320px]:hidden md:flex'>{langEng?'Menu':'मेन्यू'}</li>

                {/* Menu Right Sidebar  */}

                
                    <div className={`h-screen ${menuOpen?"min-[320px]:w-full sm:w-[380px]":'w-0'} transition-all ease duration-[800ms] fixed right-0 top-0 overflow-x-hidden flex z-50 `}>
                    <XMarkIcon 
                    onClick={()=>{setMenuOpen(false);setBgGray(false)}} 
                    className="p-2 rounded-full bg-white text-black hover:text-orange-500 font-bold z-50 h-8 cursor-pointer"/>
                    
                    {/* Menu Bar Content */}

                    <div ref={menuRef} className= {`bg-white text-black h-screen min-[320px]:w-full sm:w-[380px]
                     shadow-md pt-8 px-2 overflow-y-auto overflow-x-hidden
                     `}
                     >
                        
                        <div 
                        onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/login?page=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fcourses%2Fseries%2Fcourse-series-eeb9d3`)}
                        className='flex items-center cursor-pointer ml-2 text-orange-500 hover:text-orange-700'>
                            <UserCircleIcon className=' h-10'/>
                            <p className='text-lg font-semibold ml-2'>{langEng?'Login':'लॉगिन करें'}</p>
                        </div> <br/>
                        <hr/>

                        <SingleMenu linkName={'courses'} title={langEng?"Video Courses":'वीडिओ कोर्सेस'}/>
                        <SingleMenu linkName={'books'} title={langEng?'His Books':'उनकी पुस्तकें'}/>
                        <SingleMenu linkName={'circle'} title={langEng?'AP Circle':'ए.पी. सर्किल'}/>
                        <SingleMenu linkName={'enquiry'} title={langEng?"Contact Us":"संपर्क करें "}/>
                        <SingleMenu linkName={'contribute'} title={langEng?"Donate":"योगदान करें"}/><br/>

                        <hr/>
                        <h2 className='text-sm font-bold px-4 py-2 text-gray-600'>{langEng?'MORE':'अधिक जाने'}</h2>
                        <SingleMenu linkName={'prashantadvait-foundation'} title={langEng?"Prashant Advait Foundation":"प्रशांतअद्वैत संस्था"}/>
                        <SingleMenu linkName={'camps'} title={langEng?'Vedant Mahotsav':'वेदांत महोत्सव'}/>
                        <SingleMenu linkName={'online-courses'} title={langEng?'Geeta Course':'गीता कोर्स'}/>
                        <SingleMenu linkName={'invite'} title={langEng?'Talks with Acharya Prashant':'आचार्य प्रशांत संग संवाद'}/>
                        <SingleMenu linkName={'vedant'} title={langEng?'Ghar Ghar Upnishad':'घर घर उपनिषद'}/>
                        <SingleMenu linkName={'ap-intro'} title={langEng?'About Acharya Prashant':'आचार्य प्रशांत के बारे में'}/>
                        <SingleMenu linkName={'media'} title={langEng? 'Media and Public Interaction':'मीडिया व प्रेस प्रकाशनी'}/><br/>

                        <hr/>
                        <h2 className='text-sm font-bold px-4 py-2 text-gray-600'>{langEng?"EXPLORE CATEGORIES":"विषयों को देखें"}</h2>
                        <SingleMenu linkName={'courses/tags/1'} title={langEng?"Vedant - Upnishads":"वेदांत - उपनिषद"}/>
                        <SingleMenu linkName={'courses/tags/2'} title={langEng?"Vedant - Bhagavad Gita":"वेदांत - श्रीमद्भगवद्गीता"}/>
                        <SingleMenu linkName={'courses/tags/3'} title={langEng?"Other Scriptures":"अन्य ग्रन्थ"}/>
                        <SingleMenu linkName={'courses/tags/4'} title={langEng?"Saints and Masters":"संत और दार्शनिक"}/>
                        <SingleMenu linkName={'courses/tags/5'} title={langEng?"Other Streams":"विविध धाराएँ "}/>
                        <SingleMenu linkName={'courses/tags/6'} title={langEng?"Life Questions":"जीवन सम्बंधित प्रश्न"}/><br/>
                        <hr/>
                        <SingleMenu linkName={'technical-support'} title={langEng?"Technical Support":"तकनिकी सहायता"}/><br/>

                    </div>

                    </div>
                

            </ul>
        </div>
    </div>
  )
}

export default Navbar