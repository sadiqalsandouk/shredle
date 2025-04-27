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
    <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 md:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-orange-100 dark:border-gray-700">
          <h1 className="text-2xl sm:text-3xl font-bold py-6 px-6 text-orange-700 dark:text-orange-400">
            {title}
          </h1>
        </div>
        <div className="p-6 text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  )
}
