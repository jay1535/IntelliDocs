"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar, // ⬅ add this
} from "@/components/ui/sidebar";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { GalleryVerticalEnd, ShieldCheck, Upload } from "lucide-react";
import Image from "next/image";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar(); // ⬅ access sidebar controller

  return (
    <Sidebar collapsible="icon" className="group">
      <SidebarHeader>
        <div className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              {/* LOGO — click to toggle sidebar */}
              <Image
                src="/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                onClick={toggleSidebar}
                className="
                  rounded-md cursor-pointer
                  transition-transform duration-700
                  group-hover:scale-110
                  animate-pulse-fast
                "
              />

              {/* Title */}
              <h1
                className="
                  font-bold text-2xl
                  transition-all duration-1000
                  group-data-[collapsible=icon]:opacity-0
                  group-data-[collapsible=icon]:-translate-x-2.5
                  group-data-[collapsible=icon]:w-0
                  group-data-[collapsible=icon]:scale-95
                  overflow-hidden
                  whitespace-nowrap
                  flex
                "
              >
                Intelli<p className="text-orange-600">Docs</p>
              </h1>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* Upload PDF Button */}
          <div>
            <Button
              className="
    w-full flex items-center gap-2
    transition-all duration-300
    rounded-md
    group-data-[collapsible=icon]:rounded-full
    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:gap-0
  "
            >
              <Upload className="transition-all duration-300" />

              <span
                className="
      transition-all duration-300
      group-data-[collapsible=icon]:opacity-0
      group-data-[collapsible=icon]:w-0
      group-data-[collapsible=icon]:overflow-hidden
      group-data-[collapsible=icon]:m-0
      group-data-[collapsible=icon]:p-0
      whitespace-nowrap
    "
              >
                Upload PDF
              </span>
            </Button>
          </div>

          {/* WorkSpace */}
          <div
            className="
    flex items-center justify-center gap-2 p-2 mt-5 cursor-pointer 
    hover:bg-slate-200 dark:hover:bg-slate-800
    rounded-lg transition-all duration-300

    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:gap-0
    group-data-[collapsible=icon]:rounded-full
  "
          >
            <GalleryVerticalEnd
              className="
      transition-all duration-300
      text-slate-700 dark:text-slate-200
    "
            />

            <span
              className="
      transition-all duration-300
      whitespace-nowrap  
      text-slate-700 dark:text-slate-200

      group-data-[collapsible=icon]:opacity-0
      group-data-[collapsible=icon]:w-0
      group-data-[collapsible=icon]:overflow-hidden
      group-data-[collapsible=icon]:scale-90
      group-data-[collapsible=icon]:m-0
    "
            >
              WorkSpace
            </span>
          </div>

          {/* Upgrade */}
          <div  className="
    flex items-center justify-center gap-2 p-2 mt-5 cursor-pointer 
    hover:bg-slate-200 dark:hover:bg-slate-800
    rounded-lg transition-all duration-300

    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:gap-0
    group-data-[collapsible=icon]:rounded-full
  ">
    <ShieldCheck className="
      transition-all duration-300
      text-slate-700 dark:text-slate-200
    "/>
    <span
              className="
      transition-all duration-300
      whitespace-nowrap  
      text-slate-700 dark:text-slate-200

      group-data-[collapsible=icon]:opacity-0
      group-data-[collapsible=icon]:w-0
      group-data-[collapsible=icon]:overflow-hidden
      group-data-[collapsible=icon]:scale-90
      group-data-[collapsible=icon]:m-0
    "
            >Subscription</span>

          </div>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer only when logged in */}
      <SidebarFooter>

        {/* ProgressBar */}
      <div
  className="
    p-4 border-3 bg-gray-100 dark:bg-gray-950 rounded-lg
    hover:bg-slate-300
    dark:hover:bg-black
   
    transition-all duration-1200

   
    group-data-[collapsible=icon]:duration-0
    group-data-[collapsible=icon]:transition-none

    
    group-data-[collapsible=icon]:opacity-0
    group-data-[collapsible=icon]:h-0
    group-data-[collapsible=icon]:overflow-hidden
    group-data-[collapsible=icon]:p-0
    group-data-[collapsible=icon]:m-0
  "
>
 <h1 className=" font-bold mb-4 flex items-center justify-center">
    3/5 PDF Uploaded
  </h1>
  <Progress value={80} />
  
  <p className="text-sm text-gray-500 flex mt-2 items-center justify-center">Upgrade to upload more PDF</p>
 </div>



        <SignedIn>
          <div
            className="
    flex items-center justify-center gap-2 p-2 mt-5 cursor-pointer 
    hover:bg-slate-200 dark:hover:bg-slate-800
    rounded-lg transition-all duration-300

    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:gap-0
    group-data-[collapsible=icon]:rounded-full
  " >
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-12 h-12", // BIGGER avatar
                  userButtonOuterIdentifier: `
          transition-all duration-300
          group-data-[collapsible=icon]:hidden
        `,
                },
              }}
            />
            <span className="
      transition-all duration-300
      whitespace-nowrap  
      text-slate-700 dark:text-slate-200

      group-data-[collapsible=icon]:opacity-0
      group-data-[collapsible=icon]:w-0
      group-data-[collapsible=icon]:overflow-hidden
      group-data-[collapsible=icon]:scale-90
      group-data-[collapsible=icon]:m-0
    " >
 User Profile
            </span>
            
          </div>
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}
