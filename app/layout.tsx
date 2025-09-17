import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Portfolio", 
  description: "You may call me Kevin",
  icons: {
    icon: '/favicon.png', // or '/favicon.png'
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Suspense fallback={null}>
            <CustomCursor />
            {children}
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
