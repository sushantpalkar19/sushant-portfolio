import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { skillCategories } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A MERN-focused skill set with supporting backend, database, cloud, and tooling."
          description="The stack is organized the same way recruiters scan fresher profiles: frontend, backend, database, programming languages, cloud, and tools."
          align="center"
        />

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div key={category.title} variants={fadeUp}>
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name}>{skill.name}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
