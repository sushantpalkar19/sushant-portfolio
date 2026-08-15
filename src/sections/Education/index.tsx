import { motion, type Variants } from "framer-motion";
import { education } from "@/data/portfolio";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EducationSection() {
  // Only show B.Tech and 12th (exclude 10th grade as requested)
  const filteredEducation = education.filter(
    (item) =>
      item.degree.toLowerCase().includes("bachelor") ||
      item.degree.toLowerCase().includes("secondary") ||
      item.degree.toLowerCase().includes("higher") ||
      item.degree.toLowerCase().includes("b.tech")
  ).slice(0, 2);

  return (
    <section id="education" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariants}
        >
          {/* Section Header */}
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#14F195]">
              EDUCATION
            </span>
            <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#14F195] to-[#38BDF8] rounded-full" />
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEducation.map((item, index) => {
              const isBTech = index === 0;
              const title = item.institution.replace(", Solapur", "");
              const programLabel = isBTech
                ? "B.Tech in Information Technology"
                : "HSC (Class XII)";
              const scoreText = item.scoreLabel
                ? `${item.scoreLabel}: ${item.scoreValue}`
                : `Score: ${item.scoreValue}`;

              return (
                <motion.div
                  key={item.institution}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={[
                    "group relative overflow-hidden rounded-[20px] p-6 sm:p-7 transition-all duration-300",
                    // Light mode
                    "bg-white border border-slate-200",
                    "shadow-[0_4px_20px_rgba(15,23,42,0.07),0_1px_4px_rgba(15,23,42,0.04)]",
                    "hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.11),0_2px_8px_rgba(15,23,42,0.06)]",
                    // Dark mode
                    "dark:bg-[#090f1e]/90 dark:border-slate-800/80 dark:backdrop-blur-xl",
                    "dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
                    "dark:hover:border-slate-700 dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.6)]",
                  ].join(" ")}
                >
                  {/* Subtle radial dark overlay pattern in top right - hidden in light mode */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-xl opacity-0 dark:opacity-20"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Institution Name */}
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                        {title}
                      </h3>

                      {/* Degree / Program */}
                      <p
                        className={`mt-1.5 text-sm font-semibold ${isBTech ? "text-emerald-600 dark:text-[#14F195]" : "text-sky-600 dark:text-[#38BDF8]"
                          }`}
                      >
                        {programLabel}
                      </p>
                    </div>

                    {/* Divider Line */}
                    <div className="my-5 h-px w-full bg-slate-200 dark:bg-slate-800/80" />

                    {/* Bottom Row: Year on Left, Score Badge on Right */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                        {item.period}
                      </span>

                      {item.scoreValue ? (
                        <span
                          className={`font-mono text-xs font-semibold rounded-md border px-2.5 py-1 ${isBTech
                              ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-[#14F195]/40 dark:text-[#14F195] dark:bg-[#14F195]/5"
                              : "border-sky-300 bg-sky-50 text-sky-700 dark:border-[#38BDF8]/40 dark:text-[#38BDF8] dark:bg-[#38BDF8]/5"
                            }`}
                        >
                          {scoreText}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
