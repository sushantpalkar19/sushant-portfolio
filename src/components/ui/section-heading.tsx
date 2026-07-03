import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { Badge } from "@/components/ui/badge";
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
      <Badge className="mb-4 border-primary/30 bg-primary/10 text-foreground">{eyebrow}</Badge>
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
    </motion.div>
  );
}
