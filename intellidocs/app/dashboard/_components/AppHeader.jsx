"use client";

import React from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { GithubIcon, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar"; // <-- ADD THIS

function AppHeader() {
  const { toggleSidebar } = useSidebar(); // <-- ACCESS SIDEBAR CONTROLLER

  const openGithub = () => {
    window.open("https://github.com/jay1535", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/jayant._.762/", "_blank");
  };

  return (
    <div className="stickyflex p-3 top-0 z-50 w-full border rounded-sm bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 group">
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleSidebar}
            className="
              sm:hidden                                 
              p-2 rounded-md border 
              bg-background/80 backdrop-blur 
              shadow active:scale-95 transition
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-md  cursor-pointer transition-transform duration-700 group-hover:scale-110 animate-pulse-fast"
          />

          {/* Title (HIDDEN on Mobile) */}
          <h1 className="font-bold text-2xl flex max-sm:hidden">
            Intelli<p className="text-orange-600">Docs</p>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-2 cursor-pointer max-sm:gap-1 max-sm:scale-90">
          <Button
            variant="outline"
            className="rounded-2xl cursor-pointer max-sm:p-2"
            onClick={openGithub}
          >
            <GithubIcon className="max-sm:w-4 max-sm:h-4" />
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl cursor-pointer max-sm:p-2"
            onClick={openInstagram}
          >
            <Instagram className="max-sm:w-4 max-sm:h-4" />
          </Button>

          <ThemeToggleButton />

          {/* ⭐ MATCH SIZE WITH OTHER BUTTONS */}
          <div
            className="
      rounded-full border p-1
      flex items-center justify-center
      cursor-pointer
      hover:bg-accent transition
      max-sm:p-1
    "
          >
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-5 h-5 max-sm:w-4 max-sm:h-4",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
