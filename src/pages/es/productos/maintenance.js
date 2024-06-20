import React from 'react';
import Head from 'next/head';
import ProductPageLayout from '../../components/ProductPageLayout';
import { useTranslation } from 'react-i18next';
import reparacioCanteraImage from '../../../public/images/homepage/reparacio-cantera.jpg';

function MaintenancePage() {
    const { t } = useTranslation();

    const title = t('Maintenance');
    const description = t('Maintenance Text');
    const imageSrc = reparacioCanteraImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ProductPageLayout title={title} description={description} imageSrc={imageSrc} />
        </>
    );
}

export default MaintenancePage;
