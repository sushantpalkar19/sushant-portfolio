import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { additionalProjects } from "@/data/portfolio";
import type { ProjectItem } from "@/types";

type MoreProjectsModalProps = {
  open: boolean;
  onClose: () => void;
  onSelectProject?: (project: ProjectItem) => void;
};

function MiniProjectIcon({ color }: { color?: string }) {
  const gradient = color ?? "from-emerald-500 to-teal-400";
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-md`}
    >
      <div className="h-4 w-4 rounded-md bg-white/30 ring-2 ring-white/40" />
    </div>
  );
}

export function MoreProjectsModal({ open, onClose, onSelectProject }: MoreProjectsModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          {/* Backdrop – blurs everything behind */}
          <motion.div
            key="more-backdrop"
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
            className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6"
            onClick={onClose}
          >
            {/* Modal panel – scrolls its own content */}
            <motion.div
              key="more-modal"
              initial={{ opacity: 0, scale: 0.97, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 32 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="More Projects"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[92svh] overflow-y-auto overscroll-contain rounded-t-[24px] border border-slate-800/80 bg-[#0c1120] shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:max-h-[90vh] sm:rounded-[24px]"
            >
              <div className="p-5 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between pr-2">
                  <h2 className="font-display text-xl font-bold text-white sm:text-2xl">More Projects</h2>
                  <button
                    onClick={onClose}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* 2-column project grid */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {additionalProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => {
                        onClose();
                        onSelectProject?.(project);
                      }}
                      className="group flex flex-col gap-3 cursor-pointer rounded-[16px] border border-slate-800/80 bg-[#090f1e]/90 p-4 transition-all duration-200 hover:border-slate-700 hover:shadow-[0_8px_24px_rgba(8,145,178,0.12)]"
                    >
                      {/* Icon + Title */}
                      <div className="flex items-center gap-3">
                        <MiniProjectIcon color={project.iconColor} />
                        <div className="min-w-0">
                          <h3 className="font-display text-sm font-bold text-white leading-tight">
                            {project.title}
                          </h3>
                          <p className="mt-0.5 font-mono text-[10px] font-semibold text-[#14F195] truncate">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-[#060b17] px-2 py-1 font-mono text-[10px] font-semibold text-slate-400"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#14F195]" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Details action link */}
                      <span className="font-mono text-[11px] font-semibold text-[#14F195] transition-colors duration-150 group-hover:text-white">
                        View Details →
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer note */}
                <p className="mt-6 text-center font-mono text-xs text-slate-600">
                  More projects are actively being built. Stay tuned on{" "}
                  <a
                    href="https://github.com/sushantpalkar19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#14F195] to-[#38BDF8] bg-clip-text text-transparent font-semibold"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
