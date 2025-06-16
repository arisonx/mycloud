import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Cloud - Dashboard",
  description: "My Cloud Home Page",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full">
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </main>
  );
}
