import {
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Server,
  Wrench,
} from "lucide-react";
import type {
  ContactMethod,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
  StatItem,
} from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/sushantpalkar19",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sushant-palkar",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:sushantpalkar92@gmail.com",
    icon: Mail,
  },
];

export const aboutStats: StatItem[] = [
  {
    label: "Internships",
    value: "2+",
    description: "Hands-on internship experience across React.js, Node.js, Angular, Spring Boot, and Azure.",
  },
  {
    label: "Projects",
    value: "3+",
    description: "Applied full-stack projects built around healthcare, e-learning, and assessment workflows.",
  },
  {
    label: "Core Technologies",
    value: "8+",
    description: "Practical experience across frontend, backend, database, cloud, and API development.",
  },
  {
    label: "Graduate",
    value: "2026",
    description: "Bachelor of Technology in Information Technology from Walchand Institute of Technology.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    description: "Responsive interfaces focused on clarity, usability, and modern interaction patterns.",
    skills: [
      { name: "React.js", level: 90, note: "Component-driven UI and modern frontend architecture" },
      { name: "Angular", level: 86, note: "Structured application development and feature modules" },
      { name: "HTML5", level: 93, note: "Semantic structure and accessible page foundations" },
      { name: "CSS3", level: 88, note: "Responsive layouts, styling systems, and visual polish" },
      { name: "Tailwind CSS", level: 84, note: "Utility-first systems and design tokens" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Application logic, REST API development, and service integration for scalable products.",
    skills: [
      { name: "Node.js", level: 86, note: "Full-stack features and server-side development" },
      { name: "Express.js", level: 84, note: "REST APIs, middleware, and routing structure" },
      { name: "Spring Boot", level: 85, note: "Enterprise backends and service layers" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Data modeling and storage across document-driven and relational systems.",
    skills: [
      { name: "MongoDB", level: 84, note: "Document-based storage for full-stack applications" },
      { name: "SQL", level: 82, note: "Querying, normalization concepts, and structured data access" },
      { name: "MariaDB", level: 78, note: "Used in academic and management platform work" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Core languages I use to build interfaces, APIs, and data-backed applications.",
    skills: [
      { name: "JavaScript", level: 91, note: "Frontend logic, APIs, and web application behavior" },
      { name: "Python", level: 76, note: "Automation, data tasks, and problem-solving workflows" },
      { name: "SQL", level: 82, note: "Relational queries, schema understanding, and structured data access" },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    description: "Cloud exposure that supports deployment-aware development and service integration.",
    skills: [
      { name: "Microsoft Azure", level: 74, note: "Cloud service exposure during internship work" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Daily tools and workflows that support version control, collaboration, and API work.",
    skills: [
      { name: "Git", level: 86, note: "Version control and collaboration" },
      { name: "GitHub", level: 85, note: "Repository management and teamwork" },
      { name: "VS Code", level: 92, note: "Efficient daily development setup" },
      { name: "REST APIs", level: 88, note: "Design, integration, testing, and endpoint workflows" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "AI Ally Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Jan 2026 - Apr 2026",
    location: "Maharashtra, India",
    description:
      "Worked on full-stack product development using React.js, Node.js, REST APIs, and Microsoft Azure while improving delivery speed with AI-assisted workflows.",
    stack: ["React.js", "Node.js", "Express.js", "REST APIs", "Microsoft Azure"],
    achievements: [
      "Developed full-stack web features using React.js and Node.js.",
      "Built REST APIs for product functionality and application workflows.",
      "Worked with Microsoft Azure cloud services as part of feature delivery.",
      "Improved development workflows using AI-powered tools.",
    ],
  },
  {
    company: "Mindborn Software Solutions",
    role: "Software Developer Intern",
    period: "Aug 2024 - Nov 2024",
    location: "Maharashtra, India",
    description:
      "Contributed to an e-learning application using Angular, Ionic, and Spring Boot with a focus on responsive UI, API integration, and collaborative product delivery.",
    stack: ["Angular", "Ionic", "Spring Boot", "Responsive UI", "API Integration"],
    achievements: [
      "Developed an e-learning application in collaboration with the development team.",
      "Designed responsive user interfaces for smoother learning workflows.",
      "Integrated backend APIs into frontend modules across the application.",
      "Worked with Angular, Ionic, and Spring Boot to deliver product features.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "icu-monitoring-platform",
    title: "ICU Monitoring Platform",
    category: "Full Stack",
    description:
      "Developed a healthcare management platform with dashboards, REST APIs, and secure role-based authentication for monitoring ICU operations.",
    image: "/images/project-icu-monitoring.svg",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Dashboard-oriented ICU monitoring workflows",
      "Secure role-based authentication and access control",
      "REST API-driven data handling for healthcare operations",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: true,
  },
  {
    id: "exam-management-ai-proctoring-system",
    title: "Exam Management & AI Proctoring System",
    category: "Full Stack",
    description:
      "Developed an online examination platform featuring AI-based proctoring, secure authentication, and role-based access.",
    image: "/images/project-ai-proctoring.svg",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "AI-assisted proctoring workflow for online assessments",
      "Secure authentication with role-based permissions",
      "Full-stack architecture built for exam administration",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: false,
  },
  {
    id: "school-website-e-learning-system",
    title: "School Website - E-Learning System",
    category: "Enterprise",
    description:
      "Developed an academic management platform enabling communication between students and teachers, attendance management, announcements, and progress tracking.",
    image: "/images/project-elearning-system.svg",
    stack: ["Angular", "Spring Boot", "MariaDB"],
    highlights: [
      "Communication flow between students and teachers",
      "Attendance, announcements, and academic progress tracking",
      "Structured full-stack architecture for school operations",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: false,
  },
];

export const education: EducationItem[] = [
  {
    institution: "Walchand Institute of Technology, Solapur",
    degree: "Bachelor of Technology",
    program: "Information Technology",
    period: "2022 - 2026",
    location: "Solapur, Maharashtra",
    scoreLabel: "CGPA",
    scoreValue: "8.4",
    summary:
      "Built a strong academic foundation in software engineering, Object-Oriented Programming, DBMS, REST APIs, and modern application development.",
  },
  {
    institution: "Biyani Junior College",
    degree: "Higher Secondary",
    period: "Higher Secondary",
    scoreLabel: "Percentage",
    scoreValue: "77.17%",
    summary:
      "Completed higher secondary education with a strong academic record and consistent focus on technical learning.",
  },
  {
    institution: "Tapti Public School",
    degree: "Secondary Education",
    period: "Secondary Education",
    scoreLabel: "Percentage",
    scoreValue: "68.6%",
    summary:
      "Established the academic foundation that led to continued growth in technology and problem solving.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "sushantpalkar92@gmail.com",
    href: "mailto:sushantpalkar92@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 7499092205",
    href: "tel:+917499092205",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/sushantpalkar19",
    href: "https://github.com/sushantpalkar19",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sushant-palkar",
    href: "https://linkedin.com/in/sushant-palkar",
    icon: Linkedin,
  },
  {
    label: "Location",
    value: "Maharashtra, India",
    icon: MapPin,
  },
];

export const sectionHighlights = [
  {
    icon: BriefcaseBusiness,
    title: "Scalable web applications",
    description: "Building full-stack applications that stay maintainable as product requirements grow.",
  },
  {
    icon: Layers3,
    title: "REST API development",
    description: "Designing and integrating APIs that support reliable frontend and backend workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud-aware development",
    description: "Applying Microsoft Azure exposure alongside modern web engineering practices.",
  },
  {
    icon: Award,
    title: "Continuous learning",
    description: "Actively learning modern technologies and improving practical software delivery skills.",
  },
];
