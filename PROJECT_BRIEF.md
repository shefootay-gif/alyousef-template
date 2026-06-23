# Project Brief

## Basic information

Project Name: AL-YOUSEF Electronics  
Business Type: Premium electronics e-commerce store  
Target Country/Market: Egypt first, with the ability to adapt later for Saudi Arabia and GCC markets  
Primary Language: Arabic  
Secondary Language: English  
Website Type: E-commerce website / premium electronics store  

## Brand identity

Primary Color: #0F172A  
Secondary Color: #D4AF37  
Accent Color: #0099CC  
Background Style: Dark luxury, navy gradients, clean premium sections, subtle glow accents  
Design Style: Premium, modern, sleek, responsive, technology-focused, luxury electronics identity  

Logo:
- Existing logo URL:
- Upload path: public/uploads or admin upload system
- Or logo description: A premium metallic gold electronics logo combining a modern smartphone and laptop, or a clean abstract technology icon. Use a dark navy background with gold identity. Keep the logo clean, flat, elegant, and suitable for header, footer, favicon, and admin preview.

Favicon: Use a simplified logo mark or gold technology icon on navy background.  
Typography preference: Modern Arabic + English sans-serif, clean bold headings, readable body text.

## Pages

Required pages:
- Home
- Shop
- Product Details
- Categories
- Cart
- Checkout
- Order Confirmation
- Track Order
- Customer Orders
- About
- Contact
- FAQ
- Return / Refund Policy
- Privacy Policy
- Terms and Conditions
- Login
- Admin Dashboard
- Admin Products
- Admin Categories
- Admin Orders
- Admin Customers
- Admin Coupons
- Admin Shipping
- Admin Settings
- Admin Finance
- Admin Apps / Integrations

Extra pages:
- Featured Offers
- Reviews / Testimonials
- Wishlist / Favorites if customer accounts exist
- 404 Not Found
- Unauthorized / Forbidden

## Homepage content

Hero Title: Experience Technology Redefined  
Hero Subtitle: Discover the latest smart devices, smartphones, laptops, accessories, gaming products, and premium electronics in one refined online store.  
Hero Button Text: Shop Now  
Hero Button Link: /shop  
Hero Image/Banner: Premium electronics hero image showing smartphone, laptop, accessories, and futuristic luxury lighting.

Sections required:
- Top announcement banner
- Header with logo, navigation, cart, language switch, and account actions
- Hero section
- Featured categories
- Featured products
- Special offers section
- Services/features strip
- About brand section
- Customer trust / secure shopping section
- Customer reviews or testimonials if useful
- Contact call-to-action
- Footer with logo, description, links, contact, and social media

## Services / Features

Service 1:  
Title: Free Delivery  
Description: Free or discounted delivery on eligible orders according to the shipping policy.

Service 2:  
Title: Secure Payment  
Description: Protected checkout experience with support for reliable payment methods.

Service 3:  
Title: Premium Support  
Description: Customer support for product questions, order tracking, and after-sales assistance.

Service 4:  
Title: Easy Returns  
Description: Clear and simple return process according to the return policy.

Service 5:  
Title: Original Products  
Description: Carefully selected electronics and accessories with a premium shopping experience.

Service 6:  
Title: Fast Order Tracking  
Description: Customers can track their orders through a dedicated tracking page.

## Product categories

Main categories:
- Smartphones
- Laptops
- Accessories
- Gaming
- Smart devices
- Audio devices
- Chargers and cables
- Smart watches

## E-commerce requirements

The store should support:
- Product listing
- Product details
- Product images
- Product categories
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

## Contact information

Phone:  
WhatsApp:  
Email: support@alyousef.com  
Address: Egypt  
Google Maps Link:  
Working Hours: Daily, 10:00 AM - 10:00 PM  

## Social media

Facebook:  
Instagram:  
X/Twitter:  
TikTok:  
Snapchat:  
Telegram:  
YouTube:  

## SEO

SEO Title: AL-YOUSEF Electronics | Premium Electronics Store  
SEO Description: AL-YOUSEF Electronics is a premium online store for smartphones, laptops, accessories, gaming products, and smart devices with a luxury gold and navy identity.  
SEO Keywords: electronics store, smartphones, laptops, accessories, gaming, smart devices, AL-YOUSEF Electronics, online electronics shop  
Open Graph Image: Use a premium electronics banner with navy and gold identity.  
Structured Data: Organization, Product, Breadcrumb, FAQ where relevant.  
Localized SEO: Support Arabic and English metadata where practical.

## Admin panel

Should the project include admin panel?  
Yes

Admin must edit:
- Site name
- Logo
- Favicon
- Primary color
- Secondary color
- Accent color
- Homepage hero text
- Hero image/banner
- About section
- Services/features
- Product categories
- Products
- Orders
- Customers
- Coupons
- Shipping rates
- Contact info
- Social links
- Footer content
- SEO title
- SEO description
- Tracking pixels
- Payment settings if supported
- Dropshipping/integration API keys if supported

