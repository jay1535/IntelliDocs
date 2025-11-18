"use client";
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './_components/AppSidebar';
import { ConvexProvider, ConvexReactClient } from "convex/react";

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
        <SidebarProvider >
            <AppSidebar/>
            <div className="w-full">
                <SidebarTrigger className={'rounded-md mx-2 my-2'}/>
                <ConvexProvider client={convex}>
        {children}
        </ConvexProvider>
        </div>
        </SidebarProvider>
    </NextThemesProvider>
    
  )
}

export default Provider
