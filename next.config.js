/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    loader: 'imgix',
    path: "http://127.0.0.1:8000/api",
  },
  env: {
    appName: 'Eventox',
    appUrl: "http://127.0.0.1:8000/api",
    apiUrl: "http://127.0.0.1:8000/api",
  },
  // basePath:'/larect',
  // assentPrefix:'/larect',
}

module.exports = nextConfig
