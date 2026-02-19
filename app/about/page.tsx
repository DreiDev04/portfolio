"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import config from "@/lib/config";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-14 bg-background text-foreground">
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
              About
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter uppercase leading-[0.85]">
              {config.name.first}
              <br />
              <span className="text-muted-foreground/40">{config.name.last}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* PORTRAIT + INTRO */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: LABEL */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Portrait
            </span>
          </div>

          {/* CENTER: IMAGE */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border">
            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
              <Image
                src={config.photos.me}
                alt={config.name.full}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: INTRO */}
          <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground mb-8">
              {config.intro}
            </p>
            <div className="flex items-center gap-4">
              <span className={`w-2.5 h-2.5 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-sm font-medium text-muted-foreground">
                {config.available ? "Available for Projects" : "Currently Engaged"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BIO SECTION */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: LABEL */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Philosophy
            </span>
          </div>

          {/* CENTER: BIO */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-border p-8 lg:p-16">
            <div className="max-w-lg space-y-6">
              {config.philosophy.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-lg md:text-xl leading-relaxed text-foreground" : "text-base text-muted-foreground leading-relaxed"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT: STATS */}
          <div className="lg:col-span-4 p-8 lg:p-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-8">
              Numbers
            </span>
            <div className="space-y-10">
              {config.stats.map((stat, index) => (
                <div key={index}>
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

      {/* EXPERTISE / TECH STACK */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: LABEL */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Expertise
            </span>
          </div>

          {/* CENTER: TECH STACK */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border">
            <div className="p-8 lg:p-16 border-b border-border">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-3">
                {config.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium border border-border hover:bg-muted transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 lg:p-16">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                Currently Exploring
              </span>
              <div className="flex flex-wrap gap-3">
                {config.exploring.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium border border-dashed border-muted-foreground/30 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SERVICES */}
          <div className="lg:col-span-5">
            <div className="p-8 lg:p-16 border-b border-border">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                Services
              </span>
            </div>
            {config.services.map((service, index) => (
              <div
                key={service}
                className="flex items-center justify-between px-8 lg:px-16 py-6 border-b border-border last:border-b-0 group hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-muted-foreground/60">
                    0{index + 1}
                  </span>
                  <span className="text-lg font-medium text-foreground">
                    {service}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE / JOURNEY */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: LABEL */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Journey
            </span>
          </div>

          {/* RIGHT: TIMELINE */}
          <div className="lg:col-span-10">
            {config.journey.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-border last:border-b-0 hover:bg-muted transition-colors"
              >
                <div className="col-span-3 lg:col-span-2 p-6 lg:p-8 border-r border-border">
                  <span className="text-2xl lg:text-3xl font-bold tracking-tighter text-foreground">
                    {item.year}
                  </span>
                </div>
                <div className="col-span-9 lg:col-span-10 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <span className="text-lg font-medium text-foreground">{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICATES */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: LABEL */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Certificates
            </span>
          </div>

          {/* RIGHT: CERTIFICATE LIST */}
          <div className="lg:col-span-10">
            {config.certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-12 border-b border-border last:border-b-0 hover:bg-muted transition-colors group"
              >
                <div className="col-span-2 lg:col-span-1 p-6 lg:p-8 border-r border-border flex items-center justify-center">
                  <span className="text-[10px] font-mono text-muted-foreground/60">
                    0{index + 1}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-11 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                    <span className="text-lg font-medium text-foreground">{cert.title}</span>
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-muted-foreground">{cert.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FOOTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8" />
        <div className="lg:col-span-10 p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Let&apos;s Connect
            </span>
            <p className="text-xl md:text-2xl font-light text-foreground max-w-lg">
              Interested in working together? I&apos;m always open to discussing new projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center justify-between px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium mr-6">
              Get in Touch
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
