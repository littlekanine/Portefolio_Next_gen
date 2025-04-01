import './homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSwatchbook, faCode, faGlobe, faEye } from '@fortawesome/free-solid-svg-icons';
import Card from '@/app/component/cards/card';
import Carrousel from '@/app/component/carroussel/carroussel';
import Image from 'next/image';

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
				<div className="photo width25">
					<div className=" flex center align-center cadre"></div>
				</div>
			</div>
			<div className="what widthFull flex  column gap10">
				<h2 className="flex center shadow">&lt; What I do /&gt;</h2>
				<div className="flex center align-center row gap10">
					<Card iconSrc={faSwatchbook} title={'UX/UI design'} text={'Cognitis enim pilatorum caesorumque '} />
					<Card iconSrc={faCode} title={'Development'} text={'Cognitis enim pilatorum caesorumque  '} />
				</div>
				<div className="flex center align-center row gap10">
					<Card iconSrc={faGlobe} title={'SEO'} text={'Cognitis enim pilatorum caesorumque  '} />
					<Card iconSrc={faEye} title={'Customer support'} text={'Cognitis enim pilatorum caesorumque  '} />
				</div>
			</div>
			<div className="projects widthFull column gap10">
				<h2 className="flex center title shadow">&lt; Projects /&gt;</h2>
				<div className="flex center align-center">
					<Carrousel />
				</div>
			</div>
			<div className="about flex center widthFull padding10 column">
				<div className="heightFull flex center column">
					<h2 className="flex center shadow">&lt;About /&gt;</h2>
					<div className="flex center align-center row">
						<FontAwesomeIcon icon={faJs} className="js" />
						<Image src={'/nextjs-icon.svg'} width={30} height={30} className="next" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
