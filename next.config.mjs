import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure server dependencies like formatjs and next-intl are properly handled
  // across Webpack dev chunking and production builds
  serverExternalPackages: ['@formatjs/fast-memoize', '@formatjs/intl-localematcher'],
};

export default withNextIntl(nextConfig);
