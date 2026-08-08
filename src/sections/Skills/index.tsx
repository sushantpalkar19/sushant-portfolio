import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";

type SkillItem = {
  name: string;
  icon?: React.ElementType;
  iconColor?: string;
};

type SkillGroup = {
  category: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "Dart", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "SQL", icon: Database },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Layout },
    ],
  },
  {
    category: "FRAMEWORKS & LIBRARIES",
    skills: [
      { name: "React.js", icon: Layers },
      { name: "Flutter", icon: Smartphone },
      { name: "Node.js", icon: Cpu },
      { name: "Express.js", icon: Terminal },
      { name: "Angular", icon: Layers },
      { name: "Spring Boot", icon: Cpu },
      { name: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    category: "DATABASES & CLOUD",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "SQL", icon: Database },
      { name: "MariaDB", icon: Database },
      { name: "Microsoft Azure", icon: Globe },
    ],
  },
  {
    category: "TOOLS & PRACTICES",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "VS Code", icon: Wrench },
      { name: "REST APIs", icon: Globe },
      { name: "Postman", icon: Wrench },
    ],
  },
  {
    category: "WORKFLOW & LEADERSHIP",
    skills: [
      { name: "Sprint Planning", icon: Wrench },
      { name: "System Architecture", icon: Cpu },
      { name: "Team Management", icon: Users },
    ],
  },
  {
    category: "AI TOOLS",
    skills: [
      { name: "Cursor", icon: Sparkles, iconColor: "text-purple-400" },
      { name: "Codex", icon: Sparkles, iconColor: "text-purple-400" },
      { name: "Claude Code", icon: Sparkles, iconColor: "text-purple-400" },
      { name: "Google AI Studio", icon: Sparkles, iconColor: "text-purple-400" },
    ],
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
        >
          {/* Section Header */}
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#14F195]">
              TOP SKILLS
            </span>
            <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#14F195] to-[#38BDF8] rounded-full" />
          </div>

          {/* 2-Column Responsive Category Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[20px] border border-slate-800/80 bg-[#090f1e]/90 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:shadow-[0_20px_50px_rgba(8,145,178,0.12)] sm:p-7"
              >
                {/* Category Header */}
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#14F195]">
                  {group.category}
                </h3>

                {/* Skill Badges Wrap */}
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    const iconColorClass = skill.iconColor ?? "text-cyan-400";

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#060b17] px-3 py-1.5 text-xs font-mono font-semibold text-slate-200 transition-all duration-200 hover:border-cyan-500/40 hover:bg-[#080d1a] hover:text-white hover:shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                      >
                        {Icon ? (
                          <Icon className={`h-3.5 w-3.5 ${iconColorClass} shrink-0`} aria-hidden="true" />
                        ) : (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[#14F195]"
                            aria-hidden="true"
                          />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
