// src/pages/index.js
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1 className="text-3xl font-bold">{t('Welcome to SIM')}</h1>
      <p className="text-lg">{t('Hero Text')}</p>
      <nav>
        <ul>
          <li><a href="/en">English</a></li>
          <li><a href="/ca">Catala</a></li>
          <li><a href="/es">Español</a></li>
        </ul>
      </nav>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
