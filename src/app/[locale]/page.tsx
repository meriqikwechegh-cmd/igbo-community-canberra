'use client';

/**
 * ICC Public Homepage — Simple, Professional Portal Landing Page
 * ─────────────────────────────────────────────────────────────
 * • Persistent Left Sidebar with direct access to all portal sections
 * • One accent: #064e3b (deep forest emerald)
 * • Clean typography: Inter (Sans) throughout
 * • Zero emojis — 100% professional vector SVG icons
 * • Fast, concise landing page with dedicated subpages
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PublicSidebar } from '@/components/PublicSidebar';
import { PublicHeader } from '@/components/PublicHeader';
import { Sk, SkSection } from '@/components/Skeleton';

// ─── Section label used throughout ───────────────────────────
function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-sans text-[11px] uppercase tracking-wide font-extrabold block mb-1.5 text-[#064e3b] dark:text-emerald-400 ${className}`}
    >
      {children}
    </span>
  );
}

// ─── Horizontal rule divider ──────────────────────────────────
function Rule({ className = '' }: { className?: string }) {
  return <div className={`h-px w-full bg-stone-200 dark:bg-stone-800 ${className}`} />;
}

// ─── Skeletons for Loading State ──────────────────────────────
function HeroSkeleton() {
  return (
    <SkSection label="Loading hero section." className="bg-[#064e3b] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-5">
          <Sk h="h-3" w="w-28" />
          <Sk h="h-12 sm:h-14" w="w-full" rounded="rounded-none" />
          <Sk h="h-4 sm:h-5" w="w-4/5" rounded="rounded-none" />
          <div className="flex gap-3 pt-3">
            <Sk h="h-11" w="w-44" rounded="rounded-none" />
            <Sk h="h-11" w="w-36" rounded="rounded-none" />
          </div>
        </div>
        <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-emerald-800/50 pt-8 md:pt-0 pl-0 md:pl-8">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-1.5 pb-4">
                <Sk h="h-7" w="w-20" />
                <Sk h="h-3" w="w-28" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkSection>
  );
}

function WelcomeSkeleton() {
  return (
    <SkSection label="Loading President's welcome." className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <div className="w-full aspect-[4/5]">
            <Sk h="h-full" w="w-full" rounded="rounded-none" />
          </div>
        </div>
        <div className="md:col-span-7 space-y-4">
          <Sk h="h-3" w="w-28" />
          <Sk h="h-8" w="w-3/4" />
          <Rule className="my-4" />
          <Sk h="h-4" w="w-full" />
          <Sk h="h-4" w="w-5/6" />
        </div>
      </div>
    </SkSection>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-[#064e3b] selection:text-white transition-colors">
      
      {/* ── Persistent Left Sidebar Navigation (Desktop lg+) ── */}
      <PublicSidebar />

      {/* ── Right Main Content Area ─────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* ── Institutional Notice Bar ─────────────────────────── */}
        <div className="bg-stone-900 text-stone-400 text-xs py-2.5 px-4 sm:px-6 border-b border-stone-800 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
              <span className="font-sans text-xs">
                Incorporated Association · ACT Reg. No. A04821 · Founded 2012
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs">
              <span className="hidden md:inline font-sans italic text-stone-300">
                Onye aghana nwanne ya{' '}
                <span className="not-italic font-sans text-stone-500">
                  (Be your brother&apos;s keeper)
                </span>
              </span>
              <div className="flex gap-2 font-sans text-stone-400 font-semibold">
                <Link href="/en" className="hover:text-white underline">EN</Link>
                <span className="text-stone-700">|</span>
                <Link href="/ig" className="hover:text-white">IGBO</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Institutional Header ────────────────────────────── */}
        <PublicHeader />

        {/* ── Hero Section ─────────────────────────────────────── */}
        <section className="bg-[#064e3b] text-white py-16 sm:py-24 px-4 sm:px-6 border-b border-emerald-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Headline & Actions */}
            <div className="md:col-span-8 space-y-5 sm:space-y-6">
              <span className="inline-block bg-emerald-900/80 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase tracking-wider px-3.5 py-1">
                CANBERRA, ACT · INCORPORATED 2012
              </span>

              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] text-stone-50">
                Fostering Unity, Preserving Heritage &amp; Empowering Generations
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
                The official representative body and incorporated cultural association for the
                Igbo diaspora across Canberra and the Australian Capital Territory.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/en/membership"
                  className="bg-white hover:bg-stone-100 text-[#064e3b] font-extrabold px-7 py-3.5 text-xs uppercase tracking-wider transition shadow-sm"
                >
                  Become a Member ($80 / $120) →
                </Link>
                <Link
                  href="/en/login"
                  className="border border-emerald-300/60 hover:bg-emerald-900 text-white font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition"
                >
                  Member Portal Login
                </Link>
              </div>
            </div>

            {/* Right: Key Credentials */}
            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-emerald-800/60 pt-6 md:pt-0 pl-0 md:pl-8">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
                {[
                  { value: '2012', label: 'Foundation Year' },
                  { value: '300+', label: 'Member Network' },
                  { value: '85+',  label: 'Registered Households' },
                  { value: 'A04821', label: 'ACT Incorporated' },
                ].map(({ value, label }, i, arr) => (
                  <div
                    key={label}
                    className={`py-3 md:py-5 ${i < arr.length - 1 ? 'md:border-b border-emerald-800/60' : ''}`}
                  >
                    <p className="font-sans text-2xl sm:text-3xl font-extrabold text-white">{value}</p>
                    <p className="text-xs font-sans uppercase tracking-wide font-bold text-emerald-300 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Quick Portal Gateway Hub (Professional SVG Icons, No Emojis) ── */}
        <section className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-3 border-b border-stone-100 dark:border-stone-800 gap-2">
              <div>
                <SectionLabel>PORTAL DIRECTORY</SectionLabel>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                  Quick Access Directory
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-semibold">
                Select a section below or navigate using the sidebar
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Membership */}
              <Link
                href="/en/membership"
                className="group border border-stone-200 dark:border-stone-800 p-6 bg-[#fafaf9] dark:bg-stone-950/60 hover:border-[#064e3b] dark:hover:border-emerald-600 transition flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 rounded-sm bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-[#064e3b] dark:text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-extrabold text-[#064e3b] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 border border-emerald-200 dark:border-emerald-800">
                      $80 / $120
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-stone-900 dark:text-stone-100 group-hover:text-[#064e3b] dark:group-hover:text-emerald-400 transition">
                    Membership &amp; Dues
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    Single ($80) and Family ($120) tiers. Voting rights, welfare charter, and 3-step registration.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs font-bold text-[#064e3b] dark:text-emerald-400 flex items-center justify-between">
                  <span>View Membership Guide</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* Card 2: Executive Council */}
              <Link
                href="/en/leadership"
                className="group border border-stone-200 dark:border-stone-800 p-6 bg-[#fafaf9] dark:bg-stone-950/60 hover:border-[#064e3b] dark:hover:border-emerald-600 transition flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 rounded-sm bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-extrabold text-stone-600 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-2 py-0.5">
                      8 Officers
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-stone-900 dark:text-stone-100 group-hover:text-[#064e3b] dark:group-hover:text-emerald-400 transition">
                    Executive Council
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    Profiles of President Chief Ifeanyi Onuchukwu and all executive council officers.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs font-bold text-[#064e3b] dark:text-emerald-400 flex items-center justify-between">
                  <span>View EXCO Directory</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* Card 3: Constitution */}
              <Link
                href="/en/constitution"
                className="group border border-stone-200 dark:border-stone-800 p-6 bg-[#fafaf9] dark:bg-stone-950/60 hover:border-[#064e3b] dark:hover:border-emerald-600 transition flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 rounded-sm bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-extrabold text-stone-600 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-2 py-0.5">
                      Charter
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-stone-900 dark:text-stone-100 group-hover:text-[#064e3b] dark:group-hover:text-emerald-400 transition">
                    The Constitution
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    6 constitutional pillars, member voting rights, bylaws, and ACT legal incorporation standards.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs font-bold text-[#064e3b] dark:text-emerald-400 flex items-center justify-between">
                  <span>Read Constitutional Text</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* Card 4: Events */}
              <Link
                href="/en/events"
                className="group border border-stone-200 dark:border-stone-800 p-6 bg-[#fafaf9] dark:bg-stone-950/60 hover:border-[#064e3b] dark:hover:border-emerald-600 transition flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 rounded-sm bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-extrabold text-stone-600 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-2 py-0.5">
                      Calendar
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-stone-900 dark:text-stone-100 group-hover:text-[#064e3b] dark:group-hover:text-emerald-400 transition">
                    Cultural Activities
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    New Yam Festival (Iri Ji), youth language immersion, annual gala banquet, and meeting RSVPs.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs font-bold text-[#064e3b] dark:text-emerald-400 flex items-center justify-between">
                  <span>View Cultural Calendar</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ── Key Facts Strip ─────────────────────────────────────── */}
        <section className="border-b border-stone-200 dark:border-stone-800 py-8 px-4 sm:px-6 bg-stone-50/50 dark:bg-stone-950/40">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { stat: '14',     label: 'Years of Service in ACT' },
              { stat: '4×',     label: 'Annual General Assemblies' },
              { stat: '$120',   label: 'Family Annual Dues ($80 Single)' },
              { stat: '100%',   label: 'Democratic Member Governance' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="font-sans text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100">{stat}</p>
                <p className="text-xs font-sans uppercase tracking-wide font-bold text-stone-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── President's Welcome ──────────────────────────────── */}
        <Rule />
        {!loaded ? (
          <WelcomeSkeleton />
        ) : (
          <section
            id="welcome"
            className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
            aria-label="President's Welcome"
          >
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

              <div className="md:col-span-5">
                <div className="relative w-full max-w-sm mx-auto md:max-w-none aspect-[4/5] bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-none overflow-hidden shadow-xs">
                  <Image
                    src="/president-ifeanyi.jpg"
                    alt="Chief Ifeanyi Onuchukwu"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-[center_12%]"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-stone-950/90 text-white p-3.5 sm:p-4 border-t border-stone-800">
                    <p className="font-sans text-[11px] uppercase tracking-wide font-extrabold text-emerald-400">
                      President
                    </p>
                    <p className="font-sans text-base sm:text-lg font-bold mt-0.5">Chief Ifeanyi Onuchukwu</p>
                    <p className="text-xs text-stone-300 font-sans italic">
                      Ikeorah 1 of Oraifite · President Since 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5 sm:space-y-6">
                <div>
                  <SectionLabel>EXECUTIVE ADDRESS</SectionLabel>
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                    Welcome from the Office of the President
                  </h2>
                  <Rule className="mt-4" />
                </div>

                <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
                  On behalf of the Executive Council and our dedicated member families, I welcome
                  you to the official portal of Igbo Community Canberra (ICC). Established in 2012,
                  our association serves as the unified voice and cultural bastion for the Igbo
                  people residing in the Australian Capital Territory and surrounding regions.
                </p>

                <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
                  Our vision is anchored on the enduring philosophy of{' '}
                  <em>Onye aghana nwanne ya</em>&mdash;ensuring no brother or sister is left
                  behind. Whether newly arrived or a foundational member, this portal offers
                  transparent financial dues accounting, cultural calendar coordination, communal
                  solidarity, and family welfare support.
                </p>

                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="font-sans font-extrabold text-stone-900 dark:text-stone-100 text-sm">
                      Chief Ifeanyi Onuchukwu
                    </p>
                    <p className="text-xs font-sans italic text-[#064e3b] dark:text-emerald-400 font-semibold">
                      Ikeorah 1 of Oraifite
                    </p>
                    <p className="font-sans text-[11px] text-stone-500 font-medium mt-0.5">
                      President, Executive Council · In Office Since 2021
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/en/leadership"
                      className="text-xs font-bold text-[#064e3b] dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-200 border-b border-[#064e3b] dark:border-emerald-400 pb-0.5 whitespace-nowrap"
                    >
                      Meet All 8 EXCO Officers →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ── Footer ───────────────────────────────────────────── */}
        <footer
          id="contact"
          className="bg-stone-900 text-stone-400 py-12 sm:py-16 px-4 sm:px-6 border-t border-stone-800 mt-auto"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 border border-stone-700 bg-white shrink-0">
                  <Image src="/logo.jpg" alt="Igbo Community Canberra Logo" fill className="object-contain" />
                </div>
                <span className="font-sans font-extrabold text-base text-white">
                  Igbo Community Canberra Inc.
                </span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed max-w-sm mb-4">
                Incorporated non-profit association established in 2012 for cultural heritage,
                communal solidarity, and fellowship across the Australian Capital Territory.
              </p>
              <p className="font-sans text-xs text-stone-400">
                ACT Reg. No.: <strong className="text-stone-200">A04821</strong>
                <span className="mx-2">·</span>
                ABN: <strong className="text-stone-200">48 192 840 129</strong>
              </p>
            </div>

            <div>
              <h5 className="font-sans font-bold text-white text-sm mb-3">Portal Directory</h5>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><Link href="/en/membership" className="hover:text-white transition">Membership Tiers ($80 / $120)</Link></li>
                <li><Link href="/en/leadership" className="hover:text-white transition">Executive Council (EXCO)</Link></li>
                <li><Link href="/en/constitution" className="hover:text-white transition">Constitution &amp; Bylaws</Link></li>
                <li><Link href="/en/events" className="hover:text-white transition">Activities &amp; Calendar</Link></li>
                <li><Link href="/en/dashboard/billing" className="hover:text-white transition">Treasury &amp; Dues Protocol</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-sans font-bold text-white text-sm mb-3">Compliance &amp; Legal</h5>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><Link href="/en/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/en/terms-of-use" className="hover:text-white transition">Terms of Use</Link></li>
                <li><Link href="/en/photo-video-consent" className="hover:text-white transition">Photo &amp; Video Consent</Link></li>
                <li><Link href="/en/accessibility" className="hover:text-white transition">Accessibility Statement</Link></li>
                <li><Link href="/en/membership-terms" className="hover:text-white transition">Membership Terms</Link></li>
                <li><Link href="/en/contact" className="hover:text-white transition">Contact &amp; Grievance</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-sans font-bold text-white text-sm mb-3">Secretariat Office</h5>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>GPO Box 1985, Canberra ACT 2601</li>
                <li>
                  <a href="mailto:secretariat@igbocommunitycanberra.org.au" className="hover:text-white transition">
                    secretariat@igbocommunitycanberra.org.au
                  </a>
                </li>
                <li>(02) 6100 4820</li>
                <li className="text-stone-500">Meetings: Acton Community Centre</li>
              </ul>
            </div>

          </div>

          <div className="max-w-6xl mx-auto pt-6 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[11px] font-sans text-stone-500 gap-4">
            <div className="flex flex-wrap items-center gap-3 text-stone-400">
              <Link href="/en/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <span>·</span>
              <Link href="/en/terms-of-use" className="hover:text-white transition">Terms of Use</Link>
              <span>·</span>
              <Link href="/en/photo-video-consent" className="hover:text-white transition">Photo Consent</Link>
              <span>·</span>
              <Link href="/en/accessibility" className="hover:text-white transition">Accessibility</Link>
              <span>·</span>
              <Link href="/en/membership-terms" className="hover:text-white transition">Membership Terms</Link>
              <span>·</span>
              <Link href="/en/contact" className="hover:text-white transition">Contact</Link>
            </div>
            <p className="flex items-center gap-2">
              <span>© 2026 ICC Canberra Inc. A04821</span>
              <span>·</span>
              <span>
                Powered by{' '}
                <strong className="text-emerald-400 font-bold tracking-wider">MeriQTech</strong>
              </span>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
