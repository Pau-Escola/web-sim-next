import React, { useState } from 'react';
import axios from 'axios';
import CreateWorkerModal from './CreateWorkerModal';
import UpdateWorkerModal from './UpdateWorkerModal';
import ChangePasswordModal from './ChangePasswordModal';

const WorkersList = ({ workers, token, fetchWorkers }) => {
  const [showCreateWorkerModal, setShowCreateWorkerModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [showUpdateWorkerModal, setShowUpdateWorkerModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 


  const handleDeleteWorker = async (workerId) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/workers/${workerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchWorkers(token); // Refresh the list of workers
      setShowDeleteConfirmation(false); // Close delete confirmation modal after deletion
    } catch (error) {
      console.error('Failed to delete worker:', error);
    }
  };

  return (
    <div className="text-lg leading-relaxed">
      <h2 className="text-2xl font-semibold mb-4">Usuaris</h2>
      <button
        onClick={() => setShowCreateWorkerModal(true)}
        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
      >
        Crear usuari
      </button>
      <ul className="divide-y divide-gray-300">
        {workers.map((worker) => (
          <li key={worker.id} className="flex justify-between items-center py-4">
            <span>{worker.username}</span>
            <div className="space-x-2">
              <button
                onClick={() => { setSelectedWorker(worker); setShowUpdateWorkerModal(true); }}
                className="py-1 px-2 text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
              >
                Canviar permisos
              </button>
              <button
                onClick={() => { setSelectedWorker(worker); setShowChangePasswordModal(true); }}
                className="py-1 px-2 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              >
                Canviar contrassenya
              </button>
              <button
                onClick={() => { setSelectedWorker(worker); setShowDeleteConfirmation(true); }}
                className="py-1 px-2 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
              >
                Esborrar
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showCreateWorkerModal && (
        <CreateWorkerModal
          isOpen={showCreateWorkerModal}
          onClose={() => setShowCreateWorkerModal(false)}
          token={token}
          fetchWorkers={fetchWorkers}
        />
      )}
      {showUpdateWorkerModal && selectedWorker && (
        <UpdateWorkerModal
          isOpen={showUpdateWorkerModal}
          onClose={() => setShowUpdateWorkerModal(false)}
          token={token}
          worker={selectedWorker}
          fetchWorkers={fetchWorkers}
        />
      )}
      {showChangePasswordModal && selectedWorker && (
        <ChangePasswordModal
          isOpen={showChangePasswordModal}
          onClose={() => setShowChangePasswordModal(false)}
          token={token}
          worker={selectedWorker}
          fetchWorkers={fetchWorkers}
        />
      )}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Segur que vols esborrar el treballador?</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleDeleteWorker(selectedWorker.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Si
              </button>
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkersList;
