import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('Hero');
  const nav = useTranslations('Navigation');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-900 selection:text-emerald-100">
      {/* Formal Top Government / Association Banner */}
      <div className="bg-emerald-950 text-emerald-200/90 text-[11px] font-medium tracking-wider uppercase border-b border-emerald-900/50 py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Incorporated Cultural Association · ACT Registration No. A04821</span>
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

      {/* Main Executive Header */}
      <header className="w-full bg-white/95 backdrop-blur border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/en" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-amber-300 flex items-center justify-center font-serif font-bold text-2xl shadow-sm border border-emerald-700/30 group-hover:scale-105 transition">
              I
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-slate-900 block leading-tight tracking-tight">
                Igbo Community Canberra
              </span>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-widest block mt-0.5">
                Cultural & Civic Association Inc.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#charter" className="hover:text-emerald-800 transition">Charter & Mission</a>
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
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {t('badge')}
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
              href="#charter"
              className="w-full sm:w-auto border border-emerald-400/40 hover:bg-emerald-900/40 text-emerald-100 font-semibold px-8 py-4 rounded-xl text-base transition backdrop-blur"
            >
              {t('secondaryCta')}
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-20 pt-12 border-t border-emerald-800/40 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">300+</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Registered Members</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">85+</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Member Households</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">40 Yrs</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Community Presence</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-amber-300">100%</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Financial Transparency</p>
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
            Our Mission & Institutional Pillars
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Established to provide formal representation, cultural education, and mutual solidarity for Igbo Australians in the national capital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-emerald-700/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center text-xl font-bold mb-6">
              🏛️
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Cultural Preservation & Heritage</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Safeguarding Igbo traditions, authentic customs, proverbs, and folklore through language symposiums, historical exhibits, and community libraries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-emerald-700/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center text-xl font-bold mb-6">
              🤝
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Family & Welfare Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Delivering mutual aid, bereavement solidarity, newcomer settlement guidance, and household welfare assistance under our formal community covenant.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-emerald-700/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center text-xl font-bold mb-6">
              🎓
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Youth Leadership & Education</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Empowering the next generation through youth cultural workshops, university mentorship pathways, and language immersion programs.
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
              className="text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
            >
              Access Member RSVP System →
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
                <p className="text-xs text-slate-500 mb-4">📍 Canberra Community Hall, Acton ACT</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The flagship cultural congress celebrating the harvest thanksgiving, masquerade dances, culinary showcases, and formal civic delegations.
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
                    Academic Workshop
                  </span>
                  <span className="text-xs font-semibold text-slate-500">2 Nov 2026</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  Asụsụ Igbo Language Academy
                </h3>
                <p className="text-xs text-slate-500 mb-4">📍 ACT Public Library Seminar Rooms</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A structured linguistic immersion program for children and teenagers, emphasizing spoken conversational fluency, orthography, and folklore.
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
                    Civic Gala
                  </span>
                  <span className="text-xs font-semibold text-slate-500">18 Dec 2026</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  Annual Civic Gala & Awards Banquet
                </h3>
                <p className="text-xs text-slate-500 mb-4">📍 National Convention Centre Canberra</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our prestigious year-end black-tie gathering recognizing community distinction, academic excellence, and philanthropic leadership.
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

      {/* Executive Governance & Council Section */}
      <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
            Executive Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            The Executive Council (2025–2027)
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Democratically elected officers dedicated to administrative integrity, fiduciary accountability, and civic representation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { role: 'President', name: 'Dr. Chidiebere Okonkwo', cred: 'Ph.D., ANU Scholar' },
            { role: 'Vice President', name: 'Engr. (Mrs.) Nkechi Agu', cred: 'M.Eng., Project Director' },
            { role: 'Secretary-General', name: 'Barr. Ikechukwu Nnamdi', cred: 'LL.B, Legal Counsel' },
            { role: 'Treasurer & Fiduciary Officer', name: 'Mazi Chinedu Eze', cred: 'CPA, Senior Financial Analyst' },
          ].map((officer, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-serif font-bold text-xl mx-auto mb-4">
                {officer.name.charAt(4) || 'M'}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">{officer.role}</p>
              <h4 className="font-serif font-bold text-slate-900 text-base">{officer.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{officer.cred}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership & Treasury CTA */}
      <section id="membership" className="py-20 px-6 bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Household Governance & Dues Charter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Join the Premier Igbo Community in the ACT
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Full membership includes household voting rights at the Annual General Meeting, cultural event allowances, bereavement solidarity, and access to our executive member ledger.
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
              An incorporated, non-profit community association dedicated to the promotion of cultural heritage, communal unity, and civic engagement across the Australian Capital Territory.
            </p>
            <p className="text-[11px] text-slate-500">
              ACT Association Incorporation Number: <strong>A04821</strong> · ABN: <strong>48 192 840 129</strong>
            </p>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white text-sm mb-3">Institutional Links</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#charter" className="hover:text-emerald-400">Constitution & By-Laws</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400">Executive Council</a></li>
              <li><a href="#events" className="hover:text-emerald-400">Cultural Calendar</a></li>
              <li><Link href="/en/dashboard/billing" className="hover:text-emerald-400">Treasury & Dues Protocol</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white text-sm mb-3">Secretariat Inquiries</h5>
            <ul className="space-y-2 text-xs">
              <li>📍 GPO Box 1985, Canberra ACT 2601</li>
              <li>✉️ secretariat@igbocommunitycanberra.org.au</li>
              <li>📞 (02) 6100 4820</li>
              <li>🏛️ Meeting Venue: Acton Community Centre</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <p>© 2026 Igbo Community Canberra Inc. All rights reserved.</p>
          <p>Designed with institutional compliance & security standards.</p>
        </div>
      </footer>
    </div>
  );
}
