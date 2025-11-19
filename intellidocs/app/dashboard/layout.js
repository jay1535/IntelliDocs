import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-full">
     <div>
       {children}
      </div>
    </div>
  );
}

