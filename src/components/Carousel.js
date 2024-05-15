import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Carousel = ({ images, size, objectFit }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Threshold for swipe action
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        setTouchEnd(null); // Reset touch end to null on new touch start
        setTouchStart(e.targetTouches[0].clientX);
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
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div
            className={`carousel-container relative flex items-center overflow-hidden ${size}`}
            aria-roledescription="carousel"
            aria-label="Gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel-items w-full h-full flex justify-center items-center" aria-live="polite">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? 'flex' : 'hidden'} justify-center items-center w-full h-full`}
                        aria-hidden={index !== currentIndex}
                    >
                        <Image src={image} alt="Description generic" className={`${objectFit} mx-auto w-full h-full`} />
                    </div>
                ))}
            </div>

            <button
                onClick={goToPrevious}
                className="absolute top-5 sm:top-1/2 transform -translate-y-1/2 left-0 h-full flex items-center justify-center z-10 cursor-pointer"
                aria-label="Previous slide"
            >
                <FaArrowLeft className="w-6 h-6 text-secondary" />
            </button>

            <button
                onClick={goToNext}
                className="absolute top-5 sm:top-1/2 transform -translate-y-1/2 right-0 h-full flex items-center justify-center z-10 cursor-pointer"
                aria-label="Next slide"
            >
                <FaArrowRight className="w-6 h-6 text-secondary" />
            </button>
        </div>
    );
};

export default Carousel;
