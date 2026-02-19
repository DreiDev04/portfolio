"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import config from "@/lib/config";

export function ProjectPreview() {
  return (
    <section id="project" className="text-foreground">
      {/* SECTION HEADER */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* LEFT: SECTION NUMBER */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-border p-4 sm:p-6 md:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Section
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-foreground">
              01
            </span>
          </div>

          {/* RIGHT: HEADLINE + LINK */}
          <div className="md:col-span-10 p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2 sm:mb-4">
                Selected Projects
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground">
                Project
                <span className="text-muted-foreground/40 ml-2 sm:ml-4">Archive</span>
              </h2>
            </div>

            <Link
              href="/project"
              className="group flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium border-b border-foreground pb-2 hover:border-primary hover:text-primary transition-all whitespace-nowrap"
            >
              View All
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* PROJECT LIST - Show first 4 pinned projects */}
      {config.projects.slice(0, 4).map((project, index) => (
        <Link
          key={project.id}
          href={project.link}
          className="group block border-b border-border hover:bg-muted transition-colors"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            {/* INDEX */}
            <div className="hidden md:hidden lg:flex lg:col-span-1 border-r border-border p-6 items-center justify-center">
              <span className="text-[10px] font-mono text-muted-foreground/60">
                0{index + 1}
              </span>
            </div>

            {/* IMAGE */}
            <div className="md:col-span-2 lg:col-span-4 border-b md:border-b md:border-r lg:border-b-0 lg:border-r border-border">
              <div className="aspect-video md:aspect-4/3 lg:aspect-4/3 relative overflow-hidden bg-secondary">
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
            <div className="md:col-span-2 lg:col-span-5 border-b md:border-b-0 lg:border-b-0 md:border-r lg:border-r border-border p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2 md:mb-3">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight text-foreground mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                {project.title}
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground/40 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* YEAR / META */}
            <div className="md:col-span-2 lg:col-span-2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center border-b md:border-b-0 border-border md:border-border">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1 md:mb-2">
                Year
              </span>
              <span className="text-lg md:text-xl font-bold text-foreground">{project.year}</span>
            </div>
          </div>
        </Link>
      ))}

      {/* FOOTER CTA */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="hidden md:block md:col-span-2 lg:col-span-1 border-r border-border" />
        <div className="md:col-span-10 lg:col-span-11 p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          <p className="text-base sm:text-lg text-muted-foreground max-w-md">
            Interested in working together? I&apos;m always open to discussing new projects and creative ideas.
          </p>
          <Link
            href="/contact"
            className="group flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-foreground text-background hover:bg-primary transition-colors whitespace-nowrap"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mr-3 sm:mr-6">
              Start a Project
            </span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
