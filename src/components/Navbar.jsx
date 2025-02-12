import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle window resize to reset menu state
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false); 
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <><div className='nav-cont'>
        <nav className="navbar">
            <Link to='/'><img src="./images/logo.png" alt="Logo" className='nav-logo' /> 
            </Link>

            <div className="burger-icon" onClick={toggleMenu}>
             {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <img src="./images/ham-btn.png" alt="Menu" />}
            </div>


            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <div className='c-nav-links'>
                <li className="nav-item">
                    <Link to="/#repair" onClick={() => setIsOpen(false)}>
                        ABOUT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/#service" onClick={() => setIsOpen(false)}>
                        SERVICES
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/#buy" onClick={() => setIsOpen(false)}>
                        TECHNOLOGIES
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/#buy" onClick={() => setIsOpen(false)}>
                        HOW TO
                    </Link>
                </li>
                </div>

                <div className="nav-right">
                    <li className="nav-item">
                    <span id='nav-btn1'>
                        <Link to="/#about-us" onClick={() => setIsOpen(false)}>
                           CONTACT Us
                        </Link></span>
                    </li>
                    <li className="nav-item">
                    <span id='nav-btn2'>   
                     <Link to="/#contact-us" onClick={() => setIsOpen(false)}>
                       <span>JOIN HYDRA</span>
                    </Link></span>
                    </li>
                </div>
            </ul>
          </nav>
        </div>
        </>
    );
}
