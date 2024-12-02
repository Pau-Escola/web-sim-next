import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Carousel = ({ images, interval = 7000, objectFit, encoded, translations }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [dragStart, setDragStart] = useState(null);
    const [dragEnd, setDragEnd] = useState(null);
    const [progressWidth, setProgressWidth] = useState(0);
    const progressRef = useRef(null);
    const autoSlideRef = useRef();
    const intervalRef = useRef();
    const progressIntervalRef = useRef();
    const API_BASE_URL_IMAGES = process.env.NEXT_PUBLIC_BASE_URL;
    const minSwipeDistance = 50;

    useEffect(() => {
        autoSlideRef.current = goToNext;
    });

    useEffect(() => {
        if (isPlaying) {
            startAutoSlide();
        } else {
            stopAutoSlide();
            stopProgress();
        }
        return () => stopAutoSlide();
    }, [interval, isPlaying]);

    const startAutoSlide = () => {
        stopAutoSlide();
        stopProgress();
        intervalRef.current = setInterval(() => {
            autoSlideRef.current();
        }, interval);

        startProgress();
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const resetAutoSlide = () => {
        if (isPlaying) {
            stopAutoSlide();
            startAutoSlide();
        }
    };

    const startProgress = () => {
        progressIntervalRef.current = setInterval(() => {
            setProgressWidth((prevWidth) => {
                const newWidth = prevWidth + (100 / (interval / 100));
                if (newWidth >= 100) {
                    clearInterval(progressIntervalRef.current);
                    return 100;
                }
                return newWidth;
            });
        }, 100);
    };

    const stopProgress = () => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }
        setProgressWidth(0);
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

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div
                className="carousel-container relative flex items-center justify-center overflow-hidden w-4/5 h-4/5 rounded-lg"
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
                    className="carousel-track flex transition-transform duration-500 ease-in-out w-full h-full rounded-lg"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            <Image
                                src={encoded ? `${API_BASE_URL_IMAGES}${image.imageUrl}` : image.src}
                                alt={image.alt || 'Image'}
                                layout="fill"
                                objectFit={objectFit}
                                objectPosition={image.position || 'center center'}
                                className="rounded-lg"
                            />
                            {(image.title && image.text && image.url) &&
                                (<div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-60 rounded-lg shadow-md text-white">
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
            </div>
            <div className="mt-3 flex justify-between items-center w-4/5">
                <div className="flex items-center space-x-2 bg-primary rounded-full p-3">
                    <button
                        onClick={togglePlayPause}
                        className="text-secondary"
                        aria-label={isPlaying ? 'Pause slide' : 'Play slide'}
                    >
                        {isPlaying ? <FaPause className="w-6 h-6" /> : <FaPlay className="w-6 h-6" />}
                    </button>
                    <div className="flex space-x-2">
                    {images.map((_, index) => (
    <div
        key={index}
        className={`h-2 ${currentIndex === index ? 'w-10 bg-gray-300' : 'w-2 bg-gray-300'} rounded-full cursor-pointer relative overflow-hidden`}
        onClick={() => {
            setCurrentIndex(index);
            resetAutoSlide();
        }}
    >
        {currentIndex === index && (
            <div
                className="absolute top-0 left-0 h-full bg-secondary"
                style={{
                    width: `${progressWidth}%`,
                }}
            />
        )}
    </div>
))}
                    </div>
                </div>
                <div className="flex items-center space-x-2 bg-primary rounded-full p-3">
                    <button
                        onClick={goToPrevious}
                        className="text-secondary"
                        aria-label="Previous slide"
                    >
                        <FaArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="text-secondary"
                        aria-label="Next slide"
                    >
                        <FaArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;