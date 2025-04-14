'use client';

import React, { useState } from 'react';
import projects from '../../data/projectsData.json'; // Assurez-vous que le fichier JSON est bien à cet emplacement
import projectsPerso from '../../data/projectsDataPerso.json';
import './projectSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobeIcon, GithubIcon, ArrowBigRight } from 'lucide-react';
import IconMap from '../iconMap/iconMap';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const ProjectsSection = () => {
	const [isRotated, setIsRotated] = useState(false);
	const [isRotatedPerso, setIsRotatedPerso] = useState(false);
	const { isFrench } = useLanguage(); // Récupère la langue sélectionnée

	return (
		<section className="projects" id="projects">
			<div className="projects__container">
				<h1 className="projects__title">{isFrench ? 'Projets' : 'Projects'}</h1>

				{/* Projets personnels */}
				<div className="relative flex row gap10 center align-center margin20Bottom">
					<h2 className="projects__title-section">{isFrench ? 'Projets personnels' : 'Personal Projects'}</h2>
					<ArrowBigRight
						className={`projects__button flex align-center cursor ${isRotatedPerso ? 'click' : ''}`}
						onClick={() => setIsRotatedPerso(!isRotatedPerso)}
						size={40}
					/>
				</div>

				<AnimatePresence>
					{isRotatedPerso && (
						<motion.div
							className="projects__intro-list center overflow-none"
							initial={{ y: -100, opacity: 0, height: 0 }}
							animate={{ y: 0, opacity: 1, height: 'auto' }}
							exit={{ y: -100, opacity: 0, height: 0 }}
							transition={{ duration: 0.6, ease: 'easeInOut' }}
						>
							{projectsPerso.map((project) => (
								<div key={project.id} className={`projects__card relative margin10`}>
									<div className="projects__card-img flex">
										<img src={project.img} alt={project.nom} className="projects__card-image" />
									</div>
									<div className="projects__card-info cache column">
										<div className="projects__card-info-content flex column gap10 heightFull space-between">
											{/* Utilisation des valeurs en fonction de la langue */}
											<h3 className="projects__card-name">{isFrench ? project.nom.fr : project.nom.en}</h3>
											<p className="projects__card-description">{isFrench ? project.description.fr[0] : project.description.en[0]}</p>
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
													{project.langages.map((langage) => (
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
						</motion.div>
					)}
				</AnimatePresence>

				{/* Projets Open Classroom */}
				<div className="relative flex column gap10 align-center margin20Bottom">
					<div className="relative flex row gap10 align-center margin20Bottom">
						<h2 className="projects__title-section">{isFrench ? 'Projets Open Classroom 2023 - 2024' : 'Open Classroom Projects 2023 - 2024'}</h2>
						<ArrowBigRight className={`projects__button flex align-center cursor ${isRotated ? 'click' : ''}`} onClick={() => setIsRotated(!isRotated)} size={40} />
					</div>

					<AnimatePresence>
						{isRotated && (
							<motion.div
								className="projects__intro-list center overflow-none"
								initial={{ y: -100, opacity: 0, height: 0 }}
								animate={{ y: 0, opacity: 1, height: 'auto' }}
								exit={{ y: -100, opacity: 0, height: 0 }}
								transition={{ duration: 0.6, ease: 'easeInOut' }}
							>
								{projects.map((project) => (
									<div key={project.id} className={`projects__card relative margin10`}>
										<div className="projects__card-img flex">
											<img src={project.img} alt={project.nom} className="projects__card-image" />
										</div>
										<div className="projects__card-info cache column">
											<div className="projects__card-info-content flex column gap10 heightFull space-between">
												{/* Utilisation des valeurs en fonction de la langue */}
												<h3 className="projects__card-name">{isFrench ? project.nom.fr : project.nom.en}</h3>
												<p className="projects__card-description">
													{isFrench ? project.description.fr[0] : project.description.en[0]}
												</p>
												<div className="flex row space-between widthFull center align-center">
													<div className="flex row gap10">
														<a
															href={project.website}
															target="_blank"
															rel="noopener noreferrer"
															className="flex link"
														>
															<GlobeIcon size={20} />
														</a>
														<a
															href={project.gitHubSite}
															target="_blank"
															rel="noopener noreferrer"
															className="flex link"
														>
															<GithubIcon size={20} />
														</a>
													</div>
													<div className="flex row gap10">
														{project.langages.map((langage) => (
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
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
