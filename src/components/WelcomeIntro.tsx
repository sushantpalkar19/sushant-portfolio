import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type WelcomeIntroProps = {
  onComplete: () => void;
};

// Premium easing curves
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

const LETTERS = "WELCOME".split("");

// Stagger delays for each letter (seconds)
const LETTER_STAGGER = 0.055;

// Total sequence:
// 0s    → letters start fading in (staggered)
// ~0.7s → all letters visible, accent line begins
// ~1.1s → accent line fully drawn
// 1.6s  → hold complete
// 1.6s  → trigger exit fade
// 2.1s  → fully faded out, onComplete fires

const HOLD_BEFORE_EXIT_MS = 1600;
const EXIT_DURATION_S = 0.55;

export default function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      const timer = setTimeout(() => setIsVisible(false), 400);
      return () => clearTimeout(timer);
    }

    // After letters animate in (~0.65s), reveal accent line
    const lineTimer = setTimeout(() => setLineVisible(true), 650);

    // Then trigger the exit
    const exitTimer = setTimeout(() => setIsVisible(false), HOLD_BEFORE_EXIT_MS);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(exitTimer);
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible ? (
        <motion.div
          key="welcome-intro-overlay"
          className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#070c18]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0.2 : EXIT_DURATION_S,
              ease: EASE_IN_OUT,
            },
          }}
          role="status"
          aria-label="Welcome intro"
          aria-live="polite"
        >
          {/* --- Ambient radial glow (large, behind the text) --- */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <motion.div
              className="h-[260px] w-[260px] rounded-full sm:h-[420px] sm:w-[420px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(20,241,149,0.10) 0%, rgba(20,241,149,0.04) 40%, transparent 72%)",
                filter: "blur(60px)",
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.9,
                ease: EASE_OUT_EXPO,
              }}
            />
          </motion.div>

          {/* --- Secondary teal accent glow, offset slightly --- */}
          <motion.div
            className="pointer-events-none absolute"
            style={{ top: "45%", left: "50%", translate: "-50% -50%" }}
            aria-hidden="true"
          >
            <motion.div
              className="h-[160px] w-[90vw] rounded-full sm:h-[200px] sm:w-[600px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, transparent 70%)",
                filter: "blur(48px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 1.1,
                delay: 0.2,
                ease: EASE_OUT_EXPO,
              }}
            />
          </motion.div>

          {/* --- Main centered content --- */}
          <div className="relative flex flex-col items-center gap-5 px-6 select-none">
            {/* WELCOME letters with stagger */}
            <div
              className="flex items-center gap-0 overflow-visible"
              aria-label="Welcome"
            >
              {shouldReduceMotion ? (
                // Reduced motion: simple block fade
                <motion.span
                  className="font-display text-4xl font-bold uppercase tracking-[0.28em] text-[#14F195] antialiased sm:text-5xl md:text-6xl"
                  style={{
                    textShadow: "0 0 32px rgba(20,241,149,0.30)",
                    letterSpacing: "0.28em",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                  aria-hidden="true"
                >
                  WELCOME
                </motion.span>
              ) : (
                // Full cinematic: per-letter stagger
                LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block font-display text-[2.25rem] font-bold uppercase text-[#14F195] antialiased sm:text-5xl md:text-6xl"
                    style={{
                      letterSpacing: "0.12em",
                      textShadow: "0 0 28px rgba(20,241,149,0.28)",
                      willChange: "transform, opacity",
                    }}
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.97,
                      transition: {
                        duration: EXIT_DURATION_S * 0.7,
                        ease: EASE_IN_OUT,
                        delay: (LETTERS.length - 1 - i) * 0.018,
                      },
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + i * LETTER_STAGGER,
                      ease: EASE_OUT_EXPO,
                    }}
                    aria-hidden="true"
                  >
                    {letter}
                  </motion.span>
                ))
              )}
            </div>

            {/* --- Accent underline sweep --- */}
            <div
              className="relative h-px w-full max-w-[14rem] overflow-hidden sm:max-w-xs md:max-w-sm"
              aria-hidden="true"
            >
              {/* Track line */}
              <motion.div
                className="absolute inset-0 bg-[#14F195]/15"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: lineVisible ? 1 : 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  ease: EASE_OUT_EXPO,
                }}
              />
              {/* Bright moving glow head */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-[#14F195]/80 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: lineVisible ? "120%" : "-100%" }}
                  transition={{
                    duration: 0.55,
                    ease: EASE_OUT_EXPO,
                    delay: 0,
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
