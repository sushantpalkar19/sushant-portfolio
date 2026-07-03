import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated",
        className,
      )}
      {...props}
    />
  );
}
