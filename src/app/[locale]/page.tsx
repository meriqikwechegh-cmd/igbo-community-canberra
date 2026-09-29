import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('Hero');
  const nav = useTranslations('Navigation');

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col selection:bg-emerald-900 selection:text-emerald-100">

      {/* Association Header Notice Bar */}
      <div className="bg-emerald-950 text-emerald-200/90 text-xs font-sans tracking-wide border-b border-emerald-900/60 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-emerald-100">Incorporated Cultural Association &middot; ACT Reg. No. A04821 &middot; Founded 2012</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-sans capitalize text-xs text-emerald-300/90">
              Motto: <em className="text-amber-200 font-serif not-italic font-medium">Onye aghana nwanne ya</em> (Be your brother&apos;s keeper)
            </span>
            <div className="flex gap-2 text-xs font-semibold text-emerald-300">
              <Link href="/en" className="hover:text-white underline">EN</Link>
              <span className="text-emerald-700">|</span>
              <Link href="/ig" className="hover:text-white">IGBO</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="w-full bg-white/95 backdrop-blur border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/en" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-stone-200 shrink-0 bg-white">
              <Image
                src="/logo.jpg"
                alt="Igbo Community Canberra Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-stone-900 block leading-tight tracking-tight">
                Igbo Community Canberra
              </span>
              <span className="font-sans text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block mt-0.5">
                Cultural Association Inc.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
            <a href="#welcome" className="hover:text-emerald-800 transition">President&apos;s Welcome</a>
            <a href="#charter" className="hover:text-emerald-800 transition">Charter &amp; Mission</a>
            <a href="#events" className="hover:text-emerald-800 transition">Cultural Calendar</a>
            <a href="#leadership" className="hover:text-emerald-800 transition">Executive Council</a>
            <a href="#membership" className="hover:text-emerald-800 transition">Membership</a>
            <a href="#contact" className="hover:text-emerald-800 transition">{nav('contact')}</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/login"
              className="font-sans text-sm font-semibold text-stone-700 hover:text-emerald-800 border border-stone-300 hover:border-emerald-800 px-4 py-2 rounded-lg transition"
            >
              {nav('memberLogin')}
            </Link>
            <Link
              href="/en/register"
              className="font-sans text-sm font-semibold bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2 rounded-lg shadow-sm transition"
            >
              {nav('join')}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-950 via-emerald-950 to-stone-950 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400/50 to-amber-300/80"></span>
            <span className="font-display uppercase tracking-[0.35em] text-amber-300 text-xs sm:text-sm font-semibold">
              EST. 2012
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-amber-400/50 to-amber-300/80"></span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] mb-8 text-stone-50">
            Fostering Unity,{' '}
            <span className="font-serif italic font-normal text-amber-200">Preserving Heritage,</span>
            <br className="hidden md:block" /> Empowering Generations
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-normal">
            The official representative body and cultural association for the Igbo diaspora across Canberra and the Australian Capital Territory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/en/register"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-8 py-3.5 rounded-lg text-base shadow-lg transition tracking-wide font-sans"
            >
              Submit Membership Application
            </Link>
            <a
              href="#welcome"
              className="w-full sm:w-auto border border-emerald-400/40 hover:bg-emerald-900/50 text-emerald-100 font-semibold px-8 py-3.5 rounded-lg text-base transition backdrop-blur font-sans"
            >
              President&apos;s Address
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-20 pt-12 border-t border-emerald-800/40 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl sm:text-5xl font-bold text-amber-300">2012</p>
              <p className="font-sans text-xs uppercase tracking-wider font-semibold text-stone-400 mt-2">Foundation Year</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-bold text-amber-300">300+</p>
              <p className="font-sans text-xs uppercase tracking-wider font-semibold text-stone-400 mt-2">Member Network</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-bold text-amber-300">85+</p>
              <p className="font-sans text-xs uppercase tracking-wider font-semibold text-stone-400 mt-2">Households</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-bold text-amber-300">100%</p>
              <p className="font-sans text-xs uppercase tracking-wider font-semibold text-stone-400 mt-2">Audited Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Official Address */}
      <section id="welcome" className="py-24 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-stone-200 aspect-[4/5]">
              <Image
                src="/president-ifeanyi.jpg"
                alt="Chief Ifeanyi Onuchukwu"
                fill
                className="object-cover object-[center_12%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/15 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-sans text-xs uppercase tracking-wider text-amber-300 font-bold">President &amp; Executive Chairman</p>
                <p className="font-display text-2xl font-bold mt-1">Chief Ifeanyi Onuchukwu</p>
                <p className="text-sm text-amber-200 font-serif italic mt-0.5">Ikeorah 1 of Oraifite</p>
                <p className="font-sans text-xs text-stone-300 mt-1">President Since 2021 &middot; Igbo Community Canberra</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-800">
                Executive Address
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Welcome from the Office of the President
            </h2>
            <p className="text-stone-700 leading-relaxed text-base font-sans">
              On behalf of the Executive Council and our dedicated member families, I welcome you to the official portal of Igbo Community Canberra (ICC). Established in 2012, our association serves as the unified voice and cultural bastion for the Igbo people residing in the Australian Capital Territory and surrounding regions.
            </p>
            <p className="text-stone-700 leading-relaxed text-base font-sans">
              Our vision is anchored on the enduring philosophy of <em>Onye aghana nwanne ya</em>&mdash;ensuring no brother or sister is left behind. Whether you are a newly arrived resident in Canberra or have been a foundational member for years, this portal offers transparent financial dues accounting, cultural calendar coordination, communal solidarity, and family welfare support.
            </p>
            <div className="pt-5 border-t border-stone-200 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-stone-900 text-lg">Chief Ifeanyi Onuchukwu</p>
                <p className="text-sm font-serif italic text-emerald-800 font-semibold">Ikeorah 1 of Oraifite</p>
                <p className="font-sans text-xs text-stone-500 mt-0.5">President, Executive Council &middot; In Office Since 2021</p>
              </div>
              <Link
                href="/en/register"
                className="font-sans text-sm font-bold text-emerald-800 hover:text-emerald-950 border-b border-emerald-800 pb-0.5"
              >
                Join Our Association &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Charter & Mission Section — Refined Architectural Design */}
      <section id="charter" className="py-24 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-md mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-800">
              Constitutional Objectives
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Institutional Pillars of the Association
          </h2>
          <p className="text-stone-600 mt-3 text-base leading-relaxed font-sans">
            Formally registered under the ACT Associations Incorporation Act 1991 to govern and advance our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar I */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-700/50 transition flex flex-col justify-between overflow-hidden">
            <div className="h-1.5 bg-emerald-800 w-full"></div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-bold text-emerald-800 tracking-tight">I</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-400 font-sans">Heritage &amp; Culture</span>
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                  Cultural Preservation &amp; Heritage
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  Safeguarding authentic Igbo language, traditions, proverbs, and historical archives through structured educational workshops, cultural assemblies, and community symposiums.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium font-sans">
                <span>Article 3 &middot; ICC Constitution</span>
                <span className="text-emerald-800 font-semibold">Active Wing &rarr;</span>
              </div>
            </div>
          </div>

          {/* Pillar II */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-700/50 transition flex flex-col justify-between overflow-hidden">
            <div className="h-1.5 bg-amber-600 w-full"></div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-bold text-amber-700 tracking-tight">II</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-400 font-sans">Mutual Aid</span>
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                  Family &amp; Welfare Solidarity
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  Administering mutual aid, bereavement assistance, new resident integration, and household welfare support through our formal solidarity charter and transparent dues fund.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium font-sans">
                <span>Article 4 &middot; Welfare Charter</span>
                <span className="text-emerald-800 font-semibold">Solidarity Fund &rarr;</span>
              </div>
            </div>
          </div>

          {/* Pillar III */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-700/50 transition flex flex-col justify-between overflow-hidden">
            <div className="h-1.5 bg-stone-800 w-full"></div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight">III</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-400 font-sans">Next Generation</span>
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                  Youth Mentorship &amp; Leadership
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  Fostering academic distinction, professional mentorship, career networks, and leadership development for the rising generation of Igbo Australian professionals.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium font-sans">
                <span>Article 5 &middot; Youth League</span>
                <span className="text-emerald-800 font-semibold">Leadership Path &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Calendar Section — Distinguished Event Layout */}
      <section id="events" className="py-24 px-6 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-md mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-800"></span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Official Association Engagements
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                2026/2027 Official Calendar
              </h2>
            </div>
            <Link
              href="/en/dashboard/events"
              className="font-sans text-sm font-bold text-emerald-800 hover:text-emerald-950 border-b border-emerald-800 pb-0.5 self-start md:self-auto"
            >
              Access Member RSVP System &rarr;
            </Link>
          </div>

          {/* Featured Major Event: Annual Celebration */}
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-950 text-white rounded-xl border border-emerald-800/60 shadow-lg p-8 md:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4 md:border-r border-emerald-800/60 md:pr-8">
                <div className="bg-emerald-800/80 border border-emerald-500/40 rounded-lg p-4 text-center min-w-[110px]">
                  <span className="block text-xs uppercase tracking-wider font-bold text-amber-300">Sunday</span>
                  <span className="block font-display text-4xl font-bold text-white my-0.5">29</span>
                  <span className="block text-xs uppercase tracking-wider font-bold text-emerald-200">Nov 2026</span>
                </div>
                <div>
                  <span className="inline-block bg-amber-400 text-stone-950 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                    Major Flagship Event
                  </span>
                  <p className="text-xs text-emerald-200/80 mt-2 font-medium">All Households Invited</p>
                </div>
              </div>

              <div className="md:col-span-6 space-y-2.5">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Igbo End of Year Annual Celebration
                </h3>
                <p className="text-amber-200/90 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  The Hall, Exhibition Park in Canberra (EPIC Centre) &middot; Mitchell ACT
                </p>
                <p className="text-stone-300 text-sm leading-relaxed font-sans">
                  The flagship gathering bringing together all member families for authentic cultural dances, communal thanksgiving feasting, presentation of community achievements, and fellowship.
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col justify-center gap-3">
                <Link
                  href="/en/dashboard/events"
                  className="w-full text-center bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm py-3.5 px-6 rounded-lg shadow-md transition"
                >
                  Member RSVP Portal
                </Link>
                <p className="text-[11px] text-center text-emerald-300/80">RSVP open to financial members</p>
              </div>
            </div>
          </div>

          {/* Three Quarterly Assemblies — Clean Executive Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Q1 Meeting */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800/40 transition p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Quarterly General Assembly
                  </span>
                  <span className="text-xs font-bold text-stone-500">Q1 2027</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-2xl font-bold text-stone-900">28 March 2027</span>
                  <span className="text-xs text-stone-500 font-medium">(Last Sunday)</span>
                </div>
                <p className="text-xs text-stone-500 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Canberra ACT &middot; Venue TBC
                </p>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  First quarterly general assembly of 2027: executive accountability, financial reconciliation, welfare resolutions, and community motions.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-medium">Executive Reporting</span>
                <Link
                  href="/en/dashboard/events"
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                >
                  Member RSVP &rarr;
                </Link>
              </div>
            </div>

            {/* Q2 Meeting */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800/40 transition p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Quarterly General Assembly
                  </span>
                  <span className="text-xs font-bold text-stone-500">Q2 2027</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-2xl font-bold text-stone-900">27 June 2027</span>
                  <span className="text-xs text-stone-500 font-medium">(Last Sunday)</span>
                </div>
                <p className="text-xs text-stone-500 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Canberra ACT &middot; Venue TBC
                </p>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  Mid-year general meeting reviewing community progress, welfare disbursements, financial audit, and forward planning for H2.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-medium">Mid-Year Audit</span>
                <Link
                  href="/en/dashboard/events"
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                >
                  Member RSVP &rarr;
                </Link>
              </div>
            </div>

            {/* Q3 Meeting */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800/40 transition p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Quarterly General Assembly
                  </span>
                  <span className="text-xs font-bold text-stone-500">Q3 2027</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-2xl font-bold text-stone-900">26 September 2027</span>
                  <span className="text-xs text-stone-500 font-medium">(Last Sunday)</span>
                </div>
                <p className="text-xs text-stone-500 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Canberra ACT &middot; Venue TBC
                </p>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  Third quarter assembly: end-of-year gala preparations, constitutional review, dues status, and executive council operational reporting.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-medium">Gala Preparations</span>
                <Link
                  href="/en/dashboard/events"
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                >
                  Member RSVP &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Council Section */}
      <section id="leadership" className="py-24 px-6 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-800">
                Executive Leadership
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              The Executive Council (2025&ndash;2027)
            </h2>
            <p className="text-stone-600 mt-3 text-base font-sans">
              Democratically elected officers dedicated to administrative integrity, fiduciary accountability, and community representation.
            </p>
          </div>

          {/* President — Feature Card */}
          <div className="bg-white rounded-xl border border-stone-200/90 shadow-md p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8">
            <div className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-lg overflow-hidden border-2 border-emerald-800 shadow-md shrink-0 bg-stone-100">
              <Image
                src="/president-ifeanyi.jpg"
                alt="Chief Ifeanyi Onuchukwu"
                fill
                className="object-cover object-[center_12%]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center text-center sm:text-left flex-1">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">President &amp; Executive Chairman</span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">Chief Ifeanyi Onuchukwu</h3>
              <p className="font-serif italic text-amber-800 text-xl mt-1">Ikeorah 1 of Oraifite</p>
              <p className="font-sans text-sm text-stone-600 mt-3 max-w-xl leading-relaxed">
                Leading executive governance, constitutional custodianship, and community leadership for the Igbo community across the Australian Capital Territory.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-stone-500 font-sans">
                <span className="font-semibold text-emerald-800">President in Office Since 2021</span>
                <span>&middot;</span>
                <span>Executive Council Chair</span>
              </div>
            </div>
          </div>

          {/* Officers Grid — Full-Bleed 4:5 Portraits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Vice-President */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
                <Image
                  src="/vice-president-joseph.jpg"
                  alt="Joseph Nwosu"
                  fill
                  className="object-cover object-[center_12%]"
                />
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">Vice-President</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Joseph Nwosu</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">Executive Council</p>
              </div>
            </div>

            {/* President Ezinwanyi */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
                <Image
                  src="/women-leader-nonye.jpg"
                  alt="Nonye Orisakwe"
                  fill
                  className="object-cover object-[center_12%]"
                />
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">President, Ezinwanyi</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Nonye Orisakwe</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">Women&apos;s Wing Leader</p>
              </div>
            </div>

            {/* P.R.O */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
                <Image
                  src="/lawrence-ochu.jpg"
                  alt="Lawrence Ochu"
                  fill
                  className="object-cover object-[center_12%]"
                />
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">Public Relations Officer</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Lawrence Ochu</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">P.R.O &amp; Communications</p>
              </div>
            </div>

            {/* Assistant Secretary */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
                <Image
                  src="/chibueze-iloelunachi.jpg"
                  alt="Chibueze Chamberson Iloelunachi"
                  fill
                  className="object-cover object-[center_12%]"
                />
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">Assistant Secretary</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Chibueze Chamberson Iloelunachi</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">Secretariat</p>
              </div>
            </div>

            {/* Treasurer */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200 flex flex-col items-center justify-center p-6 text-center border-b border-stone-200">
                <div className="w-20 h-20 rounded-full bg-emerald-900 text-amber-200 flex items-center justify-center font-display font-bold text-2xl shadow-inner border border-emerald-700">
                  AI
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mt-3 font-semibold">Official Portrait Pending</span>
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">Treasurer</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Anderson Ikea</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">Fiduciary &amp; Treasury</p>
              </div>
            </div>

            {/* Assistant Treasurer */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden">
                <Image
                  src="/doris-njoku.jpg"
                  alt="Doris Njoku"
                  fill
                  className="object-cover object-[center_10%]"
                />
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">Assistant Treasurer</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Doris Njoku</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">Treasury &amp; Accounts</p>
              </div>
            </div>

            {/* Provost */}
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-800/50 transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200 flex flex-col items-center justify-center p-6 text-center border-b border-stone-200">
                <div className="w-20 h-20 rounded-full bg-emerald-900 text-amber-200 flex items-center justify-center font-display font-bold text-2xl shadow-inner border border-emerald-700">
                  CN
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mt-3 font-semibold">Official Portrait Pending</span>
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-stone-100">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">Provost</p>
                <h4 className="font-display font-bold text-stone-900 text-base leading-snug">Chidi Nsirim</h4>
                <p className="font-sans text-xs text-stone-500 mt-1 font-medium">Protocol &amp; Order</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Membership & Treasury CTA */}
      <section id="membership" className="py-24 px-6 bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 border border-emerald-600/40 rounded-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-amber-300">
              Household Governance &amp; Dues Charter
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Join Igbo Community Canberra
          </h2>
          <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            Full membership grants household participation rights at the Annual General Meeting, cultural event allocations, bereavement solidarity, and direct access to our member registry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/register"
              className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-10 py-3.5 rounded-lg text-base shadow-lg transition font-sans"
            >
              Apply for Household Membership
            </Link>
            <Link
              href="/en/login"
              className="border border-emerald-400/50 hover:bg-emerald-800 text-white font-semibold px-10 py-3.5 rounded-lg text-base transition font-sans"
            >
              Existing Member Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Formal Secretariat Footer */}
      <footer id="contact" className="bg-stone-950 text-stone-400 py-16 px-6 border-t border-stone-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-sm border border-stone-700 shrink-0 bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Igbo Community Canberra Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Igbo Community Canberra (ICC)
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md mb-5 font-sans">
              An incorporated, non-profit community association established in 2012 for the promotion of cultural heritage, communal solidarity, and fellowship across the Australian Capital Territory.
            </p>
            <p className="font-sans text-xs text-stone-400">
              ACT Reg. No.: <strong className="text-stone-200">A04821</strong>
              <span className="mx-2.5">&middot;</span>
              ABN: <strong className="text-stone-200">48 192 840 129</strong>
            </p>
          </div>

          <div>
            <h5 className="font-display font-bold text-white text-sm mb-4">Institutional Links</h5>
            <ul className="space-y-2.5 text-sm font-sans">
              <li><a href="#charter" className="hover:text-emerald-400 transition">Constitution &amp; By-Laws</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition">Executive Council</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition">Cultural Calendar</a></li>
              <li><Link href="/en/dashboard/billing" className="hover:text-emerald-400 transition">Treasury &amp; Dues Protocol</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-white text-sm mb-4">Secretariat</h5>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>GPO Box 1985, Canberra ACT 2601</li>
              <li>
                <a href="mailto:secretariat@igbocommunitycanberra.org.au" className="hover:text-emerald-400 transition">
                  secretariat@igbocommunitycanberra.org.au
                </a>
              </li>
              <li>(02) 6100 4820</li>
              <li className="text-stone-400">Meetings: Acton Community Centre</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-2 font-sans">
          <p>&copy; 2026 Igbo Community Canberra Inc. All rights reserved.</p>
          <p>Founded 2012 &middot; Compliant with ACT Community Standards.</p>
        </div>
      </footer>
    </div>
  );
}
