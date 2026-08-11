import { motion } from "framer-motion";

const socialLinkVariants = {
  rest: {},
  hover: { scale: 1.08, y: -2 },
};

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

        {/* Center: Social text links */}
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com/sushantpalkar19"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={socialLinkVariants}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sushant-palkar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={socialLinkVariants}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            LinkedIn
          </motion.a>
        </div>

        {/* Right: Availability status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#14F195] shadow-[0_0_8px_#14F195]" aria-hidden="true" />
            <span className="text-slate-300">Available for collaboration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
