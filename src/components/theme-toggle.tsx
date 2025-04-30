"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ClientOnly } from "./client-only";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="size-8">
      <ClientOnly>
        <button
          className="border-border hover:bg-background-hover flex size-8 items-center justify-center rounded-lg border transition-colors"
          aria-label="테마 변경"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" ? (
            <SunIcon className="size-4" />
          ) : (
            <MoonIcon className="size-4" />
          )}
        </button>
      </ClientOnly>
    </div>
  );
};
