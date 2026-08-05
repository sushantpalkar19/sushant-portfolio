import { motion, type Variants } from "framer-motion";
import type { SocialLink } from "@/types";
import { cn } from "@/utils/cn";

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
  linkClassName?: string;
  staggered?: boolean;
  staggerDelay?: number;
};

const socialContainer = (delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren: 0.08,
    },
  },
});

const socialItem: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.36,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SocialLinks({
  links,
  className,
  linkClassName,
  staggered = false,
  staggerDelay = 0,
}: SocialLinksProps) {
  if (staggered) {
    return (
      <motion.div
        className={cn("flex flex-wrap items-center gap-3", className)}
        variants={socialContainer(staggerDelay)}
      >
        {links.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-muted transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary",
              linkClassName,
            )}
            aria-label={label}
            variants={socialItem}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <Icon className="h-4 w-4" />
          </motion.a>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-muted transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary",
            linkClassName,
          )}
          aria-label={label}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          <Icon className="h-4 w-4" />
        </motion.a>
      ))}
    </div>
  );
}
