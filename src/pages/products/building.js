import React from 'react';
import ModularBuildingPageLayout from '../../components/ModularBuildingPageLayout';
import { getTranslation } from '../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('es');
  return {
    props: {
      translations,
    },
  };
}

function BuildingPage({translations}) {

    return (
        <>
            <ModularBuildingPageLayout translations={translations} locale="/"/>
        </>
    );
}

export default BuildingPage;
