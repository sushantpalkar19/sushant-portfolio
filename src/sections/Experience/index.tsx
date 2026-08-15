import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Internship experience in full-stack product work."
          description="A timeline of practical development roles across frontend implementation, backend APIs, cloud exposure, and collaboration."
          align="center"
        />

        <motion.div
          className="mx-auto mt-10 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <Card
            className="p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.07)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
            whileHover={{ y: -2 }}
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                <BriefcaseBusiness className="h-4 w-4" />
                Professional Timeline
              </div>
              <Badge className="border-primary/30 bg-primary/10 text-primary">Fresher ready</Badge>
            </div>

            <div className="relative space-y-8 pl-6 before:absolute before:left-[5px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-border">
              {experiences.map((experience, index) => (
                <motion.article key={experience.company} className="relative" variants={fadeUp}>
                  <span
                    className={`absolute -left-6 top-1.5 h-3 w-3 rounded-full shadow-[0_0_14px_rgb(16_185_129_/_0.65)] ${index === 0 ? "bg-primary" : "bg-secondary"
                      }`}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted sm:justify-end">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        {experience.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">{experience.description}</p>

                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
