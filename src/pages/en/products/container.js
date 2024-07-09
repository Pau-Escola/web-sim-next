import React from 'react';
import Head from 'next/head';
import ContainerProductPageLayout from '../../../components/ContainerProductPageLayout';
import { getTranslation } from '../../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('en');
  return {
    props: {
      translations,
    },
  };
}

function ContainerPage({translations}) {

    return (
        <>
            <ContainerProductPageLayout translations={translations} locale="/en/"/>
        </>
    );
}

export default ContainerPage;
