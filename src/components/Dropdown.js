import React, { useEffect, useState } from 'react';
import {
    
    ChevronRightIcon,

} from '@heroicons/react/24/outline'

const Dropdown = () => {
    const[dropdownData, setDropdownData] = useState();
    const[openSubtype, setOpenSubtype] = useState(false);
    const[subtypeData, setSubtypeData] = useState([]);
    

    useEffect(()=>{
        const fetchdropdownData=async()=>{
            const res=await fetch("https://api.acharyaprashant.org/v2/legacy/courses/tags")
            const parseData = await res.json();
            setDropdownData(parseData);
        }
        fetchdropdownData();
    },[])

    // const handleMouseLeave=(e)=>{
        
    //     setSubtypeData([]);
    // }

    const handleSelectedDropdown= (tag)=>{
            setOpenSubtype(true);

            let selectedDropdown = [];
            selectedDropdown.push(tag);
           

            if(selectedDropdown[0]==="Vedant - Upanishads"){
                setSubtypeData(dropdownData[1].slice(0,5))
            }else if(selectedDropdown[0]==="Other Scriptures"){
                setSubtypeData(dropdownData[1].slice(5,25))
            }else if(selectedDropdown[0]==="Saints and Masters"){
                setSubtypeData(dropdownData[1].slice(25,46))
            }else if(selectedDropdown[0]==="Other streams"){
                setSubtypeData(dropdownData[1].slice(46,53))
            }else if(selectedDropdown[0]==="Life Questions"){
                setSubtypeData(dropdownData[1].slice(53,64))
            }else{
                setSubtypeData([])
            }
            
        
        //console.log(selectedDropdown);
    }

    

  return (
    <div 
    className={`h-[420px] ${openSubtype?"w-[510px]":"w-[270px]"} absolute left-[124px] top-[100px] rounded-md bg-white font-semibold border-1 border-gray-200 shadow-md flex justify-start`}>
        
        {/* Left Dropdown */}
        <div className='h-[420px] w-[270px]'> 
            <div className='pt-6 pl-4 w-[270px]'>
            <p className='pl-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 font-semibold hover:text-orange-500'>All</p>

            {dropdownData && dropdownData[0]?.map(d=>(
                <div className='text-gray-500 px-4 py-2 hover:bg-gray-100 hover:text-orange-500 cursor-pointer flex justify-between'> 
                <p 
                key={d.tagId}
                onMouseEnter={e=>handleSelectedDropdown(d.name.english)} 
                className='font-semibold'>{d.name.english}</p>
                {d.name.english==="Vedant - Bhagavad Gita"?"" : <ChevronRightIcon className='h-4'/>}
                </div>
            ))}

            </div>  

        </div>

        {/* Right Dropdown */}

        <div className='h-[420px] overflow-y-auto overflow-x-hidden w-[300px]'>
            <div className='pt-6 w-full ml-2'>
            
            {subtypeData && subtypeData?.map(d=>(
                <p key={d.name.english} className='pl-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 font-semibold hover:text-orange-500'>{d.name.english}</p>
            ))
            
            }
            </div>
        </div>
     </div>
  )
}

export default Dropdown