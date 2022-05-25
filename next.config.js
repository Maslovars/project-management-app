/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en-US', 'ru-RU'],
    defaultLocale: 'en-US',
    localeDetection: false
  }
};

module.exports = nextConfig;
