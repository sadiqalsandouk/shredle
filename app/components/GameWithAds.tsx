"use client"

import AdBanner from "./AdBanner"

export default function GameWithAds({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center items-start">
      {/* Left Ad Banner */}
      <div className="hidden lg:block sticky top-4 mr-4 h-screen max-h-[600px] w-[160px]">
        <AdBanner
          dataAdSlot="1234567890" // Left ad slot
          dataAdFormat="vertical"
          dataFullWidthResponsive={false}
        />
      </div>

      {/* Main Game Content */}
      <div className="flex-1 max-w-4xl">{children}</div>

      {/* Right Ad Banner */}
      <div className="hidden lg:block sticky top-4 ml-4 h-screen max-h-[600px] w-[160px]">
        <AdBanner
          dataAdSlot="0987654321" // Right ad slot
          dataAdFormat="vertical"
          dataFullWidthResponsive={false}
        />
      </div>
    </div>
  )
}
