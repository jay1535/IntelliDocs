"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SignInButton } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="group">
      <SidebarHeader>
        <div className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="rounded-md transition-transform duration-500 group-hover:scale-110"
              />

              <h1
                className="
                  font-bold text-2xl
                  transition-all duration-900
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

     <SidebarFooter>
      {/* Signed OUT */}
      <SignedOut>
        <div
          className="
            flex items-center justify-center bg-primary p-1.5 border rounded-lg text-white
            transition-all duration-300
            group-data-[collapsible=icon]:opacity-0
            group-data-[collapsible=icon]:w-0
            group-data-[collapsible=icon]:overflow-hidden
            group-data-[collapsible=icon]:pointer-events-none
          "
        >
          <SignInButton mode="modal">
            <button className="w-full text-center">Sign In</button>
          </SignInButton>
        </div>
      </SignedOut>

      {/* Signed IN */}
      <SignedIn>
        <div
          className="
            flex items-center 
            transition-all duration-300

            /* Hide full user button when collapsed */
            group-data-[collapsible=icon]:opacity-100   /* Keep icon visible */
            group-data-[collapsible=icon]:w-8
            group-data-[collapsible=icon]:h-8
            group-data-[collapsible=icon]:p-0
          "
        >
          {/* User Button (Clerk component) */}
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-8 h-8",    // maintain icon size
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
