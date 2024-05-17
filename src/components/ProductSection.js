import React from 'react';
import { useTranslation } from 'react-i18next';
import contenidorNou from '../../public/images/homepage/contenidor-1.JPG';
import modul from '../../public/images/homepage/modul-2.jpg';
import casetaOcasio from '../../public/images/homepage/ocasio-1.JPG';
import edificiModular from '../../public/images/homepage/edifici-despres.jpeg';
import reparacioCantera from '../../public/images/homepage/reparacio-cantera.jpg';
import cabinIcon from '../../public/images/homepage/planol-cabina-camp.jpeg';

import Image from 'next/image';

const products = [
    {
        img: contenidorNou,
        titleKey: 'Container',
        textKey: 'Container Text',
        objectPosition: 'center top'
    },
    {
        img: modul,
        titleKey: 'Prefabs',
        textKey: 'Prefabs Text',
        objectPosition: 'center center'
    },
    {
        img: casetaOcasio,
        titleKey: 'Sale',
        textKey: 'Sale Text',
        objectPosition: 'center center'
    },
    {
        img: edificiModular,
        titleKey: 'Modular Building',
        textKey: 'Modular Building Text',
        objectPosition: 'left center'
    },
    {
        img: reparacioCantera,
        titleKey: 'Maintenance',
        textKey: 'Maintenance Text',
        objectPosition: 'center top'
    },
    {
        img: cabinIcon,
        titleKey: 'Cabin',
        textKey:'Cabin Text',
        objectPosition: 'center center'
    }
];

const ProductsSection = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4">
            <div className="services-section my-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{t('Our products')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="service-item shadow-xl rounded-lg p-8 border border-gray-200">
                            <div className="flex justify-center">
                                <Image src={product.img} alt={t(product.titleKey)} className="w-full h-64 md:h-64 lg:h-80 object-contain lg:object-cover" style={{ objectPosition: product.objectPosition }} />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4">{t(product.titleKey)}</h3>
                            <p className="mt-2 text-lg">{t(product.textKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
