"use client";

import React, { useState } from "react";
import projects from "../../data/projectsData.json"; // Assurez-vous que le fichier JSON est bien à cet emplacement
import "./projectSection.scss";

export const ProjectsSection = () => {
    const [openedProjectIndex, setOpenedProjectIndex] = useState(null);

    return (
        <section className="projects">
            <div className="projects__container">
                <h1 className="projects__title">Projects</h1>
                <div className="projects__intro-list center">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`projects__card ${openedProjectIndex === index ? "projects__card--opened" : ""}`} onClick={() => setOpenedProjectIndex(openedProjectIndex === index ? null : index)}>
                            <div className="projects__card-img">
                                <img src={project.img} alt={project.nom} className="projects__card-image" />
                            </div>

                            {/* Affichage conditionnel des infos quand le projet est sélectionné */}
                            {openedProjectIndex === index && (
                                <div className="projects__card-info">
                                    <h3 className="projects__card-name">{project.nom}</h3>
                                    <p className="projects__card-description">{project.description[0]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
