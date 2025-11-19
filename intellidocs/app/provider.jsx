"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AppSidebar } from "./dashboard/_components/AppSidebar";

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
      <div className="w-full">
          <ConvexProvider client={convex}>
            {children}
          </ConvexProvider>
        </div>

      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
