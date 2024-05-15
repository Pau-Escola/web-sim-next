import React from 'react';
import ContactForm from './ContactForm';


function ContactFormModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white p-5 rounded-lg shadow-lg max-w-md w-full m-4">
                <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-3xl font-bold text-black">&times;</button>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactFormModal;
