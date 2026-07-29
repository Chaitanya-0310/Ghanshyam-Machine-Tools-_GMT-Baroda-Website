"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function HeroIntro() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const play = contextSafe(() => {
        const elements = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
        gsap.fromTo(
          elements,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.085,
            ease: "power3.out",
            clearProps: "transform,visibility,opacity",
          },
        );
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (document.documentElement.dataset.gmtLoaderComplete === "true") {
        play();
        return;
      }

      window.addEventListener("gmt:loader-complete", play, { once: true });
      return () => window.removeEventListener("gmt:loader-complete", play);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="gmt-hero__copy">
      <p data-hero-item className="gmt-hero__eyebrow">
        <span>Machine tools</span>
        Vadodara · Gujarat
      </p>
      <h1 data-hero-item id="hero-title">
        Start with the job.
        <span>Source with clarity.</span>
      </h1>
      <p data-hero-item className="gmt-hero__body">
        Practical sourcing guidance for lathes, machine tools, tooling, and the equipment that supports the work.
      </p>
      <div data-hero-item className="gmt-hero__actions">
        <a className="gmt-hero__primary" href="#enquire">Help me choose</a>
        <a className="gmt-hero__secondary" href="#products">View the range</a>
      </div>
      <dl data-hero-item className="gmt-hero__facts">
        <div>
          <dt>Lead range</dt>
          <dd>Lathe machines</dd>
        </div>
        <div>
          <dt>Coverage</dt>
          <dd>Machine to workholding</dd>
        </div>
        <div>
          <dt>Local focus</dt>
          <dd>Vadodara first</dd>
        </div>
      </dl>
    </div>
  );
}
