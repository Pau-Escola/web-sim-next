import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CustomContactForm = ({ basket }) => {
    const { t } = useTranslation();
    const [contact, setContact] = useState({ from_name: '', reply_to: '', message: '', contact_phone: '' });
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-form bg-white shadow-md rounded-lg p-4 mt-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form>
            <div className="mb-4">
                <label htmlFor="from_name" className="block text-gray-700 text-sm font-bold mb-2">{t('Name')}</label>
                <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    value={contact.from_name}
                    onChange={handleChange}
                    placeholder={t('Name PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="contact_phone" className="block text-gray-700 text-sm font-bold mb-2">{t('Phone')}</label>
                <input
                    type="phone"
                    name="contact_phone"
                    id="contact_phone"
                    value={contact.contact_phone}
                    onChange={handleChange}
                    placeholder={t('Phone PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="reply_to" className="block text-gray-700 text-sm font-bold mb-2">{t('Email')}</label>
                <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    value={contact.reply_to}
                    onChange={handleChange}
                    placeholder={t('Email PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{t('Message')}</label>
                <textarea
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t('Message PlaceHolder')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                ></textarea>
            </div>
                <div>
                    <h3 className="text-lg font-semibold">Basket Items:</h3>
                    <ul>
                        {basket.map((product, index) => (
                            <li key={index}>{product.title} - {product.price}</li>
                        ))}
                    </ul>
                </div>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CustomContactForm;
