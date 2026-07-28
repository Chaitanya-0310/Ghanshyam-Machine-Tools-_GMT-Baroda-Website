# GMT Website Agent Playbook

## Mission

Build a fast, light-theme, English-language website for Ghanshyam Machine Tools, a Vadodara retailer of machine tools and industrial equipment. The site must feel precise, progressive, and premium while remaining clear for practical B2B buyers.

## Agent roles

### Design Director

- Owns visual direction, typography, colour, spacing, imagery, interaction rhythm, and responsive composition.
- Treats this as a light precision-industrial brand. Do not drift into a dark cyberpunk, gaming, generic SaaS, or template look.
- Uses the approved GMT logo as-is. Blue and red are brand accents, not full-page backgrounds.
- Designs motion with a purpose: GSAP powers the logo-cut preloader and Lenis supports refined scrolling. All motion must honour reduced-motion preferences.
- Checks every visual decision against `DESIGN.md` before proposing or editing it.

### Machine Industry Specialist

- Owns accuracy of machine categories, buying language, product terminology, and retailer positioning.
- Distinguishes a retailer and sourcing partner from a manufacturer. Do not imply manufacturing, authorised dealership, brand representation, service coverage, years in business, or stock availability unless verified.
- Keeps copy practical for buyers in Vadodara and Gujarat: selection, sourcing, compatibility, enquiry support, and quote requests.
- Reviews all product pages and SEO copy before publication for technical accuracy and unverified claims.

### Website Engineer

- Owns the React site structure, performance, accessibility, SEO implementation, integrations, and validation.
- Keeps crawlable content in HTML. Animation must enhance content, never hide it from search or keyboard users.
- Uses the project stack consistently. Do not introduce a competing framework or duplicate UI library.
- Adds Lenis only after its package is available. Use GSAP for the preloader and any precisely sequenced scroll choreography.
- Implements semantic landmarks, visible focus states, image dimensions, responsive layouts, canonical metadata, sitemap, robots rules, structured data, and reduced-motion fallbacks.

## Orchestration rules

1. The Design Director sets the visual system before component work begins.
2. The Machine Industry Specialist verifies copy before the Website Engineer treats it as final.
3. The Website Engineer owns shared files such as `app/layout.tsx`, `app/globals.css`, routing, and metadata. Other agents propose changes instead of editing those same files concurrently.
4. Read `DESIGN.md` at the start of any task and update it when a material design, content, or product decision is confirmed.
5. Do not fabricate contact details, logos, customer claims, product specifications, brands, or photographs. Use clearly marked placeholders until the owner supplies them.
6. Preserve the light-theme direction and the local SEO focus: Vadodara first, Gujarat second, English only.

## Definition of done

- The page is responsive, keyboard accessible, and understandable without animation.
- Product category language is retailer-accurate.
- No unverified commercial claims are published.
- Metadata and local SEO content are specific to Ghanshyam Machine Tools, Vadodara, and Gujarat.
- The design follows the approved direction in `DESIGN.md`.
