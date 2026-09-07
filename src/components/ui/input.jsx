import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 rounded-xl border border-input bg-white px-4 text-sm text-ink shadow-[0_2px_8px_rgba(61,16,36,0.04)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-2 focus-visible:outline-none focus-visible:border-berry focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
