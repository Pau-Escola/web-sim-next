import React from 'react';
import Head from 'next/head';
import ProductPageLayout from '../../components/ProductPageLayout';
import { useTranslation } from 'react-i18next';
import contenidorNouImage from '../../../public/images/homepage/contenidor-1.JPG';

function ContainerPage() {
    const { t } = useTranslation();

    const title = t('Container');
    const description = t('Container Text');
    const imageSrc = contenidorNouImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductPageLayout title={title} description={description} imageSrc={imageSrc} />
        </>
    );
}

export default ContainerPage;
