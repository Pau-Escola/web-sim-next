// pages/ProductsManagementPage.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginModal from '../components/LoginModal';
import AdminManagement from '../components/AdminManagement';
import NonAdminManagement from '../components/NonAdminManagement';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../public/images/navbar/logo.png';

const ProductsManagementPage = () => {
  const [token, setToken] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      checkAdminStatus(storedToken);
    } else {
      setShowLoginModal(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setShowLoginModal(false);
    checkAdminStatus(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAdmin(false);
    setShowLoginModal(true);
  };

  const checkAdminStatus = async (token) => {
    if (!token) {
      setShowLoginModal(true);
      return;
    }
    try {
      const response = await axios.get('http://localhost:8080/api/workers', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWorkers(response.data);
      setIsAdmin(true); // If request is successful, user is an admin
    } catch (error) {
      console.error('Failed to fetch workers or user is not an admin:', error);
      setIsAdmin(false); // If request fails, user is not an admin
      if (error.response && error.response.status === 401) {
        handleLogout();
      }
    }
  };

  return (
    <div className ="bg-gray-300">
       <nav className="p-3 flex justify-between items-center  top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Logo on the left */}
        <div className="w-40 cursor-pointer">
          <Link href="/">
            <Image
              src={logo}
              alt="Company Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>

        
        {token && (
          <div className="flex items-center">
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>)}
        
      </nav>

      {token ? (
        <div>
          {isAdmin ? (
            <AdminManagement workers={workers} fetchWorkers={checkAdminStatus} token={token} />
          ) : (
            <NonAdminManagement token={token} />
          )}
        </div>
      ) : (
        <div>
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsManagementPage;
