import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';

const ProductPageLayout = ({ title, description, imageSrc, translations, locale, page}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar locale={locale} page={page} translations={translations}/>
            <div className="relative h-64 w-full md:h-96 mb-8">
                <Image src={imageSrc} alt={title} layout="fill" objectFit="cover"/>
                <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
                    <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
                <div className="md:w-3/4 flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <p className="text-lg text-gray-800 ml-4 mt-4 md:mt-6">{description}</p>
                </div>
                <div className="md:w-1/4 flex justify-center md:justify-start bg-primary p-9 rounded-md">
                    <div className="w-full max-w-md">
                        <div className="bg-primary text-white p-4 text-center rounded-md">
                            <h2 className="text-xl md:text-4xl font-bold">{translations['Contact us']}</h2>
                        </div>
                        <ContactForm translations={translations} locale={locale}/>
                    </div>
                </div>
            </div>
            <div className="sm:h-16 md:h-20"></div>
            <ContactInfoFooter translations={translations} locale={locale}/>
        </>
    );
};

export default ProductPageLayout;
