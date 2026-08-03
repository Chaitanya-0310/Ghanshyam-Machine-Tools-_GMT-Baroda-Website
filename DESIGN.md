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
- Hero: a clean, text-led opening holds the buyer-focused headline, supporting copy, actions, and sourcing facts without competing product imagery.
- Premium refinement: the exploded three-jaw chuck receives a dedicated full-width product stage immediately below the opening copy. The stage is a borderless brushed-steel studio field whose edges dissolve into the page, avoiding the appearance of an embedded video. It carries no labels, technical annotations, calibration marks, or glass panels over the imagery.
- Hero product object: the product stage uses the supplied 240-frame PNG sequence from `newfileforchuck.zip`. It is presented as a visual product object, not technical CAD or a specification claim. Mobile and reduced-motion visitors receive frame 240 as the assembled fallback.
- Product Universe: interactive ten-category explorer beneath the hero. It uses a retailer-focused selected-range panel and avoids generic product cards until real inventory and photography are available.
- Catalogue cards: each product category now has a representative image card linking to a dedicated category page. Images are temporary visual placeholders and must be replaced with approved supplier or GMT photography when available.
- Category pages: reusable detail-page framework with type exploration and a clear brands-and-models section. No brand, model, or stock claims are published until GMT supplies verified data.
- Quote enquiry: the homepage now includes a structured enquiry brief for contact, category, and application details. For testing, it prepares an email addressed to `chaitanyapp03@gmail.com`; replace this temporary recipient with GMT's confirmed enquiry email before launch.
- Footer: a light utility footer completes the homepage with brand identity, primary buyer paths, and Vadodara context. Exact address and final contact details remain explicitly pending.

## Design-system specification

### Colour, depth, and spacing tokens

| Token | Exact value | Intended use |
| --- | --- | --- |
| GMT Red | `#EE3038` / hover `#D9252F` | Primary enquiry actions and required-field marks only |
| GMT Blue | `#29246D` / bright `#37319A` | Navigation, focus, technical labels, and active range controls |
| White | `#FFFFFF` | Elevated reading and form surfaces |
| Steel 50 / paper / steel | `#F8FAFB` / `#F3F6F8` / `#E4E9EF` | Page, low-contrast surfaces, and product-stage support |
| Line | `#D3DBE4` | Rules, fields, and quiet boundaries |
| Graphite / soft graphite | `#111827` / `#1B2A39` | Primary text and dark material fields |
| Muted ink | `#5F6D80` | Supporting copy and secondary technical information |

- The spatial system uses a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px. Components may use fluid `clamp()` values only when their minimum and maximum align to that rhythm.
- Structural radii are `17.6px` for compact controls and `28px` for major panels. Do not introduce pills unless the content is a compact status or filter.
- Depth uses three named levels: control `0 6px 14px rgb(30 47 68 / 8%)`; plate `0 14px 32px rgb(30 47 68 / 10%)` with a 1px white inset; floating `0 26px 70px rgb(19 32 51 / 10%)`. Raised cards use `0 22px 42px rgb(30 47 68 / 14%)`.
- The inspection grid is a 64px visual grid derived from the 4px spacing system. Its 1px GMT-blue line is held to 3.2% opacity and appears only on large light surfaces. It should never reduce copy or product-image contrast.

### Typography

Only the bundled weights are valid: Big Shoulders 700 for display, Work Sans 400 for reading and 700 for navigation, controls, and emphasis, and IBM Plex Mono 700 for labels and indexes. IBM Plex Mono 400 is reserved for rare neutral data only.

