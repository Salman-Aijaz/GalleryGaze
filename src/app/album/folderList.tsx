import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from './page'
import Link from 'next/link'

const FolderList = ({folder}:{folder:FolderType}) => {
  return (
    <div>
        <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>Please click on view button to see the image</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-end">
        <Link href={`/album/${folder.name}`}>
        <Button>View</Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default FolderList