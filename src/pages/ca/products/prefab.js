// pages/products/modul.js
import React from 'react';
import Head from 'next/head';
import PrefabProductPageLayout from '../../../components/PrefabProductPageLayout';
import { getTranslation } from '../../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('ca');
  return {
    props: {
      translations,
    },
  };
}

function PrefabPage({translations}) {

return (
        <>
            <PrefabProductPageLayout translations={translations} locale="/ca/"/>
        </>
    );
}

export default PrefabPage;