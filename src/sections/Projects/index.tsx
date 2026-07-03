import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/common/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Applied projects that show full-stack thinking and real product workflows."
          description="These projects highlight dashboards, authentication, role-based access, REST APIs, and responsive interfaces across practical domains."
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
