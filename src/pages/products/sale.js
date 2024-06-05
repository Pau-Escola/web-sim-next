import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import ContactInfoFooter from '../../components/ContactInfoFooter';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import CustomContactForm from '../../components/CustomContactForm';
import { useTranslation } from 'react-i18next';
import casetaOcasioImage from '../../../public/images/homepage/ocasio-1.JPG';
import casetaOcasioImag from '../../../public/images/homepage/contenidor-1.JPG';
import { FaShoppingBasket } from 'react-icons/fa';


const products = [
    // Add your product data here
    {
        id: 1,
        title: 'Product 1',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 2,
        title: 'Product 2',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 3,
        title: 'Product 3',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 4,
        title: 'Product 4',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 5,
        title: 'Product 5',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 6,
        title: 'Product 6',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 7,
        title: 'Product 7',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 8,
        title: 'Product 8',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 9,
        title: 'Product 9',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 10,
        title: 'Product 10',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 11,
        title: 'Product 11',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 12,
        title: 'Product 12',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 13,
        title: 'Product 13',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 14,
        title: 'Product 14',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 15,
        title: 'Product 15',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    {
        id: 16,
        title: 'Product 16',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    // More products...
];

const SalesPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [basket, setBasket] = useState([]);
    const { t } = useTranslation();

    const handleToggleContactForm = () => {
        setShowContactForm(!showContactForm);
    };

    const handleAddToBasket = (product) => {
        setBasket([...basket, product]);
    };

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleRemoveFromBasket = (productId) => {
        setBasket(basket.filter((product) => product.id !== productId));
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <Head>
                <title>Sales</title>
            </Head>
            <NavBar />
            <div className="fixed top-1/2 right-0 m-4 bg-primary text-white  rounded-full p-2 cursor-pointer z-50">
                <FaShoppingBasket size={50} onClick={handleToggleContactForm} />
            </div>

            {/* Floating point content */}
            {showContactForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <CustomContactForm basket={basket} onRemoveFromBasket={handleRemoveFromBasket} onClose={handleToggleContactForm}/>
                </div>
            )}
            <div className="relative h-64 w-full md:h-96 mb-8">
                <Image src={casetaOcasioImage} alt={t('Sale')} layout="fill" objectFit="cover"/>
                <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
                    <h2 className="text-xl md:text-4xl font-bold">{t('Sale')}</h2>
                </div>
            </div>
                <p className="text-lg text-center">{t('Sale Text')}</p>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
                <div className="md:w-3/4 flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToBasket={handleAddToBasket}
                                onRemoveFromBasket={handleRemoveFromBasket}
                                onSelectProduct={handleSelectProduct}
                                isInBasket={basket.includes(product)}
                            />
                        ))}
                    </section>
                </div>
                
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={handleCloseModal}
                        onAddToBasket={handleAddToBasket}
                        onRemoveFromBasket={handleRemoveFromBasket}
                        isInBasket={basket.includes(selectedProduct)}
                    />
                )}
            </div>
            <ContactInfoFooter />
        </>
    );
};

export default SalesPage;
