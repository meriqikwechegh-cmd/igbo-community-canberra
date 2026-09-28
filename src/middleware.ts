import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Create the internationalization middleware
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ig'],
  // Used when no locale matches
  defaultLocale: 'en'
});

export default function middleware(req: NextRequest) {
  // We can add auth checks or rate limiting here later
  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ig)/:path*']
};
