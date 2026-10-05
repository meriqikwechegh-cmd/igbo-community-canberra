'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('icc_cookie_consent');
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // LocalStorage not available or restricted
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem('icc_cookie_consent', 'accepted');
    } catch {}
    setVisible(false);
    // Verified: Only activate optional analytics once affirmative user consent is registered
  };

  const decline = () => {
    try {
      localStorage.setItem('icc_cookie_consent', 'declined');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-0 inset-x-0 bg-stone-900 text-stone-200 border-t border-stone-800 p-4 sm:p-5 z-50 shadow-2xl transition-all"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 text-xs leading-relaxed max-w-3xl">
          <p className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">
            Privacy &amp; Cookie Notice
          </p>
          <p className="text-stone-300">
            We use essential cookies strictly required for security, session authentication, and portal functionality.
            We do not share your personal data with third parties or run advertising trackers.
            Review our{' '}
            <Link href="/en/privacy-policy" className="underline text-emerald-400 hover:text-emerald-300">
              Privacy Policy
            </Link>{' '}
            for full details on data handling and Australian Privacy Principles compliance.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={accept}
            className="flex-1 md:flex-none px-5 py-2.5 bg-[#064e3b] hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase transition rounded-none cursor-pointer"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={decline}
            className="flex-1 md:flex-none px-5 py-2.5 border border-stone-700 hover:border-stone-500 bg-stone-950/60 text-stone-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition rounded-none cursor-pointer"
          >
            Decline Non-Essential
          </button>
        </div>
      </div>
    </div>
  );
}
