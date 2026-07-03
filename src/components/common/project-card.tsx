import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/cn";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col p-0">
        <div className="relative overflow-hidden border-b border-border">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <Badge className="absolute left-4 top-4 border-primary/30 bg-background/90 text-foreground">
            {project.category}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl font-bold text-foreground">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "sm" })}
              >
                <ArrowUpRight className="h-4 w-4" />
                Live Demo
              </a>
            ) : (
              <span
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "pointer-events-none opacity-70",
                )}
                aria-disabled="true"
              >
                <ArrowUpRight className="h-4 w-4" />
                Demo Soon
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
