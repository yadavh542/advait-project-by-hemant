import React, { useEffect, useState } from 'react'
import OtherCourse from './OtherCourse'

const OtherCourses = () => {
  const[details, setDetails] = useState();

    useEffect(()=>{

       const fetchDetails = async ()=> {

        const response = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
        const parseData= await response.json()
        setDetails(parseData)
    };
        fetchDetails();
    },[])

  return (
    <div className='min-[320px]:mx-4 md:mx-7 mt-8'>
        <h1 className='text-2xl font-semibold text-gray-600 mb-2'>Other Helpful Courses (15)</h1>
        <hr/>

        <div className='grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {
            details && details?.relatedContent.map((r)=>(
              <OtherCourse
              title={r.title}
              subtitle={r.subtitle}
              noOfCourses={r.coursesCount}
              image={`${r.thumbnail.domain}/${r.thumbnail.basePath}/10/${r.thumbnail.key}`}
              />
            ))
          }
        </div>
        
    </div>
  )
}

export default OtherCourses