import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Carousel = ({ images, interval = 7000, objectFit, encoded, translations }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [dragStart, setDragStart] = useState(null);
    const [dragEnd, setDragEnd] = useState(null);
    const autoSlideRef = useRef();
    const intervalRef = useRef();

    const minSwipeDistance = 50;
    useEffect(() => {
        autoSlideRef.current = goToNext;
    });

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [interval]);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            autoSlideRef.current();
        }, interval);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        resetAutoSlide();
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isSwipeLeft = distance > minSwipeDistance;
        const isSwipeRight = distance < -minSwipeDistance;

        if (isSwipeLeft) {
            goToNext();
        } else if (isSwipeRight) {
            goToPrevious();
        }
        resetAutoSlide();
    };

    const handleMouseDown = (e) => {
        setDragEnd(null);
        setDragStart(e.clientX);
        resetAutoSlide();
    };

    const handleMouseMove = (e) => {
        if (dragStart !== null) {
            setDragEnd(e.clientX);
        }
    };

    const handleMouseUp = () => {
        if (!dragStart || !dragEnd) return;
        const distance = dragStart - dragEnd;
        const isSwipeLeft = distance > minSwipeDistance;
        const isSwipeRight = distance < -minSwipeDistance;

        if (isSwipeLeft) {
            goToNext();
        } else if (isSwipeRight) {
            goToPrevious();
        }
        setDragStart(null);
        setDragEnd(null);
        resetAutoSlide();
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        resetAutoSlide();
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        resetAutoSlide();
    };

    return (
        <div
            className="carousel-container relative flex items-center justify-center overflow-hidden w-full h-full"
            aria-roledescription="carousel"
            aria-label="Gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className="carousel-track flex transition-transform duration-500 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 relative"
                    >
                        <picture>
                            <source srcSet={encoded ? `http://localhost:4000${image.imageUrls[1200]}` : image.src} media="(min-width: 1200px)" />
                            <source srcSet={encoded ? `http://localhost:4000${image.imageUrls[800]}` : image.src} media="(min-width: 800px)" />
                            <Image
                                src={encoded ? `http://localhost:4000${image.imageUrls[400]}` : image.src}
                                alt={image.alt || 'Image'}
                                layout="fill"
                                objectFit={objectFit}
                                objectPosition={image.position || 'center center'}
                            />
                        </picture>
                        {(image.title && image.text && image.url) &&
                            (<div className="absolute top-3/4 md:top-1/2 right-0 md:transform md:top-1/2 md:m-8 p-4 bg-black bg-opacity-60 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-white">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{translations[image.title]}</h2>
                                <p className="text-sm sm:text-base md:text-lg mb-4">{translations[image.text]}</p>
                                <Link href={image.url} legacyBehavior>
                                    <a>
                                        <button className="bg-secondary text-white py-2 px-4 rounded-md opacity-75 hover:opacity-100 transition-opacity">
                                            {translations['View Product']}
                                        </button>
                                    </a>
                                </Link>
                            </div>)}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 w-full flex justify-center space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-secondary' : 'bg-gray-300'}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            resetAutoSlide();
                        }}
                    ></div>
                ))}
            </div>
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 h-full flex items-center justify-center z-10 cursor-pointer hidden md:flex"
                aria-label="Previous slide"
            >
                <FaArrowLeft className="w-6 h-6 text-secondary" />
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 h-full flex items-center justify-center z-10 cursor-pointer hidden md:flex"
                aria-label="Next slide"
            >
                <FaArrowRight className="w-6 h-6 text-secondary" />
            </button>
        </div>
    );
};

export default Carousel;
