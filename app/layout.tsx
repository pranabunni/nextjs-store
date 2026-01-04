import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Container from "@/components/global/Container";
import NavBar from "@/components/navbar/Navbar";
import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store App",
  description: "Store App built with nextjs",
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
         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
     >
     <Toaster />
     <NavBar />
     <Container className='py-20'>
         {children}
     </Container>
     </body>
     </html>
 </ClerkProvider>
  );
}
