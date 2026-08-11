import { useEffect } from "react";
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
  // Lock body scroll while menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[95] bg-background/90 backdrop-blur-md lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // tap on backdrop closes
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-x-3 top-3 rounded-xl border border-border bg-card p-4 shadow-elevated sm:inset-x-4 sm:top-4 sm:p-5"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            // stop propagation so clicking inside doesn't close
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold text-foreground sm:text-xl">Navigate</p>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/50"
                  aria-label="Close navigation menu"
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* Nav links — minimum 44px touch targets */}
            <nav className="mt-4 flex flex-col gap-1.5" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex min-h-[44px] items-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors",
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

            {/* CTA buttons */}
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <motion.a
                href="#contact"
                onClick={onClose}
                className={buttonVariants({ size: "sm", className: "w-full sm:w-auto justify-center" })}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.14, ease: "easeOut" }}
              >
                Contact
              </motion.a>
              <motion.a
                href={SITE_CONFIG.resumeUrl}
                onClick={onClose}
                className={buttonVariants({ variant: "outline", size: "sm", className: "w-full sm:w-auto justify-center" })}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.14, ease: "easeOut" }}
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
