"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import config from "@/lib/config";

export function Work() {
  return (
    <section id="work" className="text-foreground">
      {/* SECTION HEADER */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: SECTION NUMBER */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Section
            </span>
            <span className="text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              01
            </span>
          </div>

          {/* RIGHT: HEADLINE + LINK */}
          <div className="lg:col-span-10 p-8 lg:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                Selected Projects
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground">
                Work
                <span className="text-muted-foreground/40 ml-4">Archive</span>
              </h2>
            </div>

            <Link
              href="/work"
              className="group flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium border-b border-foreground pb-2 hover:border-primary hover:text-primary transition-all"
            >
              View All
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* PROJECT LIST */}
      {config.projects.map((project, index) => (
        <Link
          key={project.id}
          href={project.link}
          className="group block border-b border-border hover:bg-background transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* INDEX */}
            <div className="hidden lg:flex lg:col-span-1 border-r border-border p-6 items-center justify-center">
              <span className="text-[10px] font-mono text-muted-foreground/60">
                0{index + 1}
              </span>
            </div>

            {/* IMAGE */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border">
              <div className="aspect-16/10 lg:aspect-4/3 relative overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>
            </div>

            {/* INFO */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 flex items-center gap-3">
                {project.title}
                <ArrowUpRight className="w-6 h-6 text-muted-foreground/40 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* YEAR / META */}
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                Year
              </span>
              <span className="text-xl font-bold text-foreground">{project.year}</span>
            </div>
          </div>
        </Link>
      ))}

      {/* FOOTER CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-1 border-r border-border" />
        <div className="lg:col-span-11 p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="text-lg text-muted-foreground max-w-md">
            Interested in working together? I&apos;m always open to discussing new projects and creative ideas.
          </p>
          <Link
            href="#contact"
            className="group flex items-center justify-between px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium mr-6">
              Start a Project
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
