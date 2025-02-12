import React from "react";
import "../styles/Body.css";
import Intro from "./Intro";
import Intro2 from "./Intro2";
import Intro3 from "./intro3";
import Parts from "./Parts";
import ContactSection from "./ContactSection";
import TechSection from "./TechSection";
import Parts2 from "./Parts2";
import Intro4 from "./intro4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import TechSection2 from "./TechSection2";

const Body = () => {
    return (
        <>
        
            <ContactSection />
            <Intro />
            <Intro2 />
            <Intro3 />
            <Parts />
            <TechSection />
            <Parts2 />
            <Intro4 />
            <TechSection2/>
            <Form />
        </>
    );
}

export default Body;
