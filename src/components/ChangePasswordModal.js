// components/ChangePasswordModal.js
import React, { useState } from 'react';
import axios from 'axios';

const ChangePasswordModal = ({ isOpen, onClose, token, worker, fetchWorkers }) => {
  const [password, setPassword] = useState('');
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API_BASE_URL}/workers/${worker.id}`, { password }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchWorkers(token);
      onClose();
    } catch (error) {
      console.error('Failed to change password:', error);
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
        <h2 className="text-2xl font-bold mb-4">Canvia contrassenya</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nova contrassenya</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Aplicar canvi
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
