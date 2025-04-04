"use client"

import React, { useEffect } from "react"

// Declare the adsbygoogle type for the global window object
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

type AdBannerProps = {
  dataAdSlot: string
  dataAdFormat: string
  dataFullWidthResponsive: boolean
}

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerProps) => {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.log(error instanceof Error ? error.message : String(error))
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4495583753910327"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  )
}

export default AdBanner
