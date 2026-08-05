import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import ChatBot from "@/components/ChatBot/ChatBot";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import QueryProvider from "@/lib/providers/QueryProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
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
    <html lang="pt" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
          <ChatBot />
        </QueryProvider>
      </body>
    </html>
  );
}