import { ReactNode } from "react";
import config from "@/lib/config";

export function JsonLd(): ReactNode {
  const personSchema = {
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name.full,
    url: config.url,
    logo: `${config.url}/icon/favicon.ico`,
    description: config.description,
    sameAs: config.socials.map((social) => social.href),
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: config.email,
      telephone: config.phone,
    },
  };

  const projectSchemas = config.projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: `${config.url}${project.image}`,
    url: project.link !== "#" ? project.link : config.url,
    datePublished: `${project.year}-01-01`,
    creator: {
      "@type": "Person",
      name: config.name.full,
    },
    keywords: project.category,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {projectSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
