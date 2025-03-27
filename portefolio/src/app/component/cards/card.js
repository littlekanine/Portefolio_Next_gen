import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.scss";
import Image from "next/image";

const Card = ({ iconSrc, title, text, altText = "Icon", width = 30, height = 30 }) => {
    return (
        <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={iconSrc} width={width} height={height} alt={altText} />
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
};

export default Card;
