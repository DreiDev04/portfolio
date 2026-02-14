"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="hover:bg-muted p-1 rounded-sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-7 w-7 dark:hidden" />
      <Moon className="hidden h-7 w-7 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
