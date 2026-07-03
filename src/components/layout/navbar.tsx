import { useState } from "react";
import { Download, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_ITEMS, SECTION_IDS } from "@/constants/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { LogoMark } from "@/components/common/logo-mark";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <motion.header
        className="sticky top-0 z-[60] border-b border-border/70 bg-background/85 backdrop-blur-md"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="container">
          <div className="flex min-h-20 items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3">
              <LogoMark />
              <div className="hidden sm:block">
                <p className="font-display text-sm font-bold text-foreground">Sushant Palkar</p>
                <p className="text-xs text-muted">MERN Stack Developer</p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 xl:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-semibold transition duration-300",
                      isActive
                        ? "bg-primary/15 text-foreground"
                        : "text-muted hover:bg-card hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="/resume.pdf"
                className={buttonVariants({ variant: "outline", size: "sm" })}
                download
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a href="#contact" className={buttonVariants({ size: "sm" })}>
                Contact
              </a>
            </div>

            <div className="flex items-center gap-3 xl:hidden">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition hover:border-primary/50"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav open={menuOpen} activeSection={activeSection} onClose={() => setMenuOpen(false)} />
    </>
  );
}