Advanced admin should include or prepare:
- Dashboard overview
- Sales/orders summary
- Recent orders
- Recent customers
- Best-selling products
- Low-stock alerts
- Product management
- Category management
- Order management
- Customer/contact submissions management
- Coupons and discounts management
- Shipping management
- Basic finance summaries
- Settings management
- Logo and branding management
- Clear success/error/loading states
- Safe confirmation dialogs before destructive actions

Admin panel requirements:
- Settings must save correctly and persist after refresh.
- Frontend must immediately use saved settings.
- Logo must be changeable by upload or image URL.
- Do not store large Base64 images in settings/database.
- Store uploaded image path/URL only.
- Add image preview and validation.
- Keep fallback logo if no logo is provided.
- Keep the admin UI clean, dark, premium, and easy to use.

## Roles and permissions

Recommended roles:
- Super Admin
- Admin
- Manager
- Staff
- Viewer

Rules:
- Apply least privilege.
- Use deny-by-default authorization for protected resources.
- Enforce permissions on the backend, not only in the frontend.
- Protect object-level access so users cannot read or modify records they do not own.
- Document the role matrix and any limitations.

## Search, filters, and sorting

For products:
- Product search
- Category filter
- Price filter
- Stock/availability filter if useful
- Sort by newest, price, popularity, or featured

For admin:
- Order search/filter
- Product search/filter
- Customer search/filter if useful

## Notifications

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

## Reviews, wishlist, invoices, and customer features

Reviews/testimonials:
- Product reviews if useful
- Star ratings if useful
- Review moderation in admin
- Featured testimonials section

Wishlist/customer features:
- Wishlist/favorites if customer accounts exist
- Customer order history
- Customer profile
- Saved contact/shipping details if useful

Invoice/printing:
- Printable order invoice
- Printable order summary
- Admin print button
- Optional PDF export recommendation if not implemented

## Integrations

Add or prepare placeholders according to project needs:
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

## Security requirements

Security is required by default.

Focus on:
- No exposed secrets
- Safe `.env.example`
- Protected admin routes
- Protected admin APIs
- Backend validation
- Safe file uploads
- Secure image handling
- CSRF defenses when cookie-based auth is used
- Secure session/cookie handling
- No unsafe HTML rendering
- Safe payment/webhook handling
- No sensitive data in logs
- Safe error messages
- Security headers where possible

## Backup, audit logs, and operational readiness

Required or recommended:
- Do not delete existing important data unless explicitly requested.
- Prefer additive, rollback-safe migrations.
- Document backup expectations for database and uploaded files.
- Keep seed/demo data separate from production data.
- Track important admin actions where practical.
- Add audit logs for settings changes, order status changes, product changes, and destructive actions where practical.
- Add clear operator/admin runbook notes in README or TEMPLATE_GUIDE.

## Internationalization and currency

Requirements:
- Support Arabic and English content where practical.
- Support RTL and LTR layout.
- Centralize translatable text where possible.
- Avoid hardcoding one currency across the whole app.
- Currency: EGP initially, with future ability to adapt to SAR, USD, or GCC currencies.
- Format dates, numbers, and currency clearly.

## PWA and mobile readiness

If useful, prepare:
- Mobile-first layout
- App icons
- Manifest file if practical
- Theme color
- Touch-friendly controls
- Fast mobile loading
- Safe offline/fallback recommendation if not implemented

## Technical preferences

Frontend: React + TypeScript + Vite  
Backend: Hono + tRPC preferred, or an equivalent clean API layer according to existing stack  
Database: PostgreSQL with Drizzle ORM preferred  
Authentication: Admin login with secure session/JWT and admin role  
Deployment target: Render / VPS / Vercel-compatible setup depending on backend support  
Payment integration: COD first, with optional Paymob, Fawry, Stripe, or manual payment tracking  
Upload/storage method: Local uploads under public/uploads for starter version; cloud storage such as S3 can be added later  
Currency: EGP initially, with future ability to adapt currency for Saudi Arabia or GCC  
Languages: Arabic and English content support  
Theme: Luxury dark navy + metallic gold + cyan tech accent  

## Quality requirements

- Fully responsive on mobile, tablet, and desktop.
- Clean reusable components.
- Centralized settings/configuration system.
- Admin-editable content where practical.
- No hardcoded client-specific data scattered across many files.
- No exposed secrets.
- Clear .env.example.
- Professional README and template guide.
- Build, type-check, and core pages should work without errors.
- Report assumptions, limitations, and placeholders clearly.

## Special notes

Use the AL-YOUSEF Electronics project style as the main inspiration: premium electronics, dark navy and gold identity, luxury technology feel, admin-editable content, product management, orders, coupons, shipping, customers, settings, and finance areas.

The template should remain reusable for other future businesses. When creating a new project from this template, all AL-YOUSEF branding and content should be easy to replace through PROJECT_BRIEF.md, settings/config, and the admin panel.
