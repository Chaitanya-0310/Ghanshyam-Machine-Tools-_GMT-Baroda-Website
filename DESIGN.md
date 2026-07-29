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
- Premium refinement: use a precision-inspection-bench treatment—condensed industrial hierarchy, measured technical labels, and a restrained product-view annotation around the hero object. This remains visual context only and makes no product specification claim.
- 3D hero object: the hero now uses the supplied `lathe_chuck.glb` model. It is presented as a visual product object, not technical CAD or a specification claim. A static image fallback remains for the mobile composition.
- Product Universe: interactive ten-category explorer beneath the hero. It uses a retailer-focused selected-range panel and avoids generic product cards until real inventory and photography are available.
- Catalogue cards: each product category now has a representative image card linking to a dedicated category page. Images are temporary visual placeholders and must be replaced with approved supplier or GMT photography when available.
- Category pages: reusable detail-page framework with type exploration and a clear brands-and-models section. No brand, model, or stock claims are published until GMT supplies verified data.
- Quote enquiry: the homepage now includes a structured enquiry brief for contact, category, and application details. For testing, it prepares an email addressed to `chaitanyapp03@gmail.com`; replace this temporary recipient with GMT's confirmed enquiry email before launch.
- Footer: a light utility footer completes the homepage with brand identity, primary buyer paths, and Vadodara context. Exact address and final contact details remain explicitly pending.

## Confirmed positioning

- GMT’s differentiator is breadth across a buyer’s requirement: the business can help source from small hand power tools through larger lathe machines, together with relevant accessories and workholding.
- GMT offers products from a range of manufacturers. Do not name manufacturers, imply authorised representation, or guarantee availability until verified supplier data is supplied.
- Preferred buyer-facing framing: one practical sourcing partner for the machine, tooling, accessories, and compatibility needs around the job. Avoid the unqualified phrase “end-to-end solution”; explain the supported requirement instead.
- GMT can guide buyers who are still defining a requirement, including the appropriate machine category, capacity or size, tooling and accessory needs, compatibility, preferred make, and budget context. This is selection and sourcing guidance; do not describe it as engineering design, installation, service, or a guaranteed technical recommendation without further confirmation.
- Commercial hierarchy for the launch: lathe machines are the flagship category; general machine tools and workshop equipment communicate the broader range. The homepage should lead with lathe competence while making the full requirement-to-sourcing breadth easy to discover.

## Confirmed visual refinement

- Homepage visual thesis: a bright precision-inspection bench, with lathe machines as the visual lead and a single calm 3D product moment.
- Typography roles: Bricolage Grotesque for expressive display headings, Instrument Sans for practical buyer copy, and IBM Plex Mono for technical labels. The three families are self-hosted to avoid runtime font fetching and remove the former generic condensed fallback.
- Product range hierarchy: feature Lathe Machines first; group Milling, Drilling, Grinding, and Gear Cutting as core machine tools; treat workholding, hydraulic units, motors, power tools, and workpieces as supporting-the-job equipment.
- Primary homepage conversion: “Help me choose”; quote request remains a secondary direct path. The guided enquiry should feel like a requirement brief, not a generic contact form.
- Signature visual language: restrained machining paths, measurement marks, and angled GMT cuts. Use one high-contrast “Requirement Bench” section rather than proliferating decorative effects.
- Modern UI system: the website uses a precision-sourcing-studio composition—a floating translucent header, a large asymmetrical product-study hero, an indexed editorial category grid, and a single graphite Requirement Bench. Surfaces use cool steel white, graphite, GMT blue, and GMT red with 18–28px structural radii rather than small legacy cards or pill-heavy controls.
- Homepage signature: the supplied lathe chuck is cropped as an oversized interactive product object inside a calibrated inspection field. Buyer facts and product-view labels sit on a disciplined information rail around it.
- Calibrated Momentum system: the homepage now uses a functional calibration axis to express the actual buyer sequence (Define, Match, Enquire) and the verified product hierarchy (lead category, core machine tools, supporting equipment). Measurement marks and the GMT cut carry structure rather than decoration; red is reserved for the enquiry decision point.
- Signal colour expansion: cyan and safety-lime now supplement GMT blue and red only inside sourcing paths, orbit geometry, category grouping, and responsive interaction states. They are functional industrial signals, not replacement brand colours or full-page themes.
- Range explorer refinement: the category grid now includes an accessible All / Lead / Core / Supporting filter built from the shared shadcn component layer. Cards retain the editorial asymmetry, use full semantic card composition, and show range grouping through restrained status badges.
- Enquiry component system: the Requirement Bench form now uses the shared shadcn field, input, native-select, textarea, separator, and button primitives while preserving the established GMT visual language and native mobile form behaviour.

