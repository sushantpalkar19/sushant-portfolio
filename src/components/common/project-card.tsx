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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={() => onViewDetails(project)}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-800/80 bg-[#091121]/95 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-[#14F195]/40 hover:shadow-[0_20px_50px_rgba(20,241,149,0.12)] cursor-pointer"
    >
      {/* Dark radial glow arc top-right */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Header row: App Icon + "Under Development" badge */}
      <div className="relative z-10 flex items-start justify-between">
        <ProjectIcon id={project.id} color={project.iconColor} />
        {project.underDevelopment ? (
          <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-medium text-amber-400">
            Under Development
          </span>
        ) : null}
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-5 font-display text-2xl font-bold text-white tracking-tight">
        {project.title}
      </h3>

      {/* Subtitle in green monospace */}
      {project.subtitle ? (
        <p className="relative z-10 mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#14F195]">
          {project.subtitle}
        </p>
      ) : null}

      {/* Description – 2-line truncated */}
      <p className="relative z-10 mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Tech Badge Pills + overflow count */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2">
        {visibleStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800/90 bg-[#050a14] px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300 transition-colors duration-150 group-hover:border-slate-700"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F195]" aria-hidden="true" />
            {tech}
          </span>
        ))}
        {overflowCount > 0 && (
          <span className="font-mono text-xs font-semibold text-slate-500 pl-1">
            +{overflowCount}
          </span>
        )}
      </div>

      {/* "View Details →" link */}
      <div className="relative z-10 mt-5 flex items-center pt-1">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#14F195] transition-all duration-200 group-hover:translate-x-1 group-hover:text-white">
          View Details
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
