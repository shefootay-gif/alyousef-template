# Template Guide

This guide explains how to reuse this repository as a universal website development template.

The template is designed for:

* E-commerce websites
* Company websites
* Service websites
* Landing pages
* Admin-controlled websites
* Arabic/English bilingual websites
* Future projects that need clean structure, security, customization, and scalability

## Main idea

This template works through two main files:

```text
PROJECT_BRIEF.md
CODEX_MASTER_PROMPT.md
```

`PROJECT_BRIEF.md` describes the project.

`CODEX_MASTER_PROMPT.md` tells the developer or AI coding assistant how to build, customize, review, secure, test, and document the project.

Despite the name `CODEX_MASTER_PROMPT.md`, the prompt is universal and can be used with:

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

## File roles

### `PROJECT_BRIEF.md`

This is the active project brief.

Use it for the current project you want to build.

It should include:

* Project name
* Business type
* Target country or market
* Website type
* Languages
* Brand colors
* Logo requirements
* Pages
* Homepage sections
* Services or product categories
* Contact information
* Social media links
* SEO details
* Admin panel requirements
* Technical preferences
* Security requirements
* Deployment preferences
* Special notes

For the current example, it contains AL-YOUSEF Electronics details.

### `PROJECT_BRIEF.template.md`

This is the reusable blank version.

Use it when starting a new project.

Do not fill this file with one business only. Keep it generic so it can be reused later.

### `CODEX_MASTER_PROMPT.md`

This is the main development instruction file.

The developer or AI coding assistant should read it after reading `PROJECT_BRIEF.md`.

It explains how to:

* Analyze the existing repository
* Choose the correct stack based on the repo and brief
* Build or improve frontend pages
* Build or improve backend APIs
* Add or improve admin panel
* Add settings and branding management
* Add logo upload or URL support
* Add SEO
* Add performance improvements
* Add accessibility improvements
* Add security hardening
* Add database/schema improvements
* Add testing and QA
* Prepare deployment documentation
* Provide final report and limitations

### `README.md`

This explains the template at a high level.

It is the first file users usually read.

### `.env.example`

This file should contain safe environment variable placeholders only.

Never add real API keys, passwords, tokens, database URLs, or secrets.

### `scripts/create-project-brief.js`

This script can help reset or create a fresh `PROJECT_BRIEF.md` from `PROJECT_BRIEF.template.md`.

If package scripts are configured, it can be run with:

```bash
npm run brief
```

## How to start a new project

### Step 1: Create a repository from the template

On GitHub, click:

```text
Use this template
```

Create a new repository for the new project.

### Step 2: Update `PROJECT_BRIEF.md`

Open:

```text
PROJECT_BRIEF.md
```

Replace the current content with the new project details.

Use `PROJECT_BRIEF.template.md` as the base if needed.

### Step 3: Add project branding

Fill in:

* Project name
* Logo URL or logo description
* Primary color
* Secondary color
* Accent color
* Background style
* Typography preference
* Favicon details

### Step 4: Define pages

For e-commerce projects, include pages such as:

* Home
* Shop
* Product Details
* Categories
* Cart
* Checkout
* Order Confirmation
* Track Order
* Customer Orders
* About
* Contact
* FAQ
* Privacy Policy
* Terms and Conditions
* Return / Refund Policy
* Login
* Admin Dashboard
* Admin Products
* Admin Orders
* Admin Settings

For service or company websites, include pages such as:

* Home
* About
* Services
* Service Details
* Projects or Portfolio
* Contact
* FAQ
* Privacy Policy
* Terms and Conditions
* Admin Dashboard if needed

### Step 5: Define admin requirements

If the project needs an admin panel, clearly define what the admin can edit.

Common admin-editable items:

* Site name
* Logo
* Favicon
* Colors
* Hero text
* Hero image
* About section
* Services
* Product categories
* Products
* Orders
* Customers
* Coupons
* Shipping
* Contact info
* Social links
* Footer content
* SEO title
* SEO description
* Tracking pixels
* Payment settings
* Integration settings

### Step 6: Define technical preferences

Add preferred stack if known.

Examples:

```text
Frontend: React + TypeScript + Vite
Backend: Hono + tRPC
Database: PostgreSQL with Drizzle ORM
Authentication: Admin login with secure session/JWT
Deployment target: Render / VPS / Vercel-compatible setup
```

If the stack is unknown, leave it flexible and let the developer or AI agent infer from the existing repository.

## How to use with AI coding tools

Open your preferred tool and give this instruction:

```text
Read PROJECT_BRIEF.md and CODEX_MASTER_PROMPT.md, then build or improve the website according to the brief. Follow security, testing, documentation, and final report requirements.
```

