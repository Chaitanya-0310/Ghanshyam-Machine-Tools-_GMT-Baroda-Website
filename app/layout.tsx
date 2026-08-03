import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const workSans = localFont({
  variable: "--font-work-sans",
  display: "swap",
  src: [
    { path: "../public/fonts/WorkSans-Regular.ttf", weight: "400" },
    { path: "../public/fonts/WorkSans-Bold.ttf", weight: "700" },
  ],
});

const bigShoulders = localFont({
  variable: "--font-big-shoulders",
  display: "swap",
  src: [
    { path: "../public/fonts/BigShoulders-Regular.ttf", weight: "400" },
    { path: "../public/fonts/BigShoulders-Bold.ttf", weight: "700" },
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
  const title = "Machine Tools in Vadodara | Ghanshyam Machine Tools";
  const description = "Find machine tools, tooling, workholding and industrial equipment with practical sourcing guidance in Vadodara, Gujarat. Start your GMT enquiry today.";

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
    <html lang="en" className={`${bigShoulders.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body>
        <a className="gmt-skip-link" href="#main">Skip to Content</a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
