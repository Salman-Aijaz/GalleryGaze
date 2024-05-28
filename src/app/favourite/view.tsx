"use client"
import { CldUploadButton,CldImage } from 'next-cloudinary';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { AddTags } from '../gallery/action';
import { useState } from 'react';

const View = ({src,tag,fun}: {src:string , tag:string[]
  ,fun?:any
}) => {
  const [fav ,setfav] = useState(tag.includes("favorite"))
  return (
<div className='relative'>
    <CldImage 
    className='rounded-md'
    width="400"
    height="400"
    src={src}    
    sizes="100vw"
    alt="Description of my image"
  /> 
  <div className='absolute top-1 right-1'
  onClick={()=>{
    fun(src)
    AddTags(src, fav);
    setfav(!fav);
  }}
  >
    {
      fav ?     (<AiFillHeart className="w-8 h-8 cursor-pointer text-red-500"/>)
      :(    <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white  duration-300 hover:text-red-500"/>
      )
    }
  </div>
 </div> 
)
}

export default View