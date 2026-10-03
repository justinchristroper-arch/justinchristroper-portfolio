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
- `/projects/helpdesk-ai`

## Adding another project

Add a new project object to `src/data/projects.ts` and extend the project slug union and visual mapping in `src/components/ProjectVisual.tsx`. The homepage card and case-study route are generated from the shared project data.

## Resume

The final ATS resume is available to download from the homepage's **Download Resume** button. The PDF is stored at `public/resume.pdf` and served at `/resume.pdf`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected framework preset as **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy.

`vercel.json` includes the SPA rewrite required for direct access to project routes.
