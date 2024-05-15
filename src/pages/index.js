import React, { useState } from 'react';
import HomePage from '../components/HomePage';
import ContactFormModal from '../components/ContactFormModal';
import NavBar from '../components/NavBar';
import ContactInfoFooter from '../components/ContactInfoFooter';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="App">
      <NavBar />
      <div>
        <button
          className="fixed bottom-4 right-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
          onClick={() => setIsModalOpen(true)}
        >
          {t('Contact us')}
        </button>
        {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}
      </div>
      <HomePage />
      <ContactInfoFooter />
    </div>
  );
};

export default Index;
