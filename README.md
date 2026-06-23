# AL-YOUSEF Reusable Website Template

Professional reusable website template workflow for building new websites from a consistent structure, branding system, admin-editable content, and clear project briefs.

> This repository is intentionally separate from `alyousef-electronics`. Use it as the independent starter/template workspace for future projects.

## Purpose

This template helps you create new websites quickly by giving AI tools or developers a clear structure and instructions. For each new project, fill in `PROJECT_BRIEF.md`, then ask Codex or another AI coding tool to customize the template according to the brief.

## Recommended workflow

1. Copy this repository or create a new project from it.
2. Fill in `PROJECT_BRIEF.md` with the new project name, business type, colors, pages, services, logo, and contact data.
3. Open `CODEX_MASTER_PROMPT.md`.
4. Give Codex the prompt plus the filled brief.
5. Ask Codex to generate or customize the project.
6. Review, run, test, and deploy.

## What this template standardizes

- Website name and branding
- Logo and favicon requirements
- Brand colors
- Homepage structure
- Pages and sections
- Services/features
- Contact data
- Social media links
- SEO metadata
- Admin panel requirements
- Editable content requirements
- Testing checklist
- Final engineering report format

## Files

```text
README.md
TEMPLATE_GUIDE.md
PROJECT_BRIEF.md
PROJECT_BRIEF.template.md
CODEX_MASTER_PROMPT.md
.env.example
.gitignore
scripts/
  create-project-brief.js
```

## Quick start

```bash
npm run brief
```

This creates or refreshes `PROJECT_BRIEF.md` from `PROJECT_BRIEF.template.md`.

Then edit:

```text
PROJECT_BRIEF.md
```

After that, use `CODEX_MASTER_PROMPT.md` with Codex.

## Suggested Codex instruction

```text
Read PROJECT_BRIEF.md and CODEX_MASTER_PROMPT.md, then create/customize the project according to the brief. Keep the result clean, reusable, admin-editable, and production-ready.
```
