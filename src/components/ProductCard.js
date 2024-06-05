import React from 'react';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa'; // Importing bin icon from react-icons

const ProductCard = ({ product, onRemoveFromBasket, onSelectProduct, isInBasket }) => {
    return (
        <div 
            className="relative shadow-xl rounded-lg overflow-hidden h-64 md:h-64 lg:h-80 group cursor-pointer" 
            onClick={() => onSelectProduct(product)} 
            style={{ width: '30vw', height: '25vw' }}
        >
            
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"

                />
            <div className="absolute inset-0 flex flex-col justify-end">
                <div className="bg-black bg-opacity-60 text-white p-2">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-white text-l md:text-xl font-semibold">{product.title}</h3>
                        <span className="text-white text-l md:text-xl font-semibold">{product.price}</span>
                    </div>
                </div>
                {isInBasket && (
                    <button
                        className="bg-red-500 text-white p-2 rounded-md absolute top-0 right-0 m-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemoveFromBasket(product.id);
                        }}
                    >
                        <FaTrashAlt size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
