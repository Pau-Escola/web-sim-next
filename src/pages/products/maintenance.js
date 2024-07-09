import React from 'react';
import Head from 'next/head';
import MaintenancePageLayout from '../../components/MaintenancePageLayout';
import reparacioCanteraImage from '../../../public/images/homepage/reparacio.jpeg';
import { getTranslation } from '../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('es');
  return {
    props: {
      translations,
    },
  };
}

function MaintenancePage({translations}) {

    const title = translations['Maintenance'];
    const description = translations['Maintenance Text'];
    const imageSrc = reparacioCanteraImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <MaintenancePageLayout translations={translations} locale="/"/>
        </>
    );
}

export default MaintenancePage;
