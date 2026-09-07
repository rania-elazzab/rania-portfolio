import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-berry to-plum-700 text-white shadow-[0_12px_28px_rgba(86,24,48,0.28)] hover:shadow-[0_20px_44px_rgba(86,24,48,0.42)] hover:-translate-y-0.5",
        outline:
          "border border-line bg-transparent text-ink hover:border-berry hover:text-berry hover:bg-berry/5",
        ghost: "border border-line bg-transparent text-ink hover:bg-berry/5",
        soft:
          "bg-berry/10 text-berry hover:bg-berry/20",
        white:
          "bg-white text-berry hover:bg-rose-soft/60",
      },
      size: {
        default: "h-14 px-8",
        sm: "h-11 px-5 text-[10px]",
        lg: "h-16 px-10",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
