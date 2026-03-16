# HBP Properties Website

Production-ready real estate website built with Next.js 14, TypeScript, TailwindCSS, Framer Motion, and Nodemailer.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Nodemailer

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

Update `.env.local` with valid SMTP credentials.

3. Start development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Folder Structure

- `app` - App Router pages and API route
- `components` - Reusable UI components
- `lib` - constants and utility functions
- `public/assets` - logo, owner photo, certificates
- `styles` - design tokens and theme styles
