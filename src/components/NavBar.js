import React from 'react';
import logo from '../../public/images/navbar/logo.jpg';
import catalan from '../../public/images/navbar/idiomes/catalan.png';
import spanish from '../../public/images/navbar/idiomes/spanish.png';
import english from '../../public/images/navbar/idiomes/english.png';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (language) => {
    const { pathname, asPath, query } = router;
    i18n.changeLanguage(language);
    router.push({ pathname, query }, asPath, { locale: language });
  };

  return (
    <nav className="bg-white p-3 shadow-lg flex justify-between items-center">
      <div>
        <Link href="/">
          <Image src={logo} alt="Company Logo" width={200} height={50} />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => changeLanguage('ca')}>
          <Image src={catalan} alt="Catalan" className="w-10 h-10" />
        </button>
        <button onClick={() => changeLanguage('es')}>
          <Image src={spanish} alt="Spanish" className="w-10 h-10" />
        </button>
        <button onClick={() => changeLanguage('en')}>
          <Image src={english} alt="English" className="w-10 h-10" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;