"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import config from "@/lib/config";

export function ContactPreview() {
  return (
    <section id="contact" className="bg-muted text-foreground">
      {/* HEADER */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* SECTION NUMBER */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Section
            </span>
            <span className="text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              03
            </span>
          </div>

          {/* HEADLINE */}
          <div className="lg:col-span-10 p-8 lg:p-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground">
              Let&apos;s Work
              <br />
              <span className="text-muted-foreground/40">Together</span>
            </h2>
          </div>
        </div>
      </div>

      {/* EMAIL */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Email
            </span>
          </div>
          <div className="lg:col-span-10 p-8 lg:p-16">
            <a
              href={`mailto:${config.email}`}
              className="group inline-flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors"
            >
              {config.email}
              <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-muted-foreground/40 group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Connect
          </span>
        </div>
        <div className="lg:col-span-10 p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* SOCIALS */}
          <div className="flex flex-wrap gap-6 lg:gap-8">
            {config.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>

          {/* STATUS + CTA */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {config.available ? "Available" : "Busy"}
              </span>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium text-foreground hover:text-primary transition-colors"
            >
              Full Contact
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
