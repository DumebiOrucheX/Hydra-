import React from 'react';
import '../styles/Footer.css'; 
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-body">
                <div className="footer-columns">
                  
                    <div className="footer-column footer-column1">
                        <img src='./images/logo2.png' alt="Logo" className='footer-logo' />
                    </div>

                 
                    <div className="footer-column footer-column2">
                        <a href="#">ABOUT</a>
                        <a href="#">SERVICES</a>
                        <a href="#">TECHNOLOGIES</a>
                        <a href="#">HOW TO</a>
                        <a href="#">JOIN HYDRA</a>
                    </div>

                 
                    <div className="footer-column footer-column3">
                        <a href="#">F.A.Q</a>
                        <a href="#">SITEMAP</a>
                        <a href="#">CONDITIONS</a>
                        <a href="#">LICENSES</a>
                       
                    </div>

                   
                    <div className="footer-column footer-column4">
                        <h4>SOCIALIZE WITH HYDRA</h4><br />
                        <div className="social-icons">
                          
                            <img src="./images/facebook.png" alt="Facebook" />
                            <img src="./images/twitter.png" alt="Twitter" />
                            <img src="./images/linkedin.png" alt="Linkedin" />
                            <img src="./images/youtube.png" alt="Youtube" />
                            <img src="./images/instagram.png" alt="Instagram" />
                            <img src="./images/pinterest.png" alt="Pinterest" />
                        </div><br />
                        <button className="footer-button">BUILD YOUR WORLD</button>
                    </div>
                </div>
            </div><br /><br /><br />

            <hr className='footer-hr' />

            <div className="footer-copyright">
                &copy; 2023 HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
            </div>
        </footer>
    );
}
