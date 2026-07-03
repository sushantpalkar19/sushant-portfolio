import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type StatItem = {
  label: string;
  value: string;
  description: string;
};

export type SkillItem = {
  name: string;
  level: number;
  note?: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: SkillItem[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
  achievements: string[];
};

export type ProjectCategory = "Full Stack" | "Enterprise";

export type ProjectItem = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
};

export type EducationItem = {
  institution: string;
  degree: string;
  program?: string;
  period: string;
  location?: string;
  scoreLabel?: string;
  scoreValue?: string;
  summary: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

export type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
