import React from "react";
import AppHeader from "./_components/AppHeader";
import { AppSidebar } from "./_components/AppSidebar";
import HideOnScrollHeader from "./_components/OnScroll";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative w-full h-full">

      {/* HEADER stays visible, hides when scrolling down */}
      <HideOnScrollHeader>
        <AppHeader />
      </HideOnScrollHeader>

      {/* SIDEBAR stays under header */}
      <AppSidebar />

      {/* CONTENT with padding for header */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}
