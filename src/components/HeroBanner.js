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
        {src: contenidorNou, position: 'center top', url: '/products/container', title: 'Container', text: 'Container Text'},
        {src: modul, position: 'center center', url: '/products/prefab', title: 'Prefabs', text: 'Prefabs Text'},
        {src: casetaOcasio, position: 'center bottom', url: '/products/sale', title: 'Sale', text: 'Sale Text'},
        {src: edificiModular, position: 'center top', url: '/products/building', title: 'Modular Building', text: 'Modular Building Text'},
        {src: reparacioCantera, position: 'center top', url: '/products/maintenance', title: 'Maintenance', text: 'Maintenance Text'},
        {src: cabinIcon, position: 'center bottom', url: '/products/cabin', title: 'Cabin', text: 'Cabin Text'}
    ];

    return (
        <div className="relative h-screen w-full">
            <Carousel images={images} objectFit="cover" />
        </div>
    );
}

export default HeroBanner;
