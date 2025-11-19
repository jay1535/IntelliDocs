import React from 'react'
import { ThemeToggleButton } from './ThemeToggleButton'
import Image from 'next/image'

function AppHeader() {
  return (
    <div className="stickyflex p-3 top-0 z-50 w-full border rounded-sm bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
       <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 group">
                    
                    {/* LOGO — click to toggle sidebar */}
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={30}
                      height={30}
                                   
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
                  <ThemeToggleButton/>
                </div>
              
      
    </div>
  )
}

export default AppHeader
