import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ro', 'fr'],
  defaultLocale: 'en'
});

export const config = {
  // Paths that should be internationalized.
  matcher: [
    '/', '/(en|ro|fr)/:path*',
  ]
};
