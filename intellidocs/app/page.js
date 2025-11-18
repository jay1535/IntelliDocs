"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex  items-center gap-2 justify-center min-h-screen py-2 my-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="transition-colors border rounded-3xl duration-200 hover:bg-accent cursor-pointer"
      >
        {theme === "light" ? <Sun className="text-red-800" /> : <Moon className="text-purple-400" />}
      </Button>


      <Button >
        Upgrade To Unlock
      </Button>
    </div>
  );
}
