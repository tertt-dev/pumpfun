/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pump.mypinata.cloud'],
  },
}

module.exports = nextConfig
