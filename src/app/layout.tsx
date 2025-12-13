import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { NavBar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethanbyeon.vercel.app"),
  title: "Ethan Byeon",
  description:
    "Software Engineer from Los Angeles, building cool products that blend engineering, design, & culture.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Ethan Byeon",
    description:
      "Software engineer from Los Angeles, building cool products that blend engineering, design, and culture.",
    siteName: "Ethan Byeon",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "antialiased bg-background scroll-smooth",
          "mx-auto max-w-3xl min-h-screen",
          "px-8 font-sans",
          "[--content-max:70rem]",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
