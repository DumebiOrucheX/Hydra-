import React, { useRef, useState, useEffect } from 'react';
import '../styles/parts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const itemsData = [
    { id: 1, price: 'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum', title: 'SIMULATION', image: './images/tools1.png' },
    { id: 2, price: 'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum', title: 'EDUCATION', image: './images/tools2.png' },
    { id: 3, price: 'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum', title: 'SELF CARE', image: './images/tools3.png' },
    { id: 4, price: 'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum', title: 'OUTDOOR', image: './images/tools4.png' },
];

const Parts = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToItem = (index) => {
        const container = containerRef.current;
        const width = container.firstChild.offsetWidth; // Width of one item
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

    // Infinite scrolling loop logic
    useEffect(() => {
        const container = containerRef.current;
        const intervalId = setInterval(() => {
            if (currentIndex === itemsData.length - 1) {
                setCurrentIndex(0); 
                scrollToItem(0); 
            }
        }, 1000); 

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="parts-container">
            <div className="scrollable-container" ref={containerRef}>
                <div className="parts-grid">
                    {itemsData.map((item) => (
                        <div key={item.id} className="part-item">
                            <img src={item.image} alt="Part" className="part-image" />
                            <div className="part-text">
                                <strong
                                    className="part-title"
                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                /><hr className='part-hr' />
                                <p className="part-price">{item.price}</p>
                                <button id="part-btn">
                                    <span style={{ fontWeight: '700', fontSize: '12px' }}>
                                        TRY IT NOW
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
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
    );
};

export default Parts;
