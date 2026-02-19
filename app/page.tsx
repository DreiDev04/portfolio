import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProjectPreview } from "@/components/ProjectPreview";
import { AboutPreview } from "@/components/AboutPreview";
import { ContactPreview } from "@/components/ContactPreview";
import config from "@/lib/config";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    type: "website",
    url: config.url,
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <ProjectPreview />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
}
