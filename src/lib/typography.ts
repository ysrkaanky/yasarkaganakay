import { cva, type VariantProps } from "class-variance-authority"

export const headingVariants = cva("font-title scroll-m-20", {
  variants: {
    variant: {
      h1: "text-5xl lg:text-6xl",
      h2: "text-4xl tracking-tight",
      h3: "text-3xl tracking-tight",
      h4: "text-2xl tracking-tight",
      h5: "text-xl tracking-tight",
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    variant: "h2",
    weight: "bold",
  },
})

export const bodyVariants = cva("font-body", {
  variants: {
    variant: {
      default: "text-foreground",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-light leading-none",
      muted: "text-muted-foreground",
    },
    maxWidth: {
      prose: "max-w-prose",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type HeadingVariants = VariantProps<typeof headingVariants>
export type BodyVariants = VariantProps<typeof bodyVariants>
