import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-lg border border-border bg-background/80 px-4 text-sm text-foreground placeholder:text-muted transition duration-300 hover:border-slate-500 focus:border-primary/70",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
