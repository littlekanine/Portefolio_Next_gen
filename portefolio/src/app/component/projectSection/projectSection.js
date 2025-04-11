"use client";

import React, { useState } from "react";
import projects from "../../data/projectsData.json"; // Assurez-vous que le fichier JSON est bien à cet emplacement
import "./projectSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobeIcon, GithubIcon } from "lucide-react";
import IconMap from "../iconMap/iconMap";

export const ProjectsSection = () => {
    const [openedProjectIndex, setOpenedProjectIndex] = useState(null);

    return (
        <section className="projects">
            <div className="projects__container">
                <h1 className="projects__title">Projects</h1>
                <div className="projects__intro-list center">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`projects__card ${openedProjectIndex === index ? "projects__card--opened" : ""} relative`} onClick={() => setOpenedProjectIndex(openedProjectIndex === index ? null : index)}>
                            <div className="projects__card-img flex">
                                <img src={project.img} alt={project.nom} className="projects__card-image" />
                            </div>
                            <div className="projects__card-info cache column">
                                <div className="projects__card-info-content flex column gap10 heightFull space-between">
                                    <h2 className="projects__card-name">{project.nom}</h2>
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
        </section>
    );
};

export default ProjectsSection;
