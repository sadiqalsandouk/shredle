/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfsfrrpamhuesgnxfkji.supabase.co",
      },
    ],
  },
}

export default nextConfig
