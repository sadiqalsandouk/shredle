import { Metadata } from "next"
import { PasswordGate } from "../components/PasswordGate"

export const metadata: Metadata = {
  title: "Shredle | Admin dashboard",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PasswordGate>{children}</PasswordGate>
}
