import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SoftMultiverse — One Universe. Infinite Software.", description: "Discover digital tools for security, privacy, productivity and more." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
