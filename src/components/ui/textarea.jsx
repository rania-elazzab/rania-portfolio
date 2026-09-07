import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-ink shadow-[0_2px_8px_rgba(61,16,36,0.04)] transition-colors placeholder:text-muted-2 focus-visible:outline-none focus-visible:border-berry focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
