import localFont from "next/font/local"
import "./globals.css"
import GameHeader from "./components/GameHeader"
import Footer from "./components/Footer"
import ClientProvider from "./components/ClientProvider"

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ClientProvider>
          <GameHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  )
}
