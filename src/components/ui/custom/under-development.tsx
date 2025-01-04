import Image from "next/image"
import React from "react"
import { Heading } from "./heading"

export default function UnderDevelopment() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute left-1/2 top-1/2 w-[110%] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-black/75 py-8">
        <Heading
          as={"h1"}
          className="font-emphasize whitespace-nowrap text-center text-lg leading-relaxed tracking-wider text-white drop-shadow-lg sm:text-3xl lg:text-5xl"
        >
          UNDER DEVELOPMENT
        </Heading>
      </div>
      <Image
        className="h-full object-cover"
        src={"/under_development.webp"}
        width={1900}
        height={900}
        priority
        alt="Under Development"
      />
    </div>
  )
}
