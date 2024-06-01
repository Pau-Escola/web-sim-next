// pages/products/modul.js
import React from 'react';
import Head from 'next/head';
import ProductPageLayout from '../../components/ProductPageLayout';
import { useTranslation } from 'react-i18next';
import modulImage from '../../../public/images/homepage/modul-2.jpg';

function PrefabPage() {
    const { t } = useTranslation();

    const title = t('Prefabs');
    const description = t('Prefabs Text');
    const imageSrc = modulImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductPageLayout title={title} description={description} imageSrc={imageSrc} />
        </>
    );
}

export default PrefabPage;
