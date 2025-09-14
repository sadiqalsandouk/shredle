"use client"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters: Record<string, string>) => void
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem("consent_v2")
      if (!consent) setVisible(true)
    } catch {}
  }, [])

  const acceptAll = () => {
    try {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      })
      localStorage.setItem("consent_v2", "granted")
      setVisible(false)
    } catch {
      setVisible(false)
    }
  }

  const rejectAll = () => {
    try {
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      })
      localStorage.setItem("consent_v2", "denied")
      setVisible(false)
    } catch {
      setVisible(false)
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1000]">
      <div className="mx-auto max-w-3xl m-3 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-orange-100 dark:border-gray-700">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          We use cookies to analyze usage and show ads.
          You can change this later in your browser settings.
        </p>
        <div className="mt-3 flex gap-2 justify-end">
          <button
            onClick={rejectAll}
            className="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm"
          >
            Reject all
          </button>
          <button
            onClick={acceptAll}
            className="px-3 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}


