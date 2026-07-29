import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GmtFooter } from "../../components/GmtFooter";
import { GmtHeader } from "../../components/GmtHeader";
import { MotionStage } from "../../components/MotionStage";
import { categories, findCategory } from "../../lib/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) return { title: "Product category | Ghanshyam Machine Tools" };

  return {
    title: `${category.name} in Vadodara | Ghanshyam Machine Tools`,
    description: `${category.description} Enquire with Ghanshyam Machine Tools in Vadodara, Gujarat.`,
  };
}

export default async function MachineToolCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) {
    return <main>Category not found.</main>;
  }

  const categoryIndex = categories.findIndex((item) => item.slug === slug) + 1;

  return (
    <MotionStage id="main" className="gmt-stage">
      <GmtHeader />

      <article className="gmt-category-page">
        <section className="gmt-category-page__hero">
          <div className="gmt-category-page__copy" data-reveal>
            <Link href="/#products" className="gmt-category-page__back">
              <ArrowLeft size={15} aria-hidden="true" />
              All categories
            </Link>
            <p className="gmt-section-label">
              Range {String(categoryIndex).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </p>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            <Link href="/#enquire" className="gmt-category-page__cta">
              Discuss this requirement
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <figure className="gmt-category-page__visual" data-reveal>
            <img src={category.image} alt={category.name} width="1536" height="1024" />
            <figcaption>
              <span>Representative category image</span>
              <strong>Final product photography pending</strong>
            </figcaption>
          </figure>
        </section>

        <section className="gmt-category-page__types" aria-labelledby="types-title">
          <div data-reveal>
            <p className="gmt-section-label">What to explore</p>
            <h2 id="types-title">Narrow the category around the work.</h2>
            <p>These are common starting points for an enquiry, not a statement of current stock.</p>
          </div>
          <div className="gmt-category-page__type-list">
            {category.types.map((type, index) => (
              <div key={type} data-reveal-card>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{type}</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="gmt-category-page__models" data-reveal>
          <p className="gmt-section-label gmt-section-label--light">Brands and models</p>
          <h2>Availability is confirmed against the enquiry.</h2>
          <p>
            Share the preferred make or model, required capacity, and application. GMT can use those details to source and respond with relevant options.
          </p>
          <Link href="/#enquire">Start a category enquiry <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </section>
      </article>

      <GmtFooter />
    </MotionStage>
  );
}
