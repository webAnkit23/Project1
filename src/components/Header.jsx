import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import BreadCrumbs from './BreadCrumbs';
export default function Header() {
    const util =['Tools' ,'AWS builder' ,'start Build' ,'Build suplies' ,'Tooling' ,'BlueHosting'];
  return (
    <header className='mt-[25px]'>
        <h1 className=' font-semibold text-[30px]  md:text-[40px]'>Best Website devoloper in the US</h1>
        <div className='flex flex-col items-baseline justify-between p-2 mt-2 border-t-2 border-b-2 sm:flex-row sm:items-center'>
            <p className='flex flex-col gap-3 sm:flex-row'>
               <span className='flex items-center gap-1'><FaRegCircleCheck /> Last Updated - February,2020</span>
               <span className='flex items-center gap-1'><CiCircleInfo /> Advertising Disclosure</span>
            </p>
            <select className ='pl-5 mt-2 text-gray-500 focus:outline-none sm:0 sm:p-0'>
                <option>Top Relevent</option>
            </select>
        </div>
         <div className='pl-1 flex flex-wrap cursor-default mt-3 gap-y-5 gap-x-10 text-nowrap text-[20px]'>
            {util.map((item,i) =><span className='text-gray-500 hover:text-blue-600' key={i}>{item}</span>)}
         </div>
         <BreadCrumbs />
    </header>
  )
}
