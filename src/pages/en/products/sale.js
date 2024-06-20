import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import ContactInfoFooter from '../../components/ContactInfoFooter';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import { useTranslation } from 'react-i18next';
import casetaOcasioImage from '../../../public/images/homepage/ocasio-1.JPG';
import casetaOcasioImag from '../../../public/images/homepage/contenidor-1.JPG';


const SalesPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

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

            <div className="relative h-64 w-full md:h-96 mb-8">
                <Image src={casetaOcasioImage} alt={t('Sale')} layout="fill" objectFit="cover"/>
                <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
                    <h2 className="text-xl md:text-4xl font-bold">{t('Sale')}</h2>
                </div>
            </div>
                <p className="text-lg text-center">{t('Sale Text')}</p>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onSelectProduct={handleSelectProduct}
                            />
                        ))}
                    </section>
                </div>
                
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
            <ContactInfoFooter />
        </>
    );
};

export default SalesPage;
