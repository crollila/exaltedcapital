# Case Ollila — Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Development

- `npm install`
- `npm run dev`
- `npm run build` — type-checks and creates `dist/`
- `npm run preview` — serves the production build on port 4173

## Updating projects

Edit `PROJECTS` in `src/App.tsx`. Put recent work first. Set a category explicitly for new entries: Valuation, Research, Trading systems, or Applications. The default view displays six projects; visitors can expand the list or filter by category.

Keep project descriptions grounded in their public documentation. Identify synthetic valuations and simulated trading. Contact and social links are centralized in `LINKS`; the resume is served from `public/Case_Ollila_Resume.pdf`.

The site is static and requires no environment variables. Deploy the generated `dist/` directory through the existing hosting provider.
