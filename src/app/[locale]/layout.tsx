import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Igbo Community Canberra (ICC) — Official Portal',
  description:
    'The official cultural, governance, and membership portal for Igbo Community Canberra Inc., Australian Capital Territory.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="font-sans antialiased bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-[#064e3b] selection:text-white min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
