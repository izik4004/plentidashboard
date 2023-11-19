import '../../globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginNav from '../customer/_components/LoginNav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-family-raleway bg-white">
      <body className={`${inter.className}`} >
        <div className="container mx-auto px-4">
          <LoginNav />
          {children}
        </div>
      </body>
    </html>
  );
}