import type { Metadata } from "next";
import { CategoryExplorer } from "./components/CategoryExplorer";
import { GmtFooter } from "./components/GmtFooter";
import { GmtHeader } from "./components/GmtHeader";
import { GmtLoader } from "./components/GmtLoader";
import { HeroIntro } from "./components/HeroIntro";
import { HeroProduct } from "./components/HeroProduct";
import { MachiningField } from "./components/MachiningField";
import { MotionStage } from "./components/MotionStage";
import { QuoteEnquiry } from "./components/QuoteEnquiry";

export const metadata: Metadata = {
  title: "Ghanshyam Machine Tools | Vadodara",
  description: "Machine tools and industrial equipment retailer in Vadodara, Gujarat.",
};

export default function Home() {
  return (
    <MotionStage id="main" className="gmt-stage">
      <GmtLoader />
      <GmtHeader />

      <section className="gmt-hero" aria-labelledby="hero-title">
        <HeroIntro />
        <div className="gmt-hero__media">
          <div className="gmt-hero__media-label" aria-hidden="true">
            <span>Product study</span>
            <span>Lathe workholding</span>
          </div>
          <div className="gmt-hero__calibration" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <HeroProduct />
          <div className="gmt-hero__inspection" aria-hidden="true">
            <span className="gmt-hero__inspection-line" />
            <p>Visual reference</p>
            <strong>Precision workholding</strong>
            <small>Interactive 3D object</small>
          </div>
        </div>
      </section>

      <section id="about" className="gmt-positioning" aria-labelledby="positioning-title">
        <MachiningField />
        <div className="gmt-positioning__copy" data-reveal>
          <p className="gmt-section-label">How GMT helps</p>
          <h2 id="positioning-title">Clear sourcing starts with a better-defined job.</h2>
          <p>
            Share the application, capacity, tooling, compatibility, or make you are considering. GMT uses that context to help shape a more specific enquiry.
          </p>
          <a className="gmt-positioning__link" href="#enquire">
            Build the requirement <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="gmt-positioning__index" data-reveal aria-label="Requirement path">
          <div className="gmt-positioning__index-head" aria-hidden="true">
            <span>Requirement path</span>
            <span>01—03</span>
          </div>
          <div className="gmt-positioning__step">
            <span className="gmt-positioning__step-number">01</span>
            <strong>Define</strong>
            <p>Start with the work, workpiece, or workshop need.</p>
          </div>
          <div className="gmt-positioning__step">
            <span className="gmt-positioning__step-number">02</span>
            <strong>Match</strong>
            <p>Frame the machine, tooling, and compatibility context.</p>
          </div>
          <div className="gmt-positioning__step gmt-positioning__step--decision">
            <span className="gmt-positioning__step-number">03</span>
            <strong>Enquire</strong>
            <p>Send a focused brief for sourcing and quote follow-up.</p>
          </div>
        </div>
      </section>

      <CategoryExplorer />
      <QuoteEnquiry />
      <GmtFooter />
    </MotionStage>
  );
}
