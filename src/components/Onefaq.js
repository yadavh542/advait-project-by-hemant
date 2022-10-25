import React, { useState } from 'react';
import {
    
    ChevronDownIcon,
    ChevronUpIcon
} from '@heroicons/react/24/outline'

const Onefaq = ({question,answer}) => {
    const[open, setOpen] =  useState(false);
  return (
    <div>
        <div onClick={e=>setOpen(!open)} className='mb-5 mt-2 cursor-pointer flex justify-between'>
            <h2 className='font-bold text-gray-600'>{question}</h2>
            {open?<ChevronUpIcon className='h-5 text-gray-500 text-sm'/>:<ChevronDownIcon className='h-5 text-gray-500 text-sm'/>}
        </div>
        { open && <div className='mb-8'><p>{answer}</p></div>}
        <hr/>
    </div>
  )
}

export default Onefaq