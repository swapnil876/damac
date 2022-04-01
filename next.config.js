module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://damac.techsperia.in/',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  trailingSlash: true,
}