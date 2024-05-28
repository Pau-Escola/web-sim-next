import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = ({ images, size, objectFit, interval = 5000 }) => {
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
            <div className="carousel-items w-full h-full flex justify-center items-center" aria-live="polite">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? 'block' : 'hidden'} w-full h-full`}
                        aria-hidden={index !== currentIndex}
                    >
                        <Image src={image} alt="Description generic" className={`${objectFit} mx-auto w-full h-full`} />
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
        </div>
    );
};

export default Carousel;
