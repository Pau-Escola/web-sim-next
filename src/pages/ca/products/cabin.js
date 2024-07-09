import React from 'react';
import Head from 'next/head';
import CabinPageLayout from '../../../components/CabinPageLayout';
import { getTranslation } from '../../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('ca');
  return {
    props: {
      translations,
    },
  };
}

function CabinPage({translations}) {
    return (
        <>
            <CabinPageLayout translations={translations} locale="/ca/"/>
        </>
    );
}

export default CabinPage;
