import React from 'react';
import Head from 'next/head';
import ModularBuildingPageLayout from '../../../components/ModularBuildingPageLayout';
import edificiModularImage from '../../../../public/images/homepage/edifici.jpeg';
import { getTranslation } from '../../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('ca');
  return {
    props: {
      translations,
    },
  };
}

function BuildingPage({translations}) {

    const title = translations['Modular Building'];
    const description = translations['Modular Building Text'];
    const imageSrc = edificiModularImage;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ModularBuildingPageLayout translations={translations} locale="/ca/"/>
        </>
    );
}

export default BuildingPage;
