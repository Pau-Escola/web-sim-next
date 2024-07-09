// components/CreateWorkerModal.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateWorkerModal = ({ isOpen, onClose, token, fetchWorkers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/workers`, { username, password, isAdmin }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchWorkers(token);
      onClose();
    } catch (error) {
      console.error('Failed to create worker:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Crear usuari</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 p-2">
            <input
              type="text"
              value={username}
              placeholder='Nom de usuari'
              onChange={(e) => setUsername(e.target.value)}
              className=" p-2mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 p-2">
            <input
              type="password"
              value={password}
              placeholder='Contrassenya'
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Admin</label>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              className="mt-1 block"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkerModal;
