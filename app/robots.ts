import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"],
    },
    sitemap: "https://johnandrei.dev/sitemap.xml", // Update with your domain
    host: "https://johnandrei.dev", // Update with your domain
  };
}
