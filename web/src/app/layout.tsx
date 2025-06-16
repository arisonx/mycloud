import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Cloud - Home",
  description: "My Cloud Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="w-screen h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background w-screen h-screen`}
      >
        {/* <SidebarProvider>
        <AppSidebar /> */}
        <main className="w-full h-full">
          {/* <SidebarTrigger /> */}
          {children}
        </main>
        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}
