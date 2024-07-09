import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import ContactInfoFooter from '../../components/ContactInfoFooter';
import { getTranslation } from '../../lib/getTranslation';


export async function getStaticProps() {
    const translations = getTranslation('en');
    return {
      props: {
        translations,
      },
    };
  }
  

const LegalPolicies = ({translations}) => { 
    return (
        <>
            <Head>
                <title>Legal Policies - SIM Reus</title>
            </Head>
            <NavBar locale="/en/" page="legal-policies" translations={translations}/>
            <div className="legal-policies-container" style={{ padding: '20px', lineHeight: '1.6' }}>
                <h1 className="font-bold text-center text-5xl p-7 sm:py-20">{translations['legalNoticeTitle']}</h1>
                <br />
                <h2 className="font-semibold text-xl">{translations['ownershipTitle']}</h2>
                <p>{translations['ownershipContent']}</p>
                <br />
                <h2 className="font-semibold text-xl">{translations['personalDataTitle']}</h2>
                <p>{translations['personalDataContent']}</p>
                <br />
                <h2 className="font-semibold text-xl">{translations['cookiesTitle']}</h2>
                <p>{translations['cookiesContent']}</p>
                <br />
                <h2 className="font-semibold text-xl">{translations['dataRightsTitle']}</h2>
                <p>{translations['dataRightsContent']}</p>
                <br />
                <h2 className="font-semibold text-xl">{translations['securityTitle']}</h2>
                <p>{translations['securityContent']}</p>
            </div>
            <ContactInfoFooter translations={translations} locale="/en/"/>
        </>
    );
};

export default LegalPolicies;