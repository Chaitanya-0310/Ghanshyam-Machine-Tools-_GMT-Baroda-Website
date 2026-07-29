"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export function GmtLoader() {
  const root = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  const finish = () => {
    document.documentElement.dataset.gmtLoaderComplete = "true";
    window.dispatchEvent(new Event("gmt:loader-complete"));
    setComplete(true);
  };

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        finish();
        return;
      }

      const drawPaths = gsap.utils.toArray<SVGPathElement>("[data-gmt-draw]");

      drawPaths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
        onComplete: finish,
      });

      timeline
        .set("[data-gmt-loader]", { autoAlpha: 1 })
        .set("[data-gmt-field]", { opacity: 0.18, scale: 1.04 })
        .set("[data-gmt-bloom]", { opacity: 0, scale: 0.82 })
        .set("[data-gmt-logo]", { scale: 0.94 })
        .set("[data-gmt-rail-x]", { scaleX: 0, transformOrigin: "left center" })
        .set("[data-gmt-rail-y]", { scaleY: 0, transformOrigin: "center top" })
        .set("[data-gmt-meta]", { autoAlpha: 0, y: 8 })
        .set("[data-gmt-progress]", { scaleX: 0, transformOrigin: "left center" })
        .set("[data-gmt-blue-fill]", { autoAlpha: 0, x: -34, y: 22 })
        .set("[data-gmt-red-fill]", { autoAlpha: 0, x: 34, y: -22 })
        .set("[data-gmt-letter]", { autoAlpha: 1, fill: "transparent", strokeOpacity: 1 })
        .set("[data-gmt-sheen]", { autoAlpha: 0, x: -260 })
        .addLabel("measure", 0.08)
        .to("[data-gmt-field]", { opacity: 1, scale: 1, duration: 0.55 }, "measure")
        .to("[data-gmt-rail-x]", { scaleX: 1, duration: 0.52, stagger: 0.06 }, "measure+=0.04")
        .to("[data-gmt-rail-y]", { scaleY: 1, duration: 0.44, stagger: 0.06 }, "measure+=0.12")
        .to("[data-gmt-meta]", { autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.06 }, "measure+=0.16")
        .to("[data-gmt-progress]", { scaleX: 1, duration: 2.12, ease: "none" }, "measure+=0.16")
        .addLabel("cut", 0.42)
        .to("[data-gmt-blue-outline]", { strokeDashoffset: 0, duration: 0.46, ease: "power2.inOut" }, "cut")
        .to("[data-gmt-red-outline]", { strokeDashoffset: 0, duration: 0.46, ease: "power2.inOut" }, "cut+=0.16")
        .to("[data-gmt-blue-fill]", { autoAlpha: 1, x: 0, y: 0, duration: 0.28 }, "cut+=0.34")
        .to("[data-gmt-red-fill]", { autoAlpha: 1, x: 0, y: 0, duration: 0.28 }, "cut+=0.48")
        .fromTo(
          "[data-gmt-bloom]",
          { opacity: 0, scale: 0.82 },
          { opacity: 0.3, scale: 1.04, duration: 0.66, ease: "power2.out" },
          "cut+=0.28",
        )
        .to("[data-gmt-bloom]", { opacity: 0.18, scale: 1, duration: 0.28 }, "cut+=0.94")
        .addLabel("lock", 1.02)
        .to("[data-gmt-g]", { strokeDashoffset: 0, duration: 0.56, ease: "power2.inOut" }, "lock")
        .to("[data-gmt-m]", { strokeDashoffset: 0, duration: 0.62, ease: "power2.inOut" }, "lock+=0.34")
        .to("[data-gmt-t]", { strokeDashoffset: 0, duration: 0.46, ease: "power2.inOut" }, "lock+=0.72")
        .to("[data-gmt-letter]", { fill: "#ee3038", duration: 0.24, stagger: 0.07 }, "lock+=0.98")
        .to("[data-gmt-letter]", { strokeOpacity: 0, duration: 0.2 }, "lock+=1.12")
        .to(
          "[data-gmt-sheen]",
          { autoAlpha: 0.62, x: 260, duration: 0.46, ease: "power1.inOut" },
          "lock+=1.08",
        )
        .to("[data-gmt-sheen]", { autoAlpha: 0, duration: 0.12 }, "lock+=1.48")
        .addLabel("release", 2.42)
        .to("[data-gmt-meta]", { autoAlpha: 0, y: -6, duration: 0.18, stagger: 0.03 }, "release")
        .to("[data-gmt-rail-x], [data-gmt-rail-y]", { opacity: 0, duration: 0.2 }, "release")
        .to("[data-gmt-logo]", { scale: 1.025, duration: 0.3, ease: "power2.in" }, "release")
        .to("[data-gmt-bloom]", { opacity: 0, scale: 1.08, duration: 0.3 }, "release")
        .to("[data-gmt-loader]", { autoAlpha: 0, duration: 0.42, ease: "power2.inOut" }, "release+=0.2");

      timeline.play(0);
    },
    { scope: root },
  );

  if (complete) return null;

  return (
    <div
      ref={root}
      data-gmt-loader
      className="gmt-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Ghanshyam Machine Tools"
    >
      <div data-gmt-field className="gmt-loader__field" aria-hidden="true" />
      <div data-gmt-bloom className="gmt-loader__bloom" aria-hidden="true" />

      <div className="gmt-loader__bench" aria-hidden="true">
        <span data-gmt-rail-x className="gmt-loader__rail gmt-loader__rail--top" />
        <span data-gmt-rail-x className="gmt-loader__rail gmt-loader__rail--bottom" />
        <span data-gmt-rail-y className="gmt-loader__rail gmt-loader__rail--left" />
        <span data-gmt-rail-y className="gmt-loader__rail gmt-loader__rail--right" />

        <span data-gmt-meta className="gmt-loader__index">
          GMT / 01
        </span>
        <span data-gmt-meta className="gmt-loader__location">
          VADODARA · GUJARAT
        </span>

        <div data-gmt-logo className="gmt-loader__logo">
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
            </defs>
            <g data-gmt-blue-fill className="gmt-loader__slash">
              <path fill="url(#gmt-blue-cut)" d="M656 134h173L554 519H381z" />
            </g>
            <g data-gmt-red-fill className="gmt-loader__slash">
              <path fill="url(#gmt-red-cut)" d="M905 134h157L785 519H630z" />
            </g>
            <path
              data-gmt-draw
              data-gmt-blue-outline
              className="gmt-loader__outline gmt-loader__outline--blue"
              d="M656 134h173L554 519H381z"
            />
            <path
              data-gmt-draw
              data-gmt-red-outline
              className="gmt-loader__outline gmt-loader__outline--red"
              d="M905 134h157L785 519H630z"
            />
            <g className="gmt-loader__lettermark">
              <path
                data-gmt-draw
                data-gmt-letter
                data-gmt-g
                className="gmt-loader__letter"
                fillRule="evenodd"
                d="M257 900V633c0-34 27-62 62-62h253v89H389c-18 0-32 15-32 33v88c0 18 14 33 32 33h89v-44h-54v-81h148v125h70v86z"
              />
              <path
                data-gmt-draw
                data-gmt-letter
                data-gmt-m
                className="gmt-loader__letter"
                fillRule="evenodd"
                d="M642 900V570h105v18c30-25 72-23 105 3l23 20c24-26 58-41 101-41 50 0 86 40 86 88v122c0 19 15 34 34 34h36v86H642z M746 900V694c0-8 6-13 14-13h29c8 0 14 5 14 13v206z M902 900V694c0-8 6-13 14-13h29c8 0 14 5 14 13v206z"
              />
              <path
                data-gmt-draw
                data-gmt-letter
                data-gmt-t
                className="gmt-loader__letter"
                fillRule="evenodd"
                d="M1132 502h92v68h81v85h-81v125c0 19 15 34 34 34h47v86h-173z"
              />
            </g>
          </svg>
          <span data-gmt-sheen className="gmt-loader__sheen" />
        </div>

        <div data-gmt-meta className="gmt-loader__status">
          <span>SETTING THE CUT</span>
          <span className="gmt-loader__progress">
            <span data-gmt-progress />
          </span>
        </div>
      </div>
    </div>
  );
}
