import emailjs from "@emailjs/browser";
import type { ContactFormFields } from "@/types";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export async function sendContactEmail(payload: ContactFormFields) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: payload.name,
      from_email: payload.email,
      subject: payload.subject,
      message: payload.message,
    },
    {
      publicKey: PUBLIC_KEY,
    },
  );
}
