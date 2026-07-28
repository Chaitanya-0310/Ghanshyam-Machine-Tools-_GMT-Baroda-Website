import type { Metadata } from "next";
import { ChuckScene } from "./components/ChuckScene";
import { CategoryExplorer } from "./components/CategoryExplorer";
import { GmtHeader } from "./components/GmtHeader";
import { GmtLoader } from "./components/GmtLoader";

export const metadata: Metadata = {
  title: "Ghanshyam Machine Tools | Vadodara",
  description: "Machine tools and industrial equipment retailer in Vadodara, Gujarat.",
};

export default function Home() {
  return (
    <main id="main" className="gmt-stage">
      <GmtLoader />
      <GmtHeader />
      <section className="gmt-hero" aria-labelledby="hero-title">
        <div className="gmt-hero__copy">
          <p className="gmt-hero__eyebrow">MACHINE TOOLS RETAILER · VADODARA</p>
          <h1 id="hero-title">The right machine for the work ahead.</h1>
          <p className="gmt-hero__body">Practical sourcing for workshops and industrial teams across Vadodara and Gujarat.</p>
          <div className="gmt-hero__actions">
            <a className="gmt-hero__primary" href="#products">Explore the range</a>
            <a className="gmt-hero__secondary" href="#enquire">Request a quote</a>
          </div>
        </div>
        <div className="gmt-hero__media">
          <ChuckScene />
        </div>
      </section>
      <CategoryExplorer />
    </main>
  );
}
