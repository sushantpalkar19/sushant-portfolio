import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span className="h-px w-8 bg-gradient-primary" aria-hidden="true" />
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted">{description}</p>
    </motion.div>
  );
}
