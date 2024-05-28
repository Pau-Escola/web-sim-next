import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Carousel = ({ images, size, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [dragStart, setDragStart] = useState(null);
    const [dragEnd, setDragEnd] = useState(null);
    const autoSlideRef = useRef();

    const minSwipeDistance = 50;

    useEffect(() => {
        autoSlideRef.current = goToNext;
    });

    useEffect(() => {
        const play = () => {
            autoSlideRef.current();
        };

        const intervalId = setInterval(play, interval);
        return () => clearInterval(intervalId);
    }, [interval]);

    const handleTouchStart = (e) => {
        setTouchEnd(null);
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

    const handleMouseDown = (e) => {
        setDragEnd(null);
        setDragStart(e.clientX);
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
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div
            className={`carousel-container relative flex items-center overflow-hidden ${size}`}
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
            <div className="carousel-items w-full h-full relative" aria-live="polite">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        aria-hidden={index !== currentIndex}
                        style={{ transition: 'opacity 0.5s ease-in-out' }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt || 'Image'}
                            layout="fill"
                            objectFit="cover"
                            style={{ objectPosition: image.position || 'center center' }}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 w-full flex justify-center space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-secondary' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index)}
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
