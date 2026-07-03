import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import type { StatItem } from "@/types";
import { Card } from "@/components/ui/card";

type StatCardProps = {
  stat: StatItem;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <Card className="h-full p-5">
        <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
        <p className="mt-3 text-sm font-medium text-foreground">{stat.label}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{stat.description}</p>
      </Card>
    </motion.div>
  );
}
