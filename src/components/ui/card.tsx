import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 22px 60px rgb(15 23 42 / 0.14)",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "group/card relative overflow-hidden rounded-lg border border-border bg-card/85 p-6 shadow-card backdrop-blur transition-colors duration-200 hover:border-primary/40 dark:bg-card/80",
        className,
      )}
      {...props}
    />
  );
}
