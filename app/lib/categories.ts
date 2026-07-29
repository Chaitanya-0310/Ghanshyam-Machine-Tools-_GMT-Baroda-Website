export const categories = [
  { slug: "lathe-machines", name: "Lathe Machines", image: "/category-lathe.png", types: ["Centre lathes", "Heavy-duty lathes", "Capstan and turret lathes", "CNC turning options"], description: "Turning solutions for repair, production, and general workshop work." },
  { slug: "milling-machines", name: "Milling Machines", image: "/category-milling.png", types: ["Vertical milling machines", "Horizontal milling machines", "Universal milling machines", "Tool-room milling options"], description: "Practical options for shaping, slotting, and precision machining work." },
  { slug: "drilling-machines", name: "Drilling Machines", image: "/category-drilling.png", types: ["Bench drilling machines", "Pillar drilling machines", "Radial drilling machines", "Magnetic drilling options"], description: "Drilling equipment selected for daily workshop requirements." },
  { slug: "grinding-machines", name: "Grinding Machines", image: "/category-grinding.png", types: ["Surface grinders", "Tool and cutter grinders", "Cylindrical grinding options", "Bench grinding equipment"], description: "Finishing and maintenance equipment for precision workshop operations." },
  { slug: "gear-cutting", name: "Gear Cutters", image: "/category-gear-cutting.png", types: ["Gear hobbing options", "Gear shaping options", "Gear cutting tools", "Related workholding"], description: "Gear-cutting equipment and compatible tooling for specialized machining needs." },
  { slug: "chucks-workholding", name: "Chucks & Workholding", image: "/category-workholding.png", types: ["Three-jaw chucks", "Four-jaw chucks", "Collet and fixture options", "Workholding accessories"], description: "Workholding solutions for reliable and repeatable machine setup." },
  { slug: "hydraulic-units", name: "Hydraulic Units", image: "/category-hydraulic.png", types: ["Hydraulic power packs", "Hydraulic cylinders", "Hydraulic workholding", "Replacement components"], description: "Hydraulic equipment and workholding support for industrial applications." },
  { slug: "motors", name: "Motors", image: "/category-motors.png", types: ["Electric motors", "Brake motors", "Geared motors", "Replacement motor options"], description: "Industrial motors and compatible components for machine replacement needs." },
  { slug: "power-tools", name: "Power Tools", image: "/category-power-tools.png", types: ["Drilling tools", "Grinding tools", "Cutting tools", "Workshop accessories"], description: "Power tools for fabrication, maintenance, and everyday production tasks." },
  { slug: "workpieces", name: "Workpieces", image: "/category-workpieces.png", types: ["Machined components", "Job-specific material", "Fixture-ready pieces", "Tooling-related requirements"], description: "Machining-related requirements sourced around the job at hand." },
] as const;

export function findCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
