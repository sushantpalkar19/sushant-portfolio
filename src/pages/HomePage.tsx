import { Suspense, lazy } from "react";
import { Seo } from "@/components/common/seo";
import { PageShell } from "@/components/layout/page-shell";
import { SectionSkeleton } from "@/components/common/section-skeleton";
import { SITE_CONFIG } from "@/constants/site";
import { useLenis } from "@/hooks/use-lenis";
import HeroSection from "@/sections/Hero";

const AboutSection = lazy(() => import("@/sections/About"));
const ExperienceSection = lazy(() => import("@/sections/Experience"));
const ProjectsSection = lazy(() => import("@/sections/Projects"));
const SkillsSection = lazy(() => import("@/sections/Skills"));
const EducationSection = lazy(() => import("@/sections/Education"));
const ContactSection = lazy(() => import("@/sections/Contact"));

export default function HomePage() {
  useLenis();

  return (
    <>
      <Seo
        title={`${SITE_CONFIG.name} | ${SITE_CONFIG.title}`}
        description={SITE_CONFIG.description}
        canonical={SITE_CONFIG.siteUrl}
      />

      <PageShell>
        <HeroSection />
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </Suspense>
      </PageShell>
    </>
  );
}
