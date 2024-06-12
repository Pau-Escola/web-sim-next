import React, { useState } from 'react';

const CustomContactForm = ({ product }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            {product && (
                <p className="mb-4">
                    <strong>Product Reference:</strong> {product.title}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows="4"
                    placeholder="Your message..."
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default CustomContactForm;
