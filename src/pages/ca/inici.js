import React from 'react';
import axios from 'axios';
import { getTranslation } from '../../lib/getTranslation';
import HomePage from '../../components/HomePage';

export async function getServerSideProps() {
  const translations = getTranslation('ca');
  
  let featuredProducts = [];
  try {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(`${API_BASE_URL}/products`);
    featuredProducts = response.data.filter(product => product.featured === true);
  } catch (error) {
    console.error('Error fetching featured products:', error);
  }

  return {
    props: {
      translations,
      featuredProducts,
    },
  };
}

function InicioPage({ translations, featuredProducts }) {

  return (
    <>
      <HomePage translations={translations} locale="/ca/" page="inici" featuredProducts={featuredProducts}/>
    </>
  );
}

export default InicioPage;
