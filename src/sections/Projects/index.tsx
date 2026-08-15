import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/common/project-card";
import { ProjectModal } from "@/components/common/project-modal";
import { MoreProjectsModal } from "@/components/common/more-projects-modal";
import type { ProjectItem } from "@/types";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <section id="projects" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            {/* Section Header */}
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#14F195]">
                LATEST PROJECTS
              </span>
              <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#14F195] to-[#38BDF8] rounded-full" />
            </div>

            {/* 3-Column Responsive Project Card Grid */}
            <motion.div
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              variants={cardStagger}
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={cardItem} className="flex">
                  <div className="flex w-full">
                    <ProjectCard
                      project={project}
                      onViewDetails={(p) => setSelectedProject(p)}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA: Wanna See More Projects? */}
            <div className="mt-14 flex flex-col items-center gap-3">
              <motion.button
                type="button"
                onClick={() => setMoreOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className={[
                  "inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200",
                  // Light mode
                  "border border-slate-200 bg-white text-slate-800 shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:border-slate-300 hover:text-slate-950 hover:shadow-[0_8px_24px_rgba(15,23,42,0.1)]",
                  // Dark mode (original)
                  "dark:border-slate-700 dark:bg-[#090f1e]/90 dark:text-slate-200 dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] dark:backdrop-blur dark:hover:border-[#14F195]/60 dark:hover:text-white dark:hover:shadow-[0_8px_24px_rgba(20,241,149,0.15)]",
                ].join(" ")}
              >
                <LayoutGrid className="h-4 w-4 text-[#14F195]" aria-hidden="true" />
                Wanna See More Projects?
              </motion.button>

              <p className="font-mono text-xs text-slate-500">
                More projects available on{" "}
                <a
                  href="https://github.com/sushantpalkar19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#14F195] to-[#38BDF8] bg-clip-text text-transparent font-semibold"
                >
                  GitHub
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* More Projects Modal */}
      <MoreProjectsModal
        open={moreOpen}
        onClose={() => setMoreOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </>
  );
}
