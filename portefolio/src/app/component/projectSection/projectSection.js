"use client";

import React, { useState } from "react";
import projects from "../../data/projectsData.json"; // Assurez-vous que le fichier JSON est bien à cet emplacement
import "./projectSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobeIcon, GithubIcon, ArrowBigRight } from "lucide-react";
import IconMap from "../iconMap/iconMap";

export const ProjectsSection = () => {
    const [isRotated, setIsRotated] = useState(false);

    const [openedProjectIndex, setOpenedProjectIndex] = useState(null);

    return (
        <section className="projects">
            <div className="projects__container">
                <h1 className="projects__title">Projets</h1>
                <div>
                    <h2>Projets personnels</h2>
                </div>
                <div className={` relative flex row gap10 align-center margin20Bottom ${isRotated ? "click" : ""}`} onClick={() => setIsRotated(!isRotated)}>
                    <h2>Projets Open Classroom 2023 - 2024</h2>
                    <button className={`projects__button flex align-center`}>
                        <ArrowBigRight />
                    </button>
                    <div className="projects__intro-list center hidden">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`projects__card relative`}>
                                <div className="projects__card-img flex">
                                    <img src={project.img} alt={project.nom} className="projects__card-image" />
                                </div>
                                <div className="projects__card-info cache column">
                                    <div className="projects__card-info-content flex column gap10 heightFull space-between">
                                        <h3 className="projects__card-name">{project.nom}</h3>
                                        <p className="projects__card-description">{project.description[0]}</p>
                                        <div className="flex row space-between widthFull center align-center">
                                            <div className="flex row gap10">
                                                <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex link">
                                                    <GlobeIcon size={20} />
                                                </a>
                                                <a href={project.gitHubSite} target="_blank" rel="noopener noreferrer" className="flex link">
                                                    <GithubIcon size={20} />
                                                </a>
                                            </div>
                                            <div className="flex row gap10">
                                                {project.langages.map((langage, index) => (
                                                    <span key={langage} className="projects__card-techno">
                                                        <FontAwesomeIcon icon={IconMap[langage]} className="icon" />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
