"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export function ProjectItem(props: { nth: number; className?: string }) {
  const { nth } = props
  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-lg border bg-muted/40 hover:bg-muted/80",
        props.className,
      )}
    >
      <Link href={`/projects/${nth + 1}`} className="absolute inset-0">
        <span className="sr-only">View Project {nth + 1}</span>
      </Link>
    </div>
  )
}
