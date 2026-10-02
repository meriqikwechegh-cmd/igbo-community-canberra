'use client';

/**
 * ICC Public Homepage — Editorial Grid Redesign
 * ─────────────────────────────────────────────
 * • One accent: #064e3b (deep forest emerald)
 * • Max container radius: 6px (rounded-md)
 * • Max button radius: 4px (rounded)
 * • No gradients, glows, pills, floating cards
 * • Skeleton states for all async-feeling sections
 * • Accessible: aria-busy, aria-label, sr-only status
 * • prefers-reduced-motion honoured via .sk CSS class
 */

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PublicHeader } from '@/components/PublicHeader';
import { Sk, SkSection } from '@/components/Skeleton';

// ─── Tiny inline spinner for individual actions ───────────────
function InlineSpinner({ className = '' }: { className?: string }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`spinner ${className}`}
    />
  );
}

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
      className={`font-mono text-[10px] uppercase tracking-widest font-bold block mb-1.5 text-[#064e3b] dark:text-emerald-500 ${className}`}
    >
      {children}
    </span>
  );
}

// ─── Horizontal rule divider ──────────────────────────────────
function Rule({ className = '' }: { className?: string }) {
  return <div className={`h-px w-full bg-stone-200 dark:bg-stone-800 ${className}`} />;
}

// ─── Skeleton: Hero ───────────────────────────────────────────
function HeroSkeleton() {
  return (
    <SkSection
      label="Loading hero section."
      className="bg-[#064e3b] py-20 sm:py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 space-y-5">
          <Sk h="h-3" w="w-28" />
          <Sk h="h-14" w="w-full" rounded="rounded" />
          <Sk h="h-5" w="w-4/5" rounded="rounded" />
          <Sk h="h-5" w="w-3/5" rounded="rounded" />
          <div className="flex gap-3 pt-3">
            <Sk h="h-11" w="w-44" rounded="rounded" />
            <Sk h="h-11" w="w-36" rounded="rounded" />
          </div>
        </div>
        <div className="md:col-span-4 space-y-8 border-l border-emerald-800/50 pl-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-1.5 pb-6 border-b border-emerald-800/40">
              <Sk h="h-9" w="w-24" />
              <Sk h="h-3" w="w-32" />
            </div>
          ))}
        </div>
      </div>
    </SkSection>
  );
}

// ─── Skeleton: Facts strip ────────────────────────────────────
function FactsStripSkeleton() {
  return (
    <SkSection
      label="Loading community facts."
      className="border-b border-stone-200 dark:border-stone-800 py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <Sk h="h-7" w="w-20" />
            <Sk h="h-3" w="w-32" />
          </div>
        ))}
      </div>
    </SkSection>
  );
}

// ─── Skeleton: President's Welcome ───────────────────────────
function WelcomeSkeleton() {
  return (
    <SkSection
      label="Loading President's welcome."
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <Sk h="h-[420px]" w="w-full" rounded="rounded-md" />
        </div>
        <div className="md:col-span-7 space-y-4">
          <Sk h="h-3" w="w-28" />
          <Sk h="h-9" w="w-3/4" />
          <Rule className="my-4" />
          <Sk h="h-4" w="w-full" />
          <Sk h="h-4" w="w-full" />
          <Sk h="h-4" w="w-5/6" />
          <div className="py-4" />
          <Sk h="h-4" w="w-full" />
          <Sk h="h-4" w="w-4/5" />
          <Rule className="mt-6 mb-4" />
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <Sk h="h-4" w="w-36" />
              <Sk h="h-3" w="w-24" />
            </div>
            <Sk h="h-3" w="w-28" />
          </div>
        </div>
      </div>
    </SkSection>
  );
}

