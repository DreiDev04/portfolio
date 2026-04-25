import { Download } from "lucide-react";

export function ResumeDownload() {
  return (
    <a
      href="/resume.pdf"
      download="John-Andrei-Tacujan-Resume.pdf"
      className="group inline-flex items-center gap-6 px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors"
    >
      <span className="text-sm uppercase tracking-[0.2em] font-medium">
        Download Resume
      </span>
      <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );
}
