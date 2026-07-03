import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/common/seo";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

export default function NotFoundPage() {
  return (
    <>
      <Seo title={`404 | ${SITE_CONFIG.name}`} noindex />

      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted">404</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            This page took a different route.
          </h1>
          <p className="mt-4 text-base leading-8 text-muted">
            The page you requested does not exist or has been moved. Let&apos;s get you back to
            the portfolio.
          </p>
          <Link to="/" className={buttonVariants({ className: "mt-8" })}>
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}
