import { Hero } from "@/components/Hero";
import { ProjectPreview } from "@/components/ProjectPreview";
import { AboutPreview } from "@/components/AboutPreview";
import { ContactPreview } from "@/components/ContactPreview";

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
