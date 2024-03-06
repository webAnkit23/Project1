import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
export default function BreadCrumbs() {
    const crumbs =['Home' ,'search' ,'products' ,'details'];
  return (
    <div className='flex flex-wrap gap-3 mt-5'>
        {crumbs.map((crumb,i) =>{
            return <div key={i} className='flex items-center gap-3 text-[15px]'>
                <span className={` font-semibold cursor-default hover:underline decoration-sky-600 ${i==crumbs.length-1&&'text-gray-400'}`}>{crumb}</span>
                   {i!=crumbs.length-1&& <IoIosArrowForward />}
                </div>
        })}
   </div>
  )
}
