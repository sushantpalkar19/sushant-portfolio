import { useState } from "react";
import { Download, Menu } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { NAV_ITEMS, SECTION_IDS, SITE_CONFIG } from "@/constants/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { LogoMark } from "@/components/common/logo-mark";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const activeSection = useActiveSection(SECTION_IDS);
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] border-b backdrop-blur-xl transition-colors duration-300",
          scrolled
            ? "border-border/80 bg-background/85 shadow-card"
            : "border-transparent bg-background/35",
        )}
        initial={shouldReduceMotion ? { opacity: 0 } : { y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: shouldReduceMotion ? 0 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="container">
          <div className="flex min-h-20 items-center justify-between gap-4">
            <a href="#home" className="inline-flex items-center" aria-label="Sushant Palkar home">
              <LogoMark />
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-semibold transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-line"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gradient-primary"
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      />
                    ) : null}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <div className="h-9 w-px bg-border" aria-hidden="true" />
              <ThemeToggle />
              <motion.a
                href={SITE_CONFIG.resumeUrl}
                className={buttonVariants({ variant: "outline", size: "sm" })}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <motion.button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-card transition-colors hover:border-primary/50"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <Menu className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav open={menuOpen} activeSection={activeSection} onClose={() => setMenuOpen(false)} />
    </>
  );
}
