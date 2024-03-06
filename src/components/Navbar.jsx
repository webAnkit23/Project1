import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
    const [showNav ,setShowNav] = useState(false);
    const handleClick =() =>{
      alert('page not created yet');
      setShowNav(prev=>!prev);
    }
  return (
    <div className="container-full  text-white bg-slate-800 flex p-3 items-center md:justify-center gap-[50px]">
        <div className='flex items-center justify-center gap-1 p-2 bg-white rounded-md'>
           <IoSearchOutline color='black' size={30}/>
           <input type='text' className='text-black focus:outline-none md:w-[250px]' placeholder='Enter Keywords' />
           </div>
           <ul className={`${!showNav?'md:flex scale-0  translate-y-[-200%] ':'flex  translate-y-0'} duration-300 md:transform-none flex-col absolute w-[100%] right-0 md:w-[auto] left-0 bg-black md:bg-transparent top-[70px]  items-center md:flex-row  md:static list-none flex gap-[40px] lg:gap-[50px] `}>
           <li onClick={handleClick} className='duration-150 cursor-pointer hover:text-blue-500'>Containers</li>
           <li onClick={handleClick} className='duration-150 cursor-pointer hover:text-blue-500'>Website Builders</li>
           <li onClick={handleClick} className='duration-150 cursor-pointer hover:text-blue-500'>Today's deals</li>
           </ul>
           <div onClick={() => setShowNav(prev =>!prev)} className='absolute rounded-full top-5 right-2 md:hidden '>
            { !showNav?<FaBars size={30} color='white'/>:<RxCross2 size={30} color='white '/>}
           </div>
    </div>
  )
}
