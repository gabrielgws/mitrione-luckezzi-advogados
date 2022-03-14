/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/lhu': { page: '/lhu' }
    }
  },
}
