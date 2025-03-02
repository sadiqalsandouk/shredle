import { ReactNode } from "react"

interface FooterPagesLayoutProps {
  title: string
  children: ReactNode
}

export default function FooterPagesLayout({
  title,
  children,
}: FooterPagesLayoutProps) {
  return (
    <div className="text-orange-800 max-w-2xl mx-auto container mx-auto py-8 px-10">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div>{children}</div>
    </div>
  )
}
