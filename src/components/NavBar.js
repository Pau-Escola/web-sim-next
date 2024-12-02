import React, { useState, useEffect, useRef } from 'react';
import logo from '../../public/images/navbar/logo.png';
import catalan from '../../public/images/navbar/idiomes/catalan.png';
import spanish from '../../public/images/navbar/idiomes/spanish.png';
import english from '../../public/images/navbar/idiomes/english.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const languageIcons = {
  "/ca/": [catalan, "CATALÀ", "/ca/inici", "inici"],
  "/": [spanish, "ESPAÑOL", "/", ""],
  "/en/": [english, "ENGLISH", "/en/home", "home"],
};

const NavBar = ({ translations, locale, page }) => {
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const checkPage = (page) => {
    const allValues = Object.values(languageIcons).flat();
    return allValues.includes(page);
  };

  return (
    <nav
      className={` flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div>
        <Link href={languageIcons[locale][2]}>
          <div className="w-[100px] sm:w-[150px] md:w-[150px]">
            <Image
              src={logo}
              alt="Company Logo"
              width={200}
              height={50}
              className="w-full h-auto bg-white rounded-br-xl p-2"
              priority
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative" ref={menuRef}>
          <div
            className="fixed top-0 left-1/3 mt-5 w-auto bg-primary text-white font-bold text-xl border rounded-lg shadow-lg z-10"
            style={{
              transform: 'scale(1)',
              opacity: 1,
              transformOrigin: 'top'
            }}
          >
            <ul className="flex flex-row space-x-4 p-2">
              <li>
                <Link href={languageIcons[locale][2]} legacyBehavior>
                  <a className="px-4 py-2 hover:bg-blue-700 rounded">{translations['Home']}</a>
                </Link>
              </li>
              <li>
                <Link href={locale + "products/sale"} legacyBehavior>
                  <a className="px-4 py-2 hover:bg-blue-700 rounded">{translations['Sale']}</a>
                </Link>
              </li>
              <li>
                <Link href={locale + "products/building"} legacyBehavior>
                  <a className="px-4 py-2 hover:bg-blue-700 rounded">{translations['Modular Building']}</a>
                </Link>
              </li>
              <li>
                <Link href={locale + "products/cabin"} legacyBehavior>
                  <a className="px-4 py-2 hover:bg-blue-700 rounded">{translations['Cabin']}</a>
                </Link>
              </li>
              <li>
                <Link href={languageIcons[locale][2]} legacyBehavior>
                  <a className="px-4 py-2 hover:bg-blue-700 rounded">{translations['Contact']}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown}>
            <Image src={languageIcons[locale][0]} alt={"current language"} className="w-20 h-20" />
          </button>
          {dropdownVisible && (
            <div
              className="absolute right-0 mt-2 w-20 z-10"
              style={{
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                transform: dropdownVisible ? 'scale(1)' : 'scale(0)',
                opacity: dropdownVisible ? 1 : 0,
                transformOrigin: 'top right'
              }}
            >
              {Object.entries(languageIcons).map(([lang, icon]) => (
  lang !== locale && (
    <li key={lang} className="list-none">
      <Link href={checkPage(page) ? icon[2] : lang + page} legacyBehavior>
        <a className="flex items-center px-4 py-2 hover:bg-gray-200">
          <Image src={icon[0]} alt={lang} className="w-30 h-20 mr-2" />
        </a>
      </Link>
    </li>
  )
))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;