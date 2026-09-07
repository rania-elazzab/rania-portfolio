import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Shared section heading — consistent "dev-girl" style across all sections.
export function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  return (
    <div
      className={cn(
        "reveal fade-up mb-14 flex flex-col",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <Badge variant="rose" size="sm" className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-relaxed text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
