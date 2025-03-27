import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.scss';

const Card = ({ iconSrc, title, text, altText = 'Icon', width = 30, height = 30 }) => {
	return (
		<div className="card flex center align-center relative column">
			<FontAwesomeIcon className="icon absolute" icon={iconSrc} style={{ width, height }} alt={altText} />
			<div className="flex column align-center titleDescription">
				<h3 className="flex center align-center">{title}</h3>
			</div>
			<div className="flex center align-center descritpion">
				<p className="text-center">{text}</p>
			</div>
		</div>
	);
};

export default Card;
