// src/pages/_app.js
import { appWithTranslation } from 'next-i18next';
import '../global.css';
import '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
