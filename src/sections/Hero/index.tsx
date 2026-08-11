import type { ReactNode } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { socialLinks } from "@/data/portfolio";
import { SocialLinks } from "@/components/common/social-links";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";
import { AnimatedRoles } from "@/components/common/animated-roles";

type CodeLine = {
  indent?: number;
  content: ReactNode;
};

const developerCode: CodeLine[] = [
  {
    content: (
      <>
        <span className="text-cyan-400">const</span>{" "}
        <span className="text-emerald-400">developer</span>{" "}
        <span className="text-slate-400">=</span> <span className="text-slate-300">{"{"}</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-300">name</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-amber-300">&apos;Sushant Palkar&apos;</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-300">role</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-amber-300">&apos;Full Stack Developer&apos;</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-300">skills</span>
        <span className="text-slate-400">:</span> <span className="text-slate-300">[</span>
        <span className="text-amber-300">&apos;React&apos;</span>
        <span className="text-slate-500">,</span>{" "}
        <span className="text-amber-300">&apos;Node&apos;</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 2,
    content: (
      <>
        <span className="text-amber-300">&apos;Express&apos;</span>
        <span className="text-slate-500">,</span>{" "}
        <span className="text-amber-300">&apos;MongoDB&apos;</span>
        <span className="text-slate-300">]</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-300">focus</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-amber-300">&apos;Reliable full-stack products&apos;</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-slate-300">available</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-cyan-400">true</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-slate-300">{"}"}</span>
        <span className="text-slate-500">;</span>
      </>
    ),
  },
];

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

const heroContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

const eyebrowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.95,
      ease: EASE_PREMIUM,
    },
  },
};

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.1,
    },
  },
};

const headingWord: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: EASE_PREMIUM,
    },
  },
};

const roleReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.3,
      ease: EASE_PREMIUM,
    },
  },
};

const descriptionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.45,
      ease: EASE_PREMIUM,
    },
  },
};

const developerCardReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 18,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 1.4,
      ease: EASE_PREMIUM,
    },
  },
};

const buttonGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.08,
    },
  },
};

const buttonReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: EASE_PREMIUM,
    },
  },
};

const floatingCard: Variants = {
  rest: {
    y: [0, -6, 0],
    rotate: [-5, -4, -5],
    scale: 1,
    transition: {
      y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      scale: { type: "spring", stiffness: 220, damping: 18 },
    },
  },
  hover: {
    y: -8,
    rotate: -2,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 18,
      mass: 0.7,
    },
  },
};

const codeContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.65,
      staggerChildren: 0.05,
    },
  },
};

const codeLineReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: EASE_PREMIUM,
    },
  },
};

