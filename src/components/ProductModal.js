import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Carousel from './Carousel';

const ProductModal = ({ product, onClose, translations, locale }) => {
    const [contactOpen, setContactOpen] = useState(false);

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg"> {/* Adjusted width */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <div className="relative h-96 w-full mb-4"> {/* Adjusted height */}
                    <Carousel images={product.images} objectFit={"contain"} encoded="true" translations={translations} />
                </div>
                <p className="text-lg mb-4">{product.description}</p>
                <p className="text-lg mb-4">
                    {translations['size']}: {product.length} m x {product.width} m
                </p>
                {product.sold && (
                    <p className="text-red-600 font-bold mb-4">{translations['Product Sold']}</p>
                )}
                {product.booked && (
                    <p className="text-yellow-600 font-bold mb-4">{translations['Product Booked']}</p>
                )}
                <button
                    onClick={() => setContactOpen(!contactOpen)}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
                >
                    {translations['Contact us']}
                </button>
                {contactOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                            <button
                                onClick={() => setContactOpen(false)}
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                            >
                                &times;
                            </button>
                            <ContactForm product={product} translations={translations} locale={locale} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductModal;
