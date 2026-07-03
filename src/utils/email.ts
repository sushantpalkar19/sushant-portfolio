import emailjs from "@emailjs/browser";
import type { ContactFormFields } from "@/types";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const isEmailJsConfigured = Boolean(PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID);

export async function sendContactEmail(payload: ContactFormFields) {
  if (!isEmailJsConfigured) {
    throw new Error(
      "EmailJS is not configured yet. Add the VITE_EMAILJS_* values to your environment variables.",
    );
  }

  return emailjs.send(
    SERVICE_ID!,
    TEMPLATE_ID!,
    {
      from_name: payload.name,
      from_email: payload.email,
      subject: payload.subject,
      message: payload.message,
      to_name: "Sushant Palkar",
    },
    {
      publicKey: PUBLIC_KEY,
    },
  );
}
