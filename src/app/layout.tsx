import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajay Singh Rajput | Software Engineer | Backend Developer",
  description: "Portfolio of Ajay Singh Rajput - Results-oriented Backend Developer with expertise in ReactJS, TypeScript, Next.js, PHP, Laravel, and modern web technologies.",
  keywords: ["Ajay Singh Rajput", "Software Engineer", "Backend Developer", "ReactJS", "TypeScript", "Next.js", "PHP", "Laravel", "Portfolio"],
  authors: [{ name: "Ajay Singh Rajput" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajay-singh-rajput.vercel.app",
    title: "Ajay Singh Rajput | Software Engineer",
    description: "Results-oriented Backend Developer with expertise in ReactJS, TypeScript, Next.js, PHP, Laravel, and modern web technologies.",
    siteName: "Ajay Singh Rajput Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Singh Rajput | Software Engineer",
    description: "Results-oriented Backend Developer with expertise in ReactJS, TypeScript, Next.js, PHP, Laravel, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

