import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Daisy AI | Creative AI Collaborator",
  description: "Capture, organise, and elevate your ideas across work, life, and leisure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
