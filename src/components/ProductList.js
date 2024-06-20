// components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductAdminCard from './ProductAdminCard';
import axios from 'axios';
import ProductAdminModal from './ProductAdminModal';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [token]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCreateProduct = () => {
    setSelectedProduct({});
  };

  const handleCloseModal = () => {
    fetchProducts();
    setSelectedProduct(null);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      alert('Failed to fetch products:', error);
      if (error.response && error.response.status === 401) {
        setToken(null);
      }
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold p-3">Productes</h2>
      <button 
        onClick={handleCreateProduct}
        className="mb-4 px-4 py-2 bg-primary text-white text-xl font-semibold rounded-md hover:bg-secondary transition"
      >
        Crear nou producte
      </button>
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductAdminCard 
            key={product.reference} 
            product={product} 
            onSelectProduct={handleProductClick}
            token={token}
            fetchProducts={fetchProducts}
          />
        ))}
      </section>
      {selectedProduct !== null && (
        <ProductAdminModal
          product={selectedProduct}
          onClose={handleCloseModal}
          token={token}
          fetchProducts={fetchProducts}
        />
      )}
    </div>
  );
};

export default ProductList;
