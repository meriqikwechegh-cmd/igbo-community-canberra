import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import '../globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: 'Igbo Community Canberra (ICC) — Official Portal',
  description: 'The official cultural, civic, and membership portal for Igbo Community Canberra, Australian Capital Territory.',
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
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
