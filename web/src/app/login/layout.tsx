import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Cloud - Home",
  description: "My Cloud Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full h-full">{children}</main>;
}
