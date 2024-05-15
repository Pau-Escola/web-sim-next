import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import NavBar from '../components/NavBar';
import ContactInfoFooter from '../components/ContactInfoFooter';

const LegalPolicies = () => {
    const { t } = useTranslation();

    return (
        <>
        <Head>
        <title>Legal Policies - SIM Reus</title>
      </Head>
      <NavBar />
        <div className="legal-policies-container" style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1 className="font-bold text-2xl">{t('legalNoticeTitle')}</h1>
            <br />
            <h2 className="font-semibold text-xl">{t('ownershipTitle')}</h2>
            <p>{t('ownershipContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('personalDataTitle')}</h2>
            <p>{t('personalDataContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('cookiesTitle')}</h2>
            <p>{t('cookiesContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('dataRightsTitle')}</h2>
            <p>{t('dataRightsContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('securityTitle')}</h2>
            <p>{t('securityContent')}</p>
        </div>
        <ContactInfoFooter />
        </>
    );
};

export default LegalPolicies;
