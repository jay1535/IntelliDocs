"use client";

import React from 'react'
import { ThemeToggleButton } from './ThemeToggleButton'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { GithubIcon, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

function AppHeader() {

  const openGithub = () => {
    window.open("https://github.com/jay1535", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/jayant._.762/", "_blank");
  };

  return (
    <div className="stickyflex p-3 top-0 z-50 w-full border rounded-sm bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-4 group">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-md cursor-pointer transition-transform duration-700 group-hover:scale-110 animate-pulse-fast"
          />

          {/* Title */}
          <h1 className="font-bold text-2xl flex">
            Intelli<p className="text-orange-600">Docs</p>
          </h1>
        </div>

        <div className="flex gap-2 cursor-pointer">

          {/* GitHub Button */}
          <Button
            variant="outline"
            className="rounded-2xl cursor-pointer "
            onClick={openGithub}
          >
            <GithubIcon />
          </Button>

          {/* Instagram Button */}
          <Button
            variant="outline"
            className="rounded-2xl cursor-pointer "
            onClick={openInstagram}
          >
            <Instagram />
          </Button>

          <ThemeToggleButton />
          <UserButton />
        </div>

      </div>
    </div>
  );
}

export default AppHeader;
