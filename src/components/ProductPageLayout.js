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
            <div className="relative h-64 w-full md:h-96">
            <Image src={imageSrc} alt={title} layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className=" md:w-3/4 flex flex-col items-center md:items-start">
            <h2 className=" absolute top-1/4 text-3xl md:text-4xl font-bold bg-secondary text-primary text-center mb-6">{title}</h2>
                    <p className="text-lg text-gray-800 ml-4 mt-4 md:mt-6">{description}</p>
                </div>
                <div className="p-3 md:w-1/4 mt-20 flex justify-center md:justify-start bg-primary rounded-lg">
                    <div className="w-full max-w-md">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="sm:h-16 md:h-20"></div>
            <ContactInfoFooter />
        </>
    );
};

export default ProductPageLayout;
