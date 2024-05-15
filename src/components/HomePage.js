import React from 'react';
import Head from 'next/head';
import HeroBanner from './HeroBanner';
import ServicesSection from './ServicesSection';
import ProductsSection from './ProductSection';

function HomePage() {

  return (
    <>
    <Head>
        <title>SIM Reus</title>
      </Head>
      <HeroBanner />
      <ServicesSection />
      <ProductsSection />
    </>
  );
}

export default HomePage;
