import React from 'react';
import Image from 'next/image';
import { FaCalendarCheck } from 'react-icons/fa';

const ProductCard = ({ product, onSelectProduct, translations }) => {
    const mainImage = product.images.find(image => image.isMain === true);

    return (
        <div 
            className="relative shadow-xl rounded-lg overflow-hidden group cursor-pointer w-[20vh] h-[20vh] md:w-[25vh] md:h-[25vh] lg:w-[30vh] lg:h-[30vh]" 
            onClick={() => onSelectProduct(product)} 
        >
            {mainImage && (
                <picture>
                    <source srcSet={`http://localhost:4000${mainImage.imageUrls[1200]}`} media="(min-width: 1200px)" />
                    <source srcSet={`http://localhost:4000${mainImage.imageUrls[800]}`} media="(min-width: 800px)" />
                    <Image
                        src={`http://localhost:4000${mainImage.imageUrls[400]}`}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                    />
                </picture>
            )}
            {product.sold && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
                    <span className="text-red-600 text-4xl font-bold border-4 border-red-600 rounded-full p-2 transform rotate-45">
                        {translations['Product Sold']}
                    </span>
                </div>
            )}
            {product.booked && (
                <div className="absolute top-2 right-2 z-10">
                    <FaCalendarCheck className="text-yellow-400 text-3xl" />
                </div>
            )}
            <div className="absolute inset-0 flex flex-col justify-end">
                <div className="bg-black bg-opacity-60 text-white p-2">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-white text-l md:text-xl font-semibold">{product.title}</h3>
                        <span className="text-white text-l md:text-xl font-semibold">{product.price} €</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
