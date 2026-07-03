import { ArrowUp } from "lucide-react";
import { NAV_ITEMS } from "@/constants/site";
import { socialLinks } from "@/data/portfolio";
import { LogoMark } from "@/components/common/logo-mark";
import { SocialLinks } from "@/components/common/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col gap-8 rounded-xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-lg">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="font-display text-lg font-bold text-foreground">Sushant Palkar</p>
                <p className="text-sm text-muted">
                  Clean, responsive web applications built with practical full-stack engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Sushant Palkar. Built with React, TypeScript, Tailwind CSS,
            Framer Motion, and EmailJS.
          </p>

          <div className="flex items-center gap-4">
            <SocialLinks links={socialLinks} />
            <a
              href="#home"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/50"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
