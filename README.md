# Sushant Palkar Portfolio

A clean, recruiter-friendly personal portfolio built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, Zod, and EmailJS.

## Highlights

- Professional dark theme using `#0F172A`, `#1E293B`, `#2563EB`, `#38BDF8`, `#F8FAFC`, and `#94A3B8`
- Mobile-first layout with Home, About, Skills, Experience, Projects, Education, Contact, and Footer
- Subtle Framer Motion page fade, section slide-up reveals, button hover motion, and card elevation
- Reusable UI components for buttons, cards, badges, inputs, textareas, section headings, and project cards
- EmailJS contact form powered by React Hook Form and Zod validation
- SEO metadata, `robots.txt`, `sitemap.xml`, manifest, resume download, and Vercel config
- Lazy-loaded route and section modules with lazy-loaded project images

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form
- EmailJS
- Zod
- Lenis
- React Router

## Project Structure

```text
src/
  assets/
    images/
    icons/
  animations/
  components/
    common/
    layout/
    ui/
  constants/
  data/
  hooks/
  pages/
  sections/
    Hero/
    About/
    Skills/
    Experience/
    Projects/
    Education/
    Contact/
  styles/
  types/
  utils/
  App.tsx
  main.tsx
```

## Installation

```bash
npm install
```

## Environment Variables

Create `.env` from `.env.example` and add your EmailJS values:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_SITE_URL=https://your-domain.vercel.app
```

EmailJS template variables used by the contact form:

```text
from_name
from_email
subject
message
to_name
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## Content Updates

- Edit profile, skills, experience, projects, education, and contact data in `src/data/portfolio.ts`.
- Edit site name, title, navigation, SEO description, and project filters in `src/constants/site.ts`.
- Replace `public/resume.pdf` with the final resume.
- Replace `public/images/profile.svg` with a real profile photo when available.
- Add real project deployment URLs to `liveUrl` in `src/data/portfolio.ts`.
