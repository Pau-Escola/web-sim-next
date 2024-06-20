// components/NonAdminManagement.js
import React from 'react';
import ProductList from './ProductList';

const NonAdminManagement = ({ products, token }) => (
  <div className="p-10">
    <h1 className="text-4xl font-bold text-center p-8">Gestió de productes</h1>
    <ProductList products={products} token={token} />
  </div>
);

export default NonAdminManagement;
