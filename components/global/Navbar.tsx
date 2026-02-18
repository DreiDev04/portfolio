"use client";

import Link from "next/link";
import config from "@/lib/config";
import { ThemeToggle } from "../mode-toggle";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-stretch justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 px-6 lg:px-8 py-4 border-r border-border hover:bg-muted transition-colors"
        >
          <span className="text-xl font-bold tracking-tighter text-foreground">
            {config.name.first.toUpperCase()}
          </span>
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Dev
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-stretch flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-8 border-r border-border text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-stretch">
          {/* STATUS INDICATOR */}
          <div className="hidden lg:flex items-center gap-2 px-6 border-l border-border">
            <span className={`w-2 h-2 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`} />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {config.available ? "Available" : "Busy"}
            </span>
          </div>

          {/* THEME TOGGLE */}
          <div className="flex items-center px-4 border-l border-border">
            <ThemeToggle />
          </div>

          {/* MOBILE MENU - simplified */}
          <div className="flex md:hidden items-center px-4 border-l border-border">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Menu
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
