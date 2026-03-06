"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import config from "@/lib/config";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn } from "@/components/motion";

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="bg-background text-foreground min-h-dvh flex flex-col pt-14"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* MAIN HERO CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT: SECTION NUMBER */}
        <motion.div 
          className="hidden lg:flex lg:col-span-1 border-r border-border p-6 flex-col justify-between"
          variants={fadeInLeft}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            00
          </span>
          <div className="flex flex-col gap-2">
            <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground [writing-mode:vertical-lr] rotate-180">
              Scroll
            </span>
          </div>
        </motion.div>

        {/* CENTER: HEADLINE + IMAGE */}
        <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-border flex flex-col">
          {/* HEADLINE */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-16 flex-1 flex flex-col justify-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tighter uppercase leading-[0.85]"
              variants={fadeInUp}
            >
              {config.name.first}
              <br />
              <span className="text-muted-foreground/40">
                {config.name.last}
              </span>
            </motion.h1>
            <motion.div 
              className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-3 sm:gap-6"
              variants={fadeInUp}
            >
              <div className="w-8 sm:w-16 h-px bg-border" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground max-w-xs">
                {config.tagline}
              </p>
            </motion.div>
          </div>

          {/* IMAGE ROW */}
          <motion.div 
            className="border-t border-border"
            variants={scaleIn}
          >
            <div className="grid grid-cols-3">
              <div className="aspect-square relative dark:bg-gray-300 overflow-hidden">
                <Image
                  src="/me/draw_me_1x1_no_bg.png"
                  alt="Portrait"
                  fill
                  className="object-contain grayscale hover:grayscale-0  transition-all duration-500"
                  priority
                />
              </div>
              <div className="aspect-square bg-foreground flex items-center justify-center">
                <Link
                  href="https://github.com/dreidev04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter hover:text-primary transition-colors"
                >
                  DREIDEV04
                </Link>
              </div>
              <div className="aspect-square bg-muted flex items-center justify-center p-3 sm:p-6">
                <p className="text-[8px] sm:text-[10px] md:text-2xl uppercase tracking-[0.2em] text-muted-foreground text-center leading-relaxed">
                  {config.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: INFO PANEL */}
        <motion.div 
          className="lg:col-span-3 flex flex-col"
          variants={fadeInRight}
        >
          {/* INTRO */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center border-b border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2 sm:mb-4">
              Introduction
            </span>
            <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-foreground">
              {config.intro}
            </p>
          </div>

          {/* TECH STACK */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 border-b border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2 sm:mb-4">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {config.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-muted border border-border text-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="group flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 hover:bg-foreground hover:text-background transition-colors"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-background/60 block mb-1 sm:mb-2">
                Get in Touch
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">
                Start a Project
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM INFO BAR (driven by config) */}
      <motion.div 
        className="border-t border-border"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          <div className="p-3 sm:p-4 md:p-6 border-r border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Role
            </span>
            <p className="text-xs sm:text-sm font-medium mt-1">{config.role}</p>
          </div>
          <div className="p-3 sm:p-4 md:p-6 lg:border-r border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Location
            </span>
            <p className="text-xs sm:text-sm font-medium mt-1">
              {config.location}
            </p>
          </div>
          <div className="p-3 sm:p-4 md:p-6 border-r border-border border-t lg:border-t-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Status
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`w-2 h-2 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`}
              />
              <p className="text-xs sm:text-sm font-medium">
                {config.available ? "Available" : "Busy"}
              </p>
            </div>
          </div>
          <div className="p-3 sm:p-4 md:p-6 border-t lg:border-t-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Focus
            </span>
            <p className="text-xs sm:text-sm font-medium mt-1">
              {config.focus}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
