import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        secondary2:
          "border-transparent dark:bg-neutral-800 bg-neutral-200 text-secondary-foreground hover:bg-neutral-200/50",
        neutral:
          "border-transparent dark:bg-neutral-800 bg-neutral-200 text-secondary-foreground dark:hover:bg-neutral-800/80 hover:bg-neutral-200/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground dark:hover:bg-neutral-800 hover:bg-neutral-200",
        outline2: "text-foreground dark:bg-[#101010] bg-[#f5f5f5] dark:hover:bg-neutral-900 hover:bg-neutral-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
