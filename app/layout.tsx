import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = localFont({
  src: [
    { path: '../public/OpenSans-VariableFont_wdth_wght.ttf', style: 'normal' },
    { path: '../public/OpenSans-Italic-VariableFont_wdth_wght.ttf', style: 'italic' },
  ],
  variable: '--font-open-sans',
  display: 'swap',
});

const robotoSlab = localFont({
  src: '../public/RobotoSlab-VariableFont_wght.ttf',
  variable: '--font-roboto-slab',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
});

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
    <html lang="en" className={`${openSans.variable} ${robotoSlab.variable} ${dmMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
