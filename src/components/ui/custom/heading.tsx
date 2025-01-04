import * as React from "react"
import { cn } from "@/lib/utils"
import { headingVariants, type HeadingVariants } from "@/lib/typography"

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    HeadingVariants {
  as?: "h1" | "h2" | "h3" | "h4"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp = as || "h2"
    return (
      <Comp
        className={cn(headingVariants({ variant: variant || as }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Heading.displayName = "Heading"

export { Heading }
