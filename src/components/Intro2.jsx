import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Intro.css";
import "../App.css";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Intro2 = () => (
    <div className="intro-container2">
        <div className="overlay">
            <div className="intro-content2">
                <div className="intro-heading-container2">
                    <img src="./images/robot.png" alt="Robot" className="virtual-reality2" />
                </div>
                <div className="intro-text-container2">
                    <h1 className="intro-heading2">
                        <span className="first">ABOUT</span>
                        <span className="second">HYDRA VR</span>
                    </h1>
                    <p className="intro-subtext2">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                     nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                
                    </p><br />
                    <div className="general-store-buttons">
                        <button id="general-store-btn" className="general-store-img">
                           LET'S GET IN TOUCH
                        </button> 
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Intro2;
