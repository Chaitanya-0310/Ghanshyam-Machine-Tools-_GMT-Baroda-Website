"use client";

import dynamic from "next/dynamic";

const ChuckScene = dynamic(
  () => import("./ChuckScene").then((module) => module.ChuckScene),
  {
    ssr: false,
    loading: () => (
      <div className="gmt-chuck" aria-label="Visual of a lathe chuck">
        <img
          className="gmt-chuck__fallback gmt-chuck__fallback--loading"
          src="/gmt-hero-chuck.png"
          alt="Precision lathe chuck and machined steel tooling"
          width="1715"
          height="915"
        />
      </div>
    ),
  },
);

export function HeroProduct() {
  return <ChuckScene />;
}
