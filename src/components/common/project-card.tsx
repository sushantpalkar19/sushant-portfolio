import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Database,
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/types";

type ProjectCardProps = {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
};

// Select icon based on project id or category
function getProjectIcon(id: string) {
  switch (id) {
    case "icu-monitoring-platform":
      return Database;
    case "exam-management-ai-proctoring-system":
      return ShieldCheck;
    case "school-website-e-learning-system":
      return GraduationCap;
    case "ghar-ka-khana":
      return Utensils;
    case "internship-recommendation-system":
      return Sparkles;
    default:
      return LayoutGrid;
  }
}

function ProjectIcon({ id, color }: { id: string; color?: string }) {
  const IconComponent = getProjectIcon(id);
  const gradient = color ?? "from-emerald-500 to-cyan-500";

  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br ${gradient} p-3 shadow-lg shadow-cyan-500/10 ring-1 ring-white/20`}
    >
      <IconComponent className="h-7 w-7 text-white stroke-[2.2]" aria-hidden="true" />
    </div>
  );
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const MAX_VISIBLE_STACK = 3;
  const visibleStack = project.stack.slice(0, MAX_VISIBLE_STACK);
  const overflowCount = project.stack.length - MAX_VISIBLE_STACK;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onViewDetails(project)}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] p-6 cursor-pointer",
        "transition-all duration-300",
        // ── Light mode ──────────────────────────────────────────────────────
        "bg-white border border-slate-200",
        "shadow-[0_4px_20px_rgba(15,23,42,0.07),0_1px_4px_rgba(15,23,42,0.05)]",
        "hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.07)]",
        // ── Dark mode (preserves original layout, subtle dark shadow) ───────
        "dark:bg-[#091121]/95 dark:border-slate-800/80 dark:backdrop-blur-xl",
        "dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
        "dark:hover:border-slate-700 dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.6)]",
      ].join(" ")}
    >
      {/* Radial glow arc top-right — hidden in light mode, subtle in dark */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-transparent blur-2xl transition-opacity duration-300 opacity-0 dark:opacity-20 dark:group-hover:opacity-40"
        aria-hidden="true"
      />

      {/* Header row: App Icon + "Under Development" badge */}
      <div className="relative z-10 flex items-start justify-between">
        <ProjectIcon id={project.id} color={project.iconColor} />
        {project.underDevelopment ? (
          <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-medium text-amber-400 dark:text-amber-400">
            Under Development
          </span>
        ) : null}
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-5 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {project.title}
      </h3>

      {/* Subtitle in green monospace */}
      {project.subtitle ? (
        <p className="relative z-10 mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#14F195]">
          {project.subtitle}
        </p>
      ) : null}

      {/* Description – 2-line truncated */}
      <p className="relative z-10 mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {project.description}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Tech Badge Pills + overflow count */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2">
        {visibleStack.map((tech) => (
          <span
            key={tech}
            className={[
              "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-[11px] font-medium transition-colors duration-150",
              // Light mode pill
              "border border-slate-200 bg-slate-50 text-slate-700 group-hover:border-slate-300",
              // Dark mode pill (original)
              "dark:border-slate-800/90 dark:bg-[#050a14] dark:text-slate-300 dark:group-hover:border-slate-700",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F195]" aria-hidden="true" />
            {tech}
          </span>
        ))}
        {overflowCount > 0 && (
          <span className="font-mono text-xs font-semibold pl-1 text-slate-400 dark:text-slate-500">
            +{overflowCount}
          </span>
        )}
      </div>

      {/* "View Details →" link */}
      <div className="relative z-10 mt-5 flex items-center pt-1">
        <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#14F195] transition-colors duration-200 group-hover:text-emerald-700 dark:group-hover:text-white">
          View Details
          <motion.span
            className="inline-flex items-center"
            initial={false}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
}
