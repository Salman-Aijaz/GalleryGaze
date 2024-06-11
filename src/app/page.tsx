"use client";
import { Button } from '@/components/ui/button';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';
import HeroImage from "../Logo/hero_section.jpg";

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

export default function Home() {

  const [imageId, setImageId] = useState("cld-sample-4");


  return (
    <div className='flex flex-col justify-around py-20 xl:flex-row'>
      <div className='p-4'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Gallery Gaze
        </h1>
        <p className="my-4 font-sans text-base">&quot;Gaze At Beauty&quot;</p>
        <p className="my-4 font-sans text-base sm:w-96">
          Every picture carries its own unique and profound meaning, conveying emotions and stories that words alone often cannot express.
        </p>
        <CldUploadButton onUpload={(result)=>{
          let res = result as UploadImage
          setImageId(res.info.public_id)
        }} uploadPreset="your-upload-preset" className='text-black rounded-md text-sm font-medium  bg-primary h-10 px-4 py-2'>
          Upload Image
        </CldUploadButton>
      </div>
      <div className='pt-4 pl-2'>
        {imageId ? (
          <CldImage
            width="500"
            height="700"
            src={imageId}
            sizes="100vw"
            alt="Uploaded Image"
          />
        ) : (
          <Image src={HeroImage} alt="Default Hero Image" width="500" height="700" />
        )}
      </div>
    </div>
  );
}
