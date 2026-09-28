import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('Hero');
  const nav = useTranslations('Navigation');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="w-full flex justify-between p-4 border-b">
        <div className="font-bold">Logo</div>
        <nav className="flex gap-4">
          <a href="#">{nav('home')}</a>
          <a href="#">{nav('about')}</a>
          <a href="#">{nav('events')}</a>
          <a href="#">{nav('contact')}</a>
        </nav>
        <div className="flex gap-4">
          <button className="text-sm font-semibold">{nav('memberLogin')}</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">{nav('join')}</button>
        </div>
      </header>

      <section className="text-center mt-20">
        <h1 className="text-5xl font-extrabold mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 mb-8">{t('subtitle')}</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
          {t('cta')}
        </button>
      </section>
    </main>
  );
}
