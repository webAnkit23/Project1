import React from 'react'
import { CiTrophy } from "react-icons/ci";
import { IoDiamondSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
export default function ItemsCard({item}) {

    const getheading=(rat) =>{
      let heading ='Excellent';
      if(Number(rat)>4.5){
        heading='Exceptional'
      }
      return heading;
    }
  return (
    <div className='flex flex-col justify-between gap-10 p-4 shadow lg:text-wrap lg:flex-row'>
    <div className='flex flex-col gap-4'>
        <div className='flex items-center w-[150px] justify-center p-2 bg-orange-500 rounded gap-2 text-white text-[20px]'>
            <IoDiamondSharp />Best choice
        </div>
        <div className='p-2 bg-gray-300 rounded-full shadow w-[30px] h-[30px] flex items-center justify-center'>{item.id}</div>
        <div className='flex flex-col items-center justify-center'>
            <img className='w-[350px]' src={item?.images[2]}></img>
            <div className='mt-3 text-gray-500'>{item?.title}</div>
        </div>
    </div>
    <div className='flex flex-col gap-2 text-gray-500'>
        <div className='text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit-<span className='font-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quas ad veritatis minima fugiat a, dolorum ipsum, dolorem et assumenda aspernatur saepe iste. Molestias, quod dolorem esse maxime voluptates hic!</span></div>
            <div className='mt-2 text-black'>Main Highlights</div>
            <span className='ml-4 font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus sunt inventore facere, blanditiis consequatur id placeat tempore repellat nesciunt. Blanditiis nam quidem esse nulla error, id maiores soluta perferendis.</span>
            <button className='flex items-center mt-3 text-blue-500 bg-transparent'>Show More<IoIosArrowDown /></button>
    </div>
    <div className='flex flex-col items-center justify-around h-[250px] gap-4'>
        <div className='flex flex-col items-center gap-2 justify-center p-5 w-[130px] bg-blue-300 rounded-lg card-blur'>
            <span className='text-[30px]'>{item.rating}</span>
             <span className='text-[20px] text-gray-700 font-semibold'>{getheading(item.rating)}</span>
            <span className='flex'>
                <IoStar  color='#fbbe4e'/>
                <IoStar   color= '#fbbe4e'/>
                <IoStar  color= '#fbbe4e'/>
                <IoStarHalfOutline    color= '#fbbe4e' />
                <IoStarOutline />
            </span>
            
        </div>
        <button className='p-3 hover:scale-110 duration-150 bg-blue-700 rounded-lg w-[230px] text-white text-[20px]'>View</button>
    </div>
</div>
  )
}
