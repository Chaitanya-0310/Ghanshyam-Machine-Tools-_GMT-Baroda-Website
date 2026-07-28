import { GmtHeader } from "../../components/GmtHeader";
import { categories, findCategory } from "../../lib/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function MachineToolCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) {
    return <main>Category not found.</main>;
  }

  return (
    <main className="gmt-stage">
      <GmtHeader />
      <section className="gmt-category-page">
        <div className="gmt-category-page__hero">
          <p>GMT PRODUCT RANGE</p>
          <h1>{category.name}</h1>
          <span>{category.description}</span>
        </div>
        <img className="gmt-category-page__image" src={category.image} alt={category.name} width="1536" height="1024" />
        <section className="gmt-category-page__types">
          <div>
            <p>WHAT TO EXPLORE</p>
            <h2>Tell us the work. We will help narrow the options.</h2>
          </div>
          <div className="gmt-category-page__type-list">
            {category.types.map((type) => <span key={type}>{type}</span>)}
          </div>
        </section>
        <section className="gmt-category-page__models" id="enquire">
          <p>BRANDS AND MODELS</p>
          <h2>Model availability is confirmed on enquiry.</h2>
          <span>Share the brand or model you prefer, along with the required capacity and application. GMT will respond with suitable available options.</span>
          <a href="mailto:enquiry@example.com">Request category details</a>
        </section>
      </section>
    </main>
  );
}
