import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('Hero');
  const nav = useTranslations('Navigation');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-900 selection:text-emerald-100">
      {/* Association Header Notice Bar */}
      <div className="bg-emerald-950 text-emerald-200/90 text-[11px] font-medium tracking-wider uppercase border-b border-emerald-900/50 py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Incorporated Cultural Association &middot; ACT Registration No. A04821 &middot; Founded 2012</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Motto: <em>Onye aghana nwanne ya</em> (Be your brother&apos;s keeper)</span>
            <div className="flex gap-3 text-emerald-300 font-semibold">
              <Link href="/en" className="hover:text-white underline">EN</Link>
              <span>|</span>
              <Link href="/ig" className="hover:text-white">IGBO</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="w-full bg-white/95 backdrop-blur border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/en" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-amber-300 flex items-center justify-center font-serif font-bold text-2xl shadow-sm border border-emerald-700/30">
              I
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-slate-900 block leading-tight tracking-tight">
                Igbo Community Canberra
              </span>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-widest block mt-0.5">
                Cultural &amp; Civic Association Inc.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#welcome" className="hover:text-emerald-800 transition">President&apos;s Welcome</a>
            <a href="#charter" className="hover:text-emerald-800 transition">Charter &amp; Mission</a>
            <a href="#events" className="hover:text-emerald-800 transition">{nav('events')}</a>
            <a href="#leadership" className="hover:text-emerald-800 transition">Executive Council</a>
            <a href="#membership" className="hover:text-emerald-800 transition">Membership</a>
            <a href="#contact" className="hover:text-emerald-800 transition">{nav('contact')}</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/login"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-emerald-800 border border-slate-300 hover:border-emerald-800 px-4 py-2.5 rounded-lg transition"
            >
              {nav('memberLogin')}
            </Link>
            <Link
              href="/en/register"
              className="text-xs font-bold uppercase tracking-wider bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-lg shadow-sm transition"
            >
              {nav('join')}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Established 2012 &middot; Australian Capital Territory
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-8 text-slate-50">
            {t('title')}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-normal">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/en/register"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-amber-400/20 transition tracking-wide"
            >
              {t('cta')}
            </Link>
            <a
              href="#welcome"
              className="w-full sm:w-auto border border-emerald-400/40 hover:bg-emerald-900/40 text-emerald-100 font-semibold px-8 py-4 rounded-xl text-base transition backdrop-blur"
            >
              President&apos;s Address
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-20 pt-12 border-t border-emerald-800/40 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">2012</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Foundation Year</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">300+</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Member Network</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">85+</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Households</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">100%</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Audited Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Official Address */}
      <section id="welcome" className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 aspect-[4/5]">
              <Image
                src="/president.jpg"
                alt="President of Igbo Community Canberra"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold">President &amp; Executive Chairman</p>
                <p className="font-serif text-lg font-bold">Ifeanyi Onuchukwu</p>
                <p className="text-xs text-slate-300">Igbo Community Canberra Inc.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
              Executive Address
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Welcome from the Office of the President
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-normal">
              On behalf of the Executive Council and our dedicated member families, I welcome you to the official portal of Igbo Community Canberra (ICC). Established in 2012, our association serves as the unified voice and cultural bastion for the Igbo people residing in the Australian Capital Territory and surrounding regions.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-normal">
              Our vision is anchored on the enduring philosophy of <em>Onye aghana nwanne ya</em>&mdash;ensuring no brother or sister is left behind. Whether you are a newly arrived resident in Canberra or have been a foundational member for years, this portal offers transparent financial dues accounting, civic engagement, cultural calendar coordination, and family welfare support.
            </p>
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-slate-900">Ifeanyi Onuchukwu</p>
                <p className="text-xs text-slate-500">President, Executive Council (2025&ndash;2027)</p>
              </div>
              <Link
                href="/en/register"
                className="text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950"
              >
                Join Our Association &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Charter & Mission Section */}
      <section id="charter" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
            Constitutional Objectives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Institutional Pillars of the Association
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Formally registered under the ACT Associations Incorporation Act 1991 to govern and advance our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-emerald-700/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-serif font-bold text-base mb-6">
              01
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Cultural Preservation &amp; Heritage</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Safeguarding authentic Igbo language, traditions, proverbs, and historical archives through structured educational workshops and symposiums.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-emerald-700/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-serif font-bold text-base mb-6">
              02
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Family &amp; Welfare Solidarity</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Administering mutual aid, bereavement assistance, new resident integration, and household support through our formal solidarity charter.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-emerald-700/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-serif font-bold text-base mb-6">
              03
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Youth Mentorship &amp; Civic Leadership</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fostering academic excellence, professional mentorship, and leadership development for the rising generation of Igbo Australians.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Calendar Section */}
      <section id="events" className="py-24 px-6 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-md">
                Official Engagements
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
                2026/2027 Cultural Calendar
              </h2>
            </div>
            <Link
              href="/en/dashboard/events"
              className="text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950"
            >
              Access Member RSVP System &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full uppercase">
                    Major Gathering
                  </span>
                  <span className="text-xs font-semibold text-slate-500">15 Oct 2026</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  New Yam Festival (Iri Ji Ọha)
                </h3>
                <p className="text-xs text-slate-500 mb-4">Canberra Community Hall, Acton ACT</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The flagship cultural congress celebrating the harvest thanksgiving, traditional dances, authentic culinary displays, and civic delegates.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link
                  href="/en/dashboard/events"
                  className="block text-center bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition"
                >
                  Member RSVP Portal
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase">
                    Linguistic Academy
                  </span>
                  <span className="text-xs font-semibold text-slate-500">2 Nov 2026</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  Asụsụ Igbo Language Workshop
                </h3>
                <p className="text-xs text-slate-500 mb-4">ACT Public Library Seminar Rooms</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A structured linguistic immersion program for youth, focusing on spoken conversational fluency, orthography, and folklore.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link
                  href="/en/dashboard/events"
                  className="block text-center bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition"
                >
                  Member RSVP Portal
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full uppercase">
                    Civic Banquet
                  </span>
                  <span className="text-xs font-semibold text-slate-500">18 Dec 2026</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  Annual Civic Gala &amp; Awards
                </h3>
                <p className="text-xs text-slate-500 mb-4">National Convention Centre Canberra</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our year-end formal dinner recognizing community distinction, academic excellence, and philanthropic service.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link
                  href="/en/dashboard/events"
                  className="block text-center bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition"
                >
                  Member RSVP Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Council Section */}
      <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
            Executive Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            The Executive Council (2025&ndash;2027)
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Democratically elected officers dedicated to administrative integrity, fiduciary accountability, and civic representation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-emerald-800 shadow-sm">
              <Image
                src="/president.jpg"
                alt="Ifeanyi Onuchukwu"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">President</p>
            <h4 className="font-serif font-bold text-slate-900 text-base">Ifeanyi Onuchukwu</h4>
            <p className="text-xs text-slate-500 mt-1">Executive Chairman</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-emerald-800 shadow-sm">
              <Image
                src="/vice-president.jpg"
                alt="Joseph Nwosu"
                fill
                className="object-cover object-[center_15%]"
              />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">Vice-President</p>
            <h4 className="font-serif font-bold text-slate-900 text-base">Joseph Nwosu</h4>
            <p className="text-xs text-slate-500 mt-1">Executive Council</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-serif font-bold text-xl mx-auto mb-4">
              IN
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">Secretary-General</p>
            <h4 className="font-serif font-bold text-slate-900 text-base">Barr. Ikechukwu Nnamdi</h4>
            <p className="text-xs text-slate-500 mt-1">LL.B, Legal Counsel</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-serif font-bold text-xl mx-auto mb-4">
              CE
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">Treasurer &amp; Fiduciary Officer</p>
            <h4 className="font-serif font-bold text-slate-900 text-base">Mazi Chinedu Eze</h4>
            <p className="text-xs text-slate-500 mt-1">CPA, Senior Financial Analyst</p>
          </div>
        </div>
      </section>

      {/* Membership & Treasury CTA */}
      <section id="membership" className="py-20 px-6 bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Household Governance &amp; Dues Charter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Join the Premier Igbo Community in the ACT
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Full membership grants household participation rights at the Annual General Meeting, cultural event allocations, bereavement solidarity, and direct access to our member registry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/register"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-10 py-4 rounded-xl text-base shadow-lg transition tracking-wide"
            >
              Apply for Household Membership
            </Link>
            <Link
              href="/en/login"
              className="border border-emerald-400/50 hover:bg-emerald-800 text-white font-semibold px-10 py-4 rounded-xl text-base transition"
            >
              Existing Member Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Formal Secretariat Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-900 text-amber-300 flex items-center justify-center font-serif font-bold text-lg border border-emerald-700">
                I
              </div>
              <span className="font-serif font-bold text-lg text-white">
                Igbo Community Canberra (ICC)
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              An incorporated, non-profit community association established in 2012 for the promotion of cultural heritage, communal solidarity, and civic engagement across the Australian Capital Territory.
            </p>
            <p className="text-[11px] text-slate-500">
              ACT Association Incorporation Number: <strong>A04821</strong> &middot; ABN: <strong>48 192 840 129</strong>
            </p>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white text-sm mb-3">Institutional Links</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#charter" className="hover:text-emerald-400">Constitution &amp; By-Laws</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400">Executive Council</a></li>
              <li><a href="#events" className="hover:text-emerald-400">Cultural Calendar</a></li>
              <li><Link href="/en/dashboard/billing" className="hover:text-emerald-400">Treasury &amp; Dues Protocol</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white text-sm mb-3">Secretariat Inquiries</h5>
            <ul className="space-y-2 text-xs">
              <li>Address: GPO Box 1985, Canberra ACT 2601</li>
              <li>Email: secretariat@igbocommunitycanberra.org.au</li>
              <li>Phone: (02) 6100 4820</li>
              <li>Meeting Venue: Acton Community Centre</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <p>&copy; 2026 Igbo Community Canberra Inc. All rights reserved.</p>
          <p>Founded 2012 &middot; Compliant with ACT Community Standards.</p>
        </div>
      </footer>
    </div>
  );
}
