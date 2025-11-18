import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './_components/AppSidebar';

function Provider({ children, ...props }) {
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
        {children}
        </div>
        </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider
