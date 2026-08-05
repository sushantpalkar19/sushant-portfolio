import { useEffect } from "react";
import { CheckCircle2, Circle, Github, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectItem } from "@/types";

type ProjectModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

function BrowserMockup({ iconColor, label }: { iconColor?: string; label: string }) {
  const gradient = iconColor ?? "from-emerald-500 to-teal-400";
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#060b17]">
      <div className="flex h-8 items-center gap-1.5 border-b border-slate-800 bg-[#080d1a] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 h-4 flex-1 rounded-md bg-slate-800/60" />
      </div>
      <div className="flex h-36 flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 to-[#060b17]">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
        >
          <div className="h-4 w-4 rounded-md bg-white/30 ring-2 ring-white/40" />
        </div>
        <span className="font-mono text-xs text-slate-500">{label}</span>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project ? (
        <>
          {/* Backdrop – blurs everything behind */}
          <motion.div
            key="project-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Click-outside layer + centering */}
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
          >
            {/* Modal panel – scrolls its own content */}
            <motion.div
              key="project-modal"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-[24px] border border-slate-800/80 bg-[#0c1120] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
            >
              <div className="p-6 sm:p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-5 top-5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Icon + Title + Subtitle */}
                <div className="flex items-start gap-4 pr-10">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.iconColor ?? "from-emerald-500 to-teal-400"} shadow-lg`}
                  >
                    <div className="h-6 w-6 rounded-lg bg-white/30 ring-2 ring-white/40" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h2>
                    {project.subtitle ? (
                      <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#14F195]">
                        {project.subtitle}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-slate-800" />

                {/* Overview */}
                <div>
                  <h3 className="font-display text-base font-bold text-white">Overview</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                {/* Preview */}
                <div className="mt-7">
                  <h3 className="mb-4 font-display text-base font-bold text-white">Preview</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <BrowserMockup iconColor={project.iconColor} label={project.title} />
                    <BrowserMockup iconColor={project.iconColor} label="Dashboard" />
                  </div>
                  {/* Carousel dot indicators */}
                  <div className="mt-3 flex justify-center gap-1.5">
                    <span className="h-1.5 w-5 rounded-full bg-[#14F195]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                  </div>
                </div>

                {/* Key Features + Architecture Highlights */}
                <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-display text-base font-bold text-white">Key Features</h3>
                    <ul className="mt-3 space-y-2.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#14F195]"
                            aria-hidden="true"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.archHighlights ? (
                    <div>
                      <h3 className="font-display text-base font-bold text-white">
                        Architecture Highlights
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {project.archHighlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <Circle
                              className="mt-1 h-2.5 w-2.5 shrink-0 fill-[#38BDF8] text-[#38BDF8]"
                              aria-hidden="true"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                {/* Tech Stack */}
                <div className="mt-7">
                  <h3 className="mb-3 font-display text-base font-bold text-white">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#060b17] px-3 py-1.5 font-mono text-xs font-semibold text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F195]" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-slate-800" />

                {/* View on GitHub */}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#14F195] to-[#38BDF8] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_20px_rgba(20,241,149,0.25)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
