import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conceptBySlug, concepts, type ConceptSlug } from "../concepts";
import { SampleLogo } from "../SampleLogo";
import styles from "../samples.module.css";

type ConceptPageProps = {
  params: Promise<{ concept: string }>;
};

const ranges = [
  "Lathe machines",
  "Milling",
  "Drilling",
  "Grinding",
  "Gear cutting",
  "Workholding",
  "Hydraulic units",
  "Motors",
  "Power tools",
  "Workpieces",
];

export function generateStaticParams() {
  return concepts.map(({ slug }) => ({ concept: slug }));
}

export async function generateMetadata({
  params,
}: ConceptPageProps): Promise<Metadata> {
  const { concept: slug } = await params;
  const concept = conceptBySlug.get(slug as ConceptSlug);
  if (!concept) return {};

  return {
    title: `${concept.name} Sample | Ghanshyam Machine Tools`,
    description: concept.summary,
    robots: { index: false, follow: false },
  };
}

function ArrowButton({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      className={`${styles.sampleButton} ${light ? styles.sampleButtonLight : ""}`}
      href="/#enquire"
    >
      <span>{children}</span>
      <span className={styles.arrowDisc} aria-hidden="true">↗</span>
    </Link>
  );
}

function ConceptNav({
  conceptName,
  mode = "default",
}: {
  conceptName: string;
  mode?: "default" | "editorial" | "gallery";
}) {
  return (
    <header className={`${styles.conceptNav} ${styles[`nav-${mode}`]}`}>
      <SampleLogo href="/samples" compact />
      <nav aria-label={`${conceptName} sample navigation`}>
        <a href="#range">Machines</a>
        <a href="#approach">How GMT helps</a>
        <a href="#enquiry">Contact</a>
      </nav>
      <Link className={styles.navEnquire} href="/#enquire">
        Enquire <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

function SampleMarker({ name, index }: { name: string; index: string }) {
  return (
    <div className={styles.sampleMarker}>
      <Link href="/samples">← All samples</Link>
      <span>
        Concept {index} · {name}
      </span>
    </div>
  );
}

function PrecisionAtelier() {
  return (
    <main id="main" className={`${styles.samplePage} ${styles.atelier}`}>
      <SampleMarker name="Precision Atelier" index="01" />
      <ConceptNav conceptName="Precision Atelier" />

      <section className={styles.atelierHero}>
        <div className={styles.atelierCopy}>
          <p className={styles.eyebrow}>
            Machine tools <span>Vadodara · Gujarat</span>
          </p>
          <h1>
            Start with
            <span>the job.</span>
          </h1>
          <p className={styles.heroBody}>
            Practical sourcing guidance for lathes, machine tools, tooling,
            and the equipment that supports the work.
          </p>
          <div className={styles.heroActions}>
            <ArrowButton>Help me choose</ArrowButton>
            <a className={styles.textLink} href="#range">
              Explore the range <span aria-hidden="true">↓</span>
            </a>
          </div>
          <dl className={styles.atelierFacts}>
            <div>
              <dt>Lead range</dt>
              <dd>Lathe machines</dd>
            </div>
            <div>
              <dt>Local focus</dt>
              <dd>Vadodara first</dd>
            </div>
          </dl>
        </div>

        <div className={styles.atelierObject}>
          <div className={styles.objectLabel}>
            <span>Object study / 01</span>
            <span>Three-jaw chuck</span>
          </div>
          <div className={styles.atelierImageShell}>
            <div className={styles.atelierImage}>
              <img
                src="/sample-assets/chuck-exploded.png"
                alt="Exploded three-jaw chuck from the supplied GMT animation"
                width="1280"
                height="720"
              />
            </div>
          </div>
          <p className={styles.objectFoot}>
            A calm product moment using the corrected 240-frame source.
          </p>
        </div>
      </section>

      <section id="approach" className={styles.atelierStatement}>
        <p>One practical sourcing partner</p>
        <h2>
          Define the work.
          <span>Match the requirement.</span>
          Enquire with clarity.
        </h2>
      </section>

      <section id="range" className={styles.atelierRange}>
        <div className={styles.sectionHeading}>
          <span>Selected range · 01—10</span>
          <h2>From the machine to what supports the job.</h2>
        </div>
        <div className={styles.atelierList}>
          {ranges.map((range, index) => (
            <Link href="/#products" key={range}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{range}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="enquiry" className={styles.atelierEnquiry}>
        <span>Have a requirement in mind?</span>
        <h2>Bring us the job, capacity, or compatibility context.</h2>
        <ArrowButton light>Build your enquiry</ArrowButton>
      </section>
    </main>
  );
}

function IndustrialEditorial() {
  return (
    <main id="main" className={`${styles.samplePage} ${styles.editorial}`}>
      <SampleMarker name="Industrial Editorial" index="02" />
      <ConceptNav conceptName="Industrial Editorial" mode="editorial" />

      <section className={styles.editorialHero}>
        <div className={styles.editorialLead}>
          <p className={styles.editorialIssue}>GMT / SOURCEBOOK / 2026</p>
          <h1>
            MACHINES
            <span>FOR THE</span>
            <em>WORK.</em>
          </h1>
        </div>
        <div className={styles.editorialSide}>
          <p>
            A clearer starting point for lathes, machine tools, workholding,
            and workshop requirements across Vadodara and Gujarat.
          </p>
          <ArrowButton>Define your requirement</ArrowButton>
          <dl>
            <div><dt>01</dt><dd>Define</dd></div>
            <div><dt>02</dt><dd>Match</dd></div>
            <div><dt>03</dt><dd>Enquire</dd></div>
          </dl>
        </div>
        <div className={styles.editorialImage}>
          <img
            src="/sample-assets/chuck-assembled-a.png"
            alt="Assembled three-jaw chuck from the supplied GMT animation"
            width="1280"
            height="720"
          />
          <span className={styles.imageCaption}>Lathe workholding / visual study</span>
        </div>
        <div className={styles.editorialTicker} aria-label="Product range summary">
          <span>Lathe machines</span>
          <span>Milling</span>
          <span>Drilling</span>
          <span>Grinding</span>
          <span>Workholding</span>
        </div>
      </section>

      <section id="approach" className={styles.editorialManifesto}>
        <div>
          <span>THE GMT APPROACH</span>
          <span>VADODARA / GUJARAT</span>
        </div>
        <h2>Clarity before the quote.</h2>
        <p>
          Share the application, capacity, tooling, compatibility, make, or
          budget context. GMT helps shape that into a focused sourcing enquiry.
        </p>
      </section>

      <section id="range" className={styles.editorialRange}>
        <div className={styles.editorialRangeTitle}>
          <span>INDEX / 01—10</span>
          <h2>THE<br />RANGE</h2>
        </div>
        <div className={styles.editorialGrid}>
          {ranges.map((range, index) => (
            <Link
              href="/#products"
              key={range}
              className={index === 0 ? styles.editorialFeature : ""}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{range}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="enquiry" className={styles.editorialEnquiry}>
        <div>
          <span>READY WHEN THE REQUIREMENT IS.</span>
          <h2>Tell us what the work needs.</h2>
        </div>
        <ArrowButton light>Start an enquiry</ArrowButton>
      </section>
    </main>
  );
}

function FutureMachineGallery() {
  return (
    <main id="main" className={`${styles.samplePage} ${styles.gallery}`}>
      <SampleMarker name="Future Machine Gallery" index="03" />
      <ConceptNav conceptName="Future Machine Gallery" mode="gallery" />

      <section className={styles.galleryHero}>
        <p className={styles.galleryEyebrow}>
          Independent machine-tool sourcing · Vadodara
        </p>
        <h1 aria-label="Source with clarity">
          <span>Source</span>
          <span>with clarity.</span>
        </h1>
        <div className={styles.galleryObjectShell}>
          <div className={styles.galleryObject}>
            <img
              src="/sample-assets/chuck-assembled-b.png"
              alt="Completed three-jaw chuck from the supplied GMT animation"
              width="1280"
              height="720"
            />
          </div>
        </div>
        <div className={styles.galleryHeroFooter}>
          <p>
            Practical guidance across machines, tooling, workholding, and the
            equipment that supports the job.
          </p>
          <ArrowButton>Help me choose</ArrowButton>
          <span className={styles.galleryCount}>01 / 10 · Lathe machines</span>
        </div>
      </section>

      <section id="approach" className={styles.galleryApproach}>
        <div className={styles.galleryApproachCopy}>
          <span>How GMT helps</span>
          <h2>A considered route from requirement to enquiry.</h2>
        </div>
        <div className={styles.gallerySteps}>
          {[
            ["01", "Define", "Start with the work or workshop need."],
            ["02", "Match", "Frame machine, tooling, and compatibility."],
            ["03", "Enquire", "Send a focused brief for quote follow-up."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="range" className={styles.galleryRange}>
        <div className={styles.galleryRangeHead}>
          <span>Product universe</span>
          <h2>Ten connected categories.</h2>
        </div>
        <div className={styles.galleryRail}>
          {ranges.map((range, index) => (
            <Link href="/#products" key={range}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{range}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="enquiry" className={styles.galleryEnquiry}>
        <div className={styles.galleryEnquiryObject}>
          <img
            src="/sample-assets/chuck-exploded.png"
            alt=""
            width="1280"
            height="720"
          />
        </div>
        <div>
          <span>Requirement brief</span>
          <h2>Let’s make the next conversation more specific.</h2>
          <ArrowButton light>Build your enquiry</ArrowButton>
        </div>
      </section>
    </main>
  );
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { concept } = await params;

  switch (concept) {
    case "precision-atelier":
      return <PrecisionAtelier />;
    case "industrial-editorial":
      return <IndustrialEditorial />;
    case "future-machine-gallery":
      return <FutureMachineGallery />;
    default:
      notFound();
  }
}

