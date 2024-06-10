import React from "react";
import { Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"
import logo from "../Logo/G-removebg-preview.png"  
import Image from "next/image";
import text from "../Logo/G__1_-removebg-preview.png"
import Link from "next/link";
const Navbar = () => {
  return(     
    <div className="flex-col md:flex">
  <div className="border-b">
    <div className="flex h-16 items-center px-4">
      <Link href={"/"} className="text-3xl font-bold tracking-tight">Gallery Gaze</Link>
      <div className="ml-auto flex items-center space-x-4">   
     <Image src={logo} alt="Logo" className="w-[80px] h-[80px] rounded-full shadow-lg"/>
</div>

    </div>
  </div>
  </div>
  );
};

export default Navbar;