This instruction can be used with:

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

## How to use with a human developer

Give the developer these files:

```text
PROJECT_BRIEF.md
CODEX_MASTER_PROMPT.md
README.md
TEMPLATE_GUIDE.md
.env.example
```

Ask the developer to:

1. Read the project brief.
2. Read the master prompt.
3. Analyze the repository.
4. Implement the project requirements.
5. Keep the project reusable.
6. Avoid hardcoding business-specific data across many files.
7. Protect admin routes and APIs.
8. Validate backend inputs.
9. Test the project.
10. Provide a final report.

## Important rules

### Keep project data centralized

Project-specific data should mainly live in:

```text
PROJECT_BRIEF.md
Admin settings
Central config/settings files
Database settings table if applicable
```

Avoid spreading the same business name, colors, logo, and contact details across many files.

### Keep template files reusable

Do not turn all template files into one specific business forever.

Use:

```text
PROJECT_BRIEF.md
```

for active project data.

Use:

```text
PROJECT_BRIEF.template.md
```

as a blank reusable base.

### Do not commit secrets

Never commit:

* Real database URLs
* Real API keys
* Real admin passwords
* Real JWT secrets
* Real session secrets
* Real payment keys
* Real webhook secrets
* Real email provider tokens
* Real SMS provider tokens

Use placeholders in `.env.example`.

### Protect uploads

If the project supports uploads:

* Allow safe image types only
* Limit file size
* Validate extension and MIME type
* Generate safe filenames
* Prevent path traversal
* Store image path/URL only
* Do not store large Base64 images in settings or database

### Protect admin

Admin areas must not rely only on frontend route hiding.

The backend must protect:

* Settings APIs
* Product APIs
* Order APIs
* Customer APIs
* Upload APIs
* Coupons
* Shipping
* Finance
* Integrations

## Recommended `.env.example` fields

Use safe placeholders like:

```env
NODE_ENV=development
SITE_NAME=
SITE_URL=
APP_SECRET=
DATABASE_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
SESSION_SECRET=
UPLOAD_PATH=public/uploads
MAX_UPLOAD_SIZE_MB=5
PAYMENT_PROVIDER=
PAYMENT_PUBLIC_KEY=
PAYMENT_SECRET_KEY=
WEBHOOK_SECRET=
EMAIL_PROVIDER=
EMAIL_API_KEY=
WHATSAPP_PROVIDER=
WHATSAPP_TOKEN=
SMS_PROVIDER=
SMS_API_KEY=
GOOGLE_ANALYTICS_ID=
META_PIXEL_ID=
SENTRY_DSN=
```

Do not add real values.

## Before development checklist

Before giving the project to a developer or AI agent, make sure:

* `PROJECT_BRIEF.md` is filled correctly
* Required pages are listed
* Brand colors are listed
* Logo instructions are clear
* Contact information is filled or intentionally left blank
* Admin panel needs are clear
* Technical preferences are clear or intentionally flexible
* Security requirements are included
* Deployment target is included if known
* Payment/shipping integrations are clear or marked as placeholders

## After development checklist

After implementation, verify:

* Homepage works
* Main pages work
* Admin panel works
* Settings save correctly
* Logo can be changed
* Frontend uses saved settings
* Uploads are safe
* Admin APIs are protected
* Forms validate inputs
* Checkout works if e-commerce
* Order status can be managed
* SEO metadata exists
* Site is responsive
* No broken routes
* No broken images
* No console errors
* Build works
* Type-check/lint/tests run where available
* No secrets are committed

## For AL-YOUSEF Electronics

The current active brief uses AL-YOUSEF Electronics as the example project.

Identity:

```text
Dark navy + metallic gold + cyan accent
Premium electronics e-commerce store
Arabic + English
```

Main direction:

* Luxury electronics identity
* Product catalog
* Cart and checkout
* Order tracking
* Admin products
* Admin orders
* Admin settings
* Logo and branding management
* Coupons
* Shipping
* Customers
* Finance summary
* Secure upload handling
* SEO and performance improvements

## Final report expectations

At the end of development, the developer or AI agent should provide:

* Stack discovered
* Work completed
* Files created
* Files modified
* Commands run
* Test results
* Security issues found
* Security fixes applied
* Remaining security recommendations
* UI/UX improvements
* SEO improvements
* Performance improvements
* Accessibility improvements
* Backend/API changes
* Database/schema changes
* Admin panel changes
* Deployment notes
* Missing credentials or access
* Features intentionally left as placeholders
* Recommended next steps

## Final note

This template should remain simple to reuse, clear to understand, secure by default, and flexible enough for many future website projects.
