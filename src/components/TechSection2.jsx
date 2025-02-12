import React, { useEffect, useRef, useState } from 'react';
import '../styles/parts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const itemsData = [
    { id: 1, image: './images/hydra1.png' },
    { id: 2, image: './images/hydra2.png' },
    { id: 3, image: './images/hydra3.png' },
    { id: 4, image: './images/hydra4.png' },
    ];

const Parts2 = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToItem = (index) => {
        const container = containerRef.current;
        const width = container.firstChild.offsetWidth; 
        container.scrollTo({ left: width * index, behavior: 'smooth' });
    };

    const scrollLeft = () => {
        const prevIndex = currentIndex === 0 ? itemsData.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        scrollToItem(prevIndex);
    };

    const scrollRight = () => {
        const nextIndex = (currentIndex + 1) % itemsData.length;
        setCurrentIndex(nextIndex);
        scrollToItem(nextIndex);
    };


    useEffect(() => {
        const container = containerRef.current;
        const intervalId = setInterval(() => {
            if (currentIndex === itemsData.length - 1) {
                setCurrentIndex(0);
                scrollToItem(0); 
            }
        }, 2000); 

        return () => clearInterval(intervalId);
    }, [currentIndex]);
    return (
        <div className="parts-container">
            <div className="scrollable-container" ref={containerRef}>
            <div className="parts-grid">
                {itemsData.map((item) => (
                    <div key={item.id} className="part-item2">
                      
                        <img src={item.image} alt="Part" className="part-image2" />
                    
                    </div>
                ))}
            </div>
            <button
                className="scroll-btn left"
                onClick={scrollLeft}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                className="scroll-btn right"
                onClick={scrollRight}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
        </div>

    );
}

export default Parts2;
