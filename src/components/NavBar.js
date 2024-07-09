import React, { useState, useEffect, useRef } from 'react';
import logo from '../../public/images/navbar/logo.png';
import catalan from '../../public/images/navbar/idiomes/catalan.png';
import spanish from '../../public/images/navbar/idiomes/spanish.png';
import english from '../../public/images/navbar/idiomes/english.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

const languageIcons = {
  "/ca/": [catalan, "CATALÀ", "/ca/inici", "inici"],
  "/": [spanish, "ESPAÑOL", "/", ""],
  "/en/": [english, "ENGLISH", "/en/home", "home"],
};

const NavBar = ({ translations, locale, page }) => {
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // State for the product menu visibility
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
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

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const checkPage = (page) => {
    const allValues = Object.values(languageIcons).flat();
    return allValues.includes(page);
  };

  return (
    <nav className="p-3 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div>
        <Link href={languageIcons[locale][2]}>
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
        <div className="relative" ref={menuRef}>
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
                  <Link href={locale + "products/container"} legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{translations['Container']}</a>
                  </Link>
                </li>
                <li>
                  <Link href={locale + "products/prefab"} legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{translations['Prefabs']}</a>
                  </Link>
                </li>
                <li>
                  <Link href={locale + "products/sale"} legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{translations['Sale']}</a>
                  </Link>
                </li>
                <li>
                  <Link href={locale + "products/building"} legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{translations['Modular Building']}</a>
                  </Link>
                </li>
                <li>
                  <Link href={locale + "products/maintenance"} legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{translations['Maintenance']}</a>
                  </Link>
                </li>
                <li>
                  <Link href={locale + "products/cabin"} legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-gray-200">{translations['Cabin']}</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown}>
            <Image src={languageIcons[locale][0]} alt={"current language"} className="w-10 h-10" />
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
                <li key={lang} className="list-none">
                  <Link href={checkPage(page) ? icon[2] : lang + page} legacyBehavior>
                    <a className="flex items-center px-4 py-2 hover:bg-gray-200">
                      <Image src={icon[0]} alt={lang} className="w-6 h-6 mr-2" />
                      <span>{icon[1]}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
