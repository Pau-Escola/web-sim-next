// components/ProductAdminCard.js
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaTrash, FaBookmark, FaCheck, FaEdit, FaStar } from 'react-icons/fa';

const ProductAdminCard = ({ product, onSelectProduct, token, fetchProducts }) => {
    const mainImage = product.images.find(image => image.isMain === true);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_URL; 

    const handleDelete = async (e) => {
        e.stopPropagation();
        try {
            await axios.delete(`${API_BASE_URL}/products/${product.reference}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleToggleBooked = async (e) => {
        e.stopPropagation();
        try {
            const updatedBooked = !product.booked;
            await axios.patch(`${API_BASE_URL}/products/${product.reference}`, { booked: updatedBooked }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProducts();
        } catch (error) {
            console.error('Error toggling booked status:', error);
        }
    };

    const handleToggleSold = async (e) => {
        e.stopPropagation();
        try {
            const updatedSold = !product.sold;
            await axios.patch(`${API_BASE_URL}/products/${product.reference}`, { sold: updatedSold }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProducts();
        } catch (error) {
            console.error('Error toggling sold status:', error);
        }
    };

    const handleToggleFeatured = async (e) => {
        e.stopPropagation();
        try {
            const updatedFeatured = !product.featured;
            await axios.patch(`${API_BASE_URL}/products/${product.reference}`, { featured: updatedFeatured }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProducts();
        } catch (error) {
            console.error('Error toggling featured status:', error);
        }
    };

    return (
        <div 
            className="relative shadow-xl rounded-lg overflow-hidden w-[20vh] h-[20vh] md:w-[25vh] md:h-[25vh] lg:w-[30vh] lg:h-[30vh] group" 
        >
            {mainImage && (
                    <Image
                        src={`${API_BASE_IMAGE_URL}${mainImage.imageUrl}`}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                    />
            )}
            <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="bg-black bg-opacity-60 text-white p-2">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-white text-l md:text-xl font-semibold">{product.title}</h3>
                    </div>
                </div>
            </div>
            <div className="absolute top-2 right-2 flex space-x-2">
                <button 
                    onClick={() => setShowDeleteConfirmation(true)}
                    className="text-red-600 bg-white rounded-full p-2"
                >
                    <FaTrash />
                </button>
                <button 
                    onClick={handleToggleBooked} 
                    className={`text-yellow-600 bg-white rounded-full p-2 ${product.booked ? '' : 'opacity-50'}`}
                >
                    <FaBookmark />
                </button>
                <button 
                    onClick={handleToggleSold} 
                    className={`text-green-600 bg-white rounded-full p-2 ${product.sold ? '' : 'opacity-50'}`}
                >
                    <FaCheck />
                </button>
                <button 
                    onClick={handleToggleFeatured} 
                    className={`text-yellow-400 bg-white rounded-full p-2 ${product.featured ? '' : 'opacity-50'}`}
                >
                    <FaStar />
                </button>
                <button
                    onClick={() => onSelectProduct(product)}
                    className="text-blue-600 bg-white rounded-full p-2"
                >
                    <FaEdit />
                </button>
            </div>
            {showDeleteConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Segur que vols esborrar el producte?</h3>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                            >
                                Si
                            </button>
                            <button
                                onClick={() => setShowDeleteConfirmation(false)}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductAdminCard;
