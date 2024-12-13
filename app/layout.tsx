import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/chakra-petch';
import '@fontsource/plaster';

import Navigation from "./components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOFFMANN UX",
  description: "Design, Development, User Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Navigation />
          <main className="w-full relative t-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
