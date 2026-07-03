import { ArrowDownToLine, ArrowRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { aboutStats } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/constants/site";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container">
        <motion.div
          className="grid min-h-[calc(100vh-10rem)] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Badge className="border-primary/30 bg-primary/10 text-foreground">
              Open to fresher software developer roles
            </Badge>

            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
              Sushant Palkar
            </h1>

            <p className="mt-4 text-xl font-semibold text-secondary sm:text-2xl">
              {SITE_CONFIG.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              A 2026 Information Technology graduate and MERN Stack fresher building clean,
              responsive web applications with React, Node.js, Express, MongoDB, Spring Boot, and
              Microsoft Azure exposure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/resume.pdf" className={buttonVariants({ size: "lg" })} download>
                <ArrowDownToLine className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              <a
                href="mailto:sushantpalkar92@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-secondary" />
                sushantpalkar92@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                Maharashtra, India
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <img
                src="/images/profile.svg"
                alt="Professional profile illustration for Sushant Palkar"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {aboutStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
