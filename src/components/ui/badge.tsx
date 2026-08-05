import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs font-medium text-muted shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
