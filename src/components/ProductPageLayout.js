import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import ContactInfoFooter from './ContactInfoFooter';

const ProductPageLayout = ({ title, description, imageSrc }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 flex justify-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">{title}</h2>
                        <p className="text-lg text-gray-800 mb-6">{description}</p>
                        <ContactForm />
                    </div>
                </div>
                <div className="p-9 md:w-1/2 bg-primary">
                    <div className="relative h-96 w-full">
                        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <ContactInfoFooter />
        </>
    );
};

export default ProductPageLayout;
