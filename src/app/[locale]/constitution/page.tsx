'use client';

import Link from 'next/link';
import { PublicSidebar } from '@/components/PublicSidebar';
import { PublicHeader } from '@/components/PublicHeader';

const pillars = [
  {
    numeral: 'I',
    tag: 'Cultural Heritage',
    title: 'Cultural Preservation & Language',
    body: 'Safeguarding authentic Igbo language, oral history, proverbs, kola nut rituals, and cultural celebrations (including the annual New Yam Festival / Iri Ji) for current and future generations in the ACT.',
    article: 'Article 3 · Constitution & Heritage',
  },
  {
    numeral: 'II',
    tag: 'Welfare & Solidarity',
    title: 'Bereavement & Welfare Support',
    body: 'Administering our mutual aid fund, bereavement solidarity protocol, family crisis support, and newcomer settlement guidance through a transparent and accountable collective treasury.',
    article: 'Article 4 · Welfare Charter',
  },
  {
    numeral: 'III',
    tag: 'Youth Development',
    title: 'Youth Mentorship & Education',
    body: 'Fostering academic excellence, language immersion, career networking, and civic leadership among young Igbo Australians in Canberra and surrounding regional areas.',
    article: 'Article 5 · Youth Wing',
  },
  {
    numeral: 'IV',
    tag: 'Democratic Governance',
    title: 'General Assembly & Rule of Law',
    body: 'Maintaining democratic accountability through regular General Assembly meetings, quadrennial secret ballot elections, and transparent quarterly financial accounting by the Treasurer.',
    article: 'Article 6 · Governance',
  },
  {
    numeral: 'V',
    tag: 'Civic Harmony',
    title: 'Multicultural Integration in ACT',
    body: 'Representing the Igbo community across Canberra multicultural festivals, Australian civic celebrations, and collaborative engagements with Australian Capital Territory authorities.',
    article: 'Article 7 · Civic Engagement',
  },
  {
    numeral: 'VI',
    tag: 'Integrity & Decorum',
    title: 'Code of Conduct & Dispute Resolution',
    body: 'Upholding personal integrity, peaceful coexistence, respectful debate, and traditional arbitration led by the Council of Elders and Executive Provost.',
    article: 'Article 8 · Ethics & Protocol',
  },
];

export default function ConstitutionPage() {
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
                Constitutional Charter · ACT Associations Incorporation Act 1991 (Reg. A04821)
              </span>
            </div>
            <Link href="/en/membership" className="text-stone-300 hover:text-white underline text-xs font-semibold">
              Explore Membership Tiers →
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#064e3b] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-emerald-950">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block bg-emerald-900/80 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase tracking-wider px-3.5 py-1">
              CONSTITUTION &amp; BYLAWS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Constitutional Framework
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              &quot;Onye aghana nwanne ya&quot; (Never leave a brother or sister behind) — The legal and cultural foundation governing Igbo Community Canberra Inc.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 space-y-12">
          {/* Legal Status Overview */}
          <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
              LEGAL INCORPORATION
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100">
              Association Identity &amp; Jurisdiction
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-stone-100 dark:border-stone-800 text-xs">
              <div>
                <p className="font-bold text-stone-500 uppercase tracking-wider text-[11px]">Incorporated Name</p>
                <p className="font-extrabold text-stone-900 dark:text-stone-100 text-sm mt-1">Igbo Community Canberra Inc.</p>
              </div>
              <div>
                <p className="font-bold text-stone-500 uppercase tracking-wider text-[11px]">ACT Registration Number</p>
                <p className="font-extrabold text-[#064e3b] dark:text-emerald-400 text-sm mt-1">A04821</p>
              </div>
              <div>
                <p className="font-bold text-stone-500 uppercase tracking-wider text-[11px]">Governing Statute</p>
                <p className="font-extrabold text-stone-900 dark:text-stone-100 text-sm mt-1">ACT Associations Incorp. Act 1991</p>
              </div>
            </div>
          </div>

          {/* 6 Institutional Pillars */}
          <div>
            <div className="mb-8 pb-4 border-b border-stone-200 dark:border-stone-800">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100">
                Core Objectives of the Association
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm mt-1">
                Enshrined in the ICC Constitution as binding mandates upon the Executive Council and General Assembly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.numeral}
                  className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex justify-between items-center pb-3 border-b border-stone-100 dark:border-stone-800 mb-4">
                      <span className="text-2xl font-extrabold text-[#064e3b] dark:text-emerald-400">
                        {pillar.numeral}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-base text-stone-900 dark:text-stone-100 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-stone-100 dark:border-stone-800 text-[11px] font-bold text-stone-400">
                    {pillar.article}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Duties & Rights */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 block">
                RIGHTS OF FINANCIAL MEMBERS
              </span>
              <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">
                Privileges of Good Standing
              </h3>
              <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#064e3b] dark:text-emerald-400 font-bold">✓</span>
                  <span>Voting and speaking rights at all General Assembly meetings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#064e3b] dark:text-emerald-400 font-bold">✓</span>
                  <span>Eligibility to contest for Executive Council elective offices after meeting tenure criteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#064e3b] dark:text-emerald-400 font-bold">✓</span>
                  <span>Automatic coverage under the ICC Bereavement &amp; Emergency Welfare Charter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#064e3b] dark:text-emerald-400 font-bold">✓</span>
                  <span>Inspection rights of audited annual association balance sheets and financial statements.</span>
                </li>
              </ul>
            </div>

            <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500 block">
                MEMBER RESPONSIBILITIES
              </span>
              <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">
                Constitutional Obligations
              </h3>
              <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-stone-500 font-bold">·</span>
                  <span>Prompt payment of annual membership dues ($120 for Families, $80 for Single adults).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stone-500 font-bold">·</span>
                  <span>Regular attendance and constructive participation in General Assembly gatherings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stone-500 font-bold">·</span>
                  <span>Upholding cultural dignity, ethical decorum, and community brotherhood at all times.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stone-500 font-bold">·</span>
                  <span>Adherence to Australian law and the peaceful resolution of community grievances.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Join / Action Banner */}
          <div className="p-8 bg-[#064e3b] text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-2xl font-extrabold">Ready to Join our Canberra Fellowship?</h4>
              <p className="text-stone-200 text-xs sm:text-sm mt-1 max-w-xl">
                Become a registered financial member today and join over 150 families celebrating Igbo culture in the national capital.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/en/membership"
                className="bg-white text-[#064e3b] hover:bg-stone-100 font-extrabold text-xs px-6 py-3 uppercase tracking-wider transition whitespace-nowrap"
              >
                View Membership Plans ($80 / $120) →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
