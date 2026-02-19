import { Project } from "@/components/Project";

export const metadata = {
  title: "Project — John Andrei Tacujan",
  description: "Selected projects and project archive",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen pt-14">
      <Project />
    </main>
  );
}
