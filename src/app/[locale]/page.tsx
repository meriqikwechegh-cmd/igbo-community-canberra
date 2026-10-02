import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { PublicHeader } from '@/components/PublicHeader';

export default function HomePage() {
  const t = useTranslations('Hero');
  const nav = useTranslations('Navigation');

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col font-sans selection:bg-[#064e3b] selection:text-white">

      {/* Top Notice Bar — Hairline Editorial Rule */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 bg-emerald-500"></span>
            <span>Incorporated Cultural Association &middot; ACT Reg. No. A04821 &middot; Founded 2012</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-serif italic text-stone-300">
              Onye aghana nwanne ya <span className="not-italic font-sans text-stone-400">(Be your brother&apos;s keeper)</span>
            </span>
            <div className="flex gap-2 font-semibold text-stone-300">
              <Link href="/en" className="hover:text-white underline">EN</Link>
              <span className="text-stone-600">|</span>
              <Link href="/ig" className="hover:text-white">IGBO</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Compact Navigation Bar */}
      <PublicHeader
        memberLoginText={nav('memberLogin')}
        joinText={nav('join')}
        contactText={nav('contact')}
      />

      {/* Hero Section — Editorial Full-Width Flat Grid */}
      <section className="bg-[#064e3b] text-white py-20 sm:py-28 px-6 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-mono text-emerald-200 border-b border-emerald-400/30 pb-0.5">
                ESTABLISHED 2012 &middot; CANBERRA ACT
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-stone-50">
              Fostering Unity, Preserving Heritage &amp; Empowering Generations
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-sans font-normal">
              The official representative body and incorporated cultural association for the Igbo diaspora across Canberra and the Australian Capital Territory.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Link
                href="/en/register"
                className="bg-stone-50 hover:bg-white text-[#064e3b] font-bold px-6 py-3 rounded text-sm transition tracking-wide text-center"
              >
                Submit Membership Application
              </Link>
              <a
                href="#welcome"
                className="border border-emerald-400/40 hover:bg-emerald-900/60 text-emerald-50 font-semibold px-6 py-3 rounded text-sm transition text-center"
              >
                President&apos;s Address
              </a>
            </div>
          </div>

          {/* Quick Metrics Editorial Sidebar */}
          <div className="md:col-span-4 border-l border-emerald-800/80 pl-0 md:pl-8 space-y-8">
            <div className="border-b border-emerald-800/80 pb-6">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white">2012</p>
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-200 mt-1">Foundation Year</p>
            </div>
            <div className="border-b border-emerald-800/80 pb-6">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white">300+</p>
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-200 mt-1">Member Network</p>
            </div>
            <div className="border-b border-emerald-800/80 pb-6">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white">85+</p>
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-200 mt-1">Registered Households</p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white">ACT Inc.</p>
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-200 mt-1">A04821 Incorporated</p>
            </div>
          </div>

        </div>
      </section>

      {/* President's Official Address */}
      <section id="welcome" className="py-20 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5">
            <div className="relative w-full aspect-[4/5] bg-stone-200 border border-stone-300 rounded-md overflow-hidden">
              <Image
                src="/president-ifeanyi.jpg"
                alt="Chief Ifeanyi Onuchukwu"
                fill
                className="object-cover object-[center_12%]"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 text-white p-4 border-t border-stone-800">
                <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">President &amp; Executive Chairman</p>
                <p className="font-serif text-lg font-bold mt-0.5">Chief Ifeanyi Onuchukwu</p>
                <p className="text-xs text-stone-300 font-serif italic">Ikeorah 1 of Oraifite &middot; President Since 2021</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#064e3b] font-bold block mb-1">
                EXECUTIVE ADDRESS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Welcome from the Office of the President
              </h2>
            </div>

            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              On behalf of the Executive Council and our dedicated member families, I welcome you to the official portal of Igbo Community Canberra (ICC). Established in 2012, our association serves as the unified voice and cultural bastion for the Igbo people residing in the Australian Capital Territory and surrounding regions.
            </p>

            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Our vision is anchored on the enduring philosophy of <em>Onye aghana nwanne ya</em>&mdash;ensuring no brother or sister is left behind. Whether you are a newly arrived resident in Canberra or have been a foundational member for years, this portal offers transparent financial dues accounting, cultural calendar coordination, communal solidarity, and family welfare support.
            </p>

            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-serif font-bold text-stone-900 text-base">Chief Ifeanyi Onuchukwu</p>
                <p className="text-xs font-serif italic text-emerald-900">Ikeorah 1 of Oraifite</p>
                <p className="font-mono text-[11px] text-stone-500 mt-0.5">President, Executive Council &middot; In Office Since 2021</p>
              </div>
              <Link
                href="/en/register"
                className="text-xs font-bold text-[#064e3b] hover:text-emerald-950 border-b border-[#064e3b] pb-0.5"
              >
                Join Our Association &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Institutional Pillars */}
      <section id="charter" className="py-20 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="mb-12 border-b border-stone-200 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#064e3b] font-bold block mb-1">
            CONSTITUTIONAL OBJECTIVES
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
            Institutional Pillars of the Association
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Formally registered under the ACT Associations Incorporation Act 1991.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pillar I */}
          <div className="border border-stone-200 bg-white p-6 rounded-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-stone-100 mb-4">
                <span className="font-serif text-2xl font-bold text-[#064e3b]">I</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500">Heritage</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Cultural Preservation &amp; Heritage
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Safeguarding authentic Igbo language, traditions, proverbs, and historical archives through structured educational workshops, cultural assemblies, and community symposiums.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 text-[11px] font-mono text-stone-500 flex justify-between">
              <span>Article 3 &middot; Constitution</span>
              <span className="text-[#064e3b] font-bold">Active Wing</span>
            </div>
          </div>

          {/* Pillar II */}
          <div className="border border-stone-200 bg-white p-6 rounded-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-stone-100 mb-4">
                <span className="font-serif text-2xl font-bold text-[#064e3b]">II</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500">Mutual Aid</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Family &amp; Welfare Solidarity
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Administering mutual aid, bereavement assistance, new resident integration, and household welfare support through our formal solidarity charter and transparent dues fund.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 text-[11px] font-mono text-stone-500 flex justify-between">
              <span>Article 4 &middot; Welfare</span>
              <span className="text-[#064e3b] font-bold">Solidarity Fund</span>
            </div>
          </div>

          {/* Pillar III */}
          <div className="border border-stone-200 bg-white p-6 rounded-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-stone-100 mb-4">
                <span className="font-serif text-2xl font-bold text-[#064e3b]">III</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500">Youth</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Youth Mentorship &amp; Leadership
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Fostering academic distinction, professional mentorship, career networks, and leadership development for the rising generation of Igbo Australian professionals.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 text-[11px] font-mono text-stone-500 flex justify-between">
              <span>Article 5 &middot; Youth</span>
              <span className="text-[#064e3b] font-bold">Leadership Path</span>
            </div>
          </div>

        </div>
      </section>

      {/* Cultural Calendar Section */}
      <section id="events" className="py-20 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-3 border-b border-stone-200 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#064e3b] font-bold block mb-1">
              COMMUNITY GATHERINGS
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
              2026/2027 Cultural Calendar
            </h2>
          </div>
          <Link
            href="/en/dashboard/events"
            className="text-xs font-bold text-[#064e3b] hover:text-emerald-950 border-b border-[#064e3b] pb-0.5"
          >
            Access Member RSVP System &rarr;
          </Link>
        </div>

        {/* Featured Annual Event */}
        <div className="border border-stone-800 bg-stone-900 text-white p-8 rounded-md mb-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-stone-800 pb-6 md:pb-0 md:pr-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">FLAGSHIP EVENT</span>
              <p className="font-serif text-3xl font-bold text-white">29 NOV 2026</p>
              <p className="text-xs text-stone-400 mt-1 font-mono">Sunday &middot; EPIC Centre Canberra</p>
            </div>

            <div className="md:col-span-6 space-y-2">
              <h3 className="font-serif text-2xl font-bold text-white">
                Igbo End of Year Annual Celebration
              </h3>
              <p className="text-xs text-stone-300">
                📍 The Hall, Exhibition Park in Canberra (EPIC Centre), Mitchell ACT
              </p>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                The flagship gathering bringing together all member families for authentic cultural dances, communal thanksgiving feasting, presentation of community achievements, and fellowship.
              </p>
            </div>

            <div className="md:col-span-3 text-left md:text-right">
              <Link
                href="/en/dashboard/events"
                className="inline-block bg-[#064e3b] hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded transition uppercase tracking-wider"
              >
                RSVP via Member Portal
              </Link>
            </div>

          </div>
        </div>

        {/* Quarterly Assemblies */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-stone-200 bg-white p-6 rounded-md flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Q1 2027 ASSEMBLY</span>
              <p className="font-serif text-xl font-bold text-stone-900 mb-1">28 March 2027</p>
              <p className="text-xs text-stone-500 mb-3">Acton Community Centre, Canberra</p>
              <p className="text-stone-600 text-xs leading-relaxed">
                First quarterly general assembly of 2027: executive accountability, financial reconciliation, welfare resolutions, and community motions.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex justify-between text-xs">
              <span className="text-stone-400 font-mono">Reporting</span>
              <Link href="/en/dashboard/events" className="font-bold text-[#064e3b]">RSVP &rarr;</Link>
            </div>
          </div>

          <div className="border border-stone-200 bg-white p-6 rounded-md flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Q2 2027 ASSEMBLY</span>
              <p className="font-serif text-xl font-bold text-stone-900 mb-1">27 June 2027</p>
              <p className="text-xs text-stone-500 mb-3">Acton Community Centre, Canberra</p>
              <p className="text-stone-600 text-xs leading-relaxed">
                Mid-year general meeting reviewing community progress, welfare disbursements, financial audit, and forward planning for H2.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex justify-between text-xs">
              <span className="text-stone-400 font-mono">Mid-Year Audit</span>
              <Link href="/en/dashboard/events" className="font-bold text-[#064e3b]">RSVP &rarr;</Link>
            </div>
          </div>

          <div className="border border-stone-200 bg-white p-6 rounded-md flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Q3 2027 ASSEMBLY</span>
              <p className="font-serif text-xl font-bold text-stone-900 mb-1">26 September 2027</p>
              <p className="text-xs text-stone-500 mb-3">Acton Community Centre, Canberra</p>
              <p className="text-stone-600 text-xs leading-relaxed">
                Third quarter assembly: end-of-year gala preparations, constitutional review, dues status, and executive council operational reporting.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex justify-between text-xs">
              <span className="text-stone-400 font-mono">Gala Prep</span>
              <Link href="/en/dashboard/events" className="font-bold text-[#064e3b]">RSVP &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Council Section */}
      <section id="leadership" className="py-20 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="mb-12 border-b border-stone-200 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#064e3b] font-bold block mb-1">
            EXECUTIVE GOVERNANCE
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
            The Executive Council (2025&ndash;2027)
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Democratically elected officers dedicated to administrative integrity and community representation.
          </p>
        </div>

        {/* President Feature Block */}
        <div className="border border-stone-200 bg-white p-6 sm:p-8 rounded-md mb-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <div className="relative w-full aspect-[4/5] bg-stone-200 border border-stone-300 rounded overflow-hidden">
              <Image
                src="/president-ifeanyi.jpg"
                alt="Chief Ifeanyi Onuchukwu"
                fill
                className="object-cover object-[center_12%]"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#064e3b]">
              President &amp; Executive Chairman
            </span>
            <h3 className="font-serif text-3xl font-bold text-stone-900">Chief Ifeanyi Onuchukwu</h3>
            <p className="font-serif italic text-stone-600 text-lg">Ikeorah 1 of Oraifite</p>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
              Leading executive governance, constitutional custodianship, and community leadership for the Igbo community across the Australian Capital Territory.
            </p>
            <p className="font-mono text-xs text-stone-500 pt-3 border-t border-stone-100">
              President in Office Since 2021 &middot; Executive Council Chair
            </p>
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          
          {/* Vice-President */}
          <div className="border border-stone-200 bg-white rounded overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[4/5] bg-stone-100">
              <Image
                src="/vice-president-joseph.jpg"
                alt="Joseph Nwosu"
                fill
                className="object-cover object-[center_12%]"
              />
            </div>
            <div className="p-3 text-left border-t border-stone-100 bg-white">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b]">Vice-President</p>
              <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">Joseph Nwosu</h4>
            </div>
          </div>

          {/* President Ezinwanyi */}
          <div className="border border-stone-200 bg-white rounded overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[4/5] bg-stone-100">
              <Image
                src="/women-leader-nonye.jpg"
                alt="Nonye Orisakwe"
                fill
                className="object-cover object-[center_12%]"
              />
            </div>
            <div className="p-3 text-left border-t border-stone-100 bg-white">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b]">President, Ezinwanyi</p>
              <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">Nonye Orisakwe</h4>
            </div>
          </div>

          {/* PRO */}
          <div className="border border-stone-200 bg-white rounded overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[4/5] bg-stone-100">
              <Image
                src="/lawrence-ochu.jpg"
                alt="Lawrence Ochu"
                fill
                className="object-cover object-[center_12%]"
              />
            </div>
            <div className="p-3 text-left border-t border-stone-100 bg-white">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b]">P.R.O.</p>
              <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">Lawrence Ochu</h4>
            </div>
          </div>

          {/* Assistant Secretary */}
          <div className="border border-stone-200 bg-white rounded overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[4/5] bg-stone-100">
              <Image
                src="/chibueze-iloelunachi.jpg"
                alt="Chibueze Chamberson Iloelunachi"
                fill
                className="object-cover object-[center_12%]"
              />
            </div>
            <div className="p-3 text-left border-t border-stone-100 bg-white">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b]">Assistant Sec.</p>
              <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">C. Iloelunachi</h4>
            </div>
          </div>

          {/* Treasurer */}
          <div className="border border-stone-200 bg-white rounded overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[4/5] bg-stone-100 flex flex-col items-center justify-center p-4 text-center border-b border-stone-200">
              <div className="w-12 h-12 bg-stone-800 text-white flex items-center justify-center font-serif font-bold text-base">
                AI
              </div>
            </div>
            <div className="p-3 text-left border-t border-stone-100 bg-white">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b]">Treasurer</p>
              <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">Anderson Ikea</h4>
            </div>
          </div>

          {/* Assistant Treasurer */}
          <div className="border border-stone-200 bg-white rounded overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[4/5] bg-stone-100">
              <Image
                src="/doris-njoku.jpg"
                alt="Doris Njoku"
                fill
                className="object-cover object-[center_10%]"
              />
            </div>
            <div className="p-3 text-left border-t border-stone-100 bg-white">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#064e3b]">Assistant Treas.</p>
              <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">Doris Njoku</h4>
            </div>
          </div>

        </div>
      </section>

      {/* Membership Dues Editorial Comparison */}
      <section id="membership" className="py-20 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="mb-12 border-b border-stone-200 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#064e3b] font-bold block mb-1">
            MEMBERSHIP STRUCTURE
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
            Annual Membership Dues &amp; Household Options
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Family Plan */}
          <div className="border border-stone-300 bg-white p-8 rounded-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start pb-4 border-b border-stone-100 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Family Membership</h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">Primary Member &amp; Household Dependents</p>
                </div>
                <span className="bg-[#064e3b] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                  Recommended
                </span>
              </div>

              <div className="mb-6">
                <p className="font-serif text-4xl font-bold text-stone-900">$250 <span className="text-xs font-sans text-stone-500">AUD / year</span></p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-stone-700 border-t border-stone-100 pt-4 font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#064e3b] font-bold">&check;</span> Full voting rights at Annual General Assembly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#064e3b] font-bold">&check;</span> Complete household inclusion (Spouse &amp; Children)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#064e3b] font-bold">&check;</span> Full Bereavement &amp; Welfare Charter coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#064e3b] font-bold">&check;</span> Priority event allocations &amp; member directory access
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/en/register"
                className="block w-full text-center bg-[#064e3b] hover:bg-emerald-950 text-white font-bold text-xs py-3 rounded uppercase tracking-wider"
              >
                Register Family Account
              </Link>
            </div>
          </div>

          {/* Single Plan */}
          <div className="border border-stone-200 bg-white p-8 rounded-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start pb-4 border-b border-stone-100 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Single Membership</h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">Individual Adult Member</p>
                </div>
                <span className="border border-stone-300 text-stone-600 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                  Individual
                </span>
              </div>

              <div className="mb-6">
                <p className="font-serif text-4xl font-bold text-stone-900">$150 <span className="text-xs font-sans text-stone-500">AUD / year</span></p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-stone-700 border-t border-stone-100 pt-4 font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold">&check;</span> Individual voting right at General Assembly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold">&check;</span> Individual Welfare Charter coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold">&check;</span> Member portal access &amp; event RSVPs
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/en/register"
                className="block w-full text-center border border-stone-300 hover:border-stone-400 text-stone-800 font-bold text-xs py-3 rounded uppercase tracking-wider"
              >
                Register Single Account
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Footer */}
      <footer id="contact" className="bg-stone-900 text-stone-300 py-16 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 border border-stone-700 bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Igbo Community Canberra Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif font-bold text-base text-white">
                Igbo Community Canberra Inc.
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-md mb-4 font-sans">
              Incorporated non-profit association established in 2012 for cultural heritage, communal solidarity, and fellowship across the Australian Capital Territory.
            </p>
            <p className="font-mono text-xs text-stone-400">
              ACT Reg. No.: <strong className="text-stone-200">A04821</strong>
              <span className="mx-2">&middot;</span>
              ABN: <strong className="text-stone-200">48 192 840 129</strong>
            </p>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white text-sm mb-3">Institutional Links</h5>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
              <li><a href="#welcome" className="hover:text-white transition">President&apos;s Address</a></li>
              <li><a href="#charter" className="hover:text-white transition">Constitution &amp; By-Laws</a></li>
              <li><a href="#leadership" className="hover:text-white transition">Executive Council</a></li>
              <li><a href="#events" className="hover:text-white transition">Cultural Calendar</a></li>
              <li><Link href="/en/dashboard/billing" className="hover:text-white transition">Treasury &amp; Dues Protocol</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white text-sm mb-3">Secretariat</h5>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
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

        <div className="max-w-7xl mx-auto pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-stone-500 gap-2">
          <p>&copy; 2026 Igbo Community Canberra Inc. All rights reserved.</p>
          <p>Founded 2012 &middot; Compliant with ACT Community Standards.</p>
        </div>
      </footer>

    </div>
  );
}
