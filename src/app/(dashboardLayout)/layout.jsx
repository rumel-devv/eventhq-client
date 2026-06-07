"use client";

import DashboardSideBar from "@/components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#080c16] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <DashboardSideBar />

      {/* Main Content */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-10 overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;