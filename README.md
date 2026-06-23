# Universal Website Development Template

A reusable website development template for building professional, secure, responsive, and production-ready websites.

This template is not limited to one coding tool. It can be used with:

* Codex
* Cursor
* GitHub Copilot
* ChatGPT
* Claude
* Gemini
* Kimi
* Kimi K2
* Kimi Researcher if useful
* Kimi / Moonshot AI API if available
* Any AI coding assistant
* Any human developer or software team

## Purpose

This repository is a reusable starter/template for creating different types of websites, including:

* E-commerce stores
* Company websites
* Service websites
* Landing pages
* Admin-controlled websites
* Arabic/English bilingual websites

The goal is to avoid starting from zero every time. Instead, update the project brief, then let a developer or AI coding assistant build or customize the project according to the requirements.

## Main files

### `PROJECT_BRIEF.md`

This file contains the active project details.

It should include:

* Project name
* Business type
* Target market
* Brand colors
* Logo details
* Required pages
* Homepage sections
* Services or products
* Admin panel requirements
* Backend requirements
* Security requirements
* SEO requirements
* Deployment preferences

For the current example, it is filled with AL-YOUSEF Electronics data.

### `PROJECT_BRIEF.template.md`

This is the blank reusable version of the project brief.

Use it when starting a new project from this template.

### `CODEX_MASTER_PROMPT.md`

This is the universal development master prompt.

Despite the file name, it is not only for Codex. It can be used with Codex, Cursor, Copilot, ChatGPT, Claude, Gemini, Kimi, Moonshot AI tools, or any developer.

It tells the developer or AI agent how to:

* Analyze the project
* Build the frontend
* Build the backend
* Create or improve admin panel
* Add security
* Improve SEO
* Improve performance
* Add testing
* Prepare deployment
* Report limitations and final results

### `TEMPLATE_GUIDE.md`

A practical guide explaining how to reuse this template for future projects.

### `.env.example`

A safe environment variable example file.

It must only contain placeholders, never real secrets.

## How to use this template

### 1. Create a new repository from this template

On GitHub, click:

```text
Use this template
```

Then create a new repository for your new project.

### 2. Edit `PROJECT_BRIEF.md`

Open `PROJECT_BRIEF.md` and replace the current project details with the new project details.

For example:

```text
Project Name: Your New Project
Business Type: Your Business Type
Primary Color: #000000
Secondary Color: #D4AF37
Website Type: E-commerce / Company / Services
```

### 3. Open your coding tool

Use any coding tool or developer, such as:

* Codex
* Cursor
* GitHub Copilot
* ChatGPT
* Claude
* Gemini
* Kimi
* Kimi K2
* Kimi Researcher
* Moonshot AI API
* Human developer

### 4. Give this instruction

```text
Read PROJECT_BRIEF.md and CODEX_MASTER_PROMPT.md, then build or improve the website according to the brief.
```

### 5. Review the final report

The developer or AI agent should provide:

* Work completed
* Files created
* Files modified
* Commands run
* Test results
* Security issues found
* Remaining recommendations
* Missing access or limitations

## Recommended workflow

1. Create a new repository from this template.
2. Update `PROJECT_BRIEF.md`.
3. Keep `CODEX_MASTER_PROMPT.md` as the main development instruction.
4. Run the coding assistant or give the files to a developer.
5. Review the implementation.
6. Test the website.
7. Deploy when ready.

## Security notes

Do not commit real secrets.

Never put real values in:

* `.env.example`
* README files
* Public frontend code
* GitHub commits

Use environment variables for:

* Database URLs
* API keys
* JWT secrets
* Session secrets
* Payment keys
* Email provider keys
* Webhook secrets

## Template rules

When using this template:

* Keep project-specific data inside `PROJECT_BRIEF.md`.
* Keep reusable instructions inside `CODEX_MASTER_PROMPT.md`.
* Keep real secrets outside Git.
* Keep the structure clean and easy to reuse.
* Document any assumptions or limitations.
* Make branding and content easy to replace.
* Protect admin routes and admin APIs.
* Validate backend inputs.
* Avoid hardcoding client-specific data across many files.

## Current example project

Current active brief:

```text
AL-YOUSEF Electronics
Premium electronics e-commerce store
Arabic + English
Dark navy + metallic gold + cyan accent
```

This project brief can be replaced anytime for another business.

## Quick command

If the script exists, you can reset/create a new project brief from the template:

```bash
npm run brief
```

This uses:

```text
scripts/create-project-brief.js
```

## Final note

This template is designed to be flexible. It should work as a strong starting point for many different website projects, not only AL-YOUSEF Electronics.

```
