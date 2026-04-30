import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import CursorTrail from "@/components/CursorTrail";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });

export const metadata: Metadata = {
  title: "Portfolio | Exceptional User Experiences",
  description: "Portfolio of a Senior Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${epilogue.variable} font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container antialiased relative`}
      >
        <ThemeToggle />
        <CursorTrail />
        <Preloader />
        <SmoothScroll>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
