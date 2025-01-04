import * as React from "react"
import { cn } from "@/lib/utils"
import { bodyVariants, type BodyVariants } from "@/lib/typography"

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    BodyVariants {
  as?: "p" | "span" | "div"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, maxWidth, ...props }, ref) => {
    const Comp = props.as || "p"
    return (
      <Comp
        className={cn(bodyVariants({ variant, maxWidth }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = "Text"

export { Text }
