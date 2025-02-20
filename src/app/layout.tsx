import type { Metadata } from "next"
import { Rubik, Roboto, Press_Start_2P } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { SiteFooter, SiteHeader } from "@/components/layout"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const title = Rubik({
  variable: "--font-title",
  subsets: ["latin"],
})

const body = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

const emphasize = Press_Start_2P({
  weight: ["400"],
  variable: "--font-emphasize",
  preload: true,
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "Yasar the Web Developer",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${title.variable} ${body.variable} ${emphasize.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
