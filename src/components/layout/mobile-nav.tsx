import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/site";
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
          className="fixed inset-0 z-[95] bg-background/90 backdrop-blur-md xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-x-4 top-4 rounded-xl border border-border bg-card p-6 shadow-elevated"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-xl font-bold text-foreground">Navigate</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition hover:border-primary/50"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "rounded-lg border px-4 py-3 text-sm font-semibold transition",
                      isActive
                        ? "border-primary/50 bg-primary/15 text-foreground"
                        : "border-border bg-background/70 text-muted hover:border-primary/35 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 flex gap-3">
              <a href="#contact" onClick={onClose} className={buttonVariants({ size: "sm" })}>
                Contact
              </a>
              <a
                href="/resume.pdf"
                onClick={onClose}
                className={buttonVariants({ variant: "outline", size: "sm" })}
                download
              >
                Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
