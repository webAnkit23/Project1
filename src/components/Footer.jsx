import React from 'react'


export default function Footer() {
    const footer_data =[{
        heading:'Categories',
        list:['Web Builder' ,'Hosting','Data Center ','Robotic-Automation' ]
    },
{
    heading:'Contact',
    list:['Contact','Privacy Policy' ,'Terms of Service' ,'Categories' ,'About']
}]
  return (
    <div className='p-4 mt-10 text-white bg-slate-800 min-h-[500px]'>
        <div className='flex flex-row flex-wrap justify-around pt-20 gap-y-5'>
        {footer_data.map((item,i) =>{
             return <div className='flex flex-col md:inline-block md:flex-row' key={i}>
                  <h1  className='text-lg font-semibold cursor-default hover:text-blue-600'>{item.heading}</h1>
                  <ul className='flex flex-col gap-4 mt-4 font-light'>
                    {item.list.map((l,p) => <li className='cursor-pointer hover:text-blue-500' key={p}><a>{l}</a></li>)}
                  </ul>
             </div>
        })}
        <select className='flex gap-0 bg-transparent hover:text-blue-500 focus:outline-none'>
            <option>United States</option>
            <option>India</option>
        </select>
    </div>
    </div>
    
  )
}
