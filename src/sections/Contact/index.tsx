import { useState } from "react";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/common/toast-provider";
import { sendContactEmail } from "@/utils/email";
import type { ContactFormFields } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a short subject."),
  message: z.string().min(15, "Please write your message."),
});

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

const leftPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const rightPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const inputItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactSection() {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setIsSubmitting(true);

    try {
      await sendContactEmail(values);
      reset();
      toast.success("Message sent successfully. I will get back to you as soon as possible.");
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again later.";

      toast.error(fallbackMessage);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Very subtle cyan radial glow behind the container */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,rgba(20,241,149,0.04)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {/* Section Header above container */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <div className="inline-flex flex-col items-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#14F195]">
                LET&apos;S BUILD SOMETHING TOGETHER
              </span>
              <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#14F195] to-[#38BDF8] rounded-full" />
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Open to full-time roles, freelance projects, and collaborations. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          {/* Centered Glassmorphism Container Card */}
          <div
            className={[
              "relative rounded-[24px] p-6 sm:p-10 lg:p-12 transition-all duration-300",
              // Light mode
              "bg-white border border-slate-200",
              "shadow-[0_4px_25px_rgba(15,23,42,0.08),0_1px_4px_rgba(15,23,42,0.04)]",
              // Dark mode
              "dark:bg-[#090f1e]/90 dark:border-slate-800/80 dark:backdrop-blur-xl",
              "dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]",
            ].join(" ")}
          >
            {/* Two-Column Layout with Vertical Divider on Desktop */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              {/* LEFT PANEL */}
              <motion.div
                variants={leftPanelVariants}
                className="flex flex-col justify-between lg:col-span-5 lg:pr-8 lg:border-r lg:border-slate-200 dark:lg:border-slate-800/80"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                    Get in Touch
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                    Based in Maharashtra, India — open to remote &amp; on-site roles.
                  </p>

                  <div className="mt-6">
                    <motion.a
                      href="mailto:sushantpalkar92@gmail.com"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#14F195] to-[#38BDF8] px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_8px_20px_rgba(20,241,149,0.25)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Email Me</span>
                    </motion.a>
                  </div>
                </div>

                {/* Contact List */}
                <div className="mt-8 space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800/60 lg:border-t-0 lg:pt-0">
                  <a
                    href="tel:+917499092205"
                    className="flex items-center gap-3 text-xs font-mono text-slate-700 hover:text-[#0284c7] dark:text-slate-300 dark:hover:text-[#38BDF8] transition-colors duration-150"
                  >
                    <Phone className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>+91 7499092205</span>
                  </a>

                  <a
                    href="mailto:sushantpalkar92@gmail.com"
                    className="flex items-center gap-3 text-xs font-mono text-slate-700 hover:text-[#0284c7] dark:text-slate-300 dark:hover:text-[#38BDF8] transition-colors duration-150"
                  >
                    <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span className="truncate">sushantpalkar92@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
                    <MapPin className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>Maharashtra, India</span>
                  </div>

                  <a
                    href="https://linkedin.com/in/sushant-palkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs font-mono text-slate-700 hover:text-[#0284c7] dark:text-slate-300 dark:hover:text-[#38BDF8] transition-colors duration-150"
                  >
                    <Linkedin className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/sushantpalkar19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs font-mono text-slate-700 hover:text-[#0284c7] dark:text-slate-300 dark:hover:text-[#38BDF8] transition-colors duration-150"
                  >
                    <Github className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>

              {/* RIGHT PANEL */}
              <motion.div
                variants={rightPanelVariants}
                className="flex flex-col justify-center lg:col-span-7 lg:pl-2"
              >
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <motion.div variants={inputItemVariants}>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-[#38BDF8] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/40 focus:shadow-[0_0_12px_rgba(56,189,248,0.15)] dark:border-slate-800 dark:bg-[#060b17]/90 dark:text-slate-200 dark:placeholder:text-slate-500 dark:hover:border-slate-700 dark:focus:border-[#38BDF8] dark:focus:bg-[#060b17] dark:focus:ring-1 dark:focus:ring-[#38BDF8]/40 dark:focus:shadow-[0_0_8px_rgba(56,189,248,0.1)]"
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
                    ) : null}
                  </motion.div>

                  <motion.div variants={inputItemVariants}>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      {...register("email")}
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-[#38BDF8] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/40 focus:shadow-[0_0_12px_rgba(56,189,248,0.15)] dark:border-slate-800 dark:bg-[#060b17]/90 dark:text-slate-200 dark:placeholder:text-slate-500 dark:hover:border-slate-700 dark:focus:border-[#38BDF8] dark:focus:bg-[#060b17] dark:focus:ring-1 dark:focus:ring-[#38BDF8]/40 dark:focus:shadow-[0_0_8px_rgba(56,189,248,0.1)]"
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
                    ) : null}
                  </motion.div>

                  <motion.div variants={inputItemVariants}>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      {...register("subject")}
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-[#38BDF8] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/40 focus:shadow-[0_0_12px_rgba(56,189,248,0.15)] dark:border-slate-800 dark:bg-[#060b17]/90 dark:text-slate-200 dark:placeholder:text-slate-500 dark:hover:border-slate-700 dark:focus:border-[#38BDF8] dark:focus:bg-[#060b17] dark:focus:ring-1 dark:focus:ring-[#38BDF8]/40 dark:focus:shadow-[0_0_8px_rgba(56,189,248,0.1)]"
                    />
                    {errors.subject ? (
                      <p className="mt-1 text-xs text-rose-400">{errors.subject.message}</p>
                    ) : null}
                  </motion.div>

                  <motion.div variants={inputItemVariants}>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      {...register("message")}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-[#38BDF8] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/40 focus:shadow-[0_0_12px_rgba(56,189,248,0.15)] dark:border-slate-800 dark:bg-[#060b17]/90 dark:text-slate-200 dark:placeholder:text-slate-500 dark:hover:border-slate-700 dark:focus:border-[#38BDF8] dark:focus:bg-[#060b17] dark:focus:ring-1 dark:focus:ring-[#38BDF8]/40 dark:focus:shadow-[0_0_8px_rgba(56,189,248,0.1)]"
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
                    ) : null}
                  </motion.div>

                  <motion.div variants={inputItemVariants} className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      whileHover={isSubmitting ? undefined : { scale: 1.03 }}
                      whileTap={isSubmitting ? undefined : { scale: 0.97 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#14F195] to-[#38BDF8] px-6 text-sm font-semibold text-slate-950 shadow-[0_8px_20px_rgba(20,241,149,0.25)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
