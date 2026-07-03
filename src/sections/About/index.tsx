import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { sectionHighlights } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A practical full-stack developer focused on readable UI and reliable APIs."
          description="I am building a strong software foundation through internships, academic work, and full-stack projects that solve real user problems."
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Card className="h-full p-8">
              <Badge className="border-primary/30 bg-primary/10 text-foreground">
                Professional summary
              </Badge>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                MERN Stack Developer with hands-on experience in React.js, Angular, Node.js,
                Express.js, Spring Boot, and Microsoft Azure. I have a strong understanding of OOP,
                DBMS, REST APIs, responsive UI development, and modern full-stack workflows.
              </p>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                My objective is to begin my career with a team where I can contribute to production
                software, learn from experienced engineers, and grow into a dependable developer who
                ships clean, maintainable features.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4">
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Career objective
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                To work as a Software Developer where I can apply frontend, backend, database, and
                cloud fundamentals to build useful applications while continuously improving my
                engineering discipline.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                What I value
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Clear communication, simple interfaces, dependable APIs, accessible UI, and steady
                improvement through feedback.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {sectionHighlights.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Card className="h-full p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-display text-lg font-bold text-foreground">{title}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
