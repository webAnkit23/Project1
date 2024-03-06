import React, { useEffect, useState } from 'react'

import ItemsCard from './ItemsCard';
export default function Display({data}) {
   
    console.log(data);
  return (
    <div className='flex flex-col gap-5 mt-10 '>
       {data&&data.map((item,i) =>{
              return <ItemsCard key ={i} item ={item}/>
       })}
    </div>
  )
}
