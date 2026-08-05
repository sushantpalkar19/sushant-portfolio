import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#070c18] py-6 text-slate-400">
      <div className="container mx-auto flex flex-col gap-4 px-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        {/* Left: Copyright and build info */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>&copy; {currentYear} Sushant Palkar</span>
          <span>&bull;</span>
          <span>Built with React &amp; Emerald Glow</span>
        </div>

        {/* Center: Clean social text links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sushantpalkar19"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sushant-palkar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        {/* Right: Availability status & Scroll-to-top circular button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#14F195] shadow-[0_0_8px_#14F195]" aria-hidden="true" />
            <span className="text-slate-300">Available for collaboration</span>
          </div>

          <motion.a
            href="#home"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#14F195]/40 bg-[#090f1e] text-[#14F195] shadow-[0_0_12px_rgba(20,241,149,0.15)] transition-all duration-200 hover:border-[#14F195] hover:shadow-[0_0_20px_rgba(20,241,149,0.35)] hover:text-white"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
