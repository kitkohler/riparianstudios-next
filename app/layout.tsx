import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riparianstudios.com'),
  title: {
    default: "Riparian Studios — Video Production | Nevada City, CA",
    template: "%s | Riparian Studios",
  },
  description: "Riparian Studios is a video production company in Nevada City, CA. We make brand films, campaign videos, and documentary work for nonprofits, health systems, and businesses across Northern California and the Sierra Foothills.",
  openGraph: {
    title: "Riparian Studios — Video Production | Nevada City, CA",
    description: "Brand film, campaign video, and documentary production based in Nevada City. Serving nonprofits, health systems, and businesses across Northern California.",
    siteName: "Riparian Studios",
    type: "website",
    url: "https://www.riparianstudios.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riparian Studios — Video Production | Nevada City, CA",
    description: "Brand film, campaign video, and documentary production based in Nevada City, CA.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* @ts-expect-error custom element */}
        <elevenlabs-convai agent-id="agent_2701ky1jefmsf65bqjmee383btr7" disable-banner="true"></elevenlabs-convai>
      </body>
    </html>
  );
}
