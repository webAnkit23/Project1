import React, { useRef } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import RelatedCard from './RelatedCard';
export default function Related({data}) {
  
    
  return (
    <>

    <div className=' mt-10 w-[100%] relative'>
        <h1 className='text-[40px]'>Best Related Search for you</h1>
        <div  className=' flex gap-6 pl-5 pr-5 relative pt-3 text-nowrap overflow-auto mb-[100px]  scroll-smooth'>
          {data.map((item,i) =>{
            return <RelatedCard key={i} item={item}/>
          })}
    </div>
    </div>
    
    </>
  )
}
