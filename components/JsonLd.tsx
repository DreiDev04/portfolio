import { ReactNode } from "react";
import config from "@/lib/config";

export function JsonLd(): ReactNode {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.name.full,
    url: config.url,
    image: `${config.url}${config.photos.me}`,
    jobTitle: config.role,
    description: config.description,
    email: config.email,
    telephone: config.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tarlac",
      addressCountry: "Philippines",
    },
    sameAs: config.socials.map((social) => social.href),
    worksFor: {
      "@type": "Organization",
      name: config.name.full,
      url: config.url,
    },
    knowsAbout: config.techStack,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
