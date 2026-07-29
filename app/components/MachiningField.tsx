"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function seededUnit(index: number) {
  const value = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function MachiningField({ variant = "full" }: { variant?: "full" | "compact" }) {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;

    const draw = () => {
      const rect = element.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      element.width = Math.max(1, Math.round(rect.width * ratio));
      element.height = Math.max(1, Math.round(rect.height * ratio));

      const context = element.getContext("2d");
      if (!context) return;
      context.scale(ratio, ratio);
      context.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width * 0.58;
      const centerY = rect.height * 0.52;
      const maxRadius = Math.max(rect.width, rect.height) * 0.64;
      for (let index = 0; index < 36; index += 1) {
        const signal = index % 9 === 0;
        context.strokeStyle = signal
          ? index % 18 === 0
            ? "rgba(20, 181, 188, 0.38)"
            : "rgba(214, 238, 80, 0.5)"
          : "rgba(41, 36, 109, 0.15)";
        context.lineWidth = signal ? 1.5 : 0.75;
        const radius = 22 + index * (maxRadius / 44);
        const start = seededUnit(index) * Math.PI * 1.15;
        const sweep = Math.PI * (1.1 + seededUnit(index + 40) * 1.05);
        context.beginPath();
        context.arc(centerX, centerY, radius, start, start + sweep);
        context.stroke();
      }

      const spiralColors = [
        "rgba(41, 36, 109, 0.25)",
        "rgba(238, 48, 56, 0.24)",
        "rgba(20, 181, 188, 0.28)",
      ];

      spiralColors.forEach((strokeStyle, spiralIndex) => {
        context.beginPath();
        context.strokeStyle = strokeStyle;
        context.lineWidth = spiralIndex === 1 ? 1.4 : 1;

        for (let step = 0; step <= 240; step += 1) {
          const angle = step * 0.09 + spiralIndex * 2.05;
          const radius = 6 + step * (maxRadius / 320);
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.stroke();
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const trigger = root.current;
        if (!trigger) return;

        gsap.to(".gmt-machining-field__ring--outer", {
          rotation: 104,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        gsap.to(".gmt-machining-field__ring--inner", {
          rotation: -132,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.35,
          },
        });

        gsap.fromTo(
          ".gmt-machining-field__signal",
          { scale: 0.72, autoAlpha: 0.45 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: "top 78%",
              once: true,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={`gmt-machining-field gmt-machining-field--${variant}`}
      aria-hidden="true"
    >
      <canvas ref={canvas} className="gmt-machining-field__canvas" />
      <span className="gmt-machining-field__ring gmt-machining-field__ring--outer" />
      <span className="gmt-machining-field__ring gmt-machining-field__ring--inner" />
      <span className="gmt-machining-field__signal" />
    </div>
  );
}
