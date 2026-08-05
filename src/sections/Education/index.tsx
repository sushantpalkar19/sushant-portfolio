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
                  className="group relative overflow-hidden rounded-[20px] border border-slate-800/80 bg-[#090f1e]/90 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:shadow-[0_20px_50px_rgba(8,145,178,0.15)] sm:p-7"
                >
                  {/* Subtle radial dark overlay pattern in top right */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-500/10 via-slate-800/20 to-transparent blur-xl"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Institution Name */}
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        {title}
                      </h3>

                      {/* Degree / Program */}
                      <p
                        className={`mt-1.5 text-sm font-semibold ${
                          isBTech ? "text-[#14F195]" : "text-[#38BDF8]"
                        }`}
                      >
                        {programLabel}
                      </p>
                    </div>

                    {/* Divider Line */}
                    <div className="my-5 h-px w-full bg-slate-800/80" />

                    {/* Bottom Row: Year on Left, Score Badge on Right */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-xs font-medium text-slate-400">
                        {item.period}
                      </span>

                      {item.scoreValue ? (
                        <span
                          className={`font-mono text-xs font-semibold rounded-md border px-2.5 py-1 ${
                            isBTech
                              ? "border-[#14F195]/40 text-[#14F195] bg-[#14F195]/5"
                              : "border-[#38BDF8]/40 text-[#38BDF8] bg-[#38BDF8]/5"
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
