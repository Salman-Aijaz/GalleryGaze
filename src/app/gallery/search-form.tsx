"use client"
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const SearchForm = ({mySearch}:{mySearch:string}) => {
    const [search,setSearch]=useState(mySearch ??"");
    const router = useRouter()
   

    useEffect(()=>{
setSearch(mySearch)
    },[mySearch])

  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        router.replace(`/gallery?search=${encodeURIComponent(search)}`)
        router.refresh()
        }}>
      <Label htmlFor="search" className=" pl-4">
             Search 
            </Label>
            <div className='flex gap-2'>
            <Input
              id="search"
              onChange={(e:any)=> setSearch(e.target.value)}
              value={search}
              placeholder="search"
              className="col-span-3 "
            />
            <Button type='submit'>
                Search
            </Button>
            </div>

    </form>
  )
}

export default SearchForm