"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionStage({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className: string;
  id?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        const cards = gsap.utils.toArray<HTMLElement>("[data-reveal-card]");
        const lines = gsap.utils.toArray<HTMLElement>("[data-reveal-line]");

        gsap.set(cards, { autoAlpha: 0, y: 38 });

        reveals.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 34 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.78,
              ease: "power3.out",
              clearProps: "transform,visibility,opacity",
              scrollTrigger: {
                trigger: element,
                start: "clamp(top 88%)",
                once: true,
              },
            },
          );
        });

        ScrollTrigger.batch(cards, {
          interval: 0.08,
          batchMax: 3,
          start: "clamp(top 90%)",
          once: true,
          onEnter: (batch) => {
            gsap.to(
              batch,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.74,
                stagger: 0.08,
                ease: "power3.out",
                clearProps: "transform,visibility,opacity",
              },
            );
          },
        });

        lines.forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.9,
              ease: "power3.out",
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: line,
                start: "clamp(top 92%)",
                once: true,
              },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <main ref={root} id={id} className={className}>
      {children}
    </main>
  );
}
