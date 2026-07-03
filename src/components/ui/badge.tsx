import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-muted",
        className,
      )}
      {...props}
    />
  );
}
