import "./homePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    return (
        <div>
            <div className="hightPage flex center align-center widthFull">
                <div className="titleProject width50 flex center align-center gap-20 ">
                    <h1>
                        <div className="flex row">
                            <FontAwesomeIcon icon={faAngleLeft} size="6x" />
                            Elia Kopff
                        </div>
                        <br />
                        <span className="dev">Devellopeur</span>
                    </h1>
                </div>
                <div className="photo width50"></div>
            </div>
        </div>
    );
};

export default HomePage;
