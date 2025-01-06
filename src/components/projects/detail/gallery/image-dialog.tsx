import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image, { StaticImageData } from "next/image"
import React from "react"

interface ImageProps {
  image: StaticImageData
  title: string
}

function DesktopImage({ image, title }: ImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative aspect-[1920/911] w-full cursor-zoom-in overflow-hidden rounded-lg lg:w-2/3">
          <Image
            src={image.src}
            alt={title + " Desktop Image"}
            fill
            className="object-cover shadow-md transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm font-medium text-zinc-100">
              Click to enlarge
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-auto p-0">
        {/* TO PREVENT RADIX UI ERROR */}
        <DialogTitle className="hidden">{title}</DialogTitle>
        <DialogDescription className="hidden">{title}</DialogDescription>
        <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={title + " Desktop Image"}
            width={1920}
            height={911}
            className="h-auto w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function MobileImage({ image, title }: ImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative mx-auto aspect-[378/819] w-full max-w-sm cursor-zoom-in overflow-hidden rounded-lg lg:w-[14.65%]">
          <Image
            src={image.src}
            alt={title + " Mobile Image"}
            width={image.width}
            height={image.height}
            className="h-full w-auto object-cover shadow-md transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm font-medium text-zinc-100">
              Click to enlarge
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw] p-0">
        {/* TO PREVENT RADIX UI ERROR */}
        <DialogTitle className="hidden">{title}</DialogTitle>
        <DialogDescription className="hidden">{title}</DialogDescription>
        <div className="relative h-full w-auto">
          <Image
            src={image.src}
            alt={title + " Mobile Image"}
            width={378}
            height={819}
            className="mx-auto h-full w-auto object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const imageDialogs = {
  desktop: DesktopImage,
  mobile: MobileImage,
}
