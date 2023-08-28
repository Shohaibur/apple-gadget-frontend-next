/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'advancedwebtech-useremployee-production.up.railway.app',
        port: '3000',    
      },
    ],
  nextConfig
}