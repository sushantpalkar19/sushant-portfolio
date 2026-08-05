import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type WelcomeIntroProps = {
  onComplete: () => void;
};

const INTRO_SEQUENCE_SECONDS = 2.2;
const sequenceTimes = [0, 0.36, 0.73, 1];
const welcomeText = "Welcome";

const letterContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.045,
    },
  },
};

const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const completedRef = useRef(false);

  const handleSequenceComplete = () => {
    if (completedRef.current) {
      return;
    }

    completedRef.current = true;
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0B1120]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.08 : 0.14, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label="Welcome"
    >
      <motion.div
        className="relative flex items-center justify-center px-6"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : {
                opacity: 0,
                scale: 0.98,
                y: 20,
              }
        }
        animate={
          shouldReduceMotion
            ? { opacity: [0, 1, 0] }
            : {
                opacity: [0, 1, 1, 0],
                scale: [0.98, 1, 1, 1.01],
                y: [20, 0, 0, -20],
              }
        }
        transition={{
          duration: shouldReduceMotion ? 0.42 : INTRO_SEQUENCE_SECONDS,
          times: shouldReduceMotion ? [0, 0.45, 1] : sequenceTimes,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={handleSequenceComplete}
      >
        <motion.h1
          className="relative overflow-hidden bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text font-display text-[clamp(3.75rem,10vw,7.5rem)] font-bold leading-none tracking-normal text-transparent antialiased"
          variants={letterContainer}
          initial="hidden"
          animate="visible"
          aria-label="Welcome"
        >
          {welcomeText.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="inline-block"
              variants={letterReveal}
              aria-hidden="true"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
