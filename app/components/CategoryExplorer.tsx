import { ArrowUpRight } from "lucide-react";
import { categories } from "../lib/categories";

function rangeLabel(index: number) {
  if (index === 0) return "Lead category";
  if (index < 5) return "Core machine tools";
  return "Supporting equipment";
}

export function CategoryExplorer() {
  return (
    <section id="products" className="gmt-catalogue" aria-labelledby="catalogue-title">
      <div className="gmt-catalogue__intro" data-reveal>
        <div>
          <p className="gmt-section-label">Product range</p>
          <h2 id="catalogue-title">One requirement.<br />The range around it.</h2>
        </div>
        <div className="gmt-catalogue__summary">
          <strong>10</strong>
          <span>buyer-focused categories</span>
          <p>Begin with the machine, then account for the tooling, workholding, and supporting equipment the job calls for.</p>
        </div>
      </div>

      <div data-reveal-line className="gmt-section-rule" />

      <div className="gmt-catalogue__grid">
        {categories.map((category, index) => (
          <a
            key={category.slug}
            data-reveal-card
            className={`gmt-category-card gmt-category-card--${index + 1}`}
            href={`/machine-tools/${category.slug}`}
          >
            <div className="gmt-category-card__media">
              <img src={category.image} alt={category.name} width="1536" height="1024" loading="lazy" />
              <span className="gmt-category-card__index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="gmt-category-card__content">
              <p>{rangeLabel(index)}</p>
              <h3>{category.name}</h3>
              <span>{category.description}</span>
              <strong>
                Explore range
                <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
              </strong>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
