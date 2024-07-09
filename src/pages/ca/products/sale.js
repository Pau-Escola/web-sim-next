import React from 'react';
import SalePageLayout from '../../../components/SalePageLayout';
import { getTranslation } from '../../../lib/getTranslation';

export async function getStaticProps() {
  const translations = getTranslation('ca');
  return {
    props: {
      translations,
    },
  };
}

function SalesPage ({ translations }) {

  return (
    <>
      <SalePageLayout translations={translations} locale="/ca/"/>
    </>
  );
};

export default SalesPage;