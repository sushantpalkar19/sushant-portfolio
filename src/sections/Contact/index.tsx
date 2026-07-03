import { useState } from "react";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactMethods, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/common/social-links";
import { sendContactEmail } from "@/utils/email";
import type { ContactFormFields } from "@/types";
import { cn } from "@/utils/cn";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a short subject."),
  message: z.string().min(20, "Please write a message with a bit more detail."),
});

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function ContactSection() {
  const [status, setStatus] = useState<StatusState>({ type: "idle", message: "" });
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
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    try {
      await sendContactEmail(values);
      reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you as soon as possible.",
      });
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again later.";

      setStatus({
        type: "error",
        message: fallbackMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect for software developer roles, internships, and collaborations."
          description="Use the form or direct contact links below. I am open to fresher opportunities across service-based and product-based companies."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-7">
            <p className="font-display text-2xl font-bold text-foreground">Contact details</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Recruiters and collaborators can reach me through email, phone, GitHub, LinkedIn, or
              the contact form.
            </p>

            <div className="mt-8 space-y-3">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-lg border border-border bg-background/70 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 inline-flex text-sm text-muted hover:text-foreground">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground">Social links</p>
              <SocialLinks links={socialLinks} className="mt-4" />
            </div>
          </Card>

          <Card className="p-7">
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name ? (
                    <p className="mt-2 text-xs text-rose-300">{errors.name.message}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="mt-2 text-xs text-rose-300">{errors.email.message}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Job opportunity, project, or collaboration"
                  {...register("subject")}
                />
                {errors.subject ? (
                  <p className="mt-2 text-xs text-rose-300">{errors.subject.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me a little about the role, project, or opportunity."
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-rose-300">{errors.message.message}</p>
                ) : null}
              </div>

              {status.type !== "idle" ? (
                <div
                  className={cn(
                    "rounded-lg border px-4 py-3 text-sm",
                    status.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-200",
                  )}
                >
                  {status.message}
                </div>
              ) : null}

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
