import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const bricolage = localFont({
  variable: "--font-bricolage",
  display: "swap",
  src: [
    { path: "../public/fonts/BricolageGrotesque-Regular.ttf", weight: "400" },
    { path: "../public/fonts/BricolageGrotesque-Bold.ttf", weight: "700" },
  ],
});

const instrument = localFont({
  variable: "--font-instrument",
  display: "swap",
  src: [
    { path: "../public/fonts/InstrumentSans-Regular.ttf", weight: "400" },
    { path: "../public/fonts/InstrumentSans-Bold.ttf", weight: "700" },
  ],
});

const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "../public/fonts/IBMPlexMono-Regular.ttf", weight: "400" },
    { path: "../public/fonts/IBMPlexMono-Bold.ttf", weight: "700" },
  ],
});

export const viewport: Viewport = {
  themeColor: "#f3f6f8",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Ghanshyam Machine Tools | Vadodara";
  const description = "Machine tools and industrial equipment retailer in Vadodara, Gujarat.";

  return {
    metadataBase,
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body>
        <a className="gmt-skip-link" href="#main">Skip to Content</a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
