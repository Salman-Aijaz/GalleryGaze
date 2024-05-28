"use client"
import { CldUploadButton,CldImage } from 'next-cloudinary';
import { useState } from 'react';
// import { CldImage } from 'next-cloudinary';

interface UploadImage {
  event: "success";
  info: { public_id: string};
}


export default function Home() {
  // use stat to change the image
  const [imageId , setImageId] = useState("cld-sample-4");

    return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
      {/*upload button  */}
      <CldUploadButton 
      uploadPreset="cyfyzshr"
       onUpload={(result)=>{
        let res = result as UploadImage;
        setImageId(res.info.public_id);
      }}
       />
       {/* view img */}
      <CldImage 
  width="400"
  height="400"
  src={imageId}    
  sizes="100vw"
  alt="Description of my image"
/>
    </main>
  )
}
