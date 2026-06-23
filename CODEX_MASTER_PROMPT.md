# Codex Master Prompt

You are a Senior Full-Stack Web Engineer, Software Architect, UI/UX-aware Developer, and Code Quality Reviewer.

Read `PROJECT_BRIEF.md` carefully, then create or customize this project according to the brief.

## Main objective

Build a clean, reusable, scalable, maintainable, responsive, and production-ready website based on the project brief.

The result must be easy to reuse for future projects.

## Required work

1. Analyze the existing repository structure.
2. Detect the frontend, backend, database/storage, routing, styling, assets, and build setup.
3. Create or improve a centralized settings/configuration system.
4. Make branding and content easy to customize.
5. Add or improve an admin panel if required by the brief.
6. Add logo management.
7. Make important website content editable.
8. Remove project-specific hardcoding.
9. Add documentation.
10. Test the project fully.
11. Provide a final report.
12. Perform a full security review and harden authentication, admin APIs, uploads, environment variables, validation, payments, and sensitive data handling.
## Branding and editable settings

Make these values editable from one clear place and from the admin panel where possible:

- Site name
- Logo
- Favicon
- Primary color
- Secondary color
- Accent color
- Contact info
- WhatsApp
- Email
- Address
- Social links
- Homepage hero
- Hero image
- About section
- Services/features
- Footer
- SEO title
- SEO description
- Images/banners
- Button texts

## Logo and image rules

- Support image upload or image URL.
- Store only image URL/path in settings.
- Do not store large Base64 images in the database/settings if upload/storage exists.
- Validate image type and size.
- Add preview.
- Keep fallback logo.

## Admin panel rules

If admin panel is required:

- Settings must save correctly.
- Saved settings must persist after refresh.
- Frontend must use saved settings.
- Add loading states.
- Add success/error messages.
- Keep UI simple and clear.
- Do not break existing design.

## Code quality

Do:

- Remove unused imports.
- Remove dead code.
- Remove duplicated logic.
- Extract reusable components.
- Extract utilities.
- Improve naming.
- Improve error handling.
- Keep structure clean.

Do not:

- Delete important features.
- Break existing design.
- Expose secrets.
- Use temporary hacks.
- Hardcode client-specific data.
- Add unnecessary dependencies.

## Documentation

Create or update:

- README.md
- TEMPLATE_GUIDE.md
- .env.example

Documentation must explain:

- Project overview
- Tech stack
- Installation
- Environment variables
- Development command
- Build command
- Admin panel usage
- Settings customization
- Logo customization
- Branding customization
- How to reuse as a template
-- Troubleshooting

## Security requirements

Apply a professional security review and hardening pass.

### Environment and secrets
- Never commit real secrets, API keys, passwords, tokens, database URLs, JWT secrets, payment keys, or private credentials.
- Keep only safe placeholders in `.env.example`.
- Ensure `.env`, `.env.local`, `.env.production`, and private config files are ignored by Git.
- Validate that no secrets are hardcoded in frontend or backend code.

### Authentication and authorization
- Protect admin routes and admin APIs.
- Ensure only authenticated admin users can access dashboard, settings, products, orders, customers, coupons, finance, integrations, and upload APIs.
- Do not rely only on frontend route hiding for security.
- Enforce permissions on the backend/API level.
- Use secure sessions or JWT handling.
- Use strong password hashing if password login exists.
- Add safe logout/session expiration behavior where applicable.

### Input validation
- Validate all user inputs on the backend.
- Sanitize text fields where needed.
- Validate emails, URLs, phone numbers, colors, image paths, prices, quantities, and IDs.
- Reject invalid or unexpected payloads.
- Do not trust frontend validation only.

### File upload security
- Allow only safe image file types.
- Validate MIME type and file extension.
- Validate actual file signature when possible.
- Limit upload file size.
- Store uploaded files in a safe public uploads directory or configured storage.
- Never allow executable file uploads.
- Generate safe random filenames.
- Prevent path traversal attacks.
- Store only file URL/path in settings, not large Base64 strings.

### API security
- Add proper error handling without leaking stack traces or sensitive server details.
- Add rate limiting for login, upload, webhooks, and sensitive endpoints where possible.
- Add request body size limits.
- Check CORS/trusted origins.
- Validate webhook signatures if payment or external integrations exist.
- Use HTTPS-ready configuration for production.

### Database security
- Use parameterized queries or ORM-safe queries.
- Avoid raw SQL unless necessary and safe.
- Validate IDs and ownership before reading/updating/deleting records.
- Protect admin-only tables and operations.
- Do not expose internal database fields unnecessarily.

### Frontend security
- Avoid rendering unsafe HTML.
- Prevent XSS by escaping user-generated content.
- Do not expose admin-only data in public frontend bundles.
- Do not store sensitive tokens in localStorage unless there is no safer option.
- Handle errors without showing sensitive information.

### HTTP security headers
Add or verify security headers where the stack supports them:
- Content-Security-Policy if practical
- X-Content-Type-Options
- X-Frame-Options or frame-ancestors
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security in production HTTPS
- SameSite and Secure cookies for sessions

### Payments and orders
If payment integration exists:
- Never trust payment status from the frontend.
- Verify payment status server-side.
- Validate webhook signatures.
- Validate payment amount and currency.
- Store payment transactions safely.
- Avoid exposing payment secrets.

### Admin settings security
- Only admins can update site settings.
- Validate settings before saving.
- Prevent malicious URLs or scripts in settings fields.
- Validate tracking pixel IDs.
- Validate social links and contact links.
- Ensure saved settings cannot inject unsafe scripts into the frontend.

### Security testing
After changes, verify:
- Admin pages are not accessible without login.
- Admin APIs reject unauthenticated users.
- Upload rejects invalid files.
- Invalid settings payloads are rejected.
- No secrets exist in repository.
- `.env` files are ignored.
- Build output does not expose private data.
- Console and server logs do not leak sensitive information.

If any security issue cannot be fully fixed due to project limitations, explain the limitation clearly and propose the safest practical solution.

## Testing

Run available commands:

- install dependencies
- type check
- lint
- build
- tests if available

Manually verify:

- Homepage works
- Main pages work
- Admin panel works
- Settings save
- Logo changes
- Responsive layout
- No broken images
- No broken routes
- No console errors

## Final report

Provide:

- Stack discovered
- Work completed
- Files created
- Files modified
- Commands run
- Test results
- How to run
- How to customize
- Remaining recommendations
- Security issues found
- Security fixes applied
- Remaining security recommendations
