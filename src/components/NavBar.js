import React, { useState } from 'react';
import logo from '../../public/images/navbar/logo.png';
import catalan from '../../public/images/navbar/idiomes/catalan.png';
import spanish from '../../public/images/navbar/idiomes/spanish.png';
import english from '../../public/images/navbar/idiomes/english.png';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

const languageIcons = {
  ca: catalan,
  es: spanish,
  en: english,
};

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // State for the product menu visibility

  const changeLanguage = (language) => {
    const { pathname, asPath, query } = router;
    i18n.changeLanguage(language);
    router.push({ pathname, query }, asPath, { locale: language });
    setDropdownVisible(false); // Hide the dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="p-3 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div>
        <Link href="/">
          <div className="w-[100px] sm:w-[150px] md:w-[200px]">
            <Image
              src={logo}
              alt="Company Logo"
              width={200}
              height={50}
              className="w-full h-auto"
              priority
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="w-10 h-10 text-primary" />
          </button>
          {menuVisible && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10"
              style={{
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                transform: menuVisible ? 'scale(1)' : 'scale(0)',
                opacity: menuVisible ? 1 : 0,
                transformOrigin: 'top right'
              }}
            >
              <ul className="flex flex-col">
                <li>
                  <Link href="/products/container" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{t('Container')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/prefab" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{t('Prefabs')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/sale" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{t('Sale')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/building" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{t('Modular Building')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/maintenance" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{t('Maintenance')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/cabin" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{t('Cabin')}</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={toggleDropdown}>
            <Image src={languageIcons[i18n.language]} alt={i18n.language} className="w-10 h-10" />
          </button>
          {dropdownVisible && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10"
              style={{
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                transform: dropdownVisible ? 'scale(1)' : 'scale(0)',
                opacity: dropdownVisible ? 1 : 0,
                transformOrigin: 'top right'
              }}
            >
              {Object.entries(languageIcons).map(([lang, icon]) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className="flex items-center p-2 hover:bg-gray-200 w-full"
                >
                  <Link href="/" locale={lang} legacyBehavior>
                    <a>
                      <Image src={icon} alt={lang} className="w-6 h-6 mr-2" />
                      <span>{lang.toUpperCase()}</span>
                    </a>
                  </Link>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
