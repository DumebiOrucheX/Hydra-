import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ContactSection from './ContactSection';
import virtual from "../assets/images/header2.png"
import virtual2 from "../assets/images/group10.png"

export default function Header() {
    return (
        <>
            <header className="header-container">
                <Navbar />
                    <div className="header-content">
                        <div className="text-container">
                            <h1 className="heading">
                                <span 
                                style={{
                                    background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text', 
                                    WebkitTextFillColor: 'transparent', 
                                  }}
                                >Dive&nbsp;</span>
                                Into The Depths Of&nbsp;
                                <span
                                style={{
                                    background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent', 
                                  }}
                                >
                                Virtual Reality</span>
                            </h1>
                            <p className="subtext">
                                Our technicians are specialists on specific vehicles</p> <p className="subtext">ranging from German, Japanese, American, and
                                a host</p> <p className="subtext">of other countries, American.</p>
                            
                            <div className="store-buttons">
                                <button id="store-btn" className="store-img">
                                <span>BUILD YOUR WORLD</span>   
                                </button> &nbsp;
                                <span className='arrow-icon'>
                                <svg width="90" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" 
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </span>
                            </div>
                        </div>
                        <div className="virtual-image-container">
                            <img src={virtual} alt="Virtual Reality" className="virtual-reality" />
                        </div>
                    </div>
               
            </header>
        </>
    );
}