export default function HeroSection() {
  const nameWords = SITE_CONFIG.name.split(" ");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] overflow-hidden pt-20 lg:h-[100svh]"
    >
      <div className="container relative z-10">
        <motion.div
          className="mx-auto grid max-w-6xl items-center gap-8 py-10 sm:gap-10 sm:py-12 md:py-10 lg:h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(430px,460px)] lg:gap-16 lg:py-0"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={heroContainer}
        >
          <div className="min-w-0 max-w-2xl">
            <motion.span
              className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              variants={shouldReduceMotion ? undefined : eyebrowReveal}
            >
              Hi, I&apos;m
            </motion.span>

            <motion.h1
              className="mt-5 flex flex-wrap gap-x-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl sm:gap-x-5 sm:leading-none lg:text-7xl"
              variants={shouldReduceMotion ? undefined : headingContainer}
            >
              {nameWords.map((word, index) => (
                <motion.span
                  key={word}
                  className={index === nameWords.length - 1 ? "text-gradient" : undefined}
                  variants={shouldReduceMotion ? undefined : headingWord}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="mt-6 h-1 w-24 origin-left rounded-full bg-gradient-primary"
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 1.25, ease: EASE_PREMIUM }}
            />

            <motion.p
              className="mt-7 max-w-full break-words text-lg font-semibold text-muted sm:text-xl"
              variants={shouldReduceMotion ? undefined : roleReveal}
            >
              <AnimatedRoles />
            </motion.p>

            <motion.p
              className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg"
              variants={shouldReduceMotion ? undefined : descriptionReveal}
            >
              Building end-to-end web applications with React, Node.js, Express, MongoDB, and
              cloud-aware development practices.
            </motion.p>

            <motion.div
              className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4"
              variants={shouldReduceMotion ? undefined : buttonGroup}
            >
              <motion.a
                href="#projects"
                className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
                variants={shouldReduceMotion ? undefined : buttonReveal}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
                variants={shouldReduceMotion ? undefined : buttonReveal}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                Connect
              </motion.a>
              <motion.a
                href={SITE_CONFIG.resumeUrl}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
                target="_blank"
                rel="noopener noreferrer"
                variants={shouldReduceMotion ? undefined : buttonReveal}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <ArrowDownToLine className="h-4 w-4" />
                Resume
              </motion.a>
            </motion.div>

            <SocialLinks
              links={socialLinks}
              staggered={!shouldReduceMotion}
              staggerDelay={shouldReduceMotion ? 0 : 1.75}
              className="mt-10 gap-4"
              linkClassName="h-9 w-9 border-transparent bg-transparent text-primary hover:text-secondary"
            />
          </div>

          <motion.div
            variants={shouldReduceMotion ? undefined : developerCardReveal}
            className="relative mx-auto hidden w-full min-w-0 justify-center lg:flex lg:mx-0 lg:justify-self-end"
          >
            <motion.div
              className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),rgba(34,211,238,0.11)_44%,transparent_72%)] blur-3xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [0, 16, -10, 0],
                y: [0, -12, 8, 0],
                scale: [1, 1.05, 0.98, 1],
              }}
              transition={{
                opacity: { duration: 0.7, delay: shouldReduceMotion ? 0 : 1.4, ease: "easeOut" },
                x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 14, repeat: Infinity, ease: "easeInOut" },
              }}
              aria-hidden="true"
            />

            <motion.div
              className="group relative h-[284px] w-full max-w-[450px] sm:h-[292px] lg:w-[450px]"
              variants={floatingCard}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <div
                className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-cyan-400/25 via-blue-500/15 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex h-full overflow-hidden rounded-[20px] border border-white/10 bg-[#0b1221]/95 shadow-[0_26px_80px_rgba(2,8,23,0.28)] backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/35 group-hover:shadow-[0_34px_100px_rgba(8,145,178,0.22)]">
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="relative flex h-11 shrink-0 items-center border-b border-white/10 bg-white/[0.025] px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs font-medium text-slate-400">
                      profile.ts
                    </span>
                  </div>

                  <motion.pre
                    className="flex-1 overflow-hidden px-5 py-5 font-mono text-[0.73rem] font-semibold leading-[1.55rem] text-slate-300 sm:px-7 sm:text-[0.82rem] sm:leading-[1.7rem]"
                    variants={shouldReduceMotion ? undefined : codeContainer}
                    initial={shouldReduceMotion ? false : "hidden"}
                    animate="visible"
                  >
                    <code>
                      {developerCode.map((line, index) => (
                        <motion.span
                          key={`${index}-${line.indent ?? 0}`}
                          className="block min-w-0 whitespace-pre-wrap"
                          style={{ paddingLeft: `${(line.indent ?? 0) * 1.25}rem` }}
                          variants={shouldReduceMotion ? undefined : codeLineReveal}
                        >
                          {line.content}
                          {index === developerCode.length - 1 ? (
                            <motion.span
                              className="ml-1 inline-block h-4 w-1 translate-y-0.5 rounded-sm bg-cyan-300"
                              animate={{ opacity: [1, 1, 0, 0, 1] }}
                              transition={{
                                duration: 1.05,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              aria-hidden="true"
                            />
                          ) : null}
                        </motion.span>
                      ))}
                    </code>
                  </motion.pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
