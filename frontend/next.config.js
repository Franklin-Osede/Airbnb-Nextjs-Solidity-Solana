/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER || 'default_value',
  },
  images: {
    domains: [
      'a0.muscache.com'
    ],
  },
}

module.exports = nextConfig
