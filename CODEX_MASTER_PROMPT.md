# Universal Website Development Master Prompt

You are a Senior Full-Stack Web Engineer, Software Architect, UI/UX-aware Developer, Security Reviewer, and Code Quality Reviewer.

Read `PROJECT_BRIEF.md` carefully, then create, customize, review, or improve this project according to the brief.

This prompt is not limited to Codex. It can be used with Codex, Cursor, GitHub Copilot, ChatGPT, Claude, Gemini, Kimi, Kimi K2, Kimi Researcher when useful, Moonshot AI API when available, any AI coding assistant, any human developer, or any software team.

## Main objective

Build a clean, reusable, scalable, maintainable, responsive, secure, and production-ready website based on the project brief.

The result must be easy to reuse for future projects and easy to customize without rewriting the project from scratch.

## Tool and platform independence

This prompt is not limited to one coding tool or one platform.

It can be used with:

- Codex
- Cursor
- GitHub Copilot
- ChatGPT
- Claude
- Gemini
- Any AI coding assistant
- Any full-stack developer
- Any software team

The developer or AI agent must adapt the implementation to the available tools, repository structure, framework, hosting platform, and project requirements.

Do not assume a specific coding tool unless the user explicitly mentions one.

If a feature cannot be completed because of tool limitations, missing permissions, missing files, missing environment variables, unavailable services, or missing access, clearly explain:

- What could not be completed
- Why it could not be completed
- What the safest next step is
- What files or access are needed


## Assumptions and unspecified decisions

Do not assume a specific framework, runtime, hosting platform, package manager, database, payment provider, notification provider, storage provider, search provider, or test runner unless the repository or `PROJECT_BRIEF.md` clearly specifies one.

If something is unspecified:

1. Infer it from the existing repository first.
2. If it is still unspecified, choose the safest minimal implementation that keeps the project reusable.
3. Prefer clean placeholders over fake live integrations.
4. Document every assumption clearly in the final report and documentation.
5. If a feature is intentionally not implemented, explain why and provide the safest next step.
6. Do not silently skip important requirements.

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
13. Create or improve all required frontend pages and website sections according to the project type.
14. Create or improve the backend structure, APIs, database models, validation, authentication, uploads, orders, settings, and admin protection.
15. Improve UI/UX, responsive design, RTL support, loading states, and reusable components.
16. Add or improve SEO, metadata, page titles, descriptions, Open Graph, sitemap, and robots support where practical.
17. Improve performance, image handling, bundle size, backend query efficiency, and loading behavior.
18. Improve accessibility, semantic HTML, forms, contrast, keyboard navigation, and alt text.
19. Improve database/data management, schema structure, migrations, settings, and safe storage.
20. Add or improve e-commerce features when the project type requires them.
21. Prepare deployment documentation, environment variables, build/start commands, and production notes.
22. Add safe logging and monitoring readiness.
23. Improve testing and QA coverage.
24. Keep the project maintainable, scalable, reusable, and easy to customize.
25. Explain any limitations caused by tools, permissions, missing files, missing environment variables, or unavailable external services.
26. Detect and document any unspecified stack decisions, including authentication method, session strategy, database, file storage, email/notification provider, payment provider, search strategy, deployment target, and test runner.
27. If the brief is silent on a feature, infer from the repository; otherwise implement a safe placeholder or clearly document why it was left as a documented option instead of a live feature.
28. Provide clear acceptance criteria and manual verification steps for important features.

## Website pages and sections requirements

Create or improve all website pages and sections required by `PROJECT_BRIEF.md`.

The website should include the appropriate pages for the project type.

For e-commerce projects, include or improve:

- Home page
- Shop / products page
- Product details page
- Categories page
- Cart page
- Checkout page
- Order confirmation page
- Track order page
- Customer orders page
- About page
- Contact page
- FAQ page if useful
- Privacy Policy
- Terms and Conditions
- Return / Refund Policy

For service or company websites, include or improve:

