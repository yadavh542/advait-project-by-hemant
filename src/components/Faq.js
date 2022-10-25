import React, { useState } from 'react'
import Onefaq from './Onefaq'

const Faq = () => {
  const [faqData, setFaqData] = useState();

  useState(()=>{
    const fetchData=async()=>{
      const res=await fetch('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english')
      const parseFaq = await res.json();
      setFaqData(parseFaq);
    }
    fetchData();
  },[])

  return (
    <div className='bg-gray-50'>
        <div className='p-16 grid min-[320px]:grid-cols-1 md:grid-cols-2'>
            <div className='mb-10'>
            <h1 className='font-bold text-2xl mb-4'>FAQs</h1>
            <p>Can’t find the answer you’re looking for? <br/>Reach out to our <span className='font-bold text-orange-500 cursor-pointer'>support</span> team</p>
            </div>

            <div>
              {faqData && faqData?.map(f=>(
                  <Onefaq 
                  key={f.question}
                  answer={f.answer}
                  question={f.question}/>
              ))}
              
            </div>
              
        </div>
    </div>
  )
}

export default Faq