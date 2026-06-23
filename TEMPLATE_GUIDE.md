# Template Guide

## Goal

This repository is a reusable project planning and AI-building template. It is designed so you can create new websites quickly by giving Codex a clear brief and fixed engineering rules.

## How to use for a new project

1. Duplicate this repository or create a new branch.
2. Run:

```bash
npm run brief
```

3. Edit `PROJECT_BRIEF.md`.
4. Give Codex:
   - `PROJECT_BRIEF.md`
   - `CODEX_MASTER_PROMPT.md`
5. Ask Codex to create or customize the website.

## What to customize first

- Project name
- Business type
- Brand colors
- Logo / logo description
- Pages
- Services
- Contact information
- Social links
- Language
- Style direction
- Admin panel requirements

## Recommended website structure

```text
src/
  components/
  pages/
  layouts/
  hooks/
  providers/
  config/
  assets/
api/
  routes/
  services/
  middleware/
db/
  schema/
contracts/
public/
```

## Admin panel requirements

The admin panel should allow editing:

- Website name
- Logo
- Colors
- Contact data
- Social links
- Hero section
- About section
- Services/features
- Footer
- SEO
- Images/banners

Settings must persist after refresh and be used by the frontend.

## Logo/image rules

- Prefer upload or URL.
- Store only the final image path/URL.
- Do not store large Base64 strings in settings/database.
- Add preview and validation.
- Keep fallback logo.

## Add a new editable setting

1. Add it to the settings contract/schema.
2. Add default value.
3. Add admin form field.
4. Save through API/storage.
5. Read it in the frontend.
6. Test persistence and refresh.

## Files that should usually not contain project-specific hardcoding

- Layout components
- Shared components
- API logic
- Settings provider
- Admin settings logic

Project-specific content should live in settings/config/brief.
