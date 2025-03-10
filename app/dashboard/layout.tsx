import { Metadata } from "next"
import { PasswordGate } from "../components/PasswordGate"

export const metadata: Metadata = {
  title: "Shredle | Admin dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PasswordGate>
      <div>{children}</div>
    </PasswordGate>
  )
}
