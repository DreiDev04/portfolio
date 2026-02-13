import { ArrowDown } from "lucide-react";
import config from "@/lib/config";
import Image from "next/image";

const HEADLINE_STYLES = "text-7xl md:text-9xl font-semibold tracking-tighter text-foreground uppercase leading-[0.8]";

export function Hero() {
  return (
    <section className="min-h-[85vh] bg-background pt-24 pb-8 px-6 md:px-12 flex flex-col">
      {/* Headline */}
      <h1 className={HEADLINE_STYLES}>
        Software
        <span className="block ml-2 md:ml-12">Developer</span>
      </h1>

      {/* Portrait */}
      <div className="relative -mt-6 md:-mt-16 md:ml-32 w-fit">
        <Image
          src="/draw_me_1x1_no_bg.png"
          alt={`Portrait of ${config.name.firstName}`}
          width={500}
          height={500}
          priority
          className="w-[280px] md:w-[500px] dark:invert hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Footer */}
      <div className="flex-1 flex items-end justify-between mt-4 md:-mt-12">
        {/* Info */}
        <div className="hidden md:flex flex-col gap-3 max-w-xs">
          <ArrowDown className="w-5 h-5 text-foreground animate-bounce" strokeWidth={1.5} />
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground leading-relaxed">
            {config.name.firstName} is a Software Developer based in PH, 
            specializing in building exceptional digital experiences.
          </p>
        </div>

        {/* Name */}
        <h2 className={`${HEADLINE_STYLES} text-6xl md:text-9xl text-right`}>
          {config.name.firstName}
          <br />
          {config.name.lastName}
        </h2>
      </div>
    </section>
  );
}