| Role | Compact (320-580px) | Standard (581-1080px) | Wide (1081px+) | Leading / tracking |
| --- | --- | --- | --- | --- |
| Home H1 | `54.4-84.8px` fluid | `56-101.6px` fluid | capped at `101.6px` | `0.98`, `-0.015em` |
| Category H1 | `59.2-91.2px` fluid | `60.8-128px` fluid | capped at `128px` | `0.98`, `-0.015em` |
| Editorial H2 | `44.8-68.8px` fluid | `41.6-105.6px` fluid by section | capped by section | `0.98`, `-0.015em` |
| Product H3 | `26.4-43.2px` fluid | `26.4-43.2px` fluid | capped at `43.2px` | `1`, `-0.025em` |
| Body copy | `16px` | `16-17px` | `16-17px` | `1.66`, normal tracking |
| UI action / nav | `12px` | `12-13px` | `12-13px` | `1.3-1.45`, `0.02em` |
| Technical label | `8.6-10.6px` | `8.6-10.6px` | `8.6-10.6px` | `1.3-1.5`, `0.08-0.13em`, uppercase |

### Imagery, iconography, and component states

- Product imagery is shown on a cool-steel studio field (`#E4E9EF`) with `object-fit: cover`, a restrained bottom graphite gradient only when text overlays it, and no artificial colour grading. Placeholder images must remain labelled once per section, not once per card. Approved product imagery replaces temporary sources without changing the component geometry.
- `lucide-react` is the only icon family. Use outlined icons at a consistent 1.8-2px stroke, in `currentColor`; no emoji, filled icon sets, or alternate libraries.

| Element | Hover | Active | Keyboard focus | Disabled / unavailable |
| --- | --- | --- | --- | --- |
| Primary action | lift 2px, deep GMT red, raised action shadow, directional icon nudge | translate 1px and scale to 98.5% | 2px GMT-blue outline, 3px offset | 45% opacity, no lift, pointer blocked |
| Secondary action | plate shadow rises, blue text/border | translate 1px | 2px GMT-blue outline | 45% opacity, no shadow change |
| Product card | lift 4.5px, image scales to 104.5%, subtle inspection light | none beyond browser press feedback | same as hover plus visible outer focus ring | cards are links and are never rendered disabled |
| Filter / FAQ control | active fill or disclosure depth only | translate 1px | 2px GMT-blue outline | muted text, no state change |
| Form field | darker steel rule | none | GMT-blue rule and 4px low-opacity focus halo | muted surface, `not-allowed` cursor, value remains readable |

### Responsive, accessibility, and theme policy

- Compact: `320-580px`; Tablet: `581-820px`; Compressed desktop: `821-1080px`; Wide desktop: `1081px+`. Layouts are single-column by 820px, and the navigation becomes an accessible menu at or below that point.
- Launch is explicitly light-theme only. Do not add automatic, system, or manual dark mode until a separately approved dark material system and imagery treatment exist.
- Meet WCAG 2.2 AA: 4.5:1 for normal text, 3:1 for large text and non-text controls, semantic labels for every form field, 44px minimum touch targets where practical, and a persistent 2px GMT-blue visible focus outline with a 3px offset.
- Test reduced motion with `prefers-reduced-motion: reduce`: the loader hands off statically, scroll choreography and hover movement are removed, and content remains complete and keyboard accessible. Test keyboard navigation, 200% zoom, and compact-width horizontal overflow before release.

### Motion tokens

- Precision easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Feedback: 180ms. Hover lift and icon response: 220ms. Card arrival: 420ms. Hero copy reveal: 720ms with an 85ms stagger. The loader completes in under 3 seconds.
- Motion uses transform and opacity only. No autonomous floating, pulsing, or decorative looping is permitted outside the bounded chuck assembly sequence.

## Confirmed positioning

- GMT’s differentiator is breadth across a buyer’s requirement: the business can help source from small hand power tools through larger lathe machines, together with relevant accessories and workholding.
- GMT offers products from a range of manufacturers. Do not name manufacturers, imply authorised representation, or guarantee availability until verified supplier data is supplied.
- Preferred buyer-facing framing: one practical sourcing partner for the machine, tooling, accessories, and compatibility needs around the job. Avoid the unqualified phrase “end-to-end solution”; explain the supported requirement instead.
- GMT can guide buyers who are still defining a requirement, including the appropriate machine category, capacity or size, tooling and accessory needs, compatibility, preferred make, and budget context. This is selection and sourcing guidance; do not describe it as engineering design, installation, service, or a guaranteed technical recommendation without further confirmation.
- Commercial hierarchy for the launch: lathe machines are the flagship category; general machine tools and workshop equipment communicate the broader range. The homepage should lead with lathe competence while making the full requirement-to-sourcing breadth easy to discover.

