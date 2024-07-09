import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import maintenanceImage from '../../public/images/homepage/reparacio.jpeg'; // Replace with the correct image path

const MaintenancePageLayout = ({ translations, locale }) => {
  const title = translations['Maintenance Page'].Title;
  const imageSrc = maintenanceImage;
  const maintenanceTranslations = translations['Maintenance Page'];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar locale={locale} page={"products/maintenance"} translations={translations} />
      <div className="relative h-64 w-full md:h-96 mb-8">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
          <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-8">
        <div className="lg:w-3/4 flex flex-col items-start mb-8 lg:mb-0 space-y-4">
          {/* Dynamic content starts here */}
          <section className="mb-8">
            <p className=" md:text-xl mb-4">{maintenanceTranslations.Description.Text}</p>
          </section>

          <section className="mb-8">
      <h2 className="text-3xl font-bold mb-2">{maintenanceTranslations.Services.Title}</h2>
      <div className="space-y-4">
        {Object.keys(maintenanceTranslations.Services).filter(key => key !== 'Title').map((key) => (
          <div key={key} className="p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold mb-2">{maintenanceTranslations.Services[key].Title}</h3>
              <button 
                className="block md:hidden text-xl font-bold"
                onClick={() => toggleExpand(key)}
              >
                {expanded[key] ? '-' : '+'}
              </button>
            </div>
            <p className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>{maintenanceTranslations.Services[key].Text}</p>
          </div>
        ))}
      </div>
    </section>

          {/* Dynamic content ends here */}
        </div>
        <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-20 lg:mr-8">
          <div className="bg-primary p-9 rounded-md">
            <div className="bg-primary text-white p-4 text-center rounded-md">
              <h2 className="text-xl md:text-4xl font-bold">{translations['Contact us']}</h2>
            </div>
            <ContactForm translations={translations} locale={locale} />
          </div>
        </div>
      </div>
      <div className="sm:h-16 md:h-20"></div>
      <ContactInfoFooter translations={translations} locale={locale} />
    </>
  );
};

export default MaintenancePageLayout;
