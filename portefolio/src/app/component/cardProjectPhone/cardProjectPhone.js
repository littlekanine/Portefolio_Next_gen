"use client"

import { useState } from "react";
import "./cardProjectPhone.scss";

const CardProjectPhone = ({ nom, img, langages, website, gitHubSite, description }) => {
    const [projectHover, setProjectHover] = useState(false);
    const [projectClicked, setProjectClicked] = useState(false);

    return (
        <div className="cardProject" onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)} onClick={() => setProjectClicked(!projectClicked)}>
            <img src={img} alt={nom} className="projectImage" />
            <h2>{nom}</h2>
            <p>{description}</p>
            <p>
                <strong>Langages :</strong> {langages.join(", ")}
            </p>
            <a href={website} target="_blank" rel="noopener noreferrer">
                Voir le site
            </a>
            <a href={gitHubSite} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        </div>
    );
};

export default CardProjectPhone;
