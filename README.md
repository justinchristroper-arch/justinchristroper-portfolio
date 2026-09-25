# Justin Christroper — Portfolio

A dark, editorial personal portfolio presenting practical work across software, data, AI, and business systems.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
npm run lint
npm run build
```

## Project routes

- `/`
- `/projects/cvscreener`
- `/projects/nusamart`
- `/projects/requestflow`

## Adding another project

Add a new project object to `src/data/projects.ts` and extend the project slug union and visual mapping in `src/components/ProjectVisual.tsx`. The homepage card and case-study route are generated from the shared project data.

## Resume

The current website intentionally shows “Resume coming soon.” When the final resume is ready, add it as `public/resume.pdf` and replace the status in `src/pages/HomePage.tsx` with a link to `/resume.pdf`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected framework preset as **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy.

`vercel.json` includes the SPA rewrite required for direct access to project routes.
