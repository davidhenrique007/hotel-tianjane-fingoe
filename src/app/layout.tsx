import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Tianjane Fingoe",
  description:
    "Hotel Tianjane Fingoe - Conforto, hospitalidade e alojamento em Fingoe, Distrito de Marávia, Província de Tete.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}