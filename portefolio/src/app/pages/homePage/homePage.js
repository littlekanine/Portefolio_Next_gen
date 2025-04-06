import "./homePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin, faJs } from "@fortawesome/free-brands-svg-icons";
import { faSwatchbook, faCode, faGlobe, faEye } from "@fortawesome/free-solid-svg-icons";
import Card from "@/app/component/cards/card";
import Carrousel from "@/app/component/carroussel/carroussel";
import Image from "next/image";
import FormContact from "@/app/component/formcontact/formContact";

const HomePage = () => {
    return (
        <div className="flex   column height100vh scroll">
            <div className="hightPage flex center align-center widthFull padding20">
                <div className="width75 flex center align-center relative column">
                    <div className="flex center align-center relative column">
                        <h1 className="relative">
                            <div className="widthAuto flex row elia shadow">&lt; Elia Kopff</div>
                            <br />
                            <span className="dev shadow">Developer Web /&gt;</span>
                        </h1>
                        <FontAwesomeIcon icon={faSquareGithub} className="custom-icon git absolute" />
                        <FontAwesomeIcon icon={faLinkedin} className="custom-icon linkedin absolute" />
                    </div>
                </div>
                <div className="photo width25 relative flex center align-center">
                    <div className="ribbon absolute">
                        <span>Réactif</span>
                    </div>
                    <div className=" flex center align-center cadre"></div>
                </div>
            </div>
            <div className="what widthFull flex  column gap10">
                <h2 className="flex center shadow">&lt; What I do /&gt;</h2>
                <div className="flex center align-center row gap10">
                    <Card iconSrc={faSwatchbook} title={"UX/UI design"} text={"Création du design et adaptation en fonction des besoins client."} />
                    <Card iconSrc={faCode} title={"Development"} text={"Intégration du design, ajout des fonctionnalités"} />
                </div>
                <div className="flex center align-center row gap10">
                    <Card iconSrc={faGlobe} title={"SEO"} text={"Mise en place du référencement du site, ainsi que son accessibilité"} />
                    <Card iconSrc={faEye} title={"Support"} text={"Accompagnement au delà du projet, résolution des problémes."} />
                </div>
            </div>
            <div className="projects widthFull column gap10">
                <h2 className="flex center title shadow">&lt; Projects /&gt;</h2>
                <div className="flex center align-center">
                    <Carrousel />
                </div>
            </div>
            {/* <div className="about flex center widthFull padding10 column">
				<div className="heightFull flex center column">
					<h2 className="flex center shadow">&lt;About /&gt;</h2>
					<div className="flex center align-center row">
						<FontAwesomeIcon icon={faJs} className="js" />
						<Image src={'/nextjs-icon.svg'} width={30} height={30} className="next" />
					</div>
				</div>
			</div> */}
            <div className="contact widthFull flex center column gap10">
                <h2 className="flex center title shadow">&lt; Contact /&gt;</h2>
                <div className="flex center align-center widthFull">
                    <FormContact />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
