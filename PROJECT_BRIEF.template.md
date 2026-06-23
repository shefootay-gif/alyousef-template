# Project Brief

## Basic information

Project Name: AL-YOUSEF Electronics
Business Type: Premium electronics e-commerce store
Target Country/Market: Egypt first, with the ability to adapt for Saudi Arabia and GCC markets later
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
- Or logo description: A premium metallic gold electronics logo combining a modern smartphone and laptop, or a clean abstract tech icon. Use dark navy background with gold identity. Keep logo clean, flat, elegant, and suitable for header, footer, favicon, and admin preview.

Favicon: Use simplified logo mark or gold tech icon on navy background.
Typography preference: Modern Arabic + English sans-serif, clean, bold headings, readable body text.

## Pages

Required pages:
- Home
- Shop
- Product Details
- Cart
- Checkout
- Orders
- Order Details
- Track Order
- About
- Contact
- Return Policy
- Privacy Policy
- Terms
- Login
- Admin Dashboard
- Admin Products
- Admin Orders
- Admin Settings
- Admin Apps / Integrations
- Admin Coupons
- Admin Shipping
- Admin Customers
- Admin Finance

Extra pages:
- Featured Offers
- Categories
- Reviews / Testimonials
- FAQ

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
- Special offer section
- Services/features strip
- About brand section
- Customer trust / secure shopping section
- Contact CTA
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

Admin panel requirements:
- Settings must save correctly and persist after refresh.
- Frontend must immediately use saved settings.
- Logo must be changeable by upload or image URL.
- Do not store large Base64 images in settings/database.
- Store uploaded image path/URL only.
- Add image preview and validation.
- Keep fallback logo if no logo is provided.
- Keep the admin UI clean, dark, premium, and easy to use.

## Technical preferences

Frontend: React + TypeScript + Vite
Backend: Hono + tRPC preferred, or an equivalent clean API layer
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

## Special notes

Use the AL-YOUSEF Electronics project style as the main inspiration: premium electronics, dark navy and gold identity, luxury technology feel, admin-editable content, product management, orders, coupons, shipping, customers, settings, and finance areas.

The template should remain reusable for other future businesses. When creating a new project from this template, all AL-YOUSEF branding and content should be easy to replace through PROJECT_BRIEF.md, settings/config, and the admin panel.
