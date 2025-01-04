import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

interface ContainerPros {
  children?: React.ReactNode
  tag?: keyof React.JSX.IntrinsicElements
  className?: string
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none"
}

const Container = forwardRef<HTMLElement, ContainerPros>((props, ref) => {
  const Tag = (props.tag || "div") as React.ElementType
  return (
    <div className="odd:bg-neutral-50 even:bg-neutral-200/50 dark:odd:bg-background dark:even:bg-neutral-500/5">
      <Tag
        ref={ref}
        className={cn(
          "container mx-auto px-4",
          {
            "py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24":
              props.padding === "md" || !props.padding,
            "py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32": props.padding === "lg",
            "py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36": props.padding === "xl",
            "py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40":
              props.padding === "2xl",
            "": props.padding === "none",
          },
          props.className,
        )}
      >
        {props.children}
      </Tag>
    </div>
  )
})

Container.displayName = "Container"

export default Container
