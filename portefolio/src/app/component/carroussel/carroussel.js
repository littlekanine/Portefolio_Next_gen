"use client"

import "./carroussel.scss";
import { useEffect, useState } from "react";
import CardProjectPhone from "../cardProjectPhone/cardProjectPhone";
import projectsData from "../../data/projectsData.json";

const Carrousel = () => {
    const totalProjects = projectsData.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleProjects = 3; // On affiche 3 projets à la fois

    // Fonction pour avancer dans le carrousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
        }, 3000); // Change toutes les 3 secondes

        return () => clearInterval(interval);
    }, [totalProjects]);

    // Fonction pour déterminer les projets visibles
    const getVisibleProjects = () => {
        let visible = [];
        for (let i = 0; i < visibleProjects; i++) {
            visible.push(projectsData[(currentIndex + i) % totalProjects]);
        }
        return visible;
    };

    return (
        <div className="icon-cards mt-3">
            <div className="icon-cards__content">
                {getVisibleProjects().map((project, index) => (
                    <div
                        className="icon-cards__item"
                        key={index}
                        style={{
                            transform: `rotateY(${index * 120}deg) translateZ(35vw)`,
                        }}
                    >
                        <CardProjectPhone
                            nom={project.nom}
                            img={project.img}
                            langages={project.langages}
                            website={project.website}
                            gitHubSite={project.gitHubSite}
                            description={project.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carrousel;
