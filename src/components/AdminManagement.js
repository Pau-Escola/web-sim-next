// components/AdminManagement.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import WorkersList from './WorkersList';

const AdminManagement = ({ workers, fetchWorkers, token }) => {
  const [view, setView] = useState(''); // '' for no selection, 'products' for products view, 'workers' for workers view

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center p-8">Panell Administrador</h1>
      <div className="flex flex-col items-center mt-8">
      <div className="flex space-x-4 ">
        <button
          onClick={() => setView('products')}
          className="py-2 px-4 border border-transparent shadow-sm text-xl font-bold rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Administrar Productes
        </button>
        <button
          onClick={() => setView('workers')}
          className="py-2 px-4 border border-transparent shadow-sm text-xl font-bold rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Administrar Usuaris
        </button>
      </div>
      </div>
      {view === 'products' && <ProductList token={token} />}
      {view === 'workers' && <WorkersList workers={workers} token={token} fetchWorkers={fetchWorkers} />}
    </div>
  );
};

export default AdminManagement;
