import React, { useEffect, useRef, useState } from 'react';
import {
    
    ChevronRightIcon,

} from '@heroicons/react/24/outline'
import { useGlobalContext } from '../context';

const Dropdown = ({dropdownRef}) => {
    const[dropdownData, setDropdownData] = useState();
   
    
    
    const{langEng,allSearchOpen, subtypeData, setSubtypeData,
        openSubtype, setOpenSubtype,
    } = useGlobalContext();
    
    

    useEffect(()=>{
        const fetchdropdownData=async()=>{
            const res=await fetch("https://api.acharyaprashant.org/v2/legacy/courses/tags")
            const parseData = await res.json();
            setDropdownData(parseData);
        }
        fetchdropdownData();
    },[])

    

    const handleSelectedDropdown= (tag)=>{
            
            //setOpenSubtype(true);
            let selectedDropdown = [];
            selectedDropdown.push(tag);
  

            if(selectedDropdown[0]==="Vedant - Upanishads"){
                setSubtypeData(dropdownData[1].slice(0,5));
                setOpenSubtype(true);
            }else if(selectedDropdown[0]==="Other Scriptures"){
                setSubtypeData(dropdownData[1].slice(5,25));
                setOpenSubtype(true);
            }else if(selectedDropdown[0]==="Saints and Masters"){
                setSubtypeData(dropdownData[1].slice(25,46));
                setOpenSubtype(true);
            }else if(selectedDropdown[0]==="Other streams"){
                setSubtypeData(dropdownData[1].slice(46,53));
                setOpenSubtype(true);
            }else if(selectedDropdown[0]==="Life Questions"){
                setSubtypeData(dropdownData[1].slice(53,64));
                setOpenSubtype(true);
            }else{
                //setSubtypeData([])
                setOpenSubtype(false);
            }
            
        
        //console.log(selectedDropdown);
    }


    // const handleMouseLeaveFromDropdown = (e)=>{
    //     if(!subtypeData){
    //         setOpenSubtype(false)    
    //     }
    // }
    

    

  return (
    <div 
    ref={dropdownRef}
    onMouseLeave={(e)=>setOpenSubtype(false)}
    className={`${allSearchOpen?`h-[420px] top-[55px] ${openSubtype?"w-[510px] divide-x":"w-[270px]"} ` :'h-0 -top-[555px]'} duration-[900ms] 
    absolute left-[124px] rounded-md bg-white font-semibold border-1 border-gray-200 shadow-md flex justify-start `}>
        
        {/* Left Dropdown */}
        <div className='h-[420px] w-[270px]'> 
            <div className='pt-6 w-[270px]'>
            <p 
            onMouseEnter={()=>setOpenSubtype(false)}
            onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses`)}
            className='pl-6 pr-2 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 font-semibold hover:text-orange-500'>{langEng?'All':'सभी'}</p>

            {dropdownData && dropdownData[0]?.map(d=>(
                <div 
                key={d.tagId}
                
                onMouseEnter={e=>handleSelectedDropdown(d.name.english)} 
                
                onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses/tags/${d.tagId}`)}
                className='text-gray-500 pl-6 pr-2 py-2 hover:bg-gray-100 hover:text-orange-500 cursor-pointer flex justify-between'> 
                <p 
                className='font-semibold'>{langEng?d.name.english:d.name.hindi}</p>
                {d.name.english==="Vedant - Bhagavad Gita"?"" : <ChevronRightIcon className='h-4'/>}
                </div>
            ))}

            </div>  

        </div>

        {/* Right Dropdown */}


        <div 
        
        className={`h-[420px] overflow-y-auto overflow-x-hidden ${openSubtype?'w-[300px]':'w-0'}`}>
            <div className='py-4 w-full'>
            
            {subtypeData && subtypeData?.map(d=>(
                <p 
                // onMouseEnter={()=>setOpenSubtype(true)}
                // onMouseLeave={()=>setOpenSubtype(false)}
                onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses/tags/${d.tagId}`)}
                key={d.name.english} 
                className='pl-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 font-semibold hover:text-orange-500'>{langEng?d.name.english:d.name.hindi}</p>
            ))
            
            }
            </div>
        </div>
     </div>
  )
}

export default Dropdown