// ─── Skeleton: Programs / Pillars ────────────────────────────
function PillarsSkeleton() {
  return (
    <SkSection
      label="Loading community programs."
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-10 space-y-2">
        <Sk h="h-3" w="w-36" />
        <Sk h="h-8" w="w-72" />
      </div>
      <div className="grid md:grid-cols-3 gap-0 border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 border-r last:border-r-0 border-stone-200 dark:border-stone-800 space-y-4"
          >
            <div className="flex justify-between items-center pb-3 border-b border-stone-100 dark:border-stone-800">
              <Sk h="h-6" w="w-6" />
              <Sk h="h-3" w="w-16" />
            </div>
            <Sk h="h-5" w="w-4/5" />
            <Sk h="h-3" w="w-full" />
            <Sk h="h-3" w="w-full" />
            <Sk h="h-3" w="w-3/4" />
          </div>
        ))}
      </div>
    </SkSection>
  );
}

// ─── Skeleton: Event timeline ─────────────────────────────────
function EventsSkeleton() {
  return (
    <SkSection
      label="Loading cultural calendar."
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="flex justify-between items-end mb-10 pb-3 border-b border-stone-200 dark:border-stone-800">
        <div className="space-y-2">
          <Sk h="h-3" w="w-28" />
          <Sk h="h-8" w="w-60" />
        </div>
        <Sk h="h-3" w="w-36" />
      </div>
      {/* Featured event */}
      <div className="border border-stone-800 bg-stone-900 p-8 rounded-md mb-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 space-y-3">
            <Sk h="h-3" w="w-20" className="opacity-40" />
            <Sk h="h-9" w="w-36" className="opacity-30" />
            <Sk h="h-3" w="w-28" className="opacity-30" />
          </div>
          <div className="md:col-span-6 space-y-3">
            <Sk h="h-7" w="w-4/5" className="opacity-30" />
            <Sk h="h-3" w="w-48" className="opacity-20" />
            <Sk h="h-4" w="w-full" className="opacity-20" />
            <Sk h="h-4" w="w-5/6" className="opacity-20" />
          </div>
          <div className="md:col-span-3 flex justify-end">
            <Sk h="h-11" w="w-36" className="opacity-30" />
          </div>
        </div>
      </div>
      {/* Quarterly cards */}
      <div className="grid md:grid-cols-3 gap-0 border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 border-r last:border-r-0 border-stone-200 dark:border-stone-800 space-y-3"
          >
            <Sk h="h-3" w="w-24" />
            <Sk h="h-6" w="w-40" />
            <Sk h="h-3" w="w-36" />
            <Sk h="h-4" w="w-full" />
            <Sk h="h-4" w="w-4/5" />
          </div>
        ))}
      </div>
    </SkSection>
  );
}

