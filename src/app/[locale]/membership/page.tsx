'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PublicSidebar } from '@/components/PublicSidebar';
import { PublicHeader } from '@/components/PublicHeader';

export default function MembershipPage() {
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
                Igbo Community Canberra Inc. · ACT Incorporated Association A04821
              </span>
            </div>
            <span className="font-sans text-xs text-stone-400">
              Annual Membership Year: 2026 / 2027
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#064e3b] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-emerald-950">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block bg-emerald-900/80 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase tracking-wider px-3.5 py-1">
              COMMUNITY MEMBERSHIP
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Become a Member of ICC
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join families and individuals across the Australian Capital Territory in celebrating our heritage, building communal solidarity, and accessing the ICC Welfare Charter.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/en/register"
                className="bg-white text-[#064e3b] hover:bg-stone-100 font-extrabold px-6 py-3 text-xs uppercase tracking-wider transition shadow-sm"
              >
                Start Online Registration →
              </Link>
              <Link
                href="/en/login"
                className="border border-emerald-400/60 hover:bg-emerald-900 text-white font-bold px-6 py-3 text-xs uppercase tracking-wider transition"
              >
                Existing Member Login
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Plans / Tiers */}
        <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 space-y-12">
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
                DEMOCRATIC DUES STRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100">
                Choose Your Membership Category
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm mt-2">
                Approved by the General Assembly in accordance with the ICC Constitution and the ACT Associations Incorporation Act 1991.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Family Membership */}
              <div className="border-2 border-[#064e3b] bg-white dark:bg-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
                <div className="absolute top-0 right-0 bg-[#064e3b] text-white text-[11px] font-extrabold uppercase tracking-wide px-3 py-1">
                  Most Popular
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
                    HOUSEHOLD TIER
                  </span>
                  <h3 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                    Family Membership
                  </h3>
                  <p className="text-stone-500 text-xs mt-1">
                    Primary registered member, spouse, and all residing dependent children.
                  </p>

                  <div className="my-6 pb-6 border-b border-stone-200 dark:border-stone-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100">$120</span>
                      <span className="text-stone-500 font-bold text-sm">AUD / year</span>
                    </div>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      Covers your entire household under one annual dues subscription
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Full voting rights for primary member at the Annual General Assembly</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Full household coverage under the ICC Bereavement &amp; Welfare Charter</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Access to youth cultural mentorship, language immersion, and workshops</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Invitations to community gatherings, New Yam Festival (Iri Ji), &amp; Annual Gala</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Online household management portal for dues and event registrations</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800">
                  <Link
                    href="/en/register"
                    className="block w-full text-center bg-[#064e3b] hover:bg-emerald-950 text-white font-extrabold text-xs py-3.5 uppercase tracking-wider transition"
                  >
                    Register Family Membership ($120)
                  </Link>
                </div>
              </div>

              {/* Single Adult Membership */}
              <div className="border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    INDIVIDUAL TIER
                  </span>
                  <h3 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                    Single Membership
                  </h3>
                  <p className="text-stone-500 text-xs mt-1">
                    Individual adult member residing in the Australian Capital Territory.
                  </p>

                  <div className="my-6 pb-6 border-b border-stone-200 dark:border-stone-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100">$80</span>
                      <span className="text-stone-500 font-bold text-sm">AUD / year</span>
                    </div>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      Individual annual membership for single adult resident
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Individual voting rights at the Annual General Assembly</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Individual coverage under the ICC Bereavement &amp; Welfare Charter</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Access to community cultural fellowship and networking</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Member invitations and discounted entry to ICC community events</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#064e3b] dark:text-emerald-400 font-bold text-sm">✓</span>
                      <span>Individual portal account for official receipts and RSVPs</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800">
                  <Link
                    href="/en/register"
                    className="block w-full text-center bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 dark:hover:bg-stone-700 text-white font-extrabold text-xs py-3.5 uppercase tracking-wider transition"
                  >
                    Register Single Membership ($80)
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Step Registration Process */}
          <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 sm:p-10">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
                ONBOARDING ROADMAP
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                How to Become an ICC Member in 3 Steps
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-stone-200 dark:border-stone-800 p-6 space-y-3 bg-stone-50 dark:bg-stone-950/40">
                <span className="w-8 h-8 rounded-full bg-[#064e3b] text-white flex items-center justify-center font-extrabold text-sm">
                  1
                </span>
                <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-base">
                  Complete Registration
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                  Fill in your household and contact details through our secure digital portal. Choose Family or Single membership.
                </p>
              </div>

              <div className="border border-stone-200 dark:border-stone-800 p-6 space-y-3 bg-stone-50 dark:bg-stone-950/40">
                <span className="w-8 h-8 rounded-full bg-[#064e3b] text-white flex items-center justify-center font-extrabold text-sm">
                  2
                </span>
                <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-base">
                  Pay Annual Dues
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                  Contribute your annual dues ($120 family or $80 single) securely online via card or offline via direct Secretariat bank transfer.
                </p>
              </div>

              <div className="border border-stone-200 dark:border-stone-800 p-6 space-y-3 bg-stone-50 dark:bg-stone-950/40">
                <span className="w-8 h-8 rounded-full bg-[#064e3b] text-white flex items-center justify-center font-extrabold text-sm">
                  3
                </span>
                <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-base">
                  Secretariat Welcome
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                  Receive your official member confirmation, activate household portal access, and get introduced to the General Assembly.
                </p>
              </div>
            </div>
          </div>

          {/* Need help? */}
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-extrabold text-base text-[#064e3b] dark:text-emerald-300">
                Questions about joining or financial hardship?
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs mt-0.5">
                The Secretariat and Office of the Treasurer handle all inquiries with confidentiality.
              </p>
            </div>
            <Link
              href="/en/contact"
              className="bg-[#064e3b] hover:bg-emerald-950 text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider shrink-0 transition"
            >
              Contact Secretariat →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
