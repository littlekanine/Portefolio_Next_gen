'use client';

import './carroussel.scss';
import { useEffect, useState } from 'react';
import CardProjectPhone from '../cardProjectPhone/cardProjectPhone';
import projectsData from '../../data/projectsData.json';

const Carrousel = () => {
	const totalProjects = projectsData.length;
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
		}, 3000); // Change toutes les 3 secondes

		return () => clearInterval(interval);
	}, [totalProjects]);
	return (
		<div className="flex center column">
			<div className="icon-cards mt-30 flex column">
				<div className="icon-cards__content flex column">
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
			<div className="flex dot-container center align-center gap10">
				{projectsData.map((_, i) => (
					<div key={i} className={`flex bullet ${currentIndex === i ? 'vertClaire' : 'vertFonce'}`}></div>
				))}
			</div>
		</div>
	);
};

export default Carrousel;
