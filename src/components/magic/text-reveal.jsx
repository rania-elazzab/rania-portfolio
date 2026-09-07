import { motion } from "motion/react"

import { cn } from "@/lib/utils"

// Aceternity-style TextRevealEffect — reveals text word by word with
// a fade + blur + gradient-to-transparent transition. Renders once.
export function TextRevealEffect({
  text,
  className,
  segmentClassName,
  from = "#8d3153",
  to = "#561830",
  duration = 0.55,
}) {
  const words = text.split(/\s+/)

  return (
    <motion.div
      className={cn("inline", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)", y: 8 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: { duration },
            },
          }}
          className={cn("inline-block", segmentClassName)}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
