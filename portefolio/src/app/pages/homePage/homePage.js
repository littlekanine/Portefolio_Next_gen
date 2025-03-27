import "./homePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin, faJs, faSwatchBook } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Card from "@/app/component/cards/card";

const HomePage = () => {
    return (
        <div className="flex center align-center column">
            <div className="hightPage flex center align-center widthFull">
                <div className=" width75 flex center align-center gap-20 relative column">
                    <h1 className="relative">
                        <div className="flex row elia">&lt; Elia Kopff</div>
                        <br />
                        <span className="dev">Developpeur Web /&gt;</span>
                    </h1>
                    <FontAwesomeIcon icon={faSquareGithub} className="custom-icon git absolute" />
                    <FontAwesomeIcon icon={faLinkedin} className="custom-icon linkedin absolute" />
                </div>
                <div className="photo width25">
                    <div className=" flex center align-center cadre"></div>
                </div>
            </div>
            <div className="what widthFull">
                <Card 
                iconSrc={faSwatchBook}
                />
            </div>
            {/* <div className="about flex center widthFull padding10 column">
                <div className="heightFull flex center column">
                    <h2 className="flex center ">&lt;What I do /&gt;</h2>
                    <div className="flex center align-center row">
                        <FontAwesomeIcon icon={faJs} className="js" />
                        <Image src={"/nextjs-icon.svg"} width={30} height={30} className="next" />
                    </div>
                </div> */}
        </div>
    );
};

export default HomePage;
