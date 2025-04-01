'use client';

import './carroussel.scss';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardProjectPhone from '../cardProjectPhone/cardProjectPhone';
import projectsData from '../../data/projectsData.json';

const Carrousel = () => {
	const totalProjects = projectsData.length;
	const [isAnimating, setIsAnimating] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);

	let startX = 0;

	const handleTouchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		if (isAnimating) return; // Empêche un double swipe rapide
		setIsAnimating(true);

		const endX = e.changedTouches[0].clientX;
		const diff = startX - endX;

		if (diff > 50) {
			nextSlide();
		} else if (diff < -50) {
			prevSlide();
		}

		setTimeout(() => setIsAnimating(false), 500); // Empêche trop de swipes rapides
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => prev - 1);
	};

	return (
		<div className="flex center column">
			<div className="icon-cards mt-30 flex column" ref={carouselRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
				<motion.div
					className="icon-cards__content flex column"
					style={{ transformStyle: 'preserve-3d' }}
					animate={{ rotateY: -currentIndex * 120 }}
					transition={{ type: 'spring', stiffness: 100, damping: 20 }}
				>
					{projectsData.map((project, index) => (
						<motion.div className="flex icon-cards__item" key={index} style={{ transform: `rotateY(${index * 120}deg) translateZ(35vw)` }}>
							<CardProjectPhone
								nom={project.nom}
								img={project.img}
								langages={project.langages}
								website={project.website}
								gitHubSite={project.gitHubSite}
								description={project.description}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			{/* <div className="flex dot-container center align-center gap10">
				{projectsData.map((_, i) => (
					<div key={i} className={`bullet ${currentIndex === i ? 'vertClaire' : 'vertFonce'}`}></div>
				))}
			</div> */}
		</div>
	);
};

export default Carrousel;
