import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full gap-x-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] transition-colors shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-berry to-plum-700 text-white shadow-sm",
        soft: "bg-berry/10 text-berry",
        rose: "bg-rose-soft/50 text-berry",
        outline: "border border-line text-ink-soft",
        outlineBerry: "border border-berry/30 text-berry bg-berry/5",
        plum: "bg-plum-700/10 text-plum-700",
      },
      size: {
        default: "h-7 px-3",
        sm: "h-6 px-2.5",
        lg: "h-8 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
