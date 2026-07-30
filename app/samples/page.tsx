import type { Metadata } from "next";
import Link from "next/link";
import { concepts } from "./concepts";
import { SampleLogo } from "./SampleLogo";
import styles from "./samples.module.css";

export const metadata: Metadata = {
  title: "Homepage Design Samples | Ghanshyam Machine Tools",
  description:
    "Three premium homepage design directions prepared for Ghanshyam Machine Tools.",
  robots: { index: false, follow: false },
};

export default function SamplesPage() {
  return (
    <main id="main" className={styles.samplesIndex}>
      <header className={styles.indexHeader}>
        <SampleLogo />
        <Link className={styles.returnLink} href="/">
          Current website <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className={styles.indexIntro} aria-labelledby="samples-title">
        <div className={styles.indexKicker}>
          <span>Design review</span>
          <span>29 · 07 · 2026</span>
        </div>
        <h1 id="samples-title">
          Three ways to make
          <span>precision feel premium.</span>
        </h1>
        <div className={styles.indexIntroFooter}>
          <p>
            These are intentionally different homepage directions—not colour
            variations. Open each concept to compare its complete hero,
            category rhythm, enquiry treatment, and mobile behaviour.
          </p>
          <span className={styles.archiveNote}>
            Correct source · 240 frames · 1280 × 720
          </span>
        </div>
      </section>

      <section className={styles.conceptGrid} aria-label="Homepage concepts">
        {concepts.map((concept) => (
          <article
            key={concept.slug}
            className={`${styles.conceptCard} ${styles[concept.slug]}`}
          >
            <div className={styles.cardChrome}>
              <div className={styles.cardMeta}>
                <span>GMT / {concept.index}</span>
                <span>{concept.descriptor}</span>
              </div>
              <div className={styles.desktopPreview}>
                <div className={styles.previewNav}>
                  <span className={styles.previewLogo}>GMT</span>
                  <span>Machines&nbsp;&nbsp; About&nbsp;&nbsp; Enquire</span>
                </div>
                <div className={styles.previewCopy}>
                  <span>Machine tools · Vadodara</span>
                  <strong>
                    Start with the job.
                    <br />
                    Source with clarity.
                  </strong>
                </div>
                <img
                  src={concept.frame}
                  alt=""
                  width="1280"
                  height="720"
                />
                <div className={styles.previewAccent} aria-hidden="true" />
              </div>
              <div className={styles.mobilePreview} aria-hidden="true">
                <span className={styles.mobileBar}>GMT</span>
                <strong>Source with clarity.</strong>
                <img src={concept.frame} alt="" width="1280" height="720" />
                <span className={styles.mobileButton}>Help me choose&nbsp; ↗</span>
              </div>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardIndex}>{concept.index}</span>
              <div>
                <h2>{concept.name}</h2>
                <p>{concept.summary}</p>
              </div>
              <Link className={styles.openConcept} href={`/samples/${concept.slug}`}>
                <span>Open concept</span>
                <span className={styles.arrowDisc} aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.indexFooter}>
        <p>Select one direction before the production homepage is changed.</p>
        <span>Ghanshyam Machine Tools · Vadodara, Gujarat</span>
      </footer>
    </main>
  );
}

