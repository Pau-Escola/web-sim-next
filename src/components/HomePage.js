import React, { useState } from 'react';
import Head from 'next/head';
import HeroBanner from './HeroBanner';
import ServicesSection from './ServicesSection';
import ProductsSection from './ProductSection';
import WelcomeText from './WelcomeText';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import ContactFormModal from './ContactFormModal';
import DataBand from './DataBand';


function HomePage({ translations, locale, page }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataArray = [
      ['+100 mil', 'Unidades vendidas'],
      ['+500.000' , 'Unidades alquiladas'],
      ['+70.000' , 'Reparaciones'],
      ['+8k' , 'Traslados'],
      ['+9000' , 'Clientes satisfechos']]
  
    return (
      <>
        <Head>
          <title>{translations['Welcome to SIM']}</title>
        </Head>
        <NavBar locale={locale} page={page} translations={translations}/>
        <HeroBanner translations={translations} locale={locale} />
        <div className='mb-5'>
        <DataBand dataArray={dataArray}/>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-center">
            <WelcomeText translations={translations} locale={locale}/>
          </div>
          <div className="p-9 md:w-1/2 bg-primary">
            <ServicesSection translations={translations} />
          </div>
        </div>
        <ProductsSection translations={translations} locale={locale} />
        <ContactInfoFooter translations={translations} locale={locale}/>
        <button className="mb-8 mr-8 md:mb-5 lg:mb-8 text-lg md:text-xl lg:text-xl bg-primary hover:bg-secondary text-white font-bold  rounded-full z-50 p-3 fixed bottom-0 right-0 " onClick={() => setIsModalOpen(true)}>
            {translations['Contact us']}
        </button>
        {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} translations={translations} locale={locale}/>}
      </>
    );
  }
  
  export default HomePage;
