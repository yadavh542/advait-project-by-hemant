import React from 'react'
import { useGlobalContext } from '../context'

const SingleMenu = ({title,linkName}) => {
  const{langEng} = useGlobalContext();

  return (
    
        <p 
        onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/${linkName}`)}
        className='px-4 py-2 rounded-md text-gray-500 text-sm hover:text-gray-600 font-semibold cursor-pointer hover:bg-gray-100'>{title}</p>

  )
}

export default SingleMenu