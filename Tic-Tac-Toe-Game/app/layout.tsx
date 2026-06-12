import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ErrorListener from "../components/error-listener";
import ThemeToggle from "../components/themeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic-Tac-Toe — Unbeatable Minimax AI",
  description:
    "Play Tic-Tac-Toe against an unbeatable minimax AI (or a friend). Built with Next.js, React and TypeScript.",
};

/** Root layout: theme provider, global error listeners, theme toggle, toaster. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorListener />
          <ThemeToggle />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
