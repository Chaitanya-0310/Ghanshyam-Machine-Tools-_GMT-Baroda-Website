"use client";

import { useEffect, useRef } from "react";

function seededUnit(index: number) {
  const value = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function MachiningField() {
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
      context.strokeStyle = "rgba(41,36,109,0.14)";
      context.lineWidth = 0.75;

      const centerX = rect.width * 0.58;
      const centerY = rect.height * 0.52;
      const maxRadius = Math.max(rect.width, rect.height) * 0.64;
      for (let index = 0; index < 36; index += 1) {
        const radius = 22 + index * (maxRadius / 44);
        const start = seededUnit(index) * Math.PI * 1.15;
        const sweep = Math.PI * (1.1 + seededUnit(index + 40) * 1.05);
        context.beginPath();
        context.arc(centerX, centerY, radius, start, start + sweep);
        context.stroke();
      }
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <canvas ref={canvas} className="gmt-machining-field" aria-hidden="true" />;
}
