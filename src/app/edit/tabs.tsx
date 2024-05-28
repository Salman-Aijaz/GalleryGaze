"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldUploadButton,CldImage } from 'next-cloudinary';

export function TabsDemo({src}:{src:string}) {
  return (
    <Tabs defaultValue="original" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">GrayScale</TabsTrigger>
        <TabsTrigger value="oil">OilPaint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
      </TabsList>
      <TabsContent value="original">
        <div className="flex gap-7 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      
      <TabsContent value="blur">
        <div className="flex gap-7 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{ blur: "800" }]}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="gray">
        <div className="flex gap-7 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{ grayscale: true }]}
          />
        </div>
      </TabsContent>

      <TabsContent value="oil">
        <div className="flex gap-7 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{ oilPaint: true }]}
          />
        </div>
      </TabsContent>

      
      <TabsContent value="improve">
        <div className="flex gap-7 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{ improve: true }]}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
