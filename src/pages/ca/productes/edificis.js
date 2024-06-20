import React from 'react';
import Head from 'next/head';
import ProductPageLayout from '../../components/ProductPageLayout';
import { useTranslation } from 'react-i18next';
import edificiModularImage from '../../../public/images/homepage/edifici-despres.jpeg';

function BuildingPage() {
    const { t } = useTranslation();

    const title = t('Modular Building');
    const description = t('Modular Building Text');
    const imageSrc = edificiModularImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductPageLayout title={title} description={description} imageSrc={imageSrc} />
        </>
    );
}

export default BuildingPage;
