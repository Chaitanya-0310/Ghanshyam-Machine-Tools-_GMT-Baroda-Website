"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const FRAME_COUNT = 240;
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 720;
const MEMORY_WINDOW = 52;
const ASSEMBLY_COMPLETE_PROGRESS = 0.86;
const PROTECTED_FRAMES = new Set([0, 29, 59, 89, 119, 149, 179, 209, 239]);

function frameUrl(index: number) {
  return `/chuck-assembly/ezgif-frame-${String(index + 1).padStart(3, "0")}.png`;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroProduct() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const finalFrame = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
        const rootElement = root.current;
        const frameElement = frame.current;
        const canvasElement = canvas.current;
        const finalImage = finalFrame.current;

        if (
          !rootElement ||
          !frameElement ||
          !canvasElement ||
          !finalImage
        ) {
          return;
        }

        const context = canvasElement.getContext("2d", { alpha: false });
        if (!context) return;

        const frames = new Map<number, HTMLImageElement>();
        const framePromises = new Map<number, Promise<HTMLImageElement>>();
        let requestedFrame = 0;
        let deviceRatio = 1;
        let assemblyComplete = false;
        let disposed = false;
        let timeline: gsap.core.Timeline | undefined;

        const closestLoadedFrame = (target: number) => {
          const exact = frames.get(target);
          if (exact?.complete && exact.naturalWidth) return exact;

          for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
            const previous = frames.get(target - distance);
            const next = frames.get(target + distance);
            if (previous?.complete && previous.naturalWidth) return previous;
            if (next?.complete && next.naturalWidth) return next;
          }

          return undefined;
        };

        const drawFrame = (target: number) => {
          const image = closestLoadedFrame(target);
          const bounds = canvasElement.getBoundingClientRect();
          if (!image || !bounds.width || !bounds.height) return;

          context.save();
          context.setTransform(1, 0, 0, 1, 0, 0);
          context.fillStyle = "#f7f8fa";
          context.fillRect(0, 0, canvasElement.width, canvasElement.height);
          context.restore();

          context.imageSmoothingEnabled = true;
          context.imageSmoothingQuality = "high";

          const scale = Math.min(
            bounds.width / FRAME_WIDTH,
            bounds.height / FRAME_HEIGHT,
          );
          const drawWidth = FRAME_WIDTH * scale;
          const drawHeight = FRAME_HEIGHT * scale;
          const x = (bounds.width - drawWidth) / 2;
          const y = (bounds.height - drawHeight) / 2;

          context.drawImage(
            image,
            x,
            y,
            drawWidth,
            drawHeight,
          );
        };

        const resizeCanvas = () => {
          const bounds = canvasElement.getBoundingClientRect();
          deviceRatio = Math.min(window.devicePixelRatio || 1, 1.5);
          canvasElement.width = Math.max(1, Math.round(bounds.width * deviceRatio));
          canvasElement.height = Math.max(1, Math.round(bounds.height * deviceRatio));
          context.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
          drawFrame(requestedFrame);
        };

        const pruneFrames = (center: number) => {
          if (frames.size <= MEMORY_WINDOW) return;

          const removable = [...frames.keys()]
            .filter((index) => !PROTECTED_FRAMES.has(index) && index !== center)
            .sort((a, b) => Math.abs(b - center) - Math.abs(a - center));

          while (frames.size > MEMORY_WINDOW && removable.length) {
            const index = removable.shift();
            if (index === undefined) break;
            const image = frames.get(index);
            image?.removeAttribute("src");
            frames.delete(index);
            framePromises.delete(index);
          }
        };

        const loadFrame = (index: number) => {
          const existing = frames.get(index);
          if (existing?.complete && existing.naturalWidth) {
            return Promise.resolve(existing);
          }

          const existingPromise = framePromises.get(index);
          if (existingPromise) return existingPromise;

          const image = existing ?? new Image();
          image.decoding = "async";
          frames.set(index, image);

          const promise = new Promise<HTMLImageElement>((resolve) => {
            image.onload = () => {
              image.decode()
                .catch(() => undefined)
                .finally(() => {
                  if (!disposed && Math.abs(index - requestedFrame) <= 18) {
                    drawFrame(requestedFrame);
                  }
                  resolve(image);
                });
            };
            image.onerror = () => {
              frames.delete(index);
              framePromises.delete(index);
              resolve(image);
            };
            image.src = frameUrl(index);
          });

          framePromises.set(index, promise);
          return promise;
        };

        const requestFrameWindow = (center: number) => {
          const indices = Array.from(
            { length: 35 },
            (_, offset) => center + offset - 17,
          )
            .filter((index) => index >= 0 && index < FRAME_COUNT)
            .sort((a, b) => Math.abs(a - center) - Math.abs(b - center));

          indices.forEach((index) => void loadFrame(index));
          pruneFrames(center);
        };

        const setFrame = (frame: number) => {
          requestedFrame = Math.round(gsap.utils.clamp(0, FRAME_COUNT - 1, frame));
          requestFrameWindow(requestedFrame);
          drawFrame(requestedFrame);
        };

        const updateProgress = (progress: number) => {
          const isComplete = progress >= ASSEMBLY_COMPLETE_PROGRESS;
          if (isComplete !== assemblyComplete) {
            assemblyComplete = isComplete;
            rootElement.dataset.assemblyComplete = String(isComplete);
          }
        };

        const waitForFinalImage = () => {
          if (finalImage.complete && finalImage.naturalWidth) {
            return finalImage.decode().catch(() => undefined);
          }

          return new Promise<void>((resolve) => {
            finalImage.addEventListener(
              "load",
              () => {
                finalImage.decode().catch(() => undefined).finally(resolve);
              },
              { once: true },
            );
            finalImage.addEventListener("error", () => resolve(), { once: true });
          });
        };

        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(rootElement);
        resizeCanvas();

        void Promise.all([
          loadFrame(0),
          loadFrame(FRAME_COUNT - 1),
          waitForFinalImage(),
        ]).then(() => {
          if (disposed) return;

          drawFrame(0);
          rootElement.dataset.enhanced = "true";
          rootElement.dataset.assemblyComplete = "false";

          const playhead = { frame: 0 };
          const renderPlayhead = () => setFrame(playhead.frame);

          timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "gmt-chuck-assembly",
              trigger: rootElement,
              start: "top top+=104",
              end: () => `+=${Math.round(window.innerHeight * 2.35)}`,
              pin: frameElement,
              scrub: 0.55,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: -10,
              onUpdate: (self) => updateProgress(self.progress),
            },
          });

          timeline
            .addLabel("assembledStart", 0)
            .to(playhead, { frame: 0, duration: 0.08, onUpdate: renderPlayhead })
            .to(playhead, {
              frame: FRAME_COUNT - 1,
              duration: 0.78,
              onUpdate: renderPlayhead,
            })
            .to(playhead, {
              frame: FRAME_COUNT - 1,
              duration: 0.14,
              onUpdate: renderPlayhead,
            })
            .addLabel("assembledEnd");

          ScrollTrigger.refresh();
        });

        return () => {
          disposed = true;
          timeline?.scrollTrigger?.kill();
          timeline?.kill();
          resizeObserver.disconnect();
          frames.forEach((image) => image.removeAttribute("src"));
          frames.clear();
          framePromises.clear();
          delete rootElement.dataset.enhanced;
          delete rootElement.dataset.assemblyComplete;
        };
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="product-study"
      ref={root}
      className="gmt-product-study gmt-chuck--sequence"
      aria-label="Three-jaw chuck assembly sequence"
    >
      <div ref={frame} className="gmt-product-study__frame">
        <canvas ref={canvas} className="gmt-chuck__canvas" aria-hidden="true" />
        <img
          ref={finalFrame}
          className="gmt-chuck__fallback"
          src={frameUrl(FRAME_COUNT - 1)}
          alt="Fully assembled metallic three-jaw lathe chuck"
          width={FRAME_WIDTH}
          height={FRAME_HEIGHT}
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
