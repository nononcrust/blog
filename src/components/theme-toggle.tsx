"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ClientOnly } from "./client-only";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <button
        className="border-border hover:bg-background-hover flex size-8 items-center justify-center rounded-lg border transition-colors"
        aria-label="테마 변경"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </button>
    </ClientOnly>
  );
};
