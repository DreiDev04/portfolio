"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import config from "@/lib/config";
import { ThemeToggle } from "../mode-toggle";

const navItems = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-4 sm:px-6 py-4 sm:py-6 md:py-8 md:px-12 bg-transparent transition-all">
      <Link
        href="/"
        className="text-lg sm:text-xl md:text-3xl font-bold tracking-tighter text-foreground transition-all hover:text-primary active:scale-95"
      >
        {config.name.first}
        <span className="text-primary">.</span>
      </Link>

      <div className="flex items-center">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group relative text-sm sm:text-xl md:text-3xl font-medium tracking-tighter text-muted-foreground transition-colors hover:text-foreground",
              "ml-2 sm:ml-2 md:ml-3",
            )}
          >
            <span className="relative z-10 decoration-primary decoration-2 underline-offset-4 group-hover:bg-primary">
              {item.name}
            </span>
            {index < navItems.length - 1 && (
              <span className="text-muted-foreground/40 ml-0.5">,</span>
            )}
          </Link>
        ))}
        <div className="ml-2 md:ml-3 flex">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
