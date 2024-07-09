import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import contenidorNouImage from '../../public/images/homepage/contenidor-1.JPG';
import buyIcon from '../../public/images/servicesicons/pintura-blau.png';
import repairIcon from '../../public/images/servicesicons/reparacio-blau.png';
import relocationIcon from '../../public/images/servicesicons/transport-blau.png';
import Link from 'next/link';


const ContainerProductPageLayout = ({ translations, locale }) => {
  const title = translations['Container'];
  const imageSrc = contenidorNouImage;
  const containerTranslations = translations['Containers'];
  const images = {
    "Custom Painting": buyIcon,
    "Modifications": repairIcon,
    "Transportation": relocationIcon
  };

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
      <NavBar locale={locale} page={"products/container"} translations={translations} />
      <div className="relative h-64 w-full md:h-96 mb-8">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
          <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-8">
        <div className="lg:w-3/4 flex flex-col items-start mb-8 lg:mb-0 space-y-4">
          {/* Dynamic content starts here */}
          <section className="mb-8">
  <h2 className="text-3xl font-bold mb-2">{containerTranslations['Uses of Containers'].Title}</h2>
  <p className="mb-4">{containerTranslations['Uses of Containers'].Intro}</p>
  <div className="space-y-4">
    {Object.keys(containerTranslations['Uses of Containers'])
      .filter((key) => key !== 'Title' && key !== 'Intro')
      .map((key) => (
        <div key={key} className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold mb-2">
              {containerTranslations['Uses of Containers'][key].Title}
            </h3>
            <button
              className="block md:hidden text-xl font-bold"
              onClick={() => toggleExpand(key)}
            >
              {expanded[key] ? '-' : '+'}
            </button>
          </div>
          <p className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>
            {containerTranslations['Uses of Containers'][key].Text}
          </p>
          {key === 'Living Spaces' && (
            <div className="mt-4">
              <Link href={`${locale}products/cabin`} legacyBehavior>
                <a className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition">
                  {containerTranslations["cabinRedirect"]}
                </a>
              </Link>
            </div>
          )}
        </div>
      ))}
  </div>
</section>

    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-2">{containerTranslations['Advantages of Containers'].Title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.keys(containerTranslations['Advantages of Containers'])
          .filter((key) => key !== 'Title')
          .map((key) => (
            <div key={key} className="p-4 bg-white shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold mb-2">
                  {containerTranslations['Advantages of Containers'][key].Title}
                </h3>
                <button
                  className="block md:hidden text-xl font-bold"
                  onClick={() => toggleExpand(key)}
                >
                  {expanded[key] ? '-' : '+'}
                </button>
              </div>
              <p className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>
                {containerTranslations['Advantages of Containers'][key].Text}
              </p>
            </div>
          ))}
      </div>
    </section>

    <section className="mb-8">
  <h2 className="text-3xl font-bold mb-2">{containerTranslations['Contract Containers'].Title}</h2>
  <p className="mb-4">{containerTranslations['Contract Containers'].Intro}</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {Object.keys(containerTranslations['Contract Containers'])
      .filter((key) => key !== 'Title' && key !== 'Intro')
      .map((key) => (
        <div key={key} className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold mb-2">
              {containerTranslations['Contract Containers'][key].Title}
            </h3>
            <button
              className="block md:hidden text-xl font-bold"
              onClick={() => toggleExpand(key)}
            >
              {expanded[key] ? '-' : '+'}
            </button>
          </div>
          <div className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>
            {Object.keys(containerTranslations['Contract Containers'][key])
              .filter((subKey) => subKey !== 'Title')
              .map((subKey) => (
                <div key={subKey} className="ml-4 mb-4">
                  <h4 className="text-xl font-semibold">
                    {containerTranslations['Contract Containers'][key][subKey].Title}
                  </h4>
                  <p>
                    {containerTranslations['Contract Containers'][key][subKey].Text}
                  </p>
                </div>
              ))}
          </div>
            {key === 'Secondhand Containers' && (
              <div className="mt-4">
                <Link href={`${locale}products/sale`} legacyBehavior>
                  <a className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition">
                    {containerTranslations['saleRedirect']}
                  </a>
                </Link>
              </div>
            )}
        </div>
      ))}
  </div>
</section>

          <section className="mb-8 text-white bg-primary py-8">
            <div className="max-w-6xl mx-auto px-1 md:px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{containerTranslations['Services Containers'].Title}</h2>
              <p className="mb-4">{containerTranslations['Services Containers'].Intro}</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-1">
                {Object.keys(containerTranslations['Services Containers']).filter(key => key !== 'Title' && key !== 'Intro').map((key) => (
                  <div key={key} className="group relative md:border-4 bg-white sm:w-full text-primary border-primary shadow-sm rounded-lg overflow-hidden">
                    <Image src={images[key]} alt={`${containerTranslations['Services Containers'][key].Title}`} className="sm:w-32 md:w-64 sm:h-32 md:h-64 mx-auto pt-5" />
                    <h3 className="sm:text-xl md:text-2xl text-center mt-2 font-semibold">{containerTranslations['Services Containers'][key].Title}</h3>
                    <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">
                      <p className="text-sm sm:text-base md:text-lg p-4 text-white">{containerTranslations['Services Containers'][key].Text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dynamic content ends here */}
        </div>
        <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-20">
          <div className="bg-primary p-5 rounded-md">
            <div className="bg-primary text-white p-2 text-center rounded-md">
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

export default ContainerProductPageLayout;
