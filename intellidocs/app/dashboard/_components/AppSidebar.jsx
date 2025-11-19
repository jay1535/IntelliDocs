"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar, // ⬅ add this
} from "@/components/ui/sidebar";

import { SignedIn, UserButton } from "@clerk/nextjs";
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
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>

      {/* Footer only when logged in */}
      <SidebarFooter>
        <SignedIn>
          <div
            className="
              flex items-center p-1
              transition-all duration-300
              group-data-[collapsible=icon]:w-8
              group-data-[collapsible=icon]:h-8
              group-data-[collapsible=icon]:p-0
            "
          >
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                  userButtonOuterIdentifier: `
                    transition-all duration-300
                    group-data-[collapsible=icon]:hidden
                  `,
                },
              }}
            />
          </div>
        </SignedIn>
      </SidebarFooter>

    </Sidebar>
  );
}
