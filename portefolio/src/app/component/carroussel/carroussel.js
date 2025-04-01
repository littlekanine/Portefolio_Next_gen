'use client';

import './carroussel.scss';
import { useState, useRef } from 'react';
import CardProjectPhone from '../cardProjectPhone/cardProjectPhone';
import projectsData from '../../data/projectsData.json';

const Carrousel = () => {
	const totalProjects = projectsData.length;
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);

	let startX = 0;

	// Gérer le début du swipe
	const handleTouchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	// Gérer la fin du swipe
	const handleTouchEnd = (e) => {
		const endX = e.changedTouches[0].clientX;
		const diff = startX - endX;

		if (diff > 50) {
			// Swipe vers la gauche (carte suivante)
			setCurrentIndex((prev) => (prev + 1) % totalProjects);
		} else if (diff < -50) {
			// Swipe vers la droite (carte précédente)
			setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
		}
	};

	return (
		<div className="flex center column">
			<div
				className="icon-cards mt-30 flex column"
				ref={carouselRef}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className="icon-cards__content flex column"
					style={{ transform: `translateZ(-35vw) rotateY(${-currentIndex * 120}deg)` }}
				>
					{projectsData.map((project, index) => (
						<div
							className="flex icon-cards__item"
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
			{/* Indicateurs de navigation */}
			<div className="flex dot-container center align-center gap10">
				{projectsData.map((_, i) => (
					<div key={i} className={`bullet ${currentIndex === i ? 'vertClaire' : 'vertFonce'}`}></div>
				))}
			</div>
		</div>
	);
};

export default Carrousel;
