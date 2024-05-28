import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import NavBar from '../components/NavBar';
import ContactInfoFooter from '../components/ContactInfoFooter';

const LegalPolicies = () => {
    const { t } = useTranslation('common'); // Specify the translation namespace here

    return (
        <>
            <Head>
                <title>Legal Policies - SIM Reus</title>
            </Head>
            <NavBar />
            <div className="legal-policies-container" style={{ padding: '20px', lineHeight: '1.6' }}>
                <h1 className="font-bold text-center text-5xl p-7 sm:py-20">{t('legalNoticeTitle')}</h1>
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

export async function getServerSideProps({ locale }) {
    const translations = await serverSideTranslations(locale, ['common']);
    return {
        props: {
            ...translations,
        },
    };
}

export default LegalPolicies;
