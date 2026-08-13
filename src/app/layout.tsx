import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import ChatBot from "@/components/ChatBot/ChatBot";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import QueryProvider from "@/lib/providers/QueryProvider";

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
    <html lang="pt">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,100..900,0..100,0..1&family=Work+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
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