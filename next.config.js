/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  i18n
};

// module.exports = {
//   pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
// }

module.exports = nextConfig;
