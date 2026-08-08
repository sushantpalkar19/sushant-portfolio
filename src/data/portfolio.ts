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
  {
    label: "Phone",
    href: "tel:+917499092205",
    icon: Phone,
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
      { name: "Flutter", level: 88, note: "Cross-platform mobile & UI application development" },
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
      { name: "Dart", level: 88, note: "Mobile development and Flutter application logic" },
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
    subtitle: "Healthcare Management System",
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
    archHighlights: [
      "React component-driven frontend UI",
      "Node.js & Express REST API layer",
      "MongoDB for flexible data storage",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: true,
    iconColor: "from-emerald-500 to-teal-400",
  },
  {
    id: "exam-management-ai-proctoring-system",
    title: "Exam Management & AI Proctoring",
    subtitle: "Online Assessment Platform",
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
    archHighlights: [
      "React.js SPA frontend with protected routes",
      "Express.js API with JWT-based auth",
      "MongoDB Atlas for scalable data storage",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: false,
    iconColor: "from-violet-500 to-purple-400",
  },
  {
    id: "school-website-e-learning-system",
    title: "School E-Learning System",
    subtitle: "Academic Management Platform",
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
    archHighlights: [
      "Angular modular frontend with lazy-loaded routes",
      "Spring Boot REST API with service layers",
      "MariaDB for relational academic data storage",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: false,
    iconColor: "from-sky-500 to-blue-400",
  },
];

export const additionalProjects: ProjectItem[] = [
  {
    id: "ghar-ka-khana",
    title: "GharKaKhana",
    subtitle: "Food Ordering & Mess Management Platform",
    category: "Full Stack",
    description:
      "A full-stack food ordering and mess management platform available as both a React.js web application and Flutter mobile app, connecting customers with mess owners through authentication, mess discovery, menu management, ordering, subscriptions, reviews, and role-based workflows.",
    image: "",
    stack: [
      "React.js",
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    highlights: [
      "Full-featured React.js web application",
      "Flutter/Dart Android mobile application",
      "Customer and Mess Owner role-based workflows",
      "JWT authentication and role-based access control",
      "Mess discovery, menu and food management",
      "Food ordering and subscription workflows",
      "Reviews, bookmarks and user profile management",
      "REST API powered backend"
    ],
    archHighlights: [
      "React.js web frontend",
      "Flutter/Dart mobile application",
      "Node.js & Express.js REST API backend",
      "MongoDB database",
      "JWT-based authentication and authorization"
    ],
    githubUrl: "https://github.com/sushantpalkar19/GharKaKhana-Mobile",
    featured: false,
    iconColor: "from-orange-500 to-rose-400",
  },
  {
    id: "internship-recommendation-system",
    title: "Internship Recommendation System",
    subtitle: "ML-Powered Career Recommendation Engine",
    category: "Enterprise",
    description:
      "A machine learning-based recommendation engine built with Python & Streamlit that matches students with relevant internship opportunities using TF-IDF, Word2Vec, and CountVectorizer algorithms.",
    image: "/images/project-ai-proctoring.svg",
    stack: ["Python", "Streamlit", "Machine Learning", "TF-IDF", "Word2Vec"],
    highlights: [
      "Machine learning engine matching students to relevant internships",
      "Interactive Web UI dashboard built with Streamlit",
      "NLP text vectorization using TF-IDF, Word2Vec, & CountVectorizer",
      "Intelligent content-based filtering algorithms",
    ],
    archHighlights: [
      "Python & Streamlit interactive web dashboard layer",
      "Scikit-learn & Gensim NLP recommendation pipeline",
      "TF-IDF & Word2Vec feature extraction vectors",
    ],
    githubUrl: "https://github.com/sushantpalkar19",
    featured: false,
    iconColor: "from-violet-500 to-indigo-400",
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
    period: "2022",
    scoreLabel: "Percentage",
    scoreValue: "77.17%",
    summary:
      "Completed higher secondary education with a strong academic record and consistent focus on technical learning.",
  },
  {
    institution: "Tapti Public School",
    degree: "Secondary Education",
    period: "2020",
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
