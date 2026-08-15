import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "group/card relative overflow-hidden rounded-lg border border-border bg-card/85 p-6 shadow-card backdrop-blur transition-all duration-200 hover:border-primary/40 dark:bg-card/80 dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)]",
        className,
      )}
      {...props}
    />
  );
}
