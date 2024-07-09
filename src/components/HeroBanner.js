import React from 'react';
import Carousel from './Carousel'; // Import your Carousel component
import contenidorNou from '../../public/images/homepage/contenidor-1.JPG';
import modul from '../../public/images/homepage/conjunt-modular.jpeg';
import casetaOcasio from '../../public/images/homepage/ocasio.jpeg';
import cabinIcon from '../../public/images/homepage/refugi-de-camp.png';

function HeroBanner({translations, locale}) {
    const images = [
        {src: contenidorNou, position: 'center top', url: locale+'products/container', title: 'Container', text: 'Container Text'},
        {src: modul, position: 'center center', url: locale+'products/prefab', title: 'Prefabs', text: 'Prefabs Text'},
        {src: casetaOcasio, position: 'center bottom', url: locale+'products/sale', title: 'Sale', text: 'Sale Text'},
        {src: cabinIcon, position: 'center bottom', url: locale+'products/cabin', title: 'Cabin', text: 'Cabin Text'}
    ];

    return (
        <div className="relative h-screen w-full">
        <div className="absolute top-1/4 left-0 z-10 flex flex-col items-start justify-start text-left p-4 text-white">
          <p className="text-5xl md:text-6xl max-w-2xl font-bold"> {translations["Slogan"]["First"]}</p>
          <p className="text-5xl md:text-6xl max-w-2xl font-bold">{translations["Slogan"]["Second"]}</p>
        </div>
        <Carousel images={images} objectFit="cover" translations={translations} />
      </div>
    );
}

export default HeroBanner;
