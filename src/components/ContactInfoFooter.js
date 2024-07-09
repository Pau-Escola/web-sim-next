import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import Link from 'next/link';

function ContactInfoFooter({translations, locale}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-gray-200 text-gray-700 p-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h2 className="font-bold text-lg">{translations['Availability']}</h2>
                    <p>{translations['Open Times']}</p>
                    <p>{translations['Closed Times']}</p>
                </div>
                <div>
                    <h2 className="font-bold text-lg">{translations['Contact us']}</h2>
                    <p> (+34) 977 344 711</p>
                    <p> comercial@simreus.com</p>
                    <button
                        className="mt-2 right-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => setIsModalOpen(true)}
                    >
                        {translations['Contact us']}
                    </button>
                    {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} translations={translations}/>}
                </div>
                <div className="lg:col-span-2">
                    <h2 className="font-bold text-lg">{translations['Find us']}</h2>
                    <iframe
                        title="companyLocation"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18961.8461048295!2d1.1702911850807836!3d41.140103365181766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a151020133d66d%3A0x5d255a9fbe7e2f7e!2sSIM%20-%20Soluciones%20Integrales%20Modulares%20S.L.U.!5e0!3m2!1ses!2ses!4v1710687621482!5m2!1ses!2ses"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                </div>
                <div className="text-center mt-4">
                    <span className="text-black w-full text-center">
                    © {currentYear} {(translations['Rights Reserved'])}
                        <Link href={locale+"legal-policies"}  legacyBehavior>
                            <a className="text-blue-500">
                                {translations['Data Policies']}
                            </a>
                        </Link>.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactInfoFooter;
