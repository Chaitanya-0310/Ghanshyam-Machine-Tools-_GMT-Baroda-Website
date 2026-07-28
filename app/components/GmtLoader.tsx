"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export function GmtLoader() {
  const root = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set("[data-gmt-wordmark]", { clipPath: "inset(0 0 0 0)" });
        gsap.set("[data-gmt-slash]", { x: 0, y: 0, opacity: 1 });
        gsap.set("[data-gmt-loader]", { opacity: 0, onComplete: () => setComplete(true) });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => setComplete(true),
      });

      timeline
        .set("[data-gmt-wordmark]", { clipPath: "inset(0 50% 0 50%)", opacity: 1 })
        .to("[data-gmt-blue]", { x: 0, y: 0, duration: 0.72, ease: "power4.inOut" }, 0.18)
        .to("[data-gmt-red]", { x: 0, y: 0, duration: 0.72, ease: "power4.inOut" }, 0.18)
        .to("[data-gmt-wordmark]", { clipPath: "inset(0 0% 0 0)", duration: 0.62, ease: "power3.inOut" }, 0.38)
        .to("[data-gmt-logo]", { scale: 0.96, duration: 0.24, ease: "power2.in" }, 1.14)
        .to("[data-gmt-loader]", { opacity: 0, duration: 0.34, ease: "power2.inOut" }, 1.28);

      return () => timeline.kill();
    },
    { scope: root },
  );

  if (complete) return null;

  return (
    <div ref={root} data-gmt-loader className="gmt-loader" role="status" aria-label="Loading Ghanshyam Machine Tools">
      <div className="gmt-loader__field" aria-hidden="true" />
      <div data-gmt-logo className="gmt-loader__logo" aria-hidden="true">
        <svg viewBox="0 0 1454 1082" focusable="false">
          <defs>
            <linearGradient id="gmt-blue-cut" x1="0" y1="0" x2="0.7" y2="1">
              <stop offset="0" stopColor="#30348e" />
              <stop offset="1" stopColor="#24206a" />
            </linearGradient>
            <linearGradient id="gmt-red-cut" x1="0" y1="0" x2="0.78" y2="1">
              <stop offset="0" stopColor="#f42531" />
              <stop offset="1" stopColor="#e80f1d" />
            </linearGradient>
            <clipPath id="gmt-wordmark-crop">
              <rect x="245" y="496" width="1070" height="420" />
            </clipPath>
          </defs>
          <g data-gmt-slash data-gmt-blue className="gmt-loader__slash gmt-loader__slash--blue">
            <path fill="url(#gmt-blue-cut)" d="M656 134h173L554 519H381z" />
          </g>
          <g data-gmt-slash data-gmt-red className="gmt-loader__slash gmt-loader__slash--red">
            <path fill="url(#gmt-red-cut)" d="M905 134h157L785 519H630z" />
          </g>
          <g data-gmt-wordmark className="gmt-loader__wordmark">
            <image href="/gmt-logo-reference.png" width="1454" height="1082" clipPath="url(#gmt-wordmark-crop)" />
          </g>
        </svg>
      </div>
      <p className="gmt-loader__caption">PRECISION IN MOTION</p>
    </div>
  );
}
