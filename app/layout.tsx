import localFont from "next/font/local"
import "./globals.css"
import GameHeader from "./components/GameHeader"
import Footer from "./components/Footer"
import ClientProvider from "./components/ClientProvider"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner"
import { PoppinsFont } from "./utils/font"
import NextThemeProvider from "./components/NextThemeProvider"
import { Metadata } from "next"

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shredle.co.uk"),
  title: {
    default: "Shredle - A Wordle Inspired Calories Higher/Lower Game",
    template: "%s | Shredle",
  },
  description:
    "Compare foods and guess which has more calories in this addictive daily game. Challenge your nutrition knowledge and compete with friends!",
  keywords: [
    "food game",
    "calorie game",
    "nutrition game",
    "higher lower game",
    "daily game",
    "wordle-like",
  ],
  openGraph: {
    title: "Shredle - A Wordle Inspired Calories Higher/Lower Game",
    description:
      "Compare foods and guess which has more calories in this addictive daily game. Challenge your nutrition knowledge!",
    url: "https://www.shredle.co.uk",
    siteName: "Shredle",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shredle - Can you guess which food has more calories?",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shredle - Daily Calorie Guessing Game",
    description:
      "Challenge your nutrition knowledge with this addictive daily game!",
    images: ["/opengraph-image.png"],
    creator: "@sadiqdotdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  verification: {},
}

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
