import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fontsource-variable/overpass';
import '@fontsource/chakra-petch';
import '@fontsource/plaster';
import './styles/main.scss';

import Navigation from "./components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoffmann Web Studio",
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
          <main className="w-full relative t-0 scroll-smooth">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
