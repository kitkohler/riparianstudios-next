import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Riparian Studios — Video & Brand Production",
  description: "Riparian Studios makes brand films, campaign videos, and documentary work for health systems, land trusts, fire coalitions, and community organizations. Based in Nevada City, California.",
  openGraph: {
    title: "Riparian Studios — Video & Brand Production",
    description: "Nevada City talent. National-caliber work.",
    siteName: "Riparian Studios",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
