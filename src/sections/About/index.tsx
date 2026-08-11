import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { aboutStats, sectionHighlights } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Practical full-stack development with clean execution."
          description="I focus on readable interfaces, reliable APIs, and steady product delivery across modern web stacks."
        />

        <motion.div
          className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Card className="h-full p-6 sm:p-8">
              <Badge className="border-primary/30 bg-primary/10 text-primary">
                Professional summary
              </Badge>
              <p className="mt-5 text-base leading-8 text-muted">
                MERN Stack Developer with hands-on experience in React.js, Angular, Node.js,
                Express.js, Spring Boot, and Microsoft Azure. I have a strong understanding of OOP,
                DBMS, REST APIs, responsive UI development, and modern full-stack workflows.
              </p>
              <p className="mt-5 text-base leading-8 text-muted">
                I am looking for a software developer role where I can contribute to production
                features, learn from experienced engineers, and keep improving as a dependable
                developer.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-lg border border-border bg-background/65 p-4 transition-colors duration-200 hover:border-primary/40"
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(16,185,129,0.10)" }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <p className="font-display text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
            {sectionHighlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="h-full p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-base font-bold text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
