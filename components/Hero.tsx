"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import config from "@/lib/config";

const MEMORY_ITEMS = [
  { id: 1, rotation: -5, caption: "Late night thesis grind ☕️", color: "bg-zinc-800" },
  { id: 2, rotation: 3, caption: "Winning the Hackathon 🏆", color: "bg-blue-800" },
  { id: 3, rotation: -8, caption: "ChainAid Deployment Day 🚀", color: "bg-purple-900" },
  { id: 4, rotation: 6, caption: "My view in Tarlac ⛰️", color: "bg-emerald-800" },
];

const HEADLINE_STYLES =
  "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter uppercase leading-[0.85]";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const renderInteractiveText = (text: string, startIndex: number) => {
    const words = text.split(" ");
    let globalCharCount = startIndex;

    return words.map((word, wordIndex) => {
      const chunks = word.match(/.{1,2}/g) || [];

      return (
        <span key={wordIndex} className="inline-flex">
          {chunks.map((chunk, i) => {
            const itemIndex = globalCharCount % MEMORY_ITEMS.length;
            globalCharCount++;

            return (
              <span
                key={i}
                className="inline-block select-none transition-colors duration-300 sm:hover:text-muted-foreground/50 sm:cursor-crosshair"
                onMouseEnter={() => setActiveIndex(itemIndex)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {chunk}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block whitespace-pre text-foreground cursor-default">
              {" "}
            </span>
          )}
        </span>
      );
    });
  };

  return (
    <section className="min-h-fit lg:min-h-dvh bg-background pt-24 sm:pt-32 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col relative overflow-hidden justify-start lg:justify-between items-center lg:items-stretch gap-12 lg:gap-0">
      {/* Header */}
      <div className="z-10 flex flex-col items-center lg:items-start select-none pointer-events-none relative w-full">
        <h1 className={`${HEADLINE_STYLES} text-foreground z-30 mix-blend-difference`}>
          SOFTWARE
        </h1>
        <h1 className={`${HEADLINE_STYLES} text-muted-foreground lg:text-muted-foreground/50 ml-0 lg:ml-16 xl:ml-24 -mt-2 lg:-mt-4 xl:-mt-6 z-10`}>
          DEVELOPER
        </h1>
      </div>

      {/* Portrait */}
      <div className="relative w-fit z-10 pointer-events-none mx-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-12 xl:left-24">
        <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_70%)] blur-2xl scale-110" />
        </div>
        <div className="relative w-64 sm:w-80 md:w-96 lg:w-100 xl:w-112.5 aspect-square">
          <Image
            src="/draw_me_1x1_no_bg.png"
            alt="Portrait"
            fill
            className="object-contain transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Bridge Text */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-12 xl:right-32 items-center gap-4 z-10">
        <div className="hidden xl:block w-24 h-px bg-border" />
        <div className="flex flex-col items-end text-right">
          <span className="font-handwriting text-xl xl:text-2xl text-muted-foreground/60 -rotate-2">
            ( hover to see my journey )
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
            Based in Tarlac, PH
          </span>
        </div>
      </div>

      {/* Polaroid Popup */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-12 xl:right-32 z-20 items-center justify-center pointer-events-none">
        <AnimatePresence mode="popLayout">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 10 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                rotate: MEMORY_ITEMS[activeIndex].rotation,
              }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative p-3 bg-white dark:bg-zinc-200 shadow-2xl transform-gpu border border-white/40 w-72 xl:w-80"
            >
              <div
                className={`w-full aspect-4/3 ${MEMORY_ITEMS[activeIndex].color} relative overflow-hidden grayscale-20 contrast-125`}
              >
                <div className="absolute inset-0 bg-black/10 opacity-20 pointer-events-none" />
              </div>
              <div className="pt-4 pb-1 px-1">
                <p className="font-handwriting text-zinc-800 text-xl xl:text-2xl text-center transform -rotate-1 opacity-90">
                  {MEMORY_ITEMS[activeIndex].caption}
                </p>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border border-white/40 rotate-1 shadow-sm opacity-60" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Name */}
      <div className="flex items-end justify-center lg:justify-end mt-auto lg:mt-0 relative z-20">
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <h2 className={`${HEADLINE_STYLES} text-foreground`}>
            <span className="block lg:hidden">{config.name.first}</span>
            <span className="hidden lg:block">
              {renderInteractiveText(config.name.first, 0)}
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-widest text-primary uppercase mt-2 lg:-mt-2 mr-0 lg:mr-1">
            {config.name.last}
          </h3>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-12 left-12 max-w-xs hidden lg:flex flex-col gap-4">
        <ArrowDown className="w-6 h-6 animate-bounce text-foreground/80" strokeWidth={1.5} />
        <p className="text-sm font-medium text-muted-foreground leading-relaxed uppercase tracking-wide">
          Building polished digital experiences
          <br />
          with precision and care.
        </p>
      </div>

      {/* Mobile Location Badge */}
      <div className="lg:hidden text-center pb-8">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Based in Tarlac, PH
        </span>
      </div>
    </section>
  );
}
