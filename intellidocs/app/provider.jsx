"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Provider({ children, ...props }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <SidebarProvider>
        
        
        <SignedIn>
          <AppSidebar />
        </SignedIn>

        <div className="w-full">

          {/* Sidebar trigger also only when logged in */}
          <SignedIn>
            <SidebarTrigger className="rounded-md mx-2 my-2" />
          </SignedIn>

          {/* When signed out, center everything (optional) */}
          <SignedOut>
            <div className="p-4"></div>
          </SignedOut>

          {/* Convex Provider */}
          <ConvexProvider client={convex}>
            {children}
          </ConvexProvider>
        </div>

      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
