import React from 'react'

export default function RelatedCard({item}) {
  return (
    <div className='p-3 rounded-lg shadow-lg r bg-gray-50'>
    
            <img className='sm:w-[300px] h-[200px] max-w-none rounded-lg mb-3' src={item.images[1]}/>
            <div>
               <div className='flex gap-3'>
                  <span className='pl-2 pr-2 bg-blue-100 rounded'>20% OFF</span>
                  <span className='pl-2 pr-2 bg-blue-100 rounded'>Limited Offer</span>
               </div>
               <h1 className='mt-2 text-lg font-semibold text-center'>{item.title}</h1>
               <div className='pb-[30px] flex flex-col '>
                <span className='text-gray-500 sm:w-[290px] text-wrap h-[50px] overflow-auto '>{item.description}</span>
                <span className='text-[20px] '>${item.price} <span className='text-[15px] text-red-500'>(20% Off)</span></span>
               </div>
               <button className=' hover:scale-105 duration-150 shadow h-[50px]  bg-blue-700 text-white text-[18px] rounded p-3  w-[300px]'>View Deal</button>
            </div>
            

        
    </div>
  )
}
