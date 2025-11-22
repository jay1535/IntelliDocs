"use client";

import React from "react";
import dynamic from "next/dynamic";
import AppHeader from "./_components/AppHeader";
import HideOnScrollHeader from "./_components/OnScroll";

// FIXED: Load the named export properly
const AppSidebar = dynamic(
  () =>
    import("./_components/AppSidebar").then((mod) => mod.AppSidebar),
  {
    ssr: false,
  }
);

export default function DashboardLayout({ children }) {
  return (
    <div className="relative w-full h-full">

      {/* HEADER */}
      <HideOnScrollHeader>
        <AppHeader />
      </HideOnScrollHeader>

      {/* CLIENT-ONLY SIDEBAR */}
      <AppSidebar />

      {/* CONTENT */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}
