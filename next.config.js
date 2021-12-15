module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://mydevfactory.com',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}