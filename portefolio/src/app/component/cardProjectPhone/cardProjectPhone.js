'use client';

import { useEffect, useState } from 'react';
import './cardProjectPhone.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import IconMap from '../iconMap/iconMap';

const CardProjectPhone = ({ nom, img, langages, website, gitHubSite, description, isOpen, onClick, onClose }) => {
	const [plusClicked, setPlusClicked] = useState(false);

	useEffect(() => {
		if (!isOpen) {
			setPlusClicked(false);
		}
	}, [isOpen]);

	const handleClickPlus = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setPlusClicked((prev) => !prev);
	};

	return (
		<div className="cardContainer flex column relative">
			<div onClick={onClick} className="cardProject overflow-none relative column">
				<Image src={img} alt={nom} className={`projetImage cover border10 ${isOpen ? 'sombre' : ''}`} width={90} height={90} />
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="projectInfo relative"
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100 }}
							transition={{ duration: 0.2 }}
						>
							<h2 className="flex center align-center">{nom}</h2>
							<motion.div className="description relative" transition={{ duration: 0.2 }}>
								<div className="descriptionContent">
									<p>{description}</p>
								</div>
								<button className="iconButton" onClick={handleClickPlus}>
									<FontAwesomeIcon icon={faPlus} className="icon" />
								</button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<AnimatePresence>
				{plusClicked && isOpen && (
					<motion.div
						className="extraInfo absolute flex center align-center gap10"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="flex row space-between widthFull">
							<div className="flex row align-center gap10">
								<a href={website} target="_blank" rel="noopener noreferrer" className="flex link">
									<FontAwesomeIcon icon={IconMap.globe} className="icon" />
								</a>
								<a href={gitHubSite} target="_blank" rel="noopener noreferrer" className="flex link">
									<FontAwesomeIcon icon={IconMap.gitHub} className="icon" />
								</a>
							</div>
							<div className="flex row align-center gap10">
								{langages.map((langage) => (
									<div className="flex center align-center" key={langage}>
										<FontAwesomeIcon icon={IconMap[langage]} className="icon" />
									</div>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default CardProjectPhone;