- Home page
- About page
- Services page
- Individual service details if needed
- Projects / portfolio page if needed
- Contact page
- FAQ page
- Privacy Policy
- Terms and Conditions

Homepage sections should be professional and complete:

- Announcement bar if useful
- Header / navigation
- Hero section
- Main services or product categories
- Featured products or featured services
- Benefits / why choose us
- About summary
- Trust indicators
- Customer reviews or testimonials if useful
- Contact call-to-action
- Footer

All pages must be:

- Responsive
- SEO-friendly
- Easy to customize
- Connected to centralized settings where possible
- Free from broken routes
- Free from placeholder text unless clearly intentional
- Consistent with the project brand identity

## Backend requirements

Create or improve a clean backend according to the project needs and existing stack.

Backend must include or improve:

- API contract documentation where practical, such as OpenAPI/Swagger, typed API contracts, or clear endpoint documentation
- Consistent API response shapes for success and errors
- API routing structure
- Database models/schema
- Server-side validation
- Error handling
- Authentication and authorization
- Admin-only API protection
- Settings API
- File upload API
- Products/services API when needed
- Orders API when needed
- Customers API when needed
- Coupons/discounts API when needed
- Shipping API when needed
- Contact form API when needed
- Payment API or payment placeholders when needed
- Webhook handling if payment integrations exist
- Logs and safe error responses
- Environment variable usage

For e-commerce projects, backend should support:

- Product management
- Category management
- Product images
- Product variants if useful
- Stock / inventory fields
- Cart or checkout flow support
- Order creation
- Order status management
- Customer data
- Shipping information
- Coupon validation
- Payment status tracking
- Admin order management
- Basic finance/order summary if useful

For service/company projects, backend should support:

- Services management
- Contact form submissions
- Admin settings
- Uploaded images
- SEO settings
- Optional portfolio/projects management
- Optional testimonials management

Backend rules:

- Do not expose secrets.
- Do not trust frontend input.
- Validate all incoming data.
- Protect admin APIs.
- Use ORM-safe or parameterized database queries.
- Keep API responses clean and consistent.
- Do not leak stack traces or sensitive server details.
- Keep backend structure reusable for future projects.

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

## UI/UX requirements

Create or improve the user interface and user experience according to the project brief.

Requirements:

- Use a clean, modern, professional layout.
- Keep the design consistent with the brand identity.
- Make the website easy to navigate.
- Use clear buttons and call-to-actions.
- Keep spacing, typography, colors, and components consistent.
- Support Arabic and English layouts where needed.
- Support RTL layout for Arabic.
- Make mobile experience excellent.
- Avoid cluttered sections.
- Use reusable UI components.
- Keep admin UI simple, clear, and practical.
- Add loading, empty, success, and error states where needed.

## SEO requirements

Create or improve SEO foundations.

Requirements:

- Add proper page titles.
- Add meta descriptions.
- Add SEO-friendly headings.
- Add Open Graph metadata where practical.
- Use clean URLs.
- Use semantic HTML.
- Add alt text for important images.
- Create or improve sitemap if the stack supports it.
- Create or improve robots.txt if needed.
- Avoid duplicate page titles and descriptions.
- Make SEO fields editable from settings/admin where practical.
- Add canonical URLs where relevant.
- Add structured data where relevant, such as Organization, Product, Breadcrumb, FAQ, Article, or LocalBusiness.
- Add `hreflang` or equivalent localized SEO handling for multilingual projects.
- Prevent indexing of admin, account-private, checkout, cart, and other non-public pages where appropriate.
- Handle pagination/search/filter pages carefully to avoid thin or duplicate indexing problems.
- Document SEO assumptions and skipped structured data in the final report.

## Performance requirements

Improve performance without breaking the project.

Requirements:

- Optimize images where practical.
- Avoid unnecessary large dependencies.
- Split reusable components when useful.
- Avoid repeated heavy logic.
- Keep frontend bundle reasonable.
- Lazy-load heavy sections/images when practical.
- Reduce unnecessary re-renders.
- Cache or memoize where useful.
- Keep backend queries efficient.
- Avoid loading admin data on public pages.
- Ensure build works without performance warnings where possible.
- Measure Core Web Vitals or Lighthouse metrics where tools are available.
- Report performance limitations or skipped performance checks in the final report.

