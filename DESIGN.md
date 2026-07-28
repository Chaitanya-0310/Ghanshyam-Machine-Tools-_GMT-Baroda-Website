# Ghanshyam Machine Tools - Design Record

## Project brief

- Business: Ghanshyam Machine Tools
- Business type: machine tools and industrial-equipment retailer
- Location focus: GIDC Makarpura, Vadodara, Gujarat
- Launch language: English
- Primary conversion: quote request and WhatsApp handoff
- Audience: factory owners, procurement teams, workshops, and technical buyers in Vadodara and Gujarat

## Confirmed product categories

1. Lathe Machines
2. Milling Machines
3. Drilling Machines
4. Grinding Machines
5. Gear Cutters
6. Chucks and Workholding
7. Hydraulic Units
8. Motors
9. Power Tools
10. Workpieces

## Design direction

**Design read:** A future-facing B2B machine-tools retailer for local technical buyers, using a bright precision-industrial visual language rather than a dark cyberpunk theme.

- Theme: light only for the launch direction, with cool white, soft steel, and graphite neutrals.
- Brand accents: GMT red and GMT blue, used with restraint for focus, interaction, and key visual moments.
- Layout: product-first, editorial, spacious, and asymmetrical where it helps hierarchy.
- Typography: confident modern sans serif with a technical supporting face. No default Inter styling.
- Imagery: real machinery photography and approved product imagery when supplied. Use clear reserved image placeholders until then.
- Shapes: restrained rounded-corner system, not pill-heavy or overly glassy.
- Header: a light, slim navigation bar with the supplied GMT logo, square-industrial navigation type, navy link states, and a restrained red quote CTA.
- Logo type: retain the actual supplied logo artwork for every GMT wordmark. Website headings and navigation use a square, heavy industrial treatment to echo the mark while preserving body-text readability.
- Hero: asymmetric light composition. Buyer-focused copy sits left, with a studio lathe-chuck image on the right. The visual is a temporary original placeholder until GMT product photography is supplied.
- 3D hero object: the first release uses a code-built, generic three-jaw lathe chuck. It is a visual model, not technical CAD. Replace it with an owned or supplier-approved GLB model when available.
- Product Universe: interactive ten-category explorer beneath the hero. It uses a retailer-focused selected-range panel and avoids generic product cards until real inventory and photography are available.
- Catalogue cards: each product category now has a representative image card linking to a dedicated category page. Images are temporary visual placeholders and must be replaced with approved supplier or GMT photography when available.
- Category pages: reusable detail-page framework with type exploration and a clear brands-and-models section. No brand, model, or stock claims are published until GMT supplies verified data.

## Motion plan

- Preloader: the blue and red angled GMT slashes slide in like a cutting tool or laser, then reveal the solid red GMT letters beneath through a masked SVG animation.
- Preloader library: GSAP timeline.
- Scroll: Lenis for controlled, premium smooth scrolling.
- Motion limit: fast and deliberate. No constant floating effects, excessive glow, particles, or scroll-hijacking.
- Accessibility: provide a static reveal and disable non-essential animation for `prefers-reduced-motion`.

## Installed modules and intended use

### Animation and interaction

- `gsap`: primary choreography library. Used for the GMT slash-and-wordmark loader and any future precise scroll sequences.
- `@gsap/react`: React-safe GSAP integration with automatic animation cleanup.
- `lenis`: smooth, inertia-based page scrolling. It will be connected when the main website layout is built.
- `tw-animate-css`: small CSS-only transition helpers for simple UI states.
- `react-loading-skeleton`: accessible loading placeholders for content that is not yet available.

### UI, styling, and icons

- `shadcn`: component generator and design-system foundation. Components must be customised to the GMT visual system, never used in their default appearance.
- `@base-ui/react`: accessible React interaction primitives used by the component layer.
- `lucide-react`: icon library currently available in the project. Use one consistent icon style across the site.
- `tailwindcss`: utility-first styling system.
- `class-variance-authority`, `clsx`, and `tailwind-merge`: helpers for clean, reusable component variants and class names.

### Website platform and engineering

- `react` and `react-dom`: website UI framework.
- `next` and `vinext`: routing and React server rendering with a Vite-based build.
- `vite` and `@vitejs/plugin-react`: development and production bundling.
- `@cloudflare/vite-plugin` and `wrangler`: Cloudflare-compatible hosting workflow.
- `drizzle-orm` and `drizzle-kit`: database tooling reserved for future catalogue or enquiry data, not required for the first static catalogue release.
- `typescript`, `eslint`, and `eslint-config-next`: type safety and code-quality checks.

## Information architecture

- Home
- Product categories
- Individual category pages in v1
- About / local trust information
- Quote enquiry form
- WhatsApp enquiry handoff
- Contact / map placeholder
- Future buyer guides for local SEO

## SEO guardrails

- Target phrases should naturally combine product category intent with Vadodara and Gujarat.
- Every category page needs its own title, description, H1, helpful copy, image alt text, and internal links.
- Preserve crawlable product information outside animated regions.
- Add canonical URLs, sitemap, robots directives, Open Graph metadata, and LocalBusiness / Organization / WebSite structured data when the business data is confirmed.

## Assets and facts still needed

- Final contact phone number, email address, and WhatsApp number
- Official logo files
- Product and premises photography
- Years in business, brands sold, service commitments, customer proof, and exact address details
- Preferred enquiry email recipient

## Setup status

- Sites React starter: created in this folder.
- shadcn/ui: initialised.
- Lenis: installed and reserved for site scrolling.
- GSAP: installed and used for the GMT preloader.
- GMT loader: complete and running locally. It uses the approved SVG paths for the blue slash, red slash, and red GMT wordmark.
- Refinement motion layer: Lenis now provides smooth anchor and wheel scrolling; the hero chuck responds subtly to scroll position through GSAP ScrollTrigger; hero copy enters in a short staged reveal; and category cards lift with the imagery on hover. All non-essential motion respects the visitor's reduced-motion setting.

## Next build order

1. Build the light-theme home page around the completed GSAP loader and refined motion layer.
2. Build crawlable category-page templates and quote actions.
3. Add final contact details, photography, structured data, and deploy.
