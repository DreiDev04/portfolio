import { Metadata } from "next";
import config from "@/lib/config";
import { AboutContent } from "@/components/AboutContent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About — John Andrei Tacujan",
    description: "Learn about my journey as a software developer, my expertise in web development, automation, and the philosophy behind my work.",
    openGraph: {
      title: "About Me",
      description: "Software developer with 3+ years of experience in web development and automation",
      type: "profile",
      url: `${config.url}/about`,
      images: [config.photos.me],
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
