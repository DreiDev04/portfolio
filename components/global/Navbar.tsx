"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import config from "@/lib/config";
import { ThemeToggle } from "../mode-toggle";

const navItems = [
  { name: "Project", href: "/project" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-stretch justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8 py-4 border-r border-border hover:bg-muted transition-colors"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tighter text-foreground">
            {config.name.first.toUpperCase()}
          </span>
        </Link>

        {/* NAV LINKS - DESKTOP */}
        <div className="hidden md:flex items-stretch flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-6 lg:px-8 border-r border-border text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
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
          <div className="flex items-center px-3 sm:px-4 border-l border-border">
            <ThemeToggle />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden items-center px-3 sm:px-4 border-l border-border hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="fixed top-14 left-0 right-0 md:hidden bg-background border-b border-border z-40">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 text-sm uppercase tracking-[0.2em] border-b border-border transition-colors ${
                    isActive
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
