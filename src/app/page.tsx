import Home from "@/features/Home";
import { siteConfig } from "@/data/site";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: siteConfig.hotelName,
    description: siteConfig.tagline,
    url: "https://tianjanefingoe.co.mz",
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fingoe",
      addressRegion: "Tete",
      addressCountry: "MZ",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}