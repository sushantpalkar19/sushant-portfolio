import { motion } from "framer-motion";
import type { SocialLink } from "@/types";
import { cn } from "@/utils/cn";

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-foreground"
          aria-label={label}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.96 }}
        >
          <Icon className="h-4 w-4" />
        </motion.a>
      ))}
    </div>
  );
}
