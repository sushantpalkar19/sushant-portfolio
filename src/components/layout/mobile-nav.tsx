import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants/site";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";

type MobileNavProps = {
  open: boolean;
  activeSection: string;
  onClose: () => void;
};

export function MobileNav({ open, activeSection, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[95] bg-background/90 backdrop-blur-md lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-x-4 top-4 rounded-lg border border-border bg-card p-5 shadow-elevated"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-xl font-bold text-foreground">Navigate</p>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/50"
                  aria-label="Close navigation menu"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "rounded-lg border px-4 py-3 text-sm font-semibold transition-colors",
                      isActive
                        ? "border-primary/50 bg-primary/15 text-foreground"
                        : "border-border bg-background/70 text-muted hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 flex gap-3">
              <motion.a
                href="#contact"
                onClick={onClose}
                className={buttonVariants({ size: "sm" })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                Contact
              </motion.a>
              <motion.a
                href={SITE_CONFIG.resumeUrl}
                onClick={onClose}
                className={buttonVariants({ variant: "outline", size: "sm" })}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
