"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6" />; // smaller placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="
        p-1.5                      /* smaller padding */
        w-8 h-8                    /* overall small button */
        flex items-center justify-center
        rounded-full                 /* compact round shape */
        border
        transition-colors duration-200
        hover:bg-accent
        cursor-pointer
      "
    >
      {theme === "light" ? (
        <Sun className="w-4 h-4 text-red-600" />      /* smaller icon */
      ) : (
        <Moon className="w-4 h-4 text-purple-400" />
      )}
    </button>
  );
}
