import React, { useEffect, useRef, useState } from 'react';
import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
    XMarkIcon,
    ArrowLeftIcon,
} from '@heroicons/react/24/outline'
import Dropdown from './Dropdown';
import { useGlobalContext } from '../context';

const Searchbar = () => {
  const[allSearchOpen, setAllSearchOpen] = useState(false);
  const{toggleBgGray,bgGray,langEng,setSearchInput,searchInput,searchOnPhone,setSearchOnPhone} = useGlobalContext();
  const dropdownRef = useRef();
  

  useEffect(()=>{
    let handler=(e)=>{
        if(!dropdownRef.current.contains(e.target)){
            setAllSearchOpen(false);
            
            toggleBgGray();
        }
        
    };
    document.addEventListener("mousedown",handler);
    return()=>{
        document.removeEventListener("mousedown",handler)
    }
})
  

  const handleAllSearchOpen=(e)=>{
    setAllSearchOpen(!allSearchOpen);
    toggleBgGray();
  }

  const handleSearchInput=(e)=>{
    e.preventDefault()
    if(!searchInput){
      window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses`)
    }else{
      window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses/search?q=${searchInput}`)
    }
  }

  return (
    <div className='shadow flex justify-between py-2 items-center z-50'>
        {/* Searrch Bar Left */}
        <div className='flex justify-center items-center'>
            {!searchOnPhone && <img
            onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses`)}
            className='h-6 min-[320px]:ml-4 md:ml-7 cursor-pointer md:mr-5'
            src='https://acharyaprashant.org/images/ic_courses.png'
            alt='courses'
            />}

            {/* Search Bar */}
            <div className='flex justify-center items-center min-[320px]:hidden md:flex'>  

            {/* Dropdown All*/}
            <div 
            onClick={handleAllSearchOpen}
            className='text-xs font-semibold text-gray-500 flex items-center border-2 px-3 py-2 cursor-pointer'>
                <p>{langEng?'All':'सभी'}</p>
                <ChevronDownIcon className='h-4 ml-0.5'/>
            </div>

            <form onSubmit={handleSearchInput} >
            <input
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className={`border-2 border-gray-200 px-4 py-1 outline-none md:w-64 lg:w-96 ${bgGray && "bg-gray-300"}`}
            type='text'
            placeholder={langEng?'Search for courses': 'कोर्स खोजें'}
            />
            <button type='submit' className='hidden'></button>
            </form>

            {/* Cross icon */}
              {searchInput && <XMarkIcon 
              onClick={()=>setSearchInput("")}
              className='text-blue-400 h-4 font-bold absolute md:left-[410px] lg:left-[540px]'/>}
            <div 
            onClick={handleSearchInput}
            className='px-2 py-2.5 bg-orange-200 cursor-pointer rounded-r-md'>
            
              
            <MagnifyingGlassIcon className='h-4 font-bold text-gray-700'/>
            </div>
            </div>

            {/* search on Phone True */}
            {searchOnPhone && <><ArrowLeftIcon
             onClick={()=>setSearchOnPhone(false)}
             className='text-orange-400 h-5 md:hidden font-bold cursor-pointer px-4'
            />
            <form onSubmit={handleSearchInput} >
            <input
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className={`px-2 py-1 outline-none flex-1 ${bgGray && "bg-gray-300"}`}
            type='text'
            placeholder={langEng?'Search for courses': 'कोर्स खोजें'}
            />
            <button type='submit' className='hidden'></button>
            </form></>
            }
        </div>

        {/* Dropdown open */}
        {allSearchOpen && <Dropdown dropdownRef={dropdownRef}/>}

        {/* Search Bar Right - Login*/}
        {!searchOnPhone && 
        <div className='flex items-center cursor-pointer '> 
          <MagnifyingGlassIcon onClick={()=>setSearchOnPhone(true)} className='h-4 font-bold text-gray-800 md:hidden mr-2'/>
          <button 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/login?page=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fcourses%2Fseries%2Fcourse-series-eeb9d3`)}
          className='bg-orange-400 hover:bg-orange-600 rounded-md text-sm font-bold text-white px-4 py-2 min-[320px]:mr-4 md:mr-7'>{langEng?'Login':'लॉगिन करें'}

          </button>    
        </div>}

    </div>
  )
}

export default Searchbar