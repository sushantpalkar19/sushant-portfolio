import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-lg border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted transition-colors duration-200 hover:border-primary/40 focus:border-primary/70",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
