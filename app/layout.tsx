import localFont from "next/font/local"
import "./globals.css"
import GameHeader from "./components/GameHeader"
import Footer from "./components/Footer"
import ClientProvider from "./components/ClientProvider"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner"
import { PoppinsFont } from "./utils/font"
import NextThemeProvider from "./components/NextThemeProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-50 pattern-food pattern-orange-100 pattern-opacity-10 pattern-lg dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:pattern-gray-800 dark:pattern-opacity-5`}
      >
        <NextThemeProvider>
          <GameHeader />
          <ClientProvider>
            <main
              className={`flex-1 flex justify-center items-center p-2 sm:p-4 ${PoppinsFont.className}`}
            >
              {children}
              <Toaster
                theme="system"
                position="bottom-center"
                expand={false}
                richColors
              />
              <Analytics />
            </main>
          </ClientProvider>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  )
}
