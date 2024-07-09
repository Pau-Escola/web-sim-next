import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import modularBuildingImage from '../../public/images/homepage/edifici.jpeg';
import customIcon from '../../public/images/servicesicons/custom-blau.png';
import designIcon from '../../public/images/servicesicons/disseny-blau.png';
import projectIcon from '../../public/images/servicesicons/projecte-blau.png';
import supportIcon from '../../public/images/servicesicons/postvenda-blau.png';
import relocationIcon from '../../public/images/servicesicons/trasllat-blau.png';

const ModularBuildingPageLayout = ({ translations, locale }) => {
  const title = translations['Prefab Building'].Title || 'Modular Building'; // Fallback title
  const imageSrc = modularBuildingImage;
  const prefabBuildingTranslations = translations['Prefab Building'];
  const images = {
    "Design Consultation": designIcon,
     "Customization Options": customIcon,
      "Project Management":projectIcon,
       "Transportation and Installation":relocationIcon,
        "After-Sales Support":supportIcon};

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
      <NavBar locale={locale} page={"products/building"} translations={translations} />
      <div className="relative h-64 w-full lg:h-96 mb-8">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
          <h2 className="text-xl lg:text-4xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-8">
        <div className="lg:w-3/4 flex flex-col items-start mb-8 lg:mb-0 space-y-4">
          {/* Dynamic content starts here */}
          <section className="mb-8">
            <p className=" md:text-xl mb-4">{prefabBuildingTranslations.Description.Text}</p>
            <p className="mb-4">{prefabBuildingTranslations.Conclusion.Text}</p>
          </section>

          <section className="mb-8">
      <h2 className="text-3xl font-bold mb-2">{prefabBuildingTranslations.Advantages.Title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Object.keys(prefabBuildingTranslations.Advantages).filter(key => key !== 'Title').map((key) => (
          <div key={key} className="p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold mb-2">{prefabBuildingTranslations.Advantages[key].Title}</h3>
              <button 
                className="block md:hidden text-xl font-bold"
                onClick={() => toggleExpand(key)}
              >
                {expanded[key] ? '-' : '+'}
              </button>
            </div>
            <p className={`md:block ${expanded[key] ? 'block' : 'hidden'}`}>{prefabBuildingTranslations.Advantages[key].Text}</p>
          </div>
        ))}
      </div>
    </section>

          <section className="mb-8 text-white bg-primary py-8">
  <div className="max-w-6xl mx-auto px-1 md:px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      {prefabBuildingTranslations['Our Services'].Title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-1">
      {Object.keys(prefabBuildingTranslations['Our Services']).filter(key => key !== 'Title').map((key) => (
        <div key={key} className="group relative md:border-4 bg-white sm:w-full text-primary border-primary shadow-sm rounded-lg overflow-hidden">
          <Image src={images[key]} alt={`${prefabBuildingTranslations['Our Services'][key].Title}`} className="sm:w-32 md:w-64 sm:h-32 md:h-64 mx-auto pt-5" />
          <h3 className="sm:text-xl md:text-2xl text-center mt-2 font-semibold">{prefabBuildingTranslations['Our Services'][key].Title}</h3>
          <div className="absolute inset-0 bg-primary bg-opacity-95 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">
            <p className="text-sm sm:text-base md:text-lg p-4 text-white">{prefabBuildingTranslations['Our Services'][key].Text}</p>
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

export default ModularBuildingPageLayout;
