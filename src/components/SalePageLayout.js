import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import casetaOcasioImage from '../../public/images/homepage/ocasio.jpeg';

const SalesPageLayout = ({ translations, locale }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('ALL'); // State to keep track of the selected filter

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
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

  // Filter products based on the selected filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'ALL') return true;
    return product.itemType === filter;
  });

  return (
    <>
      <Head>
        <title>Sales</title>
      </Head>
      <NavBar locale={locale} page="products/sale" translations={translations} />

      <div className="relative h-64 w-full md:h-96 mb-8">
        <Image src={casetaOcasioImage} alt={translations['Sale']} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md">
          <h2 className="text-xl md:text-4xl font-bold">{translations['Sale']}</h2>
        </div>
      </div>
      <p className="text-lg text-center p-8 mx-auto max-w-3xl">{translations['Sales Text']}</p>

      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 m-2 ${filter === 'ALL' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('ALL')}
        >
          {translations['All']}
        </button>
        <button
          className={`px-4 py-2 m-2 ${filter === 'CONTAINER' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('CONTAINER')}
        >
          {translations['Container']}
        </button>
        <button
          className={`px-4 py-2 m-2 ${filter === 'PREFAB' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('PREFAB')}
        >
          {translations['Prefabs']}
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
        <div className="flex flex-col items-center md:items-start mb-8">
          <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={handleSelectProduct}
                translations={translations}
              />
            ))}
          </section>
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            translations={translations}
            locale={locale}
          />
        )}
      </div>
      <ContactInfoFooter translations={translations} locale={locale} />
    </>
  );
};

export default SalesPageLayout;
