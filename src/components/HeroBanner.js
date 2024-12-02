import React, { useState } from 'react';
import Carousel from './Carousel'; // Import your Carousel component
import edifici from '../../public/images/homepage/edifici.jpeg';
import casetaOcasio from '../../public/images/homepage/ocasio.jpeg';
import cabinIcon from '../../public/images/homepage/refugi-de-camp.png';
import ContactFormModal from './ContactFormModal';


function HeroBanner({translations, locale}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
      {src: casetaOcasio, position: 'center bottom', url: locale+'products/sale', title: 'Sale', text: 'Sale Text'},
      {src: cabinIcon, position: 'center bottom', url: locale+'products/cabin', title: 'Cabin', text: 'Cabin Text'},
      {src: edifici, position: 'center top', url: locale+'products/building', title: 'Modular Building', text: 'Modular Building Text'}
    ];

    return (
      <div className="h-screen w-full flex">
        {/* Left Side: Slogan */}
        <div className="flex flex-col justify-center items-start text-left ml-10 text-black w-1/3">
          <p className="text-5xl md:text-7xl font-bold">
            {translations["Slogan"]["First"]}
          </p>
          <p className="text-4xl md:text-7xl font-bold">
            {translations["Slogan"]["Second"]}
          </p>
          <p className="text-4xl md:text-2xl font-bold">
            {translations['Hero Text']}
            {translations['Hero Text Two']}
          </p>
          <button
                    className="mt-8 md:mt-12 lg:mt-16 text-lg md:text-xl lg:text-2xl bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-full z-40"
                    onClick={() => setIsModalOpen(true)}
                >
                    {translations['Ask for quote']}
                </button>
                {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} translations={translations} locale={locale}/>}
        </div>
    
        {/* Right Side: Carousel */}
        <div className="flex justify-center items-center w-2/3 h-full mt-20">
          <Carousel images={images} objectFit="cover" translations={translations} />
        </div>
      </div>
    );
}

export default HeroBanner;
