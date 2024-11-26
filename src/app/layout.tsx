import { AppProvider } from "@/components/app/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Message Simulator",
  description: "Imagine conversations that never happened",
  metadataBase: new URL("https://onblast.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen dark:dark`}>
        <AppProvider>
          {children}
          <Toaster richColors />
          <GoogleAnalytics gaId="G-NKJ667V116" />
        </AppProvider>
      </body>
    </html>
  );
}
