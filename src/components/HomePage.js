import React, { useState } from 'react';
import Head from 'next/head';
import HeroBanner from './HeroBanner';
import ServicesSection from './ServicesSection';
import ProductsSection from './ProductSection';
import { useTranslation, Trans } from 'react-i18next';
import WelcomeText from './WelcomeText';

function HomePage() {
    const { t } = useTranslation();
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <>
            <Head>
                <title>SIM Reus</title>
            </Head>
            <HeroBanner />
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 flex justify-center">
                    <WelcomeText />
                </div>
                <div className="p-9 md:w-1/2 bg-primary">
                    <ServicesSection />
                </div>
            </div>
            <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
                        {t('Why Prefabs')}
                    </h2>
                    <button className="text-xs sm:text-sm md:text-md lg:text-lg text-primary cursor-pointer focus:outline-none" onClick={toggleText}>
                        {showText ? '-' : '+'}
                    </button>
                </div>
                {showText && (
                    <p className="text-xs sm:text-sm md:text-md lg:text-lg w-5/6">
                        <Trans i18nKey="Why Prefabs Text" />
                    </p>
                )}
            </div>
            <ProductsSection />
        </>
    );
}

export default HomePage;
