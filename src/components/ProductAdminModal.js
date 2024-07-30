import React, { useState } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import ProductImages from './ProductImages';

const ProductAdminModal = ({ product, onClose, token, fetchProducts }) => {
    const isNewProduct = !product.reference;
    const [editableProduct, setEditableProduct] = useState({ ...product });
    const [isEditing, setIsEditing] = useState(isNewProduct);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const { title, description, sold, booked, itemType, length, width } = editableProduct;
        const sanitizedProduct = { title, description, sold, booked, itemType, length, width };
        if (sanitizedProduct.title && sanitizedProduct.description && sanitizedProduct.price) {
            try {
                if (isNewProduct) {
                    await axios.post(`${API_BASE_URL}/products`, sanitizedProduct, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                } else {
                    await axios.patch(`${API_BASE_URL}/products/${product.reference}`, sanitizedProduct, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                }
                setIsEditing(false);
                fetchProducts();
                if (isNewProduct) onClose();
            } catch (error) {
                console.error('Error saving product:', error);
            }
        } else {
            alert('Els camps títol i descripció sempre han de tindre un valor');
        }
    };

    const handleChange = (e) => {
        setEditableProduct({ ...editableProduct, [e.target.name]: e.target.value });
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${API_BASE_URL}/products/${product.reference}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onClose();
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleToggleBooked = async () => {
        try {
            const updatedBooked = !editableProduct.booked;
            await axios.patch(`${API_BASE_URL}/products/${product.reference}`, { booked: updatedBooked }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEditableProduct({ ...editableProduct, booked: updatedBooked });
            fetchProducts();
        } catch (error) {
            console.error('Error toggling booked status:', error);
        }
    };

    const handleToggleSold = async () => {
        try {
            const updatedSold = !editableProduct.sold;
            await axios.patch(`${API_BASE_URL}/products/${product.reference}`, { sold: updatedSold }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEditableProduct({ ...editableProduct, sold: updatedSold, booked: updatedSold ? false : editableProduct.booked });
            fetchProducts();
        } catch (error) {
            console.error('Error toggling sold status:', error);
        }
    };

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/products/${product.reference}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEditableProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product && !isNewProduct) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                >
                    &times;
                </button>
                <div className="mb-4">
                    {isEditing ? (
                        <div>
                            <p>Títol</p>
                            <input
                                type="text"
                                name="title"
                                placeholder='Nom'
                                value={editableProduct.title || ''}
                                onChange={handleChange}
                                className="border p-2 w-full mb-2"
                            />
                        </div>
                    ) : (
                        <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={handleEdit}>
                            Títol: {editableProduct.title} <span className="text-sm text-white font-bold rounded-md bg-primary p-2">Editar info</span>
                        </h2>
                    )}
                </div>
                <div className="mb-4">
                    {isEditing ? (
                        <div>
                            <p>Descripció</p>
                            <textarea
                                name="description"
                                placeholder='Descripció'
                                value={editableProduct.description || ''}
                                onChange={handleChange}
                                className="border p-2 w-full mb-2"
                            />
                        </div>
                    ) : (
                        <p className="text-lg mb-4 ">
                            Descripció: {editableProduct.description}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    {isEditing ? (
                        <div>
                            <p>Llarg (NO posar la ´m´ al final)</p>
                            <input
                                type="text"
                                name="length"
                                placeholder='utilitzar el ´.´ pel decimal'
                                value={editableProduct.length || ''}
                                onChange={handleChange}
                                className="border p-2 w-full mb-2"
                            />
                            <p>Ample (no posar la ´m´ al final)</p>
                            <input
                                type="text"
                                name="width"
                                placeholder='utilitzar el ´.´ pel decimal'
                                value={editableProduct.width || ''}
                                onChange={handleChange}
                                className="border p-2 w-full mb-2"
                            />
                        </div>
                    ) : (
                        <p className="text-lg mb-4">
                            Llarg: {editableProduct.length} m <br />
                            Ample: {editableProduct.width} m
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    {isEditing ? (
                        <div>
                            <p>Tipus</p>
                            <select
                                id="itemType"
                                name="itemType"
                                value={editableProduct.itemType}
                                onChange={handleChange}
                                className="border p-2 w-full mb-2"
                                required
                            >
                                <option value="">-- Tipus de producte --</option>
                                <option value="PREFAB">MODUL</option>
                                <option value="CONTAINER">CONTENIDOR</option>
                            </select>
                        </div>
                    ) : (
                        <p className="text-lg font-bold mb-4" >
                            Tipus de producte: {editableProduct.itemType === "PREFAB"? "MÒDUL":"CONTENIDOR"}
                        </p>
                    )}
                </div>
                {isEditing && (
                    <div className="mb-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
                        >
                            Guardar
                        </button>
                    </div>
                )}
                {!isNewProduct && (
                    <ProductImages
                        images={editableProduct.images}
                        productId={editableProduct.reference}
                        token={token}
                        fetchProduct={fetchProduct}
                    />
                )}
                {!isNewProduct && (
                    <>
                        <div className="flex space-x-4 items-center mt-4">
                            <span>Reservat:</span>
                            <Switch
                                onChange={handleToggleBooked}
                                checked={editableProduct.booked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                offColor="#bbb"
                                onColor="#f5a623"
                                disabled={editableProduct.sold}
                            />
                        </div>
                        <div className="flex space-x-4 items-center mt-4">
                            <span>Venut:</span>
                            <Switch
                                onChange={handleToggleSold}
                                checked={editableProduct.sold}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                offColor="#bbb"
                                onColor="#4caf50"
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => setShowDeleteConfirmation(true)}
                                className="px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition"
                            >
                                Esborrar producte
                            </button>
                        </div>
                    </>
                )}
                {showDeleteConfirmation && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Segur que vols esborrar el producte?</h3>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleDelete}
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
        </div>
    );
};

export default ProductAdminModal;