## Confirmed visual refinement

- Homepage visual thesis: a bright precision-inspection bench, with lathe machines as the visual lead and a single calm 3D product moment.
- Typography roles: Big Shoulders for confident industrial display headings and category names, Work Sans for practical buyer copy, navigation, and calls to action, and IBM Plex Mono only for technical labels, indexes, and measurement-style metadata. The three families are self-hosted under the SIL Open Font License to avoid runtime font fetching. Display tracking is calibrated at approximately `-0.015em` with near-solid but breathable leading; use Big Shoulders in sentence case for headings and never for long-form copy or form UI.
- Product range hierarchy: feature Lathe Machines first; group Milling, Drilling, Grinding, and Gear Cutting as core machine tools; treat workholding, hydraulic units, motors, power tools, and workpieces as supporting-the-job equipment.
- Primary homepage conversion: “Help me choose”; quote request remains a secondary direct path. The guided enquiry should feel like a requirement brief, not a generic contact form.
- Signature visual language: restrained machining paths, measurement marks, and angled GMT cuts. Use one high-contrast “Requirement Bench” section rather than proliferating decorative effects.
- Modern UI system: the website uses a precision-sourcing-studio composition—a floating translucent header, a large asymmetrical product-study hero, an indexed editorial category grid, and a single graphite Requirement Bench. Surfaces use cool steel white, graphite, GMT blue, and GMT red with 18–28px structural radii rather than small legacy cards or pill-heavy controls.
- Homepage signature: the supplied lathe chuck assembles inside a dedicated native-ratio, borderless studio field below the hero copy. The uninterrupted object stage, rather than a card, player frame, or overlaid interface decoration, carries the visual identity.
- Calibrated Momentum system: the homepage now uses a functional calibration axis to express the actual buyer sequence (Define, Match, Enquire) and the verified product hierarchy (lead category, core machine tools, supporting equipment). Measurement marks and the GMT cut carry structure rather than decoration; red is reserved for the enquiry decision point.
- Brand signal discipline: GMT blue and GMT red are the only non-neutral interface signals. Graphite and steel support contrast and hierarchy; cyan, lime, and amber are not used in the launch system.
- Hero surface restraint: the hero returns to a clean precision-studio field without a shader canvas. Its structural cuts, product stage, and focused buyer copy carry the visual identity instead.
- Static brand material fields: the category-page Brands & Models panel and the homepage Requirement Bench use graphite, GMT indigo, steel-blue, and restrained GMT-red layers. They preserve text contrast without adding a second visual engine.
- Range explorer refinement: the category grid now includes an accessible All / Lead / Core / Supporting filter built from the shared shadcn component layer. Cards retain the editorial asymmetry and full semantic card composition; the compact range axis communicates grouping once, rather than repeating status badges on every card.
- Enquiry component system: the Requirement Bench form now uses the shared shadcn field, input, native-select, textarea, separator, and button primitives while preserving the established GMT visual language and native mobile form behaviour.
- Trust and range clarity: the header identifies the verified GIDC Makarpura, Vadodara focus; the hero carries a factual sourcing proof rail; catalogue imagery is explicitly labelled as illustrative until approved GMT or supplier photography is supplied; and the enquiry form includes a practical buyer brief prompt. The footer states the verified retailer-and-sourcing-partner positioning without commercial promises.
- Tactile surfaces: clay-inspired inset depth remains limited to the active range filter and buyer-FAQ disclosure control. Category tiles use restrained, cool-steel machined-plate depth with one directional shadow and inset highlight; the effect is not used on forms, the hero, or the chuck product stage.
- Landing-page conversion order: the homepage leads from the hero product study to the commercial product range, then the Define → Match → Enquire sourcing path, the requirement brief, and verified buyer FAQs. The hero supports both buyer paths: guided selection and a direct quote brief for known categories or models. FAQ copy remains limited to the verified retailer positioning and sourcing guidance.

