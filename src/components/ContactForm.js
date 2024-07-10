import React, { useState, useEffect  } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import Image from 'next/image';

const ContactForm = ({ product, translations, locale }) => {
    const [contact, setContact] = useState({ from_name: '', reply_to: '', message: '', contact_phone: '', reference:'' });
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
    const [isAgreed, setIsAgreed] = useState(false);
    const API_BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_URL; 
    const mainImage = product?.images.find(image => image.isMain === true);
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
            alert(translations['Accept Policies Alert']);
            return;
        }
        setIsSubmitting(true); // Disable the submit button when the form is submitted

        emailjs.send( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, contact, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert(translations['Sent Success']);
                setIsSubmitting(false); // Re-enable the submit button after successful submission
            }, (error) => {
                console.log(error.text);
                alert(translations['Sent Failure']);
                setIsSubmitting(false); // Re-enable the submit button even if there's an error
            });
    };

    contact.reference = product? 'Interessat en producte amb referencia ' + product.reference : '';


    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{translations['Ask for quote']}</h2>
            {product && (
                <>
                 <p className="mb-4 flex items-center">
                 <strong>{product.title}</strong>
                </p>
                <Image
                     src={`${API_BASE_IMAGE_URL}${mainImage.imageUrl}`}
                     alt={product.title}
                     width={150} // Adjust the width as needed
                     height={150} // Adjust the height as needed
                     className="ml-2" // Add margin for spacing if necessary
                />
                 </>
            )}
             <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-4 px-8 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label htmlFor="from_name" className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    value={contact.from_name}
                    onChange={handleChange}
                    placeholder={translations['Name']}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="contact_phone" className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input
                    type="phone"
                    name="contact_phone"
                    id="contact_phone"
                    value={contact.contact_phone}
                    onChange={handleChange}
                    placeholder={translations['Phone']}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="reply_to" className="block text-gray-700 text-sm font-bold mb-2"></label>
                <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    value={contact.reply_to}
                    onChange={handleChange}
                    placeholder={translations['Email']}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2"></label>
                <textarea
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={translations['Message']}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                ></textarea>
            </div>
            <div>
            <label htmlFor="checkbox" />
                <input type="checkbox" checked={isAgreed} onChange={handleCheckboxChange} />
                <span className="text-black">{translations['I agree']} 
                    <Link href={locale+"legal-policies"}  legacyBehavior>
                        <a className="text-blue-500">
                            {translations['Data Policies']}
                        </a>
                    </Link>.
                </span>
            </div>
            <div>
                <button type="submit" disabled={isSubmitting} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {isSubmitting ? translations['Sending'] : translations['Send']}
                </button>
            </div>
        </form>
        </div>
    );
};

export default ContactForm;
