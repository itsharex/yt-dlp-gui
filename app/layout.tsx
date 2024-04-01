import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import DisableContextMenu from '@/app/components/disable-context-menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yt-dlp GUI",
  description: "A cross platform GUI for yt-dlp built with Tauri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisableContextMenu />
        {children}
      </body>
    </html>
  );
}