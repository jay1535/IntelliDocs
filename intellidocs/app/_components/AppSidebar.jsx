import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
       <div className="p-2">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
                 <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-md transition-transform duration-900 hover:rotate-360"
        /><h1 className="font-bold text-2xl transition-colors duration-200">
            IntelliDocs
        </h1>
            </div>
        </div>
       </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
