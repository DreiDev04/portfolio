import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import config from "@/lib/config";

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
  return (
    <main className="min-h-screen pt-14 bg-muted text-foreground">
      {/* HERO HEADER */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: BACK LINK */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          {/* RIGHT: BIG HEADLINE */}
          <div className="lg:col-span-10 p-8 lg:p-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-6">
              Contact
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter uppercase leading-[0.85]">
              Let&apos;s
              <br />
              <span className="text-muted-foreground/40">Talk</span>
            </h1>
          </div>
        </div>
      </div>

      {/* EMAIL - THE STAR */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Email
            </span>
          </div>
          <div className="lg:col-span-10 p-8 lg:p-16 flex items-center">
            <a
              href={`mailto:${config.email}`}
              className="group inline-flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors"
            >
              {config.email}
              <ArrowUpRight className="w-8 h-8 lg:w-10 lg:h-10 text-muted-foreground/40 group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* CREDITS SECTION */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Info
            </span>
          </div>
          <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* ROLE */}
            <div className="p-8 lg:p-12 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                Role
              </span>
              <span className="text-xl lg:text-2xl font-bold text-foreground">
                {config.role}
              </span>
            </div>

            {/* LOCATION */}
            <div className="p-8 lg:p-12 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                Based In
              </span>
              <span className="text-xl lg:text-2xl font-bold text-foreground">
                {config.location}
              </span>
            </div>

            {/* STATUS */}
            <div className="p-8 lg:p-12 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                Status
              </span>
              <div className="flex items-center justify-center gap-3">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`}
                />
                <span className="text-xl lg:text-2xl font-bold text-foreground">
                  {config.available ? "Available" : "Engaged"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Socials
            </span>
          </div>
          <div className="lg:col-span-10">
            {config.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 lg:px-16 lg:py-8 border-b border-border last:border-b-0 hover:bg-background transition-colors"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {social.name}
                </span>
                <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-muted-foreground/40 group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* END CREDITS */}
      <div className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Credits
            </span>
          </div>
          <div className="lg:col-span-10 p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                  Designed & Built By
                </span>
                <span className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
                  {config.name.first}
                </span>
              </div>
              <div className="text-right">
                <span className="text-7xl lg:text-9xl font-bold tracking-tighter text-muted-foreground/20">
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL FRAME */}
      <div className="border-t border-border py-8 px-8 lg:px-16 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} All Rights Reserved
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">
          fin.
        </span>
      </div>
    </main>
  );
}
