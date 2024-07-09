// components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductAdminCard from './ProductAdminCard';
import axios from 'axios';
import ProductAdminModal from './ProductAdminModal';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchReference, setSearchReference] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

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
      const response = await axios.get(`${API_BASE_URL}/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
      setSearchResult(null);  // Clear the search result to show all products
    } catch (error) {
      alert('No ha pogut carregar els productes', error);
      if (error.response && error.response.status === 401) {
        setToken(null);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchReference(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchReference) return;

    try {
      const response = await axios.get(`${API_BASE_URL}/products/${searchReference}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSearchResult(response.data);
    } catch (error) {
      alert('Producte no trobat', error);
      setSearchResult(null);
    }
  };

  const handleResetSearch = () => {
    setSearchReference('');
    fetchProducts();
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold p-3">Productes</h2>
      <div className="flex mb-4">
        <input 
          type="text" 
          value={searchReference} 
          onChange={handleSearchChange} 
          placeholder="Referencia al correu" 
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button 
          onClick={handleSearch}
          className="px-4 py-2 bg-primary text-white text-xl font-semibold rounded-md hover:bg-secondary transition"
        >
          Buscar per referencia
        </button>
        <button 
          onClick={handleResetSearch}
          className="ml-2 px-4 py-2 bg-gray-300 text-black text-xl font-semibold rounded-md hover:bg-gray-400 transition"
        >
          Mostrar tots
        </button>
      </div>
      <button 
        onClick={handleCreateProduct}
        className="mb-4 px-4 py-2 bg-primary text-white text-xl font-semibold rounded-md hover:bg-secondary transition"
      >
        Crear nou producte
      </button>
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {searchResult ? (
          <ProductAdminCard 
            key={searchResult.reference} 
            product={searchResult} 
            onSelectProduct={handleProductClick}
            token={token}
            fetchProducts={fetchProducts}
          />
        ) : (
          products.map((product) => (
            <ProductAdminCard 
              key={product.reference} 
              product={product} 
              onSelectProduct={handleProductClick}
              token={token}
              fetchProducts={fetchProducts}
            />
          ))
        )}
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
