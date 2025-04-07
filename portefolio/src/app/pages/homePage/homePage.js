import './homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSwatchbook, faCode, faGlobe, faEye } from '@fortawesome/free-solid-svg-icons';
import Card from '@/app/component/cards/card';
import Carrousel from '@/app/component/carroussel/carroussel';
import FormContact from '@/app/component/formcontact/formContact';
import Image from 'next/image';

const HomePage = () => {
	return (
		<div className="flex   column height100vh scroll">
			<div className="hightPage flex align-center widthFull row relative">
				<div className="width75 flex relative column">
					<h1 className="relative">
						<div className="widthAuto flex row elia shadow"> Elia Kopff</div>
						<br />
						<span className="dev shadow">Developer Web</span>
					</h1>
					<FontAwesomeIcon icon={faSquareGithub} className="custom-icon git absolute" />
					<FontAwesomeIcon icon={faLinkedin} className="custom-icon linkedin absolute" />
					<div className="flex dot absolute"></div>
				</div>
				<div className="phrase absolute">
					<p className="shadow">&lt; Créer du code clair pour des idées ambitieuses. /&gt;</p>
				</div>
			</div>
			<div className="widthFull flex center align-center column gap10 vertFonce">
				<div className="about flex center widthFull padding10 column">
					<div className="heightFull flex center column relative">
						<h2 className="flex center shadow absolute">About me </h2>
						<div className="flex center align-center widthFull row">
							<div className="cadre flex center align-center">
								<Image src="/elia.png" alt="elia" width={150} height={150} className="imageElia" />
							</div>
							<div className=" flex center align-center column gap10">
								<p className="text text-center padding10">
									Je suis un développeur web passionné par la création de sites internet et d'applications web. J'aime relever des défis
									techniques et trouver des solutions innovantes pour répondre aux besoins de mes clients.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="what widthFull flex  column gap10">
					<h2 className="flex center shadow"> What I do</h2>
					<div className="flex center align-center row gap10">
						<Card iconSrc={faSwatchbook} title={'UX/UI design'} text={'Création du design et adaptation en fonction des besoins client.'} />
						<Card iconSrc={faCode} title={'Development'} text={'Intégration du design, ajout des fonctionnalités'} />
					</div>
					<div className="flex center align-center row gap10">
						<Card iconSrc={faGlobe} title={'SEO'} text={'Mise en place du référencement du site, ainsi que son accessibilité'} />
						<Card iconSrc={faEye} title={'Support'} text={'Accompagnement au delà du projet, résolution des problémes.'} />
					</div>
				</div>
			</div>
			<div className="projects widthFull column gap10">
				<h2 className="flex center title shadow"> Projects</h2>
				<div className="flex center align-center">
					<Carrousel />
				</div>
			</div>
			<div className="contact widthFull flex center column gap10">
				<h2 className="flex center title shadow"> Contact </h2>
				<div className="flex center align-center widthFull">
					<FormContact />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
