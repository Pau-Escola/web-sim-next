import React from 'react';
import Carousel from './Carousel'; // Import your Carousel component
import contenidorNou from '../../public/images/homepage/contenidor-1.JPG';
import modul from '../../public/images/homepage/modul-2.jpg';
import casetaOcasio from '../../public/images/homepage/ocasio-1.JPG';
import edificiModular from '../../public/images/homepage/edifici-despres.jpeg';
import reparacioCantera from '../../public/images/homepage/reparacio-cantera.jpg';
import cabinIcon from '../../public/images/homepage/refugi-de-camp.png';

function HeroBanner() {
    const images = [
        { src: contenidorNou, position: 'center top', url: '/products/contenidor-nou' },
        { src: modul, position: 'center center', url: '/products/modul' },
        { src: casetaOcasio, position: 'center bottom', url: '/products/caseta-ocasio' },
        { src: edificiModular, position: 'center top', url: '/products/edifici-modular' },
        { src: reparacioCantera, position: 'center bottom', url: '/products/reparacio-cantera' },
        { src: cabinIcon, position: 'center bottom', url: '/products/cabin' }
    ];

    return (
        <div className="relative h-screen w-full">
            <Carousel images={images} size="absolute inset-0 w-full h-full" objectFit={"object-cover"} />
        </div>
    );
}

export default HeroBanner;
