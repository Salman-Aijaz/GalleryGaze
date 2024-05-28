"use client"
import { CldUploadButton,CldImage } from 'next-cloudinary';
import {AiOutlineHeart,AiFillHeart,AiOutlineEdit} from 'react-icons/ai'
import { AddTags } from './action';
import { useState } from 'react';
import Link from 'next/link';
import AlbumDialog from './albumDialog';

const View = ({src,tag}: {src:string , tag:string[]}) => {
  const [fav ,setfav] = useState(tag.includes("favorite"))
  // console.log(src)
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

  <div className='absolute top-1 left-1'>
<Link href={`/edit?publicId=${src}`}>
    <AiOutlineEdit className="w-8 h-8 cursor-pointer text-white  duration-300 hover:text-red-500"/>
  </Link>
  </div>

{/* ADD TO ALBUM */}
  <div className='absolute bottom-1 left-1'>
    <AlbumDialog imageData={src}/>
  </div>
 </div> 
)
}

export default View