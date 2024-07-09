// src/pages/_app.js
import { useRouter } from 'next/router';
import '../global.css';

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />;
}

export default MyApp;