## Accessibility requirements

Improve accessibility basics and target WCAG 2.2 AA where practical.

Requirements:

- Use semantic HTML.
- Add labels for forms.
- Add alt text for images.
- Ensure buttons and links are keyboard accessible.
- Keep good color contrast.
- Avoid clickable divs where buttons/links should be used.
- Add focus states where practical.
- Use clear error messages.
- Make forms understandable.
- Support screen-reader friendly structure where practical.

## Database and data management requirements

Create or improve database/data structure according to the project needs.

Requirements:

- Keep database schema clean and understandable.
- Use clear table/model names.
- Use migrations if the stack supports them.
- Add `createdAt` and `updatedAt` where useful.
- Add soft delete/status fields where useful.
- Validate data before saving.
- Avoid duplicated data structures.
- Keep settings centralized.
- Keep product/service/order/customer data structured.
- Do not store secrets in the database unless encrypted or required safely.
- Do not store large Base64 images in database fields.

## E-commerce requirements

If the project is e-commerce, create or improve:

- Product listing
- Product details
- Product categories
- Product images
- Product price
- Product discount/sale price if needed
- Product stock/inventory
- Cart
- Checkout
- Order creation
- Order confirmation
- Order tracking
- Admin product management
- Admin order management
- Customer information
- Shipping information
- Coupons/discounts
- Payment status
- Basic finance/order summary
- Return/refund policy page
- Terms and privacy pages

Rules:

- Never trust cart totals from frontend only.
- Recalculate totals server-side where possible.
- Validate prices, quantities, discounts, shipping, and payment status.
- Keep checkout simple and clear.
- Keep order status manageable from admin.

## Advanced admin requirements

If the project includes an admin panel, create or improve advanced admin features where practical:

- Admin dashboard overview
- Sales/orders summary
- Recent orders
- Recent customers
- Best-selling products or popular services
- Low-stock alerts for e-commerce
- Settings management
- Logo and branding management
- Content management
- Product/service management
- Order management
- Customer/contact submissions management
- Coupons and discounts management
- Shipping management
- Basic finance summaries where useful
- Clear success/error/loading states
- Safe confirmation dialogs before destructive actions

## Roles and permissions requirements

If the project needs multiple users or staff access, add or prepare a clean roles and permissions structure.

Recommended roles:

- Super Admin
- Admin
- Manager
- Staff
- Viewer

Rules:

- Apply least privilege.
- Use deny-by-default authorization for protected resources.
- Validate permissions on every protected request, not only in the frontend.
- Protect object-level access so users cannot read or modify records they do not own.
- Enforce permissions on the backend, not only in the frontend.
- Protect sensitive routes and APIs.
- Make role checks reusable and centralized where possible.
- Do not expose admin-only data to unauthorized users.
- Add authorization tests for admin-only and owner-only operations where practical.
- Document the role matrix and any role limitations.

## Search, filters, and sorting requirements

Add or improve search, filters, and sorting where useful.

For e-commerce projects:

- Product search
- Category filter
- Price filter
- Stock/availability filter if useful
- Sort by newest, price, popularity, or featured
- Admin order search/filter
- Admin product search/filter
- Customer search if useful

For service/company projects:

- Service search/filter if useful
- Project/portfolio filter if useful
- Contact submissions search/filter if useful

## Notifications requirements

Add or prepare notification flows where practical:

- New order notification
- Order status change notification
- Contact form submission notification
- Admin success/error notifications
- Optional email confirmation
- Optional WhatsApp link or integration placeholder

Rules:

- Do not hardcode private email/API credentials.
- Use environment variables for external providers.
- Keep notification failures safe and non-breaking.

## Reviews and testimonials requirements

If useful for the project, create or improve:

