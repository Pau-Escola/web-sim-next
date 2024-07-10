import React, { useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Pica from 'pica';

const ProductImages = ({ images, token, fetchProduct, productId }) => {
    const fileInputRef = useRef(null);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 
    const API_BASE_URL_IMAGES = process.env.NEXT_PUBLIC_BASE_URL; 
    const pica = new Pica();

const resizeImage = async (file, width) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
        img.onload = () => {
            const scaleFactor = width / img.width;
            canvas.width = width;
            canvas.height = img.height * scaleFactor;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            pica.resize(canvas, canvas)
                .then(() => pica.toBlob(canvas, 'image/jpeg', 0.8))
                .then(blob => resolve(blob))
                .catch(error => reject(error));
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
};

    const handleDelete = async (imageId) => {
        if (images.length === 1) {
            alert('Product must have at least one image');
            return;
        }
        try {
            await axios.delete(`${API_BASE_URL}/product-images/${imageId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProduct();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleSetMain = async (imageId) => {
        try {
            await axios.put(`${API_BASE_URL}/product-images/set-to-main-image/${imageId}`, {}, {
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
    
        try {
            // Resize the image to different sizes
            const sizes = [400, 800, 1200];
            const formData = new FormData();
            formData.append('productId', productId);  // Replace with the actual product ID
    
            for (const size of sizes) {
                const resizedBlob = await resizeImage(file, size);
                const resizedFile = new File([resizedBlob], `${size}_${file.name}`, { type: 'image/jpeg' });
                formData.append(`images`, resizedFile);
            }
    
            await axios.post(`${API_BASE_URL}/product-images`, formData, {
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
                    <picture>
                        <source srcSet={`${API_BASE_URL_IMAGES}${image.imageUrls[1200]}`} media="(min-width: 1200px)" />
                        <source srcSet={`${API_BASE_URL_IMAGES}${image.imageUrls[800]}`} media="(min-width: 800px)" />
                        <Image
                            src={`${API_BASE_URL_IMAGES}${image.imageUrls[400]}`}
                            alt={image.alt || 'Image'}
                            layout="responsive"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </picture>
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
