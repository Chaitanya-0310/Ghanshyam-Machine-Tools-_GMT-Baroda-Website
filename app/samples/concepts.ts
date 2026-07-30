export type ConceptSlug =
  | "precision-atelier"
  | "industrial-editorial"
  | "future-machine-gallery";

export type Concept = {
  slug: ConceptSlug;
  index: string;
  name: string;
  descriptor: string;
  summary: string;
  frame: string;
  frameAlt: string;
};

export const concepts: Concept[] = [
  {
    slug: "precision-atelier",
    index: "01",
    name: "Precision Atelier",
    descriptor: "Editorial split · quiet confidence",
    summary:
      "A calm sourcing studio with generous white space, a restrained material palette, and the chuck treated as a precision object.",
    frame: "/sample-assets/chuck-exploded.png",
    frameAlt: "Exploded three-jaw chuck from the supplied GMT animation",
  },
  {
    slug: "industrial-editorial",
    index: "02",
    name: "Industrial Editorial",
    descriptor: "Technical catalogue · sharper rhythm",
    summary:
      "A more assertive buyer-facing direction built from indexed ranges, strong type, machining rules, and practical catalogue energy.",
    frame: "/sample-assets/chuck-assembled-a.png",
    frameAlt: "Assembled three-jaw chuck from the supplied GMT animation",
  },
  {
    slug: "future-machine-gallery",
    index: "03",
    name: "Future Machine Gallery",
    descriptor: "Product gallery · cinematic scale",
    summary:
      "A minimal gallery composition where the machine object leads, supported by soft depth, large typography, and focused interactions.",
    frame: "/sample-assets/chuck-assembled-b.png",
    frameAlt: "Completed three-jaw chuck from the supplied GMT animation",
  },
];

export const conceptBySlug = new Map(
  concepts.map((concept) => [concept.slug, concept]),
);

