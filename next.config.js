module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://157.245.100.30',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}