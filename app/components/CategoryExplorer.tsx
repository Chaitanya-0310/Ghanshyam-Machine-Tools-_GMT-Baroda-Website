"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PointerEvent, useState } from "react";
import { categories } from "../lib/categories";
import { MachiningField } from "./MachiningField";

type RangeFilter = "all" | "lead" | "core" | "support";

function rangeLabel(index: number) {
  if (index === 0) return "Lead category";
  if (index < 5) return "Core machine tools";
  return "Supporting equipment";
}

function rangeGroup(index: number): Exclude<RangeFilter, "all"> {
  if (index === 0) return "lead";
  if (index < 5) return "core";
  return "support";
}

export function CategoryExplorer() {
  const [filter, setFilter] = useState<RangeFilter>("all");
  const visibleCategories = categories
    .map((category, index) => ({ category, index }))
    .filter(({ index }) => filter === "all" || rangeGroup(index) === filter);

  function trackInspectionLight(event: PointerEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--inspection-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--inspection-y",
      `${event.clientY - bounds.top}px`,
    );
  }

  return (
    <section id="products" className="gmt-catalogue" aria-labelledby="catalogue-title">
      <div className="gmt-catalogue__intro" data-reveal>
        <div>
          <p className="gmt-section-label">Product range</p>
          <h2 id="catalogue-title">One requirement.<br />The range around it.</h2>
        </div>
        <div className="gmt-catalogue__summary">
          <MachiningField variant="compact" />
          <strong>10</strong>
          <span>buyer-focused categories</span>
          <p>Begin with the machine, then account for the tooling, workholding, and supporting equipment the job calls for.</p>
        </div>
      </div>

      <Separator data-reveal-line className="gmt-section-rule" />

      <div className="gmt-range-axis" data-reveal aria-label="Product range structure">
        <div className="gmt-range-axis__segment gmt-range-axis__segment--lead">
          <span>01</span>
          <strong>Lead category</strong>
          <small>Lathe machines</small>
        </div>
        <div className="gmt-range-axis__segment gmt-range-axis__segment--core">
          <span>02—05</span>
          <strong>Core machine tools</strong>
          <small>Milling · drilling · grinding · gear cutting</small>
        </div>
        <div className="gmt-range-axis__segment gmt-range-axis__segment--support">
          <span>06—10</span>
          <strong>Supporting the job</strong>
          <small>Workholding · power · hydraulic · workpieces</small>
        </div>
      </div>

      <div className="gmt-catalogue__controls" data-reveal>
        <div>
          <span>Range view</span>
          <strong>{visibleCategories.length.toString().padStart(2, "0")} categories shown</strong>
        </div>
        <ToggleGroup
          aria-label="Filter product categories"
          className="gmt-range-filter"
          value={[filter]}
          onValueChange={(value) => {
            if (value[0]) setFilter(value[0] as RangeFilter);
          }}
          variant="outline"
          size="sm"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="lead">Lead</ToggleGroupItem>
          <ToggleGroupItem value="core">Core machines</ToggleGroupItem>
          <ToggleGroupItem value="support">Supporting</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="gmt-catalogue__grid" aria-live="polite">
        {visibleCategories.map(({ category, index }) => (
          <a
            key={category.slug}
            data-reveal-card
            className={`gmt-category-card__link gmt-category-card__link--${index + 1}`}
            href={`/machine-tools/${category.slug}`}
            onPointerMove={trackInspectionLight}
          >
            <Card
              className={`gmt-category-card gmt-category-card--${index + 1}`}
              data-range={rangeGroup(index)}
            >
              <div className="gmt-category-card__media">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
                <span className="gmt-category-card__index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <CardHeader className="gmt-category-card__content">
                <Badge variant="secondary">{rangeLabel(index)}</Badge>
                <CardTitle>
                  <h3>{category.name}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="gmt-category-card__description">
                <p>{category.description}</p>
              </CardContent>
              <CardFooter className="gmt-category-card__footer">
                <strong>
                  Explore Range
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" strokeWidth={1.8} />
                </strong>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
