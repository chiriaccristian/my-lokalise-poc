import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Tell next-intl where your request config lives
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
