import { Award, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { education } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in Information Technology with practical software projects."
          description="The education section keeps the important recruiter details easy to scan: degree, college, score, and year."
        />

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {education.map((item) => (
            <motion.div key={item.institution} variants={fadeUp}>
              <Card className="h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <Badge className="mt-5 border-primary/25 bg-primary/10 text-foreground">
                  {item.period}
                </Badge>

                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {item.degree}
                </h3>
                {item.program ? <p className="mt-2 text-sm text-secondary">{item.program}</p> : null}

                <p className="mt-4 text-sm font-semibold leading-6 text-foreground">
                  {item.institution}
                </p>
                {item.location ? (
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 text-secondary" />
                    {item.location}
                  </p>
                ) : null}

                {item.scoreValue ? (
                  <div className="mt-5 flex items-center gap-3 rounded-lg border border-border bg-background/70 p-4">
                    <Award className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        {item.scoreLabel ?? "Score"}
                      </p>
                      <p className="mt-1 text-sm font-bold text-foreground">{item.scoreValue}</p>
                    </div>
                  </div>
                ) : null}

                <p className="mt-5 text-sm leading-7 text-muted">{item.summary}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
