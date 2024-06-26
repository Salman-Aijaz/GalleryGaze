"use client"
import { MdLibraryAdd } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { FolderCreate } from "./action";


const AlbumDialog = ({imageData}:{imageData:string}) => {

const [album,setAlbum]=useState("");
const [open,setOpen]=useState(false)

  return (
    <div>
    <Dialog open={open}  onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className='p-0 m-0 '>
        <MdLibraryAdd className='w-8 h-8 cursor-pointer text-white  duration-300 hover:text-red-500'/>
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Add your favourite picture in the Album. Click Add to Album when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="albumName" className="text-right">
             Name
            </Label>
            <Input
              id="albumName"
              onChange={(e:any)=> setAlbum(e.target.value)}
              value={album}
              placeholder="Album Name"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={async()=> {
            setOpen(false)
            await FolderCreate(album,imageData)
          }}>Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AlbumDialog