import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tianjanefingoe.co.mz"),
  title: {
    default: `${siteConfig.hotelName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.hotelName}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.hotelName} | ${siteConfig.tagline}`,
    description: siteConfig.tagline,
    url: "https://tianjanefingoe.co.mz",
    siteName: siteConfig.hotelName,
    locale: "pt_MZ",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.hotelName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.hotelName} | ${siteConfig.tagline}`,
    description: siteConfig.tagline,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}