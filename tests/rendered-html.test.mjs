import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished GMT homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ghanshyam Machine Tools \| Vadodara<\/title>/i);
  assert.match(html, /<main[^>]*id="main"[^>]*class="gmt-stage"/i);
  assert.match(html, /Loading Ghanshyam Machine Tools/);
  assert.match(html, /Start with the job\./);
  assert.match(html, /One requirement\./);
  assert.match(html, /Turn the job into a clearer buying brief\./);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("keeps content crawlable and motion accessible", async () => {
  const [page, layout, motion, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/MotionStage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<CategoryExplorer \/>/);
  assert.match(page, /<QuoteEnquiry \/>/);
  assert.match(page, /<GmtFooter \/>/);
  assert.match(layout, /BricolageGrotesque-Regular\.ttf/);
  assert.match(layout, /InstrumentSans-Regular\.ttf/);
  assert.match(layout, /IBMPlexMono-Regular\.ttf/);
  assert.match(motion, /prefers-reduced-motion:\s*no-preference/);
  assert.match(motion, /ScrollTrigger\.batch/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
});

test("server-renders product category content", async () => {
  const response = await render("/machine-tools/lathe-machines");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Lathe Machines in Vadodara \| Ghanshyam Machine Tools/i);
  assert.match(html, /Centre lathes/);
  assert.match(html, /Availability is confirmed against the enquiry\./);
});

test("keeps the chuck assembly clean, centred, and complete before release", async () => {
  const [page, hero, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/HeroProduct.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<\/section>\s*<HeroProduct \/>/);
  assert.match(hero, /ASSEMBLY_COMPLETE_PROGRESS\s*=\s*0\.86/);
  assert.match(hero, /frame:\s*FRAME_COUNT\s*-\s*1/);
  assert.match(hero, /duration:\s*0\.78/);
  assert.match(hero, /duration:\s*0\.14/);
  assert.match(hero, /window\.innerHeight\s*\*\s*2\.35/);
  assert.match(hero, /dataset\.assemblyComplete/);
  assert.doesNotMatch(hero, /PHASES|Assembly complete|gmt-assembly-rail/);
  assert.match(css, /\.gmt-product-study__frame/);
  assert.match(css, /object-fit:\s*contain/);
  assert.doesNotMatch(css, /\.gmt-assembly-rail|\.gmt-hero__calibration/);
  assert.match(css, /\[data-assembly-complete="true"\]\s+\.gmt-chuck__fallback/);
});
