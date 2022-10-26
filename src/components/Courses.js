import React, { useEffect, useState } from 'react'
import Course from './Course'

const Courses = () => {
  const[details, setDetails] = useState();

    useEffect(()=>{

       const fetchDetails = async ()=> {

        const response = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
        const parseData= await response.json()
        setDetails(parseData)
    };
        fetchDetails();
    },[])

    const convertToHour=(decimalHours)=>{ 
    const n = new Date(0,0);
    n.setMinutes(+Math.round(decimalHours * 60)); 
    const hours = n.getHours()
    return hours;
  }
    const convertToMinute=(decimalMinutes)=>{
    const n = new Date(0,0);
    n.setMinutes(+Math.round(decimalMinutes * 60)); 
    const minutes = n.getMinutes()
    return minutes;
    }

  return (
    <div className='min-[320px]:mx-4 md:mx-7 mt-8'>
        <h1 className='text-2xl font-semibold text-gray-600 mb-4'>Courses ({details?.details.coursesCount})</h1>
        <hr/>
        <div className='grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {details && details?.courses.map((c,i)=>(
            
            <Course 
            key={c.id}
            courseNo={i+1}
            title={c.title}
            subtitle={c.subtitle}
            amount={c.amount}
            language={c.language}
            courseHours={convertToHour(c.courseHours)}
            courseMinutes={convertToMinute(c.courseHours)}
            />
            
        ))}
        </div>
    </div>
  )
}

export default Courses