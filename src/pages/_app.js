// src/pages/_app.js
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import '../global.css';
import '../i18n';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  return <Component {...pageProps} locale={locale} />;
}

export default appWithTranslation(MyApp);
