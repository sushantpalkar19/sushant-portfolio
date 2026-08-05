import type { NavigationItem } from "@/types";

export const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const;

export const NAV_ITEMS: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SITE_CONFIG = {
  name: "Sushant Palkar",
  title: "Software Developer",
  subtitle: "React & Node.js Developer",
  seoTitle: "Sushant Palkar | Software Developer | MERN Stack Developer",
  description:
    "Recruiter-friendly portfolio of Sushant Palkar, a 2026 software developer graduate and MERN Stack fresher with projects, internship experience, and modern web development skills.",
  siteUrl: "https://sushantpalkar.vercel.app",
  resumeUrl: "https://drive.google.com/file/d/1Hv0fGz1datLNKtvxhthUMRyjbkLWdsh7/view?usp=sharing",
  location: "Maharashtra, India",
} as const;