## Motion plan

- Preloader: original GMT precision-bench sequence. A restrained measurement frame establishes the stage, SVG outline strokes trace the blue and red angled cuts with opposing directional force, then custom paths draw the connected GMT lower wordmark in a G → M → T flow. A single raked-light pass resolves the lock-up before a fast exit. The G base stops at the M, the M/T join happens only at the baseline, and the T cap has no left-facing arm. Upper letter spacing is held consistently at 70 SVG units. No raster image is used in the loader animation. Replace these paths with the official vector master when supplied for pixel-perfect geometry.
- Preloader library: GSAP timeline.
- Scroll: Lenis for controlled, premium smooth scrolling.
- Motion limit: fast and deliberate. No constant floating effects, excessive glow, particles, or scroll-hijacking.
- Accessibility: provide a static reveal and disable non-essential animation for `prefers-reduced-motion`.
- Hero 3D interaction: within the desktop hero, the supplied chuck moves closer, rotates, and shifts subtly as the visitor scrolls through the section. It can be inspected by pointer drag; zoom and pan controls are deliberately disabled. Reduced-motion visitors receive a fixed composition and no drag cue.
- Motion refinement: the hero copy now begins only after the GMT loader has cleared. Product categories reveal once on entry, and a deterministic, low-contrast machining-path field adds motion to the sourcing section without competing with buyer content.
- Page choreography: GSAP ScrollTrigger owns section, rule, and category-card reveals through one React-safe scoped motion shell. The sequence uses transform and opacity only, groups entering cards in small batches, runs once, and is completely bypassed when reduced motion is preferred.
- Orbit choreography: the How GMT Helps machining field now combines deterministic spiral paths with two counter-rotating inspection rings; a compact related orbit reinforces the ten-category range. Both respond to scroll through transform-only GSAP motion, remain static under reduced motion, and avoid continuous animation when the section is off-screen.
- Button motion: primary actions use a fast directional colour sweep and arrow displacement on hover or keyboard focus. Motion is interruptible, uses transforms, preserves visible focus, and collapses under reduced-motion preferences.
- Product inspection response: category cards use a pointer-positioned light inspection pass and a short filter-arrival transition. The effect is decorative, does not change or hide product information, and is removed for reduced-motion visitors.

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
- GMT loader: rebuilt as a sub-three-second measure → cut → lock-up sequence. It uses the approved SVG paths for the blue slash, red slash, and red GMT wordmark, adds a precision-inspection frame and bounded bloom, and hands off immediately for reduced-motion visitors.
- Refinement motion layer: Lenis now provides smooth anchor and wheel scrolling; the hero chuck responds subtly to scroll position through GSAP ScrollTrigger; hero copy enters in a short staged reveal; and category cards lift with the imagery on hover. All non-essential motion respects the visitor's reduced-motion setting.

## Next build order

1. Build the light-theme home page around the completed GSAP loader and refined motion layer.
2. Build crawlable category-page templates and quote actions.
3. Add final contact details, photography, structured data, and deploy.
