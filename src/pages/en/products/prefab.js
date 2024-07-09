// pages/products/modul.js
import React from 'react';
import PrefabProductPageLayout from '../../../components/PrefabProductPageLayout';
import { getTranslation } from '../../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('en');
  return {
    props: {
      translations,
    },
  };
}

function PrefabPage({translations}) {

return (
        <>
            <PrefabProductPageLayout translations={translations} locale="/en/"/>
        </>
    );
}

export default PrefabPage;