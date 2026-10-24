import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-[#f1f5eb] text-[#181d17] overflow-hidden" dir="rtl">
      {/* 1. Sidebar (Fixed on screen, no scroll) */}
      <DashboardSidebar />

      {/* 2. Main Content Area (Header fixed at top + scrollable body) */}
      <div className="flex flex-col flex-1 min-w-0 h-screen overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
