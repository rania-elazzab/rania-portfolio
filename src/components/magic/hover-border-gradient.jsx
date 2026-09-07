import { cn } from "@/lib/utils"

// Aceternity-style gradient wrapper — draws a soft animated gradient
// border that fades in on container hover. Use inside a group.
export function HoverBorderGradient({ children, className, containerClassName, as: Tag = "div" }) {
  return (
    <Tag
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl",
        containerClassName
      )}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(90deg, rgba(141,49,83,0.9), rgba(230,160,184,0.7), rgba(141,49,83,0.9))",
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 0%",
          }}
        />
      </span>
      <div className={cn("relative rounded-[inherit]", className)}>{children}</div>
    </Tag>
  )
}
