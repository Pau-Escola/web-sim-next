import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import contenidorNou from '../../public/images/homepage/contenidor-1.JPG';
import modul from '../../public/images/homepage/modul-2.jpg';
import casetaOcasio from '../../public/images/homepage/ocasio-1.JPG';
import edificiModular from '../../public/images/homepage/edifici-despres.jpeg';
import reparacioCantera from '../../public/images/homepage/reparacio-cantera.jpg';
import cabinIcon from '../../public/images/homepage/refugi-de-camp.png';
import Image from 'next/image';

const products = [
    {
        img: contenidorNou,
        titleKey: 'Container',
        textKey: 'Container Text',
        url: '/products/container',
        objectPosition: 'center top'
    },
    {
        img: modul,
        titleKey: 'Prefabs',
        textKey: 'Prefabs Text',
        url: '/products/prefab',
        objectPosition: 'center center'
    },
    {
        img: casetaOcasio,
        titleKey: 'Sale',
        textKey: 'Sale Text',
        url: '/products/sale',
        objectPosition: 'center center'
    },
    {
        img: edificiModular,
        titleKey: 'Modular Building',
        textKey: 'Modular Building Text',
        url: '/products/building',
        objectPosition: 'left center'
    },
    {
        img: reparacioCantera,
        titleKey: 'Maintenance',
        textKey: 'Maintenance Text',
        url: '/products/maintenance',
        objectPosition: 'center top'
    },
    {
        img: cabinIcon,
        titleKey: 'Cabin',
        textKey: 'Cabin Text',
        url: '/products/cabin',
        objectPosition: 'center center'
    }
];

const ProductsSection = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4">
            <div className="services-section my-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{t('Our products')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Link href={product.url} key={index} legacyBehavior>
                            <a className="relative shadow-xl rounded-lg overflow-hidden h-64 md:h-64 lg:h-80 group">
                                <Image 
                                    src={product.img} 
                                    alt={t(product.titleKey)} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    style={{ objectPosition: product.objectPosition }} 
                                    className="absolute inset-0 z-0"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end">
                                    <div className="bg-black bg-opacity-60 text-white p-2 transition-transform duration-300 group-hover:translate-y-full">
                                        <h3 className="text-xl font-semibold">{t(product.titleKey)}</h3>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-xl font-semibold mb-2">{t(product.titleKey)}</h3>
                                    <p className="text-white text-lg">{t(product.textKey)}</p>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
