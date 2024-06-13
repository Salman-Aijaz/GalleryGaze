"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

export function TabsDemo({ src }: { src: string }) {
  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [activeTabs, setActiveTabs] = useState("original");

  return (
    <Tabs
      defaultValue="original"
      className="w-fit md:w-full"
      onValueChange={(value) => setActiveTabs(value)}
    >
      <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-2 h-full md:h-10">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">GrayScale</TabsTrigger>
        <TabsTrigger value="oil">OilPaint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
        <TabsTrigger value="gen-ai">Gen-Ai Fill</TabsTrigger>
      </TabsList>

      {activeTabs === "gen-ai" && (
        <div className="flex gap-2">
          <Input
            className="pt-2 w-fit "
            value={pendingPrompt}
            onChange={(e) => setPendingPrompt(e.target.value)}
          />
          <Button onClick={() => setPrompt(pendingPrompt)}>Enter</Button>
        </div>
      )}

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

      <TabsContent value="gen-ai">
        <div className="flex gap-7  justify-center py-8">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          {prompt && (
            <CldImage
              width="250"
              height="250"
              src={src}
              sizes="100vw"
              alt="Description of my image"
              fillBackground={{
                prompt,
              }}
            />
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
