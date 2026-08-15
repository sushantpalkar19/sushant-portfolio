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
import { staggerGrid, fadeUpSmooth } from "@/animations/variants";

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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#14F195]">
            TOP SKILLS
          </span>
          <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#14F195] to-[#38BDF8] rounded-full" />
        </motion.div>

        {/* 2-Column Responsive Category Card Grid — staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerGrid}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUpSmooth}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={[
                "group relative overflow-hidden rounded-[20px] p-6 sm:p-7 transition-all duration-300",
                // ── Light mode ──────────────────────────────────────────────
                "bg-white border border-slate-200",
                "shadow-[0_4px_20px_rgba(15,23,42,0.07),0_1px_4px_rgba(15,23,42,0.04)]",
                "hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.11),0_2px_8px_rgba(15,23,42,0.06)]",
                // ── Dark mode (subtle dark shadow) ─────────────────────────
                "dark:bg-[#090f1e]/90 dark:border-slate-800/80 dark:backdrop-blur-xl",
                "dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
                "dark:hover:border-slate-700 dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.6)]",
              ].join(" ")}
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
                      className={[
                        "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono font-semibold transition-all duration-200",
                        // Light mode pill
                        "border border-slate-200 bg-slate-50 text-slate-700",
                        "hover:border-slate-300 hover:bg-white hover:text-slate-900",
                        // Dark mode pill
                        "dark:border-slate-800 dark:bg-[#060b17] dark:text-slate-200",
                        "dark:hover:border-cyan-500/40 dark:hover:bg-[#080d1a] dark:hover:text-white dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
                      ].join(" ")}
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
        </motion.div>
      </div>
    </section>
  );
}
