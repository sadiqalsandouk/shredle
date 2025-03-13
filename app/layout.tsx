import localFont from "next/font/local"
import "./globals.css"
import GameHeader from "./components/GameHeader"
import Footer from "./components/Footer"
import ClientProvider from "./components/ClientProvider"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner"

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-50 pattern-food pattern-orange-100 pattern-opacity-10 pattern-lg`}
      >
        <ClientProvider>
          <GameHeader />
          <main className="flex-1 flex justify-center items-center">
            {children}
            <Toaster
              theme="light"
              position="top-right"
              expand={false}
              richColors
            />
            <Analytics />
          </main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  )
}