// ─── Skeleton: Leadership ─────────────────────────────────────
function LeadershipSkeleton() {
  return (
    <SkSection
      label="Loading executive council."
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-10 space-y-2 pb-4 border-b border-stone-200 dark:border-stone-800">
        <Sk h="h-3" w="w-36" />
        <Sk h="h-8" w="w-80" />
        <Sk h="h-3" w="w-64" />
      </div>
      {/* President feature */}
      <div className="border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-md mb-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4">
          <Sk h="h-[300px]" w="w-full" rounded="rounded" />
        </div>
        <div className="md:col-span-8 space-y-3">
          <Sk h="h-3" w="w-40" />
          <Sk h="h-9" w="w-64" />
          <Sk h="h-5" w="w-44" />
          <Sk h="h-4" w="w-full" />
          <Sk h="h-4" w="w-5/6" />
          <Rule className="mt-4" />
          <Sk h="h-3" w="w-56" />
        </div>
      </div>
      {/* Officers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border border-stone-200 dark:border-stone-800 rounded overflow-hidden">
            <Sk h="h-36" w="w-full" rounded="rounded-none" />
            <div className="p-3 space-y-1.5">
              <Sk h="h-3" w="w-16" />
              <Sk h="h-4" w="w-full" />
            </div>
          </div>
        ))}
      </div>
    </SkSection>
  );
}

// ─── Skeleton: Membership ─────────────────────────────────────
function MembershipSkeleton() {
  return (
    <SkSection
      label="Loading membership options."
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-10 space-y-2 pb-4 border-b border-stone-200 dark:border-stone-800">
        <Sk h="h-3" w="w-36" />
        <Sk h="h-8" w="w-80" />
      </div>
      <div className="grid md:grid-cols-2 gap-0 border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="p-8 border-r last:border-r-0 border-stone-200 dark:border-stone-800 space-y-5"
          >
            <div className="flex justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
              <div className="space-y-2">
                <Sk h="h-6" w="w-40" />
                <Sk h="h-3" w="w-32" />
              </div>
              <Sk h="h-5" w="w-20" rounded="rounded" />
            </div>
            <Sk h="h-10" w="w-28" />
            <div className="space-y-2 pt-2">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="flex gap-2 items-center">
                  <Sk h="h-3" w="w-3" />
                  <Sk h="h-3" w="w-48" />
                </div>
              ))}
            </div>
            <Sk h="h-10" w="w-full" rounded="rounded" className="mt-6" />
          </div>
        ))}
      </div>
    </SkSection>
  );
}

// ─── Skeleton: Footer data ────────────────────────────────────
function FooterSkeleton() {
  return (
    <SkSection
      label="Loading footer information."
      className="bg-stone-900 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex gap-3 items-center">
            <Sk h="h-9" w="w-9" className="opacity-20" rounded="rounded-none" />
            <Sk h="h-4" w="w-48" className="opacity-20" />
          </div>
          <Sk h="h-3" w="w-full" className="opacity-20" />
          <Sk h="h-3" w="w-5/6" className="opacity-20" />
          <Sk h="h-3" w="w-44" className="opacity-20" />
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="space-y-3">
            <Sk h="h-4" w="w-28" className="opacity-20" />
            {[1, 2, 3, 4].map((j) => (
              <Sk key={j} h="h-3" w="w-36" className="opacity-20" />
            ))}
          </div>
        ))}
      </div>
    </SkSection>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════

export default function HomePage() {
  /*
   * We simulate progressive loading:
   * - Hero & facts load immediately (< 100ms, no skeleton needed per spec)
   * - President's welcome, programs, events, leadership, membership, footer
   *   are treated as async — we show skeleton for 1.1s then reveal.
   *
   * In production this would be driven by real fetch() states.
   */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate API hydration window.
    // Replace with real data-loading state from SWR/React Query in prod.
    const timer = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#064e3b] selection:text-white"
    >
      {/* ── Institutional Notice Bar ─────────────────────────── */}
      <div className="bg-stone-900 text-stone-400 text-xs py-2 px-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 shrink-0" />
            <span className="font-mono">
              Incorporated Cultural Association · ACT Reg. No. A04821 · Founded 2012
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-serif italic text-stone-400">
              Onye aghana nwanne ya{' '}
              <span className="not-italic font-sans text-stone-500">
                (Be your brother's keeper)
              </span>
            </span>
            <div className="flex gap-2 font-mono text-stone-400">
              <Link href="/en" className="hover:text-white underline">EN</Link>
              <span className="text-stone-700">|</span>
              <Link href="/ig" className="hover:text-white">IGBO</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation ──────────────────────────────────────── */}
      <PublicHeader />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#064e3b] text-white py-20 sm:py-28 px-6 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">

          {/* Left: headline block */}
          <div className="md:col-span-8 space-y-6">
            <SectionLabel className="text-emerald-300/80 font-mono text-[10px] uppercase tracking-widest">
              ESTABLISHED 2012 · CANBERRA ACT
            </SectionLabel>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-stone-50">
              Fostering Unity, Preserving Heritage &amp; Empowering Generations
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl leading-relaxed">
              The official representative body and incorporated cultural association for the
              Igbo diaspora across Canberra and the Australian Capital Territory.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/en/register"
                className="bg-stone-50 hover:bg-white text-[#064e3b] font-bold px-6 py-3 rounded text-sm transition tracking-wide text-center"
              >
                Submit Membership Application
              </Link>
              <a
                href="#welcome"
                className="border border-emerald-500/30 hover:bg-emerald-900/50 text-emerald-50 font-semibold px-6 py-3 rounded text-sm transition text-center"
              >
                President's Address
              </a>
            </div>
          </div>

          {/* Right: metrics sidebar */}
          <div className="md:col-span-4 border-l border-emerald-800/60 pl-0 md:pl-8 space-y-0">
            {[
              { value: '2012', label: 'Foundation Year' },
              { value: '300+', label: 'Member Network' },
              { value: '85+',  label: 'Registered Households' },
              { value: 'ACT Inc.', label: 'A04821 Incorporated' },
            ].map(({ value, label }, i, arr) => (
              <div
                key={label}
                className={`py-6 ${i < arr.length - 1 ? 'border-b border-emerald-800/60' : ''}`}
              >
                <p className="font-serif text-3xl sm:text-4xl font-bold text-white">{value}</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 mt-1">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Facts Strip ─────────────────────────────────────── */}
      <section className="border-b border-stone-200 dark:border-stone-800 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: '14',     label: 'Years of Service' },
            { stat: '4×',     label: 'Annual General Assemblies' },
            { stat: '$250',   label: 'Family Dues / Year' },
            { stat: '100%',   label: 'Community-Governed' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">{stat}</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mt-1">{label}</p>
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
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-label="President's Welcome"
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">

            <div className="md:col-span-5">
              <div className="relative w-full aspect-[4/5] bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md overflow-hidden">
                <Image
                  src="/president-ifeanyi.jpg"
                  alt="Chief Ifeanyi Onuchukwu"
                  fill
                  className="object-cover object-[center_12%]"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-stone-950/85 text-white p-4 border-t border-stone-800">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                    President &amp; Executive Chairman
                  </p>
                  <p className="font-serif text-lg font-bold mt-0.5">Chief Ifeanyi Onuchukwu</p>
                  <p className="text-xs text-stone-300 font-serif italic">
                    Ikeorah 1 of Oraifite · President Since 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div>
                <SectionLabel>EXECUTIVE ADDRESS</SectionLabel>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
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
                  <p className="font-serif font-bold text-stone-900 dark:text-stone-100">
                    Chief Ifeanyi Onuchukwu
                  </p>
                  <p className="text-xs font-serif italic text-[#064e3b] dark:text-emerald-400">
                    Ikeorah 1 of Oraifite
                  </p>
                  <p className="font-mono text-[10px] text-stone-500 mt-0.5">
                    President, Executive Council · In Office Since 2021
                  </p>
                </div>
                <Link
                  href="/en/register"
                  className="text-xs font-bold text-[#064e3b] dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-200 border-b border-[#064e3b] dark:border-emerald-400 pb-0.5 whitespace-nowrap"
                >
                  Join Our Association →
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ── Institutional Pillars ────────────────────────────── */}
      <Rule />
      {!loaded ? (
        <PillarsSkeleton />
      ) : (
        <section
          id="charter"
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-label="Constitutional Objectives"
        >
          <div className="mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
            <SectionLabel>CONSTITUTIONAL OBJECTIVES</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Institutional Pillars of the Association
            </h2>
            <p className="text-stone-500 text-xs mt-1">
              Formally registered under the ACT Associations Incorporation Act 1991.
            </p>
          </div>

          {/* Flush grid — no floating cards, no shadows */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden">
            {[
              {
                numeral: 'I',
                tag: 'Heritage',
                title: 'Cultural Preservation & Heritage',
                body: 'Safeguarding authentic Igbo language, traditions, proverbs, and historical archives through structured educational workshops, cultural assemblies, and community symposiums.',
                ref: 'Article 3 · Constitution',
                status: 'Active Wing',
              },
              {
                numeral: 'II',
                tag: 'Mutual Aid',
                title: 'Family & Welfare Solidarity',
                body: 'Administering mutual aid, bereavement assistance, new resident integration, and household welfare support through our formal solidarity charter and transparent dues fund.',
                ref: 'Article 4 · Welfare',
                status: 'Solidarity Fund',
              },
              {
                numeral: 'III',
                tag: 'Youth',
                title: 'Youth Mentorship & Leadership',
                body: 'Fostering academic distinction, professional mentorship, career networks, and leadership development for the rising generation of Igbo Australian professionals.',
                ref: 'Article 5 · Youth',
                status: 'Leadership Path',
              },
            ].map((pillar) => (
              <div key={pillar.numeral} className="p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-stone-900/60">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-100 dark:border-stone-800 mb-4">
                    <span className="font-serif text-2xl font-bold text-[#064e3b] dark:text-emerald-500">
                      {pillar.numeral}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-stone-100 dark:border-stone-800 text-[10px] font-mono text-stone-400 flex justify-between">
                  <span>{pillar.ref}</span>
                  <span className="text-[#064e3b] dark:text-emerald-500 font-bold">{pillar.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Cultural Calendar ────────────────────────────────── */}
      <Rule />
      {!loaded ? (
        <EventsSkeleton />
      ) : (
        <section
          id="events"
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-label="Cultural Calendar"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-3 border-b border-stone-200 dark:border-stone-800 gap-4">
            <div>
              <SectionLabel>COMMUNITY GATHERINGS</SectionLabel>
              <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                2026/2027 Cultural Calendar
              </h2>
            </div>
            <Link
              href="/en/dashboard/events"
              className="text-xs font-bold text-[#064e3b] dark:text-emerald-400 hover:text-emerald-950 border-b border-[#064e3b] dark:border-emerald-400 pb-0.5 whitespace-nowrap"
            >
              Access Member RSVP System →
            </Link>
          </div>

          {/* Flagship event — dark editorial block */}
          <div className="border border-stone-800 bg-stone-900 p-6 sm:p-8 rounded-md mb-8">
            <div className="grid md:grid-cols-12 gap-8 items-center">

              <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-stone-800 pb-6 md:pb-0 md:pr-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  FLAGSHIP EVENT
                </span>
                <p className="font-serif text-3xl font-bold text-white">29 NOV 2026</p>
                <p className="text-xs text-stone-400 mt-1 font-mono">Sunday · EPIC Centre Canberra</p>
              </div>

              <div className="md:col-span-6 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Igbo End of Year Annual Celebration
                </h3>
                <p className="text-xs text-stone-400 font-mono">
                  The Hall, Exhibition Park in Canberra (EPIC Centre), Mitchell ACT
                </p>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  The flagship gathering bringing together all member families for authentic
                  cultural dances, communal thanksgiving feasting, presentation of community
                  achievements, and fellowship.
                </p>
              </div>

              <div className="md:col-span-3 flex md:justify-end">
                <Link
                  href="/en/dashboard/events"
                  className="inline-block bg-[#064e3b] hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded transition uppercase tracking-wider"
                >
                  RSVP via Member Portal
                </Link>
              </div>

            </div>
          </div>

          {/* Quarterly assemblies — flush grid */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden">
            {[
              {
                tag: 'Q1 2027 ASSEMBLY',
                date: '28 March 2027',
                venue: 'Acton Community Centre, Canberra',
                body: 'First quarterly general assembly of 2027: executive accountability, financial reconciliation, welfare resolutions, and community motions.',
                note: 'Reporting',
              },
              {
                tag: 'Q2 2027 ASSEMBLY',
                date: '27 June 2027',
                venue: 'Acton Community Centre, Canberra',
                body: 'Mid-year general meeting reviewing community progress, welfare disbursements, financial audit, and forward planning for H2.',
                note: 'Mid-Year Audit',
              },
              {
                tag: 'Q3 2027 ASSEMBLY',
                date: '26 September 2027',
                venue: 'Acton Community Centre, Canberra',
                body: 'Third quarter assembly: end-of-year gala preparations, constitutional review, dues status, and executive council reporting.',
                note: 'Gala Prep',
              },
            ].map((ev) => (
              <div key={ev.tag} className="p-6 bg-white dark:bg-stone-900/60 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 block mb-1">
                    {ev.tag}
                  </span>
                  <p className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-0.5">{ev.date}</p>
                  <p className="text-xs text-stone-400 mb-3 font-mono">{ev.venue}</p>
                  <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">{ev.body}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 flex justify-between text-xs">
                  <span className="text-stone-400 font-mono">{ev.note}</span>
                  <Link href="/en/dashboard/events" className="font-bold text-[#064e3b] dark:text-emerald-400">
                    RSVP →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Executive Council ────────────────────────────────── */}
      <Rule />
      {!loaded ? (
        <LeadershipSkeleton />
      ) : (
        <section
          id="leadership"
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-label="Executive Council"
        >
          <div className="mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
            <SectionLabel>EXECUTIVE GOVERNANCE</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              The Executive Council (2025–2027)
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Democratically elected officers dedicated to administrative integrity and community
              representation.
            </p>
          </div>

          {/* President feature — flat, no shadow */}
          <div className="border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-md mb-8 grid md:grid-cols-12 gap-8 items-center bg-white dark:bg-stone-900/60">
            <div className="md:col-span-4">
              <div className="relative w-full aspect-[4/5] bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded overflow-hidden">
                <Image
                  src="/president-ifeanyi.jpg"
                  alt="Chief Ifeanyi Onuchukwu"
                  fill
                  className="object-cover object-[center_12%]"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-8 space-y-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#064e3b] dark:text-emerald-400 block">
                President &amp; Executive Chairman
              </span>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                Chief Ifeanyi Onuchukwu
              </h3>
              <p className="font-serif italic text-stone-500 dark:text-stone-400 text-lg">
                Ikeorah 1 of Oraifite
              </p>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-xl">
                Leading executive governance, constitutional custodianship, and community
                leadership for the Igbo community across the Australian Capital Territory.
              </p>
              <p className="font-mono text-[10px] text-stone-400 pt-3 border-t border-stone-100 dark:border-stone-800">
                President in Office Since 2021 · Executive Council Chair
              </p>
            </div>
          </div>

          {/* Officers grid — consistent 4:5 portrait ratio */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: '/vice-president-joseph.jpg',    name: 'Joseph Nwosu',             role: 'Vice-President',      pos: 'center 12%' },
              { src: '/women-leader-nonye.jpg',       name: 'Nonye Orisakwe',           role: 'President, Ezinwanyi', pos: 'center 12%' },
              { src: '/lawrence-ochu.jpg',            name: 'Lawrence Ochu',            role: 'P.R.O.',              pos: 'center 12%' },
              { src: '/chibueze-iloelunachi.jpg',     name: 'C. Iloelunachi',           role: 'Assistant Sec.',      pos: 'center 12%' },
              { src: null,                            name: 'Anderson Ikea',            role: 'Treasurer',           initials: 'AI'     },
              { src: '/doris-njoku.jpg',              name: 'Doris Njoku',             role: 'Assistant Treas.',    pos: 'center 10%' },
            ].map((officer) => (
              <div
                key={officer.name}
                className="border border-stone-200 dark:border-stone-800 rounded overflow-hidden flex flex-col bg-white dark:bg-stone-900"
              >
                <div className="relative w-full aspect-[4/5] bg-stone-100 dark:bg-stone-800">
                  {officer.src ? (
                    <Image
                      src={officer.src}
                      alt={officer.name}
                      fill
                      className={`object-cover object-[${officer.pos}]`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-stone-800 text-white flex items-center justify-center font-serif font-bold text-sm">
                        {officer.initials}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-stone-100 dark:border-stone-800">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b] dark:text-emerald-500">
                    {officer.role}
                  </p>
                  <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm mt-0.5">
                    {officer.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Membership ───────────────────────────────────────── */}
      <Rule />
      {!loaded ? (
        <MembershipSkeleton />
      ) : (
        <section
          id="membership"
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-label="Membership Dues"
        >
          <div className="mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
            <SectionLabel>MEMBERSHIP STRUCTURE</SectionLabel>
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Annual Membership Dues &amp; Household Options
            </h2>
          </div>

          {/* Flush two-column grid — no floating cards */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-800 rounded-md overflow-hidden">

            {/* Family */}
            <div className="p-8 flex flex-col justify-between bg-white dark:bg-stone-900/60">
              <div>
                <div className="flex justify-between items-start pb-4 border-b border-stone-100 dark:border-stone-800 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                      Family Membership
                    </h3>
                    <p className="text-[10px] text-stone-400 font-mono mt-0.5">
                      Primary Member &amp; Household Dependents
                    </p>
                  </div>
                  <span className="bg-[#064e3b] text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                    Recommended
                  </span>
                </div>

                <p className="font-serif text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">
                  $250 <span className="text-xs font-sans text-stone-400">AUD / year</span>
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 border-t border-stone-100 dark:border-stone-800 pt-4">
                  {[
                    'Full voting rights at Annual General Assembly',
                    'Complete household inclusion (Spouse & Children)',
                    'Full Bereavement & Welfare Charter coverage',
                    'Priority event allocations & member directory access',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/en/register"
                  className="block w-full text-center bg-[#064e3b] hover:bg-emerald-950 text-white font-bold text-xs py-3 rounded uppercase tracking-wider transition"
                >
                  Register Family Account
                </Link>
              </div>
            </div>

            {/* Single */}
            <div className="p-8 flex flex-col justify-between bg-white dark:bg-stone-900/60">
              <div>
                <div className="flex justify-between items-start pb-4 border-b border-stone-100 dark:border-stone-800 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                      Single Membership
                    </h3>
                    <p className="text-[10px] text-stone-400 font-mono mt-0.5">Individual Adult Member</p>
                  </div>
                  <span className="border border-stone-300 dark:border-stone-700 text-stone-500 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                    Individual
                  </span>
                </div>

                <p className="font-serif text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">
                  $150 <span className="text-xs font-sans text-stone-400">AUD / year</span>
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 border-t border-stone-100 dark:border-stone-800 pt-4">
                  {[
                    'Individual voting right at General Assembly',
                    'Individual Welfare Charter coverage',
                    'Member portal access & event RSVPs',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="text-stone-800 dark:text-stone-300 font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/en/register"
                  className="block w-full text-center border border-stone-300 dark:border-stone-700 hover:border-stone-500 text-stone-800 dark:text-stone-200 font-bold text-xs py-3 rounded uppercase tracking-wider transition"
                >
                  Register Single Account
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ── Footer ───────────────────────────────────────────── */}
      {!loaded ? (
        <FooterSkeleton />
      ) : (
        <footer
          id="contact"
          className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800 mt-auto"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 border border-stone-700 bg-white shrink-0">
                  <Image src="/logo.jpg" alt="Igbo Community Canberra Logo" fill className="object-contain" />
                </div>
                <span className="font-serif font-bold text-base text-white">
                  Igbo Community Canberra Inc.
                </span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md mb-4">
                Incorporated non-profit association established in 2012 for cultural heritage,
                communal solidarity, and fellowship across the Australian Capital Territory.
              </p>
              <p className="font-mono text-xs text-stone-400">
                ACT Reg. No.: <strong className="text-stone-200">A04821</strong>
                <span className="mx-2">·</span>
                ABN: <strong className="text-stone-200">48 192 840 129</strong>
              </p>
            </div>

            {/* Institutional links */}
            <div>
              <h5 className="font-serif font-bold text-white text-sm mb-3">Institutional Links</h5>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><a href="#welcome" className="hover:text-white transition">President's Address</a></li>
                <li><a href="#charter" className="hover:text-white transition">Constitution &amp; By-Laws</a></li>
                <li><a href="#leadership" className="hover:text-white transition">Executive Council</a></li>
                <li><a href="#events" className="hover:text-white transition">Cultural Calendar</a></li>
                <li><Link href="/en/dashboard/billing" className="hover:text-white transition">Treasury &amp; Dues Protocol</Link></li>
              </ul>
            </div>

            {/* Secretariat */}
            <div>
              <h5 className="font-serif font-bold text-white text-sm mb-3">Secretariat</h5>
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

          {/* Footer bar */}
          <div className="max-w-7xl mx-auto pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-stone-500 gap-2">
            <p>© 2026 Igbo Community Canberra Inc. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Founded 2012 · ACT Inc. A04821</span>
              <span>·</span>
              <span>
                Powered by{' '}
                <strong className="text-emerald-400 font-bold tracking-wider">MeriQTech</strong>
              </span>
            </p>
          </div>
        </footer>
      )}

    </div>
  );
}
