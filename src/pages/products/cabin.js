import React from 'react';
import CabinPageLayout from '../../components/CabinPageLayout';
import { getTranslation } from '../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('es');
  return {
    props: {
      translations,
    },
  };
}

function CabinPage({translations}) {

    return (
        <>
            <CabinPageLayout translations={translations} locale="/" />
        </>
    );
}

export default CabinPage;
