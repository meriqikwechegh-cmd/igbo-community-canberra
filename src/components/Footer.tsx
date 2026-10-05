'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-300 py-6 px-6 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-stone-400">
          <Link href="/en/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <span className="text-stone-700">·</span>
          <Link href="/en/terms-of-use" className="hover:text-white transition">
            Terms of Use
          </Link>
          <span className="text-stone-700">·</span>
          <Link href="/en/photo-video-consent" className="hover:text-white transition">
            Photo &amp; Video Consent
          </Link>
          <span className="text-stone-700">·</span>
          <Link href="/en/accessibility" className="hover:text-white transition">
            Accessibility
          </Link>
          <span className="text-stone-700">·</span>
          <Link href="/en/contact" className="hover:text-white transition">
            Contact
          </Link>
          <span className="text-stone-700">·</span>
          <Link href="/en/membership-terms" className="hover:text-white transition">
            Membership Terms
          </Link>
        </div>
        <p className="font-mono text-[10px] text-stone-500 text-center md:text-right">
          © {new Date().getFullYear()} Igbo Community Canberra Inc. (ACT Reg. A04821)
        </p>
      </div>
    </footer>
  );
}
