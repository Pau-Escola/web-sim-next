// components/ProductModal.js
import React from 'react';
import Image from 'next/image';
import Carousel from './Carousel'; // Your Carousel component
import { FaTrashAlt, FaPlus } from 'react-icons/fa'; // Importing bin icon from react-icons

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
                {!isInBasket && (
                    <button
                        onClick={() => onAddToBasket(product)}
                        className="px-2 py-2 bg-primary text-white rounded-md hover:bg-secondary transition absolute bottom-0 left-0 m-2"
                    >
                        <FaPlus size={24} />
                    </button>
                )}
                {isInBasket && (
                    <button
                        className="bg-red-500 text-white p-2 rounded-md absolute bottom-0 right-0 m-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemoveFromBasket(product.id);
                        }}
                    >
                        <FaTrashAlt size={24} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductModal;
