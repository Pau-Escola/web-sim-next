import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onAddToBasket, onSelectProduct }) => {
    return (
        <div className="product-card bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
                <Image src={product.images[0]} alt={product.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-lg text-gray-600">{product.price}</p>
                <button
                    className="mt-2 px-4 py-2 bg-primary text-white rounded"
                    onClick={() => onAddToBasket(product)}
                >
                    Add to Basket
                </button>
                <button
                    className="mt-2 ml-4 px-4 py-2 bg-secondary text-white rounded"
                    onClick={() => onSelectProduct(product)}
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
