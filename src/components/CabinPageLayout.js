import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import cabinImage from '../../public/images/homepage/refugi-de-camp.png'; // Replace with the correct image path
import designIcon from '../../public/images/servicesicons/disseny-blau.png';
import relocationIcon from '../../public/images/servicesicons/trasllat-blau.png';
import customIcon from '../../public/images/servicesicons/custom-blau.png';
import supportIcon from '../../public/images/servicesicons/postvenda-blau.png'; // Replace with actual images

const CabinPageLayout = ({ translations, locale }) => {
  const title = translations['Cabin Page'].Title;
  const imageSrc = cabinImage;
  const cabinTranslations = translations['Cabin Page'];
  const images = {
    "Design Consultation": designIcon,
    "Customization Options": customIcon,
    "Fast Delivery and Setup": relocationIcon,
    "After-Sales Support": supportIcon
  }; // Replace with logic to get actual icons

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
      <NavBar locale={locale} page={"product/cabin"} translations={translations} />
      <div className="relative h-64 w-full md:h-96 mb-8">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
          <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center px-4 md:px-8">
        <div className="lg:w-3/4 flex flex-col items-start mb-8 lg:mb-0 space-y-4">
          {/* Dynamic content starts here */}
          <section className="mb-8">
            <p className="md:text-xl mb-4">{cabinTranslations.Description.Text}</p>
            <p>{cabinTranslations.Conclusion.Text}</p>
          </section>

          <section className="mb-8">
      <h2 className="text-3xl font-bold mb-2">{cabinTranslations.Advantages.Title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(cabinTranslations.Advantages).filter(key => key !== 'Title').map((key) => (
          <div key={key} className="p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold mb-2">{cabinTranslations.Advantages[key].Title}</h3>
              <button 
                className="block md:hidden text-xl font-bold"
                onClick={() => toggleExpand(key)}
              >
                {expanded[key] ? '-' : '+'}
              </button>
            </div>
            <p className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>{cabinTranslations.Advantages[key].Text}</p>
          </div>
        ))}
      </div>
    </section> 

          <section className="mb-8 text-white bg-primary py-8">
  <div className="max-w-6xl mx-auto px-1 md:px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      {cabinTranslations['Our Services'].Title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-1">
      {Object.keys(cabinTranslations['Our Services']).filter(key => key !== 'Title').map((key) => (
        <div key={key} className="group relative md:border-4 bg-white sm:w-full text-primary border-primary shadow-sm rounded-lg overflow-hidden">
          <Image src={images[key]} alt={`${cabinTranslations['Our Services'][key].Title}`} className="sm:w-32 md:w-64 sm:h-32 md:h-64 mx-auto pt-5" />
          <h3 className="sm:text-xl md:text-2xl text-center mt-2 font-semibold">{cabinTranslations['Our Services'][key].Title}</h3>
          <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">
            <p className="text-sm sm:text-base md:text-lg p-4 text-white">{cabinTranslations['Our Services'][key].Text}</p>
          </div>
        </div>
      ))}
    </div>
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

export default CabinPageLayout;
