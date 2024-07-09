import React, { useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import prefabImage from '../../public/images/homepage/conjunt-modular.jpeg';
import Link from 'next/link';
 // Replace with actual images

const PrefabProductPageLayout = ({ translations, locale }) => {
  const title = translations['Prefabs'].Title;
  const imageSrc = prefabImage;
  const prefabTranslations = translations['Prefab'];
 // Replace with logic to get actual icons

    const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar locale={locale} page={"products/prefab"} translations={translations} />
      <div className="relative h-64 w-full lg:h-96 mb-8">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
          <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-8">
        <div className="lg:w-3/4 flex flex-col items-start mb-8 lg:mb-0 space-y-4">
          {/* Dynamic content starts here */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{prefabTranslations['Uses and Advantages'].Title}</h2>
            <p className="mb-4">{prefabTranslations['Uses and Advantages'].Intro}</p>
            <div className="space-y-4">
              {Object.keys(prefabTranslations['Uses and Advantages']).filter(key => key !== 'Title' && key !== 'Intro' && key !== 'Uses of Modular Prefabs').map((key) => (
                <div key={key} className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{prefabTranslations['Uses and Advantages'][key].Title}</h3>
                  <p>{prefabTranslations['Uses and Advantages'][key].Text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
      <h2 className="text-4xl font-bold mb-8 text-black">
        {prefabTranslations['Uses of Modular Prefabs'].Title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(prefabTranslations['Uses of Modular Prefabs'])
          .filter((key) => key !== 'Title')
          .map((key) => (
            <div key={key} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <i className="fas fa-cube mr-2 text-blue-500"></i>
                  {prefabTranslations['Uses of Modular Prefabs'][key].Title}
                </h3>
                <button 
                  className="block md:hidden text-xl font-bold"
                  onClick={() => toggleExpand(key)}
                >
                  {expanded[key] ? '-' : '+'}
                </button>
              </div>
              {Object.keys(prefabTranslations['Uses of Modular Prefabs'][key])
                .filter((subKey) => subKey !== 'Title')
                .map((subKey) => (
                  <div key={subKey} className={`mb-4 md:block ${expanded[key] ? 'block' : 'hidden'}`}>
                    <h4 className="text-xl font-semibold mb-2 text-black">
                      {prefabTranslations['Uses of Modular Prefabs'][key][subKey].Title}
                    </h4>
                    <p className="text-gray-700">
                      {prefabTranslations['Uses of Modular Prefabs'][key][subKey].Text}
                    </p>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </section>

    <section className="mb-8">
  <h2 className="text-3xl font-bold mb-2">{prefabTranslations['Advantages of Modular Prefabs'].Title}</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {Object.keys(prefabTranslations['Advantages of Modular Prefabs'])
      .filter((key) => key !== 'Title')
      .map((key) => (
        <div key={key} className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold mb-2">
              {prefabTranslations['Advantages of Modular Prefabs'][key].Title}
            </h3>
            <button
              className="block md:hidden text-xl font-bold"
              onClick={() => toggleExpand(key)}
            >
              {expanded[key] ? '-' : '+'}
            </button>
          </div>
          <p className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>
            {prefabTranslations['Advantages of Modular Prefabs'][key].Text}
          </p>
        </div>
      ))}
  </div>
</section>






<section className="mb-8">
      <h2 className="text-3xl font-bold mb-2">{prefabTranslations['Options'].Title}</h2>
      <p className="mb-4">{prefabTranslations['Options'].Intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(prefabTranslations['Options'])
          .filter((key) => key !== 'Title' && key !== 'Intro')
          .map((key) => (
            <div key={key} className="p-4 bg-white shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold mb-2">
                  {prefabTranslations['Options'][key].Title}
                </h3>
                <button 
                  className="block md:hidden text-xl font-bold"
                  onClick={() => toggleExpand(key)}
                >
                  {expanded[key] ? '-' : '+'}
                </button>
              </div>
              {Object.keys(prefabTranslations['Options'][key])
                .filter((subKey) => subKey !== 'Title')
                .map((subKey) => (
                  <div key={subKey} className={`ml-4 mb-4 md:block ${expanded[key] ? 'block' : 'hidden'}`}>
                    <h4 className="text-xl font-semibold">
                      {prefabTranslations['Options'][key][subKey].Title}
                    </h4>
                    <p>{prefabTranslations['Options'][key][subKey].Text}</p>
                  </div>
                ))}
            {key === 'Buy Second-Hand Prefabs' && (
                <div className="mt-4">
                  <Link href={`${locale}products/sale`} legacyBehavior>
                    <a className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition">
                      {prefabTranslations['saleRedirect']}
                    </a>
                  </Link>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
          {/* Dynamic content ends here */}
        </div>
        <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-20 lg:mr-8">
          <div className="bg-primary p-9 rounded-md">
            <div className="bg-primary text-white p-4 text-center rounded-md">
              <h2 className="text-xl md:text-4xl font-bold">{translations['Contact us']}</h2>
            </div>
            <ContactForm translations={translations} locale={locale} />
          </div>
        </div>
      </div>
      <div className="sm:h-16 md:h-20"></div>
      <ContactInfoFooter translations={translations} locale={locale} />
    </>
  );
};

export default PrefabProductPageLayout;
