/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: 'ba2b9fa6ed5f62949720b9276310732a'
  },
  images: {
    domains: ['tmdb.org']
  }
}

module.exports = nextConfig