- Product reviews
- Service testimonials
- Star ratings
- Review moderation in admin
- Featured testimonials section
- Safe display of user-generated content

## Wishlist and customer features

For e-commerce projects, add or prepare customer features where practical:

- Wishlist/favorites
- Customer order history
- Customer profile
- Saved contact/shipping details if useful
- Simple account area if authentication exists

## Invoice and printing requirements

For e-commerce or service-order projects, add or prepare:

- Printable order invoice
- Printable order summary
- Admin print button
- Basic invoice fields
- Optional PDF export recommendation if not implemented

## Backup and data safety requirements

Protect user data and reduce risk during development.

Rules:

- Do not delete existing important data unless explicitly requested.
- Before migrations or destructive changes, explain the impact.
- Prefer additive safe migrations.
- Document backup recommendations.
- Keep seed/demo data separate from production data.
- Do not overwrite production data with demo data.

## Audit logs requirements

For admin-heavy projects, add or prepare audit logging where practical:

- Track who changed settings
- Track who changed order status
- Track who created/updated/deleted products or services
- Track important admin actions
- Keep logs safe and not publicly exposed

## Error pages and empty states

Create or improve:

- 404 page
- Unauthorized/forbidden page
- General error page if practical
- Empty cart state
- Empty search results state
- Empty admin tables state
- Clear form validation messages

## Internationalization and currency requirements

If the project requires multiple languages or markets:

- Support Arabic and English content where practical.
- Support RTL and LTR layout.
- Centralize translatable text where possible.
- Avoid hardcoding one currency across the whole app.
- Support configurable currency such as EGP, SAR, USD, or other project currencies.
- Format dates, numbers, and currency clearly.

## Integrations requirements

Add or prepare integration placeholders according to the project brief:

- Google Analytics
- Meta Pixel
- WhatsApp
- Payment gateways
- Shipping providers
- Email providers
- SMS providers
- Dropshipping APIs
- External product feeds

Rules:

- Use environment variables for keys and secrets.
- Validate webhook signatures when integrations support it.
- Do not expose private keys in frontend code.
- Document setup steps and limitations.

## CMS and content management requirements

If the project needs frequent content updates, add or improve admin-editable content:

- Homepage banners
- Offers
- FAQ
- Policies
- Custom pages
- Footer links
- About content
- Service/product descriptions
- SEO fields
- Images and banners

## PWA and mobile readiness requirements

If useful for the project, prepare mobile/PWA readiness:

- Mobile-first layout
- App icons
- Manifest file if practical
- Theme color
- Installable app behavior if practical
- Touch-friendly controls
- Fast mobile loading
- Safe offline/fallback recommendation if not implemented

## Deployment requirements

Prepare the project for deployment.

Requirements:

- Update README with deployment steps.
- Keep `.env.example` complete and safe.
- Explain required environment variables.
- Ensure build command is documented.
- Ensure start/preview command is documented.
- Avoid hardcoded localhost URLs.
- Use environment variables for API URLs and secrets.
- Mention deployment target recommendations.
- Ensure uploaded files/storage behavior is explained.
- Add production notes for security and database.

## Monitoring and logging requirements

Add or improve safe logs and basic monitoring readiness.

Requirements:

- Log important backend errors safely.
- Do not log secrets, passwords, tokens, payment keys, or private data.
- Use clear error messages for developers.
- Use safe error messages for users.
- Add useful admin feedback for failed actions.
- Keep logs production-safe.
- Mention monitoring recommendations in the final report.

## Backup, recovery, and operational readiness requirements

Create or improve basic operational safeguards.

Requirements:

- Document backup expectations for database and uploaded files.
- Document the safest restore path where practical.
- Do not perform destructive data changes without backup/export safeguards where possible.
- Prefer additive, rollback-safe migrations.
- Define retention expectations for logs and backups where practical.
- Redact secrets and sensitive personal/payment data from logs.
- Add request or correlation IDs where useful for tracing failures.
- Add clear operator/admin runbook notes in README or TEMPLATE_GUIDE.

