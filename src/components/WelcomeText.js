import React, { useState } from 'react';
import Image from  'next/image';
import economicLogo from "../../public/images/welcometext/economic.png"
import mobilLogo from "../../public/images/welcometext/mobil.png"
import modularLogo from "../../public/images/welcometext/modular.png"
import rapidLogo from "../../public/images/welcometext/rapid.png"
import ContactFormModal from './ContactFormModal';

const WelcomeText = ( {translations, locale} ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="text-center">
            <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {translations['Welcome to SIM']}
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: translations['Hero Text']}}></p>
                <div className=" flex flex-col justify-center items-center text-center text-white space-y-4">
                <button
                    className="mt-8 md:mt-12 lg:mt-16 text-lg md:text-xl lg:text-2xl bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-full z-40"
                    onClick={() => setIsModalOpen(true)}
                >
                    {translations['Ask for quote']}
                </button>
                {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} translations={translations} locale={locale}/>}
            </div>
            </div>

            {/* The logo band starts here */}
            <div className=" rounded-lg shadow-md mt-10 bg-secondary">
            <div className="flex justify-around items-center space-x-4">
                <div className="flex flex-col items-center">
                    <Image src={economicLogo} alt="Logo 1" width={100} height={100} className="mb-2" />
                    <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-600">
                    {translations['Cost-efficient']}
                </h2>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={mobilLogo} alt="Logo 2" width={100} height={100} className="mb-2" />
                    <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-600">
                    {translations['Mobile']}
                </h2>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={modularLogo} alt="Logo 3" width={100} height={100} className="mb-2" />
                    <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-600">
                    {translations['Scalable']}
                </h2>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={rapidLogo} alt="Logo 4" width={100} height={100} className="mb-2" />
                    <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-600">
                    {translations['Fast']}
                </h2>
                </div>
                </div>
            </div>
            {/* The logo band ends here */}
        </div>
    );
};

export default WelcomeText;
