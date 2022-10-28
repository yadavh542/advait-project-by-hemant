import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';
import Onefaq from './Onefaq'

const Faq = () => {
  const [faqData, setFaqData] = useState();
  const{langEng} = useGlobalContext();

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch(`https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=${langEng?'english':'hindi'}`)
      const parseFaq = await res.json();
      setFaqData(parseFaq);
    }
    fetchData();
  },[langEng])

  return (
    <div className='bg-gray-50'>
        <div className='p-16 grid min-[320px]:grid-cols-1 md:grid-cols-2'>
            <div className='mb-10'>
            <h1 className='font-bold text-2xl mb-4'>{langEng?'FAQs':'अक्सर पूछे जाने वाले प्रश्न'}</h1>
            <p>{langEng?'Can’t find the answer you’re looking for?':'आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है?'} <br/>{langEng?'Reach out to our':'कृपया हमारी'} <span onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/technical-support`)} className='font-bold text-orange-500 cursor-pointer'>{langEng?'support':'सपोर्ट'}</span> {langEng?'team':'टीम से संपर्क करे'}</p>
            </div>

            <div>
              {faqData && faqData?.map(f=>(
                  <Onefaq 
                  key={f.question}
                  answer={f.answer.replace("<p>","").replace("</p>","")}
                  question={f.question}/>
              ))}
              
            </div>
              
        </div>
    </div>
  )
}

export default Faq