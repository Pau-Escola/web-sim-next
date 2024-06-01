import React from 'react';
import Head from 'next/head';
import ProductPageLayout from '../../components/ProductPageLayout';
import { useTranslation } from 'react-i18next';
import casetaOcasioImage from '../../../public/images/homepage/ocasio-1.JPG';

function SalePage() {
    const { t } = useTranslation();

    const title = t('Sale');
    const description = t('Sale Text');
    const imageSrc = casetaOcasioImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductPageLayout title={title} description={description} imageSrc={imageSrc} />
        </>
    );
}

export default SalePage;
