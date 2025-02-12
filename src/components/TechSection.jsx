import React from 'react';
import '../styles/TechSection.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

const TechSection = () => {
    return (
        <section className="tech-section">
            <div className="tech-image-overlay"></div>
            
            <div className="tech-content">
                <h1 className="tech-heading1">TECHNOLOGIES & HARDWARE</h1>
                <h2 className="tech-heading2">USED BY HYDRA VR</h2>
              
            </div>
            <button
             className="tech-scroll-btn"
            >
            <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </section>
    );
};

export default TechSection;
