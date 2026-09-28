import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Hero');
  const nav = useTranslations('Navigation');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg">I</div>
            <div>
              <span className="font-bold text-lg text-green-800 block leading-tight">Igbo Community</span>
              <span className="text-xs text-green-600 font-medium">Canberra</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-green-700">{nav('about')}</a>
            <a href="#events" className="hover:text-green-700">{nav('events')}</a>
            <a href="#gallery" className="hover:text-green-700">{nav('gallery')}</a>
            <a href="#contact" className="hover:text-green-700">{nav('contact')}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/en/login" className="text-sm font-semibold text-green-700 border border-green-700 px-4 py-2 rounded-lg hover:bg-green-50">
              {nav('memberLogin')}
            </a>
            <a href="/en/register" className="text-sm font-semibold bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              {nav('join')}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-yellow-700 text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-4">Igbo Community Canberra · Est. 1985</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">{t('title')}</h1>
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">{t('subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/en/register" className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition">{t('cta')}</a>
            <a href="#about" className="border border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-green-900 transition">Learn More</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: 'ellipse(55% 100% at 50% 100%)'}}></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-700 font-semibold uppercase tracking-wider text-sm mb-3">Who We Are</p>
            <h2 className="text-4xl font-bold mb-6">A Canberra Community Rooted in Igbo Culture & Values</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Igbo Community Canberra is a formal cultural organisation dedicated to preserving and celebrating the rich heritage, language, and traditions of the Igbo people right here in the ACT.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We bring together families across Canberra through cultural events, festivals, education programs, and community welfare initiatives.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-3xl font-extrabold text-green-700">300+</p>
                <p className="text-sm text-gray-500 mt-1">Members</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-3xl font-extrabold text-green-700">40+</p>
                <p className="text-sm text-gray-500 mt-1">Years Active</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-3xl font-extrabold text-green-700">12+</p>
                <p className="text-sm text-gray-500 mt-1">Events / Year</p>
              </div>
            </div>
          </div>
          <div className="bg-green-100 rounded-2xl h-80 flex items-center justify-center text-green-400 text-lg font-medium">
            📸 Community Photo
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-700 font-semibold uppercase tracking-wider text-sm mb-3 text-center">What&#39;s Coming Up</p>
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'New Yam Festival (Iri Ji)', date: 'Oct 15, 2026', location: 'Community Centre, Canberra', tag: 'Cultural' },
              { title: 'Igbo Language Workshop', date: 'Nov 2, 2026', location: 'ACT Public Library', tag: 'Education' },
              { title: 'End of Year Gala', date: 'Dec 18, 2026', location: 'National Convention Centre', tag: 'Celebration' },
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">{event.tag}</span>
                <h3 className="text-lg font-bold mt-4 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>
                <p className="text-sm text-gray-500 mb-6">📍 {event.location}</p>
                <a href="/en/login" className="block text-center bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition text-sm">
                  RSVP (Members Only)
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-24 px-6 bg-green-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Igbo Community Canberra</h2>
          <p className="text-green-200 mb-10 text-lg">Become a member and get access to events, cultural resources, and our growing community network across the ACT.</p>
          <a href="/en/register" className="bg-yellow-400 text-green-900 font-bold px-10 py-4 rounded-xl text-lg hover:bg-yellow-300 transition">
            Register as a Member
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 px-6 bg-green-950 text-green-300 text-center text-sm">
        <p className="font-bold text-white text-lg mb-2">Igbo Community Canberra</p>
        <p className="mb-1">Canberra, ACT, Australia</p>
        <p className="mb-4">contact@igbocommunitycanberra.org.au</p>
        <p className="text-green-600">© 2026 Igbo Community Canberra. All rights reserved.</p>
      </footer>
    </div>
  );
}
