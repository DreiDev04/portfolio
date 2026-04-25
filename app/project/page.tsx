import type { Metadata } from "next";
import { Project } from "@/components/Project";
import config from "@/lib/config";

export const metadata: Metadata = {
  title: "Projects — John Andrei Tacujan",
  description: "Explore my portfolio of web development projects, automation solutions, and creative innovations across AI/ML, Web3, and full-stack development.",
  openGraph: {
    title: "My Projects",
    description: "Full stack web development projects and solutions",
    type: "website",
    url: `${config.url}/project`,
    images: [
      {
        url: `${config.url}${config.ogImage}`,
        width: 1200,
        height: 630,
        alt: "John Andrei Tacujan - Projects",
      },
    ],
  },
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen pt-14">
      <Project />
    </main>
  );
}
