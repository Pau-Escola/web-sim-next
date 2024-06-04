import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onAddToBasket, onRemoveFromBasket, onSelectProduct, isInBasket}) => {
    return (
        <div className="relative shadow-xl rounded-lg overflow-hidden h-64 md:h-64 lg:h-80 group cursor-pointer" onClick={() => onSelectProduct(product)} >
                <Image 
                    src={product.images[0]} 
                    alt={product.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute inset-0 z-0"
                />
            <div className="absolute inset-0 flex flex-col justify-end">
                <div className="bg-black bg-opacity-60 text-white p-2">
                    <div className="flex justify-between items-center w-full ">
                        <h3 className="text-white text-xl font-semibold">{product.title}</h3>
                        <span className="text-white text-xl font-semibold">{product.price}</span>
                    </div>
                </div>
                { (isInBasket) && 
                    (
                        <button 
                            className="bg-red-500 text-white px-4 py-2 rounded-md absolute top-0 right-0"
                            onClick={() => onRemoveFromBasket(product.id)} 
                        >
                            &times;
                        </button>
                    )
                }
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
            </div>
        </div>
    );
};

export default ProductCard;
