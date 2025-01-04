import Link from "next/link"
import React from "react"
import { GiMoebiusTriangle } from "react-icons/gi"
import { Text } from "./text"

export default function Logo() {
  return (
    <Link href={"/"} className="font-emphasize flex items-center text-4xl">
      <GiMoebiusTriangle size={"1em"} className="text-primary" />
      <Text
        as="span"
        className="font-emphasize ml-2 inline-block text-xl font-bold text-primary"
      >
        KAGAN
      </Text>
      <span className="sr-only">Home</span>
    </Link>
  )
}
