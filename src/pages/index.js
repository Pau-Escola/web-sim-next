import React from 'react';
import { getTranslation } from '../lib/getTranslation';
import HomePage from '../components/HomePage';

export async function getStaticProps() {
  const translations = getTranslation('es');
  return {
    props: {
      translations,
    },
  };
}

function InicioPage({ translations }) {

  return (
    <>
      <HomePage translations={translations} locale="/" page=""/>
    </>
  );
}

export default InicioPage;
