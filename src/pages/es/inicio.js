import React, { useState } from 'react';
import Head from 'next/head';
import HeroBanner from '../components/HeroBanner';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductSection';
import WelcomeText from '../components/WelcomeText';
import { getTranslation } from '../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('es');
  return {
    props: {
      translations,
    },
  };
}

function InicioPage({ translations }) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <Head>
        <title>{translations['Welcome to SIM']}</title>
      </Head>
      <HeroBanner text={translations['Hero Text']} />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-center">
          <WelcomeText text={translations['Welcome to SIM']} />
        </div>
        <div className="p-9 md:w-1/2 bg-primary">
          <ServicesSection translations={translations} />
        </div>
      </div>
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
            {translations['Why Prefabs']}
          </h2>
          <button className="text-xs sm:text-sm md:text-md lg:text-lg text-primary cursor-pointer focus:outline-none" onClick={toggleText}>
            {showText ? '-' : '+'}
          </button>
        </div>
        {showText && (
          <p className="text-xs sm:text-sm md:text-md lg:text-lg w-5/6">
            {translations['Why Prefabs Text']}
          </p>
        )}
      </div>
      <ProductsSection translations={translations} />
    </>
  );
}

export default InicioPage;
