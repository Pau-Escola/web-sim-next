import React from 'react';
import Carousel from './Carousel'; // Import your Carousel component
import casetaJetSKi from '../../public/images/herobanner/jetSkiCaseta.jpg';
import cotenidor1 from '../../public/images/herobanner/contenidor.jpg';
import cotenidor2 from '../../public/images/herobanner/contenidor2.jpg';
import casetaControl2 from '../../public/images/herobanner/IMG_20200804_081113 - copia.jpg';
import casetaControl from '../../public/images/herobanner/IMG_20200804_081215.jpg';

function HeroBanner() {

    const images = [
        {src:cotenidor1, position: 'center center'},
        {src:cotenidor2, position: 'center center'},
        {src:casetaJetSKi, position: 'center bottom'},
        {src:casetaControl, position: 'center bottom'},
        {src:casetaControl2, position: 'center bottom'}
    ]
    return (
        <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full">
            <Carousel images={images} size="absolute inset-0 w-full h-full" objectFit={"object-contain"} />
            
        </div>
    );
}

export default HeroBanner;
