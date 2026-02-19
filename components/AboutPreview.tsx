"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import config from "@/lib/config";

export function AboutPreview() {
  return (
    <section id="about" className="bg-background text-foreground">
      {/* TOP GRID - HERO STATEMENT */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: SECTION NUMBER */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Section
            </span>
            <span className="text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              02
            </span>
          </div>

          {/* RIGHT: BIG HEADLINE */}
          <div className="lg:col-span-10 p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground">
              A Developer
              <br />
              <span className="text-muted-foreground/40">Who Designs</span>
            </h2>
          </div>
        </div>
      </div>

      {/* MIDDLE GRID - BIO + STATS */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: LABEL */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              About
            </span>
          </div>

          {/* CENTER: BIO TEXT */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-border p-8 lg:p-16">
            <div className="max-w-lg">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground mb-8">
                I&apos;m <span className="font-semibold">{config.name.full}</span>—a software 
                developer crafting digital experiences with precision and intent.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Based in Tarlac, Philippines. I believe in the intersection of clean code 
                and thoughtful design. Every pixel, every function serves a purpose.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My approach is methodical yet creative—balancing technical excellence 
                with aesthetic sensibility to build products that feel inevitable.
              </p>
            </div>
          </div>

          {/* RIGHT: STATS */}
          <div className="lg:col-span-4 p-8 lg:p-16">
            <div className="space-y-12">
              {config.stats.map((stat, index) => (
                <div key={index} className="group">
                  <span className="block text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-2">
                    {stat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID - SERVICES + STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT: LABEL */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Services
          </span>
        </div>

        {/* CENTER: SERVICES LIST */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-border">
          {config.services.map((service, index) => (
            <div
              key={service}
              className="flex items-center justify-between p-6 lg:px-16 lg:py-6 border-b border-border last:border-b-0 group hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-muted-foreground/60">
                  0{index + 1}
                </span>
                <span className="text-lg md:text-xl font-medium text-foreground">
                  {service}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* RIGHT: CTA + STATUS */}
        <div className="lg:col-span-4 p-8 lg:p-16 flex flex-col justify-between min-h-[300px]">
          {/* STATUS */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Status
            </span>
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-sm font-medium text-foreground">
                {config.available ? "Available for Projects" : "Currently Engaged"}
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-between w-full py-4 border-t border-b border-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium">
              Start a Project
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
