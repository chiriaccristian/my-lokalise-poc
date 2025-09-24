import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ro'],
  defaultLocale: 'ro'
});

export const config = {
  // Skip all paths that should not be internationalized.
  matcher: [
    '/', '/(en|ro)/:path*',
  ]
};