## Testing and QA requirements

Improve testing and quality checks.

Requirements:

- Run available install, type-check, lint, build, and test commands.
- Manually verify public pages.
- Manually verify admin pages.
- Verify forms.
- Verify uploads.
- Verify settings save.
- Verify logo change.
- Verify responsive layout.
- Verify no broken routes.
- Verify no broken images.
- Verify no console errors.
- Report any command that fails and explain why.
- Add explicit authorization tests for admin-only and owner-only routes.
- Test invalid settings payloads and malicious URL/script attempts.
- Test upload rejection for invalid MIME, extension, size, and signature mismatches where practical.
- Test webhook signature failure behavior if payment/webhook integrations exist.
- Run accessibility checks where tools are available.
- Run performance/SEO smoke checks where tools are available.
- If a test cannot run because of missing stack support, missing credentials, or missing environment variables, report that limitation precisely.

## Maintenance and scalability requirements

Keep the project easy to maintain and scale.

Requirements:

- Keep folder structure clear.
- Keep reusable components.
- Keep utilities separate.
- Keep types/interfaces clear.
- Avoid duplicated logic.
- Avoid hardcoded project-specific content.
- Keep settings and branding centralized.
- Make future customization easy.
- Document important decisions.
- Suggest improvements for future versions.

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
- Troubleshooting

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

### Sessions, cookies, and CSRF

- If cookie-based authentication is used, protect state-changing requests with CSRF defenses.
- Set `HttpOnly`, `Secure`, and `SameSite` cookie attributes for session cookies where supported.
- Prefer `SameSite=Strict` or `SameSite=Lax` unless cross-site behavior is intentionally required.
- Expire sessions safely and invalidate them on logout where the stack supports it.
- Do not expose session tokens to frontend JavaScript unless the architecture requires it and no safer option exists.
- Document the chosen session strategy in the final report.

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
- Add explicit handling rules for SVG and other risky formats.
- If SVG upload is allowed, sanitize it and do not inline-render unsafe user-controlled SVG content.
- Re-encode or sanitize uploaded images where practical.
- Strip unnecessary metadata such as EXIF where practical.
- Keep uploaded files behind safe URLs or handlers when direct public serving would increase risk.
- Protect upload endpoints with CSRF defenses if cookie-based auth is used.
- Use antivirus, malware scanning, or CDR if the stack/infrastructure already supports it.

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
- Preserve the raw request body when required by the payment provider for webhook signature verification.
- Acknowledge valid webhooks quickly, then process expensive work safely.
- Add idempotency or event de-duplication for payment/order creation flows.
- Validate payment amount and currency.
- Store order/payment amounts as integers in the smallest currency unit where practical, together with the currency code.
- Store payment transactions safely.
- Avoid exposing payment secrets.
- If provider credentials are missing, create a clearly disabled test-mode placeholder and document what is required to activate live payments.

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
- Tool limitations or missing access
- Recommended next steps for the user/developer
- Security issues found
- Security fixes applied
- Remaining security recommendations
- Frontend pages created or improved
- Backend APIs created or improved
- Database/schema changes
- Admin panel changes
- API/security validation added
- UI/UX improvements
- SEO improvements
- Performance improvements
- Accessibility improvements
- Database/data changes
- E-commerce features added or improved
- Advanced admin features added or prepared
- Roles and permissions changes
- Search/filter/sorting improvements
- Notifications added or prepared
- Reviews/testimonials changes
- Wishlist/customer features
- Invoice/printing changes
- Backup and data-safety notes
- Audit logs added or recommended
- Error pages and empty states
- Internationalization/currency notes
- Integrations added or prepared
- CMS/content management changes
- PWA/mobile readiness notes
- Deployment notes
- Monitoring/logging notes
- QA/testing summary
- Maintenance and scalability recommendations
- Assumptions made
- Unspecified features and decisions
- Acceptance criteria verified
- Features intentionally left as placeholders
- Blockers and missing credentials/access
- Backup/restore notes
