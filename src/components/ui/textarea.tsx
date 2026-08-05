import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-36 w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-200 hover:border-primary/40 focus:border-primary/70",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
