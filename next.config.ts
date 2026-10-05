import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

/**
 * Next.js Configuration — Igbo Community Canberra (ICC)
 * ────────────────────────────────────────────────────────────
 * Privacy & Security Architecture:
 * 1. HTTPS-Only Enforcement via Strict-Transport-Security (HSTS).
 * 2. Clickjacking protection via X-Frame-Options: DENY.
 * 3. MIME-sniffing protection via X-Content-Type-Options: nosniff.
 * 4. Referrer privacy via strict-origin-when-cross-origin.
 * 5. Environment Variables:
 *    - All sensitive secrets (DATABASE_URL, NEXTAUTH_SECRET, STRIPE_SECRET_KEY,
 *      RESEND_API_KEY) MUST remain strictly server-side.
 *    - No sensitive credentials may ever be prefixed with NEXT_PUBLIC_.
 */

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
