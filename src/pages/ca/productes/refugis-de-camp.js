import React from 'react';
import Head from 'next/head';
import ProductPageLayout from '../../components/ProductPageLayout';
import { useTranslation } from 'react-i18next';
import cabinIconImage from '../../../public/images/homepage/refugi-de-camp.png';

function CabinPage() {
    const { t } = useTranslation();

    const title = t('Cabin');
    const description = t('Cabin Text');
    const imageSrc = cabinIconImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductPageLayout title={title} description={description} imageSrc={imageSrc} />
        </>
    );
}

export default CabinPage;
