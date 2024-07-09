import React from 'react';
import { getTranslation } from '../../lib/getTranslation';
import HomePage from '../../components/HomePage';

export async function getStaticProps() {
  const translations = getTranslation('ca');
  return {
    props: {
      translations,
    },
  };
}

function InicioPage({ translations }) {

  return (
    <>
      <HomePage translations={translations} locale="/ca/" page="inici"/>
    </>
  );
}

export default InicioPage;
