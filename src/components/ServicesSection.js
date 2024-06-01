import React from 'react';
import rentIcon from '../../public/images/servicesicons/lloguer-blau.png';
import relocationIcon from '../../public/images/servicesicons/trasllat-blau.png';
import repairIcon from '../../public/images/servicesicons/reparacio-blau.png';
import buyIcon from '../../public/images/servicesicons/venda-blau.png';
import recycleIcon from '../../public/images/servicesicons/reciclar-blau.png';
import tradingIcon from '../../public/images/servicesicons/trading-blau.png';
import { useTranslation, Trans } from 'react-i18next';
import Image from 'next/image';

function ServicesSection() {
    const { t } = useTranslation();

    return (
        <div className="bg-primary py-8">
            <div className="max-w-6xl mx-auto px-1 md:px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">{t('Our services')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-1">
                    {[
                        { icon: rentIcon, title: 'Rent', text: 'Rent Text' },
                        { icon: buyIcon, title: 'Buy', text: 'Buy Text' },
                        { icon: repairIcon, title: 'Repairs', text: 'Repairs Text' },
                        { icon: relocationIcon, title: 'Relocation', text: 'Relocation Text' },
                        { icon: recycleIcon, title: 'Recycled Goods', text: 'Recycled Goods Text' },
                        { icon: tradingIcon, title: 'Trading', text: 'Trading Text' }
                    ].map((service, index) => (
                        <div key={index} className="group relative md:border-4 bg-white sm:w-full text-primary border-primary shadow-sm rounded-lg overflow-hidden">
                            <Image src={service.icon} alt={`${service.title}`} className="sm:w-32 md:w-64 sm:h-32 md:h-64 mx-auto pt-5" />
                            <h3 className="sm:text-xl md:text-2xl text-center mt-2 font-semibold">{t(service.title)}</h3>
                            <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">
                                <p className="text-sm sm:text-base md:text-lg p-4 text-white"><Trans i18nKey={`${service.text}`} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;