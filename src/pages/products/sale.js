import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import ContactInfoFooter from '../../components/ContactInfoFooter';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import CustomContactForm from '../../components/CustomContactForm';
import { useTranslation } from 'react-i18next';
import casetaOcasioImage from '../../../public/images/homepage/ocasio-1.JPG';
import casetaOcasioImag from '../../../public/images/homepage/contenidor-1.JPG';


const products = [
    // Add your product data here
    {
        id: 1,
        title: 'Product 1',
        price: '$100',
        description: 'Description for Product 1',
        images: [casetaOcasioImage, casetaOcasioImag],
    },
    // More products...
];

const SalesPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [basket, setBasket] = useState([]);
    const { t } = useTranslation();

    const handleAddToBasket = (product) => {
        setBasket([...basket, product]);
    };

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
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
            <div className="container mx-auto px-4 mt-20">
                <section className="intro-section my-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Sales</h2>
                    <p className="text-lg text-center">Discover our amazing products on sale. Quality items at the best prices!</p>
                </section>
                <section className="product-display-section my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToBasket={handleAddToBasket}
                            onSelectProduct={handleSelectProduct}
                        />
                    ))}
                </section>
                <CustomContactForm basket={basket} />
                {selectedProduct && (
                    <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                    onAddToBasket={handleAddToBasket}
                />
                )}
            </div>
            <ContactInfoFooter />
        </>
    );
};

export default SalesPage;
