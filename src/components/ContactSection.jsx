import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ContactSection.css";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Location from '../assets/images/location.png';
import PhoneCall from '../assets/images/phone-call.png';
import Mail from '../assets/images/mail.png';

const ContactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const contactSections = [
    {
      icon: Location,
      heading: "Pay Us a Visit",
      text: "Union St, Seattle, WA 98101, United States",
      textColor: "#ffffff",
    },
    {
      icon: PhoneCall,
      heading: "Give Us a Call",
      text: "110 - 111 - 1010",
      textColor: "#ffffff",
    },
    {
      icon: Mail,
      heading: "Send Us a Message",
      text: "contact@HydraVTech.com",
      textColor: "#ffffff",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contactSections.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contactSections.length) % contactSections.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="scroll-buttons">
          <button className="contact-scroll-btn left" onClick={handlePrev}>
            &#8592;
          </button>
          <button className="contact-scroll-btn right" onClick={handleNext}>
            &#8594;
          </button>
        </div>
        <div className="contact-section-wrapper">
          {contactSections.map((section, index) => (
            <div
              key={index}
              className={`contact-section ${
                windowWidth > 1115 || currentIndex === index ? "active" : ""
              }`}
              style={{ color: section.textColor }}
            >
              <img
                src={section.icon}
                className="icon"
                style={{ color: "#C0B7E8" }}
              />
              <div>
                <h3>{section.heading}</h3>
                <p>{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