- Visual cohesion pass: product tiles use restrained machined-plate depth rather than pronounced neumorphism; primary actions share one GMT-red lift-and-icon response; the catalogue hierarchy is quieter and avoids repeated card labels; and the Requirement Bench uses a subdued brushed-graphite material field. Blue remains the navigational and technical signal, while red is concentrated on the enquiry decision.

## Motion plan

- Preloader: original GMT precision-bench sequence. A restrained measurement frame establishes the stage, SVG outline strokes trace the blue and red angled cuts with opposing directional force, then custom paths draw the connected GMT lower wordmark in a G → M → T flow. A single raked-light pass resolves the lock-up before a fast exit. The G base stops at the M, the M/T join happens only at the baseline, and the T cap has no left-facing arm. Upper letter spacing is held consistently at 70 SVG units. No raster image is used in the loader animation. Replace these paths with the official vector master when supplied for pixel-perfect geometry.
- Preloader library: GSAP timeline.
- Scroll: Lenis for controlled, premium smooth scrolling.
- Motion limit: fast and deliberate. No constant floating effects, excessive glow, particles, or scroll-hijacking.
- Accessibility: provide a static reveal and disable non-essential animation for `prefers-reduced-motion`.
- Hero assembly sequence: desktop visitors enter a dedicated full-width 16:9 product study immediately after the text-led hero. The supplied 240-frame sequence from `newfileforchuck.zip` holds briefly on frame 001, scrubs continuously through the assembled-to-exploded-to-assembled motion, then holds frame 240 before release. Framing remains centred and uncropped throughout; no late zoom, focal shift, phase labels, calibration graphics, or progress card sit over the object. The stage is capped near the source's native 1280×720 size, uses a bounded frame-loading window, and draws at an appropriate device-pixel ratio. Reduced-motion, tablet, and mobile visitors receive frame 240 as the static assembled fallback.
- Motion refinement: the hero copy now begins only after the GMT loader has cleared. Product categories reveal once on entry, and a deterministic, low-contrast machining-path field adds motion to the sourcing section without competing with buyer content.
- Page choreography: GSAP ScrollTrigger owns section, rule, and category-card reveals through one React-safe scoped motion shell. The sequence uses transform and opacity only, groups entering cards in small batches, runs once, and is completely bypassed when reduced motion is preferred.
- Surface choreography: no ShaderGradient canvas is used. Decorative depth comes from static steel surfaces and the compact deterministic range orbit only.
- Button motion: buttons use a measured lift, press response, shadow change, and directional icon displacement on hover or keyboard focus. Motion is interruptible, uses transforms, preserves visible focus, and collapses under reduced-motion preferences.
- Product inspection response: category cards use a pointer-positioned light inspection pass, a short filter-arrival transition, and a title lift only on hover or keyboard focus. The effects are decorative, do not change or hide product information, and are removed for reduced-motion visitors.

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
- Typography system: Big Shoulders is the self-hosted display font for headings and category names. Work Sans is the reading and interface face, including navigation and CTAs. IBM Plex Mono is reserved for metadata, form labels, indexes, and technical references.
- GMT loader: rebuilt as a sub-three-second measure → cut → lock-up sequence. It uses the approved SVG paths for the blue slash, red slash, and red GMT wordmark, adds a precision-inspection frame and bounded bloom, and hands off immediately for reduced-motion visitors.
- Refinement motion layer: Lenis now provides smooth anchor and wheel scrolling; the hero chuck responds subtly to scroll position through GSAP ScrollTrigger; hero copy enters in a short staged reveal; and category cards lift with the imagery on hover. All non-essential motion respects the visitor's reduced-motion setting.
- Chuck source correction: `newfileforchuck.zip` is the only approved hero sequence source. Its 240 PNG frames are extracted to `public/chuck-assembly`; the former 300-frame source and constants are no longer used.

## Next build order

1. Build the light-theme home page around the completed GSAP loader and refined motion layer.
2. Build crawlable category-page templates and quote actions.
3. Add final contact details, photography, structured data, and deploy.
