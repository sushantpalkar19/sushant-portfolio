import type { NavigationItem } from "@/types";

export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
] as const;

export const NAV_ITEMS: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SITE_CONFIG = {
  name: "Sushant Palkar",
  title: "Software Developer",
  subtitle: "Full Stack Developer | MERN Stack Developer",
  seoTitle: "Sushant Palkar | Software Developer | MERN Stack Developer",
  description:
    "Recruiter-friendly portfolio of Sushant Palkar, a 2026 software developer graduate and MERN Stack fresher with projects, internship experience, and modern web development skills.",
  siteUrl: "https://sushantpalkar.vercel.app",
  location: "Maharashtra, India",
} as const;
