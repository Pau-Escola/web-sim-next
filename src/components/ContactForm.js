import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const ContactForm = () => {
    const { t } = useTranslation();
    const [contact, setContact] = useState({ from_name: '', reply_to: '', message: '', contact_phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
    const [isAgreed, setIsAgreed] = useState(false);
    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID); // Initialize EmailJS with your user ID
    }, []);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isAgreed) {
            alert(t('Accept Policies Alert'));
            return;
        }
        setIsSubmitting(true); // Disable the submit button when the form is submitted

        emailjs.send( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, contact, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert(t('Sent Success'));
                setIsSubmitting(false); // Re-enable the submit button after successful submission
            }, (error) => {
                console.log(error.text);
                alert(t('Sent Failure'));
                setIsSubmitting(false); // Re-enable the submit button even if there's an error
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-4 px-8 bg-white shadow-md rounded-lg">
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
            <label htmlFor="checkbox" />
                <input type="checkbox" checked={isAgreed} onChange={handleCheckboxChange} />
                <span className="text-black">{t('I agree')} <Link href="/legal-policies">{t('Data Policies')}
      </Link>.</span>
            </div>
            <div>
                <button type="submit" disabled={isSubmitting} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {isSubmitting ? t('Sending') : t('Send')}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
