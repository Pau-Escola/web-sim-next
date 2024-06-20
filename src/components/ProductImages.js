import React, { useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';

const ProductImages = ({ images, token, fetchProduct, productId }) => {
    const fileInputRef = useRef(null);

    const bufferToBase64 = (buffer) => {
        const binary = Buffer.from(buffer).toString('base64');
        return `data:image/jpeg;base64,${binary}`;
    };

    const handleDelete = async (imageId) => {
        if (images.length === 1) {
            alert('Product must have at least one image');
            return;
        }
        try {
            await axios.delete(`http://localhost:8080/api/product-images/${imageId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProduct();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleSetMain = async (imageId) => {
        try {
            await axios.put(`http://localhost:8080/api/product-images/set-to-main-image/${imageId}`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProduct();
        } catch (error) {
            console.error('Error setting main image:', error);
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);
        formData.append('productId', productId);  // Replace with the actual product ID

        try {
            await axios.post('http://localhost:8080/api/product-images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            fetchProduct();
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleAddImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
            {images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                    <Image
                        src={bufferToBase64(image.imageData.data)}
                        alt={image.alt || 'Image'}
                        layout="responsive"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                    <button
                        onClick={() => handleDelete(image.id)}
                        className="absolute top-2 right-2 bg-red-600 font-bold text-white p-2 rounded"
                    >
                        &times;
                    </button>
                    <label className="absolute bottom-2 left-2 bg-white p-1 rounded cursor-pointer">
                        <input
                            type="checkbox"
                            checked={image.isMain}
                            disabled={image.isMain}
                            onChange={() => handleSetMain(image.id)}
                            className="mr-2"
                        />
                        Principal
                    </label>
                </div>
            ))}
            <div
                onClick={handleAddImageClick}
                className="w-full h-full flex-shrink-0 flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer"
            >
                <span className="text-4xl">+</span>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default ProductImages;
