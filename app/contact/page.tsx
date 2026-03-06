import type { Metadata } from "next";
import config from "@/lib/config";
import { ContactContent } from "@/components/ContactContent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact — John Andrei Tacujan",
    description: "Get in touch with me. I'm available for projects, collaborations, and freelance opportunities.",
    openGraph: {
      title: "Contact Me",
      description: "Let's work together on your next project",
      type: "website",
      url: `${config.url}/contact`,
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
