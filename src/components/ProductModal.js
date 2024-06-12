// components/ProductModal.js
import React from 'react';
import CustomContactForm from './CustomContactForm';
import Carousel from './Carousel'; // Importing bin icon from react-icons

const ProductModal = ({ product, onClose, onAddToBasket, onRemoveFromBasket, isInBasket }) => {
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
                    <Carousel images={product.images} objectFit={"contain"} />
                </div>
                <p className="text-lg mb-4">{product.description}</p>
                <p className="text-lg font-bold mb-4">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductModal;
