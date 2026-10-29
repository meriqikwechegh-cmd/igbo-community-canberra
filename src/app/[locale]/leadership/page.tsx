'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PublicSidebar } from '@/components/PublicSidebar';
import { PublicHeader } from '@/components/PublicHeader';

const officers = [
  {
    src: '/president-ifeanyi.jpg',
    name: 'Chief Ifeanyi Onuchukwu',
    role: 'President',
    sub: 'General Assembly',
    pos: 'center 12%',
    initials: 'IO',
    bio: 'Leads the Executive Council and represents the ICC across community, inter-cultural, and government forums in the ACT.',
  },
  {
    src: '/vice-president-joseph.jpg',
    name: 'Joseph Nwosu',
    role: 'Vice-President',
    sub: 'General Assembly',
    pos: 'center 12%',
    initials: 'JN',
    bio: 'Supports executive leadership, oversees general assembly operations, and assists with community welfare initiatives.',
  },
  {
    src: '/women-leader-nonye.jpg',
    name: 'Nonye Orisakwe',
    role: 'President, Ezinwanyi',
    sub: "Women's Wing",
    pos: 'center 12%',
    initials: 'NO',
    bio: 'Champions family welfare, women fellowship, cultural heritage events, and community development across the ACT.',
  },
  {
    src: '/doris-njoku.jpg',
    name: 'Doris Njoku',
    role: 'Treasurer',
    sub: 'Secretariat Treasury',
    pos: 'center 10%',
    initials: 'DN',
    bio: 'Directs the financial stewardship of ICC, manages dues collection, financial reporting, and annual audit integrity.',
  },
  {
    src: '/lawrence-ochu.jpg',
    name: 'Lawrence Ochu',
    role: 'Social Secretary',
    sub: 'Events & Welfare',
    pos: 'center 12%',
    initials: 'LO',
    bio: 'Coordinates all social gatherings, cultural celebrations (Iri Ji), festive events, and member welfare programs.',
  },
  {
    src: '',
    name: 'Anderson Ikea',
    role: 'Assistant Treasurer',
    sub: 'Secretariat Treasury',
    pos: 'center 12%',
    initials: 'AI',
    bio: 'Assists the Treasurer with dues accounting, offline receipts, and financial reconciliation for all association events.',
  },
  {
    src: '/chibueze-iloelunachi.jpg',
    name: 'Chibueze Iloelunachi',
    role: 'Assistant Secretary',
    sub: 'Secretariat Administration',
    pos: 'center 12%',
    initials: 'CI',
    bio: 'Maintains association records, member directory correspondences, meeting minutes, and legal compliance.',
  },
  {
    src: '',
    name: 'Chidi Nsirim',
    role: 'Provost',
    sub: 'Protocol & Order',
    pos: 'center 12%',
    initials: 'CN',
    bio: 'Maintains decorum, parliamentary order, and cultural protocol during General Assembly sessions and official gatherings.',
  },
];

export default function LeadershipPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-[#064e3b] selection:text-white transition-colors">
      <PublicSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <PublicHeader />

        {/* Notice Bar */}
        <div className="bg-stone-900 text-stone-400 text-xs py-2.5 px-4 sm:px-6 border-b border-stone-800 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
              <span className="font-sans text-xs">
                Executive Council · Igbo Community Canberra Inc. (ACT Reg. A04821)
              </span>
            </div>
            <Link href="/en/constitution" className="text-stone-300 hover:text-white underline text-xs font-semibold">
              Review Constitutional Mandate →
            </Link>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-[#064e3b] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-emerald-950">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block bg-emerald-900/80 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase tracking-wider px-3.5 py-1">
              GOVERNANCE &amp; SECRETARIAT
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Executive Council (EXCO)
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Elected officers representing the General Assembly, Ezinwanyi Canberra (Women&apos;s Wing), and Secretariat Protocol serving our community with integrity and accountability.
            </p>
          </div>
        </section>

        {/* Officers Grid */}
        <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {officers.map((officer) => (
              <div
                key={officer.name}
                className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden flex flex-col shadow-xs"
              >
                <div className="relative w-full aspect-[4/5] bg-stone-100 dark:bg-stone-800">
                  {officer.src ? (
                    <Image
                      src={officer.src}
                      alt={officer.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      style={{ objectPosition: officer.pos || 'center 12%' }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-900 p-4 text-center">
                      <div className="w-16 h-16 bg-[#064e3b] text-amber-300 flex items-center justify-center font-extrabold text-xl border border-emerald-800 shadow-inner">
                        {officer.initials}
                      </div>
                      <span className="font-sans text-[11px] uppercase tracking-wide text-stone-400 mt-3 font-bold">
                        Official Portrait Pending
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between border-t border-stone-100 dark:border-stone-800">
                  <div>
                    <span className="font-sans text-[11px] font-extrabold uppercase tracking-wide text-[#064e3b] dark:text-emerald-400 block truncate">
                      {officer.role}
                    </span>
                    <h3 className="font-extrabold text-stone-900 dark:text-stone-100 text-base mt-0.5 truncate">
                      {officer.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                      {officer.sub}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">
                      {officer.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact EXCO Banner */}
          <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
                SECRETARIAT COMMUNICATIONS
              </span>
              <h4 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">
                Need to contact the Executive Council?
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm mt-1 max-w-xl">
                For official correspondence, general assembly inquiries, sponsorship proposals, or grievance resolutions, reach out directly through our contact desk.
              </p>
            </div>
            <Link
              href="/en/contact"
              className="bg-[#064e3b] hover:bg-emerald-950 text-white font-extrabold text-xs px-6 py-3.5 uppercase tracking-wider transition whitespace-nowrap"
            >
              Contact EXCO Desk →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
