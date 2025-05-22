# Web Foundation Setup for Cheflyte

**Task Name Slug:** web-foundation-cheflyte  
**Created:** 2025-05-22  
**Branch Name:** feat/web-foundation

---

## Background and Motivation
Cheflyte aims to become the go-to AI-powered chef-booking and meal-planning platform. A solid, well-structured web foundation is essential before we layer on complex booking flows, AI features, and real-time collaboration tools. This phase focuses on scaffolding a modern, production-ready Next.js codebase and establishing a cohesive design system that reflects the brand sheet provided (Inter typography, dark/sage greens, cream, mustard, rounded corners, minimalist look).

## Key Challenges and Analysis
1. **Maintaining Brand Consistency** – Tailwind's default palette must be extended precisely to match the Cheflyte palette and typography.
2. **Component Re-usability & Accessibility** – Leveraging Shadcn/ui while customising tokens to fit the design language.
3. **Incremental Vertical Slices** – Delivering work in tiny, self-verifiable chunks so the UI can be reviewed early and often.
4. **Future-proof Folder Structure** – Organising the repo for the impending addition of booking flows, AI utilities, and a database layer without over-engineering.
5. **Mobile-first & Performance** – Ensuring lighthouse scores stay healthy even during early development.

## High-level Task Breakdown
Each task includes success criteria the Executor must satisfy **before** moving down the list. Only one task is "In Progress" at any given time.

1. **Create Feature Branch**  
   - Command: `git checkout -b feat/web-foundation`  
   - Success: Branch exists, `git status` clean.
2. **Scaffold Next.js 14 TypeScript Project**  
   - Use `create-next-app@latest` with App Router.  
   - Flags: `--ts --tailwind --eslint --src-dir --import-alias "@/*"`  
   - Success: `npm run dev` serves default Next page at `localhost:3000`.
3. **Install Core Dependencies**  
   - `@shadcn/ui`, `clsx`, `lucide-react`, `framer-motion`, `zustand`.  
   - Success: `npm ls` shows packages, dev server runs.
4. **Configure Tailwind Theme**  
   - Extend colours (dark green `#213F33`, sage `#5D745E`, cream `#EFEBD4`, mustard `#D7A946`).  
   - Add `fontFamily: { sans: ["Inter", ...] }`  
   - Success: Using `bg-brand-dark` etc. outputs correct hex in browser inspector.
5. **Integrate @next/font Inter**  
   - Global CSS → `font-sans` on `html`.  
   - Success: DevTools displays "Inter" for body text.
6. **Set Up Shadcn/ui & Initialise Components**  
   - Run `npx shadcn-ui@latest init` with custom directory `src/components/ui`.  
   - Generate base `button`, `input`, `card`.  
   - Success: Example page renders all three components without styling issues.
7. **Customise Components to Brand**  
   - Override Tailwind classes: dark green primary, rounded-lg, soft shadow.  
   - Success: Visual match to brand sheet (baseline screenshot added to repo).
8. **Create Style Guide / Preview Page**  
   - Route `/style-guide` listing typography samples, colours, Button/Input/Card demos.  
   - Success: Page is responsive and passes aXe accessibility scan.
9. **Establish Base Layout & Navigation**  
   - `app/(main)/layout.tsx` with Header (logo, nav links) and `<main />`.  
   - Placeholder homepage at `/`.  
   - Success: Navigation sticks to top, mobile menu collapses.
10. **Introduce Zustand Example Store**  
    - Simple dark-mode toggle in header.  
    - Success: Toggle state persists across page navigation.
11. **Quality Tooling & CI**  
    - ESLint + Prettier config, Tailwind plugin for prettier.  
    - Husky pre-commit: `lint`, `format:check`.  
    - GitHub Action: Node 18 matrix `pnpm install`, `pnpm lint`, `pnpm build`.  
    - Success: CI passes on PR.
12. **Documentation & Repo Polish**  
    - Update `README.md` with setup, available scripts, and screenshot of style guide.  
    - Add `CODEOWNERS`, conventional commits guide, and issue templates.  
    - Success: `npm run lint` & `npm run build` succeed from clean clone.
13. **Final Review & Sign-off**  
    - Planner validates all success criteria, merges PR to `main`.

## Project Status Board
- [x] 1. Create feature branch
- [x] 2. Scaffold Next.js project (generated in `web/` directory)
- [ ] 3. Install core dependencies
- [ ] 4. Configure Tailwind theme
- [ ] 5. Integrate Inter font
- [ ] 6. Set up Shadcn/ui
- [ ] 7. Customise components
- [ ] 8. Style guide page
- [ ] 9. Base layout & nav
- [ ] 10. Zustand example store
- [ ] 11. Quality tooling & CI
- [ ] 12. Documentation & polish
- [ ] 13. Final review

## Current Status / Progress Tracking
| Task | Status | Owner | Notes |
|------|--------|-------|-------|
| All | _Not started_ | — | Awaiting human approval |
| 1 | Done | Executor | Feature branch `feat/web-foundation` created |
| 2 | Done | Executor | Next.js 14 scaffold generated under `web/` (CI non-interactive) |

## Executor's Feedback or Assistance Requests
_To be filled by Executor during implementation._ 