import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Internship experience across full-stack development and product delivery."
          description="Each role strengthened practical skills in frontend implementation, backend APIs, cloud-aware development, and collaboration."
        />

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {experiences.map((experience) => (
            <motion.div key={experience.company} variants={fadeUp}>
              <Card className="h-full p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-foreground">
                      {experience.company}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-secondary" />
                        {experience.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted">{experience.description}</p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">Responsibilities</p>
                  <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">Technologies used</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
