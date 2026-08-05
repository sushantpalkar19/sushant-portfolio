import { Code2 } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const primarySkills = Array.from(
  new Set(skillCategories.flatMap((category) => category.skills.map((skill) => skill.name))),
);

const firstRow = primarySkills.slice(0, 8);
const secondRow = primarySkills.slice(8);

type SkillChipProps = {
  name: string;
};

function SkillChip({ name }: SkillChipProps) {
  return (
    <div className="mx-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted shadow-card">
      <Code2 className="h-4 w-4 text-primary" />
      <span className="whitespace-nowrap font-mono">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {repeatedItems.map((item, index) => (
          <SkillChip key={`${item}-${index}`} name={item} />
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="relative overflow-hidden py-10" aria-label="Technology stack">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex flex-col gap-5">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow.length ? secondRow : firstRow} reverse />
      </div>
    </section>
  );
}
