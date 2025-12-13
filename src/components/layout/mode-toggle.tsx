"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";
  const nextMode = isDark ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative size-8 transition-colors rounded-full",
        isDark && "hover:bg-white/12!",
      )}
      onClick={() => setTheme(nextMode)}
      aria-label={`Switch to ${nextMode} mode`}
    >
      <Sun className="size-5 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
