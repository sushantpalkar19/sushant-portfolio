import type { PropsWithChildren } from "react";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SkipLink } from "@/components/layout/skip-link";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SkipLink />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
