import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import LeftSideBar from "@/components/layout/LeftSideBar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ecommerce MILITARIK_ Auth",
  description: "ARMADA VOJENSKÁ ZABEZPEČENI PŘEŽITÍ OUTDOOROVÉ OBLEČENÍ"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={inter.className}
        >
          <LeftSideBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
