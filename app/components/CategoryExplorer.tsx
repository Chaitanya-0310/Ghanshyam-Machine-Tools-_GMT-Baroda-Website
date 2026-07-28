import { categories } from "../lib/categories";

export function CategoryExplorer() {
  return (
    <section id="products" className="gmt-catalogue" aria-labelledby="catalogue-title">
      <div className="gmt-catalogue__intro">
        <p>PRODUCT UNIVERSE</p>
        <h2 id="catalogue-title">Find the right starting point.</h2>
        <span>Explore the category, then tell us the make, model, capacity, or application you need.</span>
      </div>
      <div className="gmt-catalogue__grid">
        {categories.map((category, index) => (
          <a key={category.slug} className={`gmt-category-card gmt-category-card--${index + 1}`} href={`/machine-tools/${category.slug}`}>
            <img src={category.image} alt={category.name} width="1536" height="1024" />
            <div>
              <span>Explore category</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
