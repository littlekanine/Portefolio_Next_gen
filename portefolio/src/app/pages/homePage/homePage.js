import './homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSwatchbook, faCode, faGlobe, faEye, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Card from '@/app/component/cards/card';
import Project from '@/app/component/ProjectDev/project';
import FormContact from '@/app/component/formcontact/formContact';
import Image from 'next/image';
import HeroBanner from '@/app/component/herroBanner/herroBanner';
import AboutSection from '@/app/component/about/about';
import ProjectsSection from '@/app/component/projectSection/projectSection';

const HomePage = () => {
	return (
		<div className="flex   column height100vh scroll">
			<HeroBanner />
			<div>
				<AboutSection />
			</div>

			{/* <div className="projects widthFull column gap10">
				<h2 className="flex center title shadow"> Projects</h2>
				<div className="flex center align-center">
					<Project />
				</div>
			</div> */}
			<ProjectsSection />
			{/* <div className="contact widthFull flex center column gap10">
                <div className="flex center align-center widthFull"> */}
			<div>
				<FormContact />
			</div>
			{/* </div>
            </div> */}
		</div>
	);
};

export default HomePage;
