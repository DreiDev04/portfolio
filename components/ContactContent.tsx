"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import config from "@/lib/config";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, defaultViewport } from "@/components/motion";

export function ContactContent() {
  return (
    <main className="min-h-screen pt-14 bg-muted text-foreground">
      {/* HERO HEADER */}
      <motion.div 
        className="border-b border-border"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT: BACK LINK */}
          <motion.div 
            className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8"
            variants={fadeInLeft}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Back
            </Link>
          </motion.div>

          {/* RIGHT: BIG HEADLINE */}
          <motion.div 
            className="lg:col-span-10 p-8 lg:p-16"
            variants={fadeInUp}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-6">
              Contact
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter uppercase leading-[0.85]">
              Let&apos;s
              <br />
              <span className="text-muted-foreground/40">Talk</span>
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* EMAIL - THE STAR */}
      <motion.div 
        className="border-b border-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>

      {/* CREDITS SECTION */}
      <motion.div 
        className="border-b border-border"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Info
            </span>
          </div>
          <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* ROLE */}
            <motion.div 
              className="p-8 lg:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.1 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                Role
              </span>
              <span className="text-xl lg:text-2xl font-bold text-foreground">
                {config.role}
              </span>
            </motion.div>

            {/* LOCATION */}
            <motion.div 
              className="p-8 lg:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                Based In
              </span>
              <span className="text-xl lg:text-2xl font-bold text-foreground">
                {config.location}
              </span>
            </motion.div>

            {/* STATUS */}
            <motion.div 
              className="p-8 lg:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.3 }}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SOCIALS */}
      <motion.div 
        className="border-b border-border"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Socials
            </span>
          </div>
          <div className="lg:col-span-10">
            {config.socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 lg:px-16 lg:py-8 border-b border-border last:border-b-0 hover:bg-background transition-colors"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={defaultViewport}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {social.name}
                </span>
                <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-muted-foreground/40 group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* END CREDITS */}
      <motion.div 
        className="bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Credits
            </span>
          </div>
          <div className="lg:col-span-10 p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                  Designed & Built By
                </span>
                <span className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
                  {config.name.first}
                </span>
              </motion.div>
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={defaultViewport}
                transition={{ delay: 0.3 }}
              >
                <span className="text-7xl lg:text-9xl font-bold tracking-tighter text-muted-foreground/20">
                  {new Date().getFullYear()}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FINAL FRAME */}
      <motion.div 
        className="border-t border-border py-8 px-8 lg:px-16 flex items-center justify-between"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ delay: 0.4 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} All Rights Reserved
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">
          fin.
        </span>
      </motion.div>
    </main>
  );
}
