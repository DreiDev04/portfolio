import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"],
    },
    sitemap: "https://dreidevs-portfolio-v2.vercel.app/sitemap.xml",
    host: "https://dreidevs-portfolio-v2.vercel.app",
  };
}
