// components/ProductModal.js
import React from 'react';
import Image from 'next/image';
import Carousel from './Carousel'; // Your Carousel component

const ProductModal = ({ product, onClose, onAddToBasket, onRemoveFromBasket }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <div className="relative h-64 w-full mb-4">
                    <Carousel images={product.images} objectFit={"contain"}/>
                </div>
                <p className="text-lg mb-4">{product.description}</p>
                <p className="text-lg font-bold mb-4">{product.price}</p>
                <button
                    onClick={() => onAddToBasket(product)}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
                >
                    Add to Basket
                </button>
                <button
                    onClick={() => onRemoveFromBasket(product.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
                >
                    Remove from Basket
                </button>
            </div>
        </div>
    );
};

export default ProductModal;
