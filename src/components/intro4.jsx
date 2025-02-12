import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Intro.css";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Intro4 = () => (
    <div className="intro-container">
        <div className="overlay">
            <div className="intro-content">
                <div className="intro-heading-container">
                    <h1 className="intro-heading">
                        <span className="first">&nbsp;HOW WE BUILD</span>
                        <div className="flex-second-arrow">
                            <span className="second">WITH HYDRA VR?</span>
                            <img src="./images/arrow.png" className="intro-arrow-icon" />
                        </div>
                    </h1>
                </div>
                <div className="intro-text-container2">
                    <p className="intro-subtext2">
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna 
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Intro4;
