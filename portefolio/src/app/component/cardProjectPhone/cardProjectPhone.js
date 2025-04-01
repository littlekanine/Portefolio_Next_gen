'use client';

import { useState } from 'react';
import './cardProjectPhone.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CardProjectPhone = ({ nom, img, langages, website, gitHubSite, description }) => {
	const [projectcliked, setProjectcliked] = useState(false);

	const handleClick = () => {
		setProjectcliked((prev) => !prev);
	};

	return (
		<div onClick={handleClick} className={`cardProject overflow-none relative`}>
			<Image src={img} alt={nom} className={` projetImage cover  border10 ${projectcliked ? 'sombre' : ''}`} width={90} height={90} />
			<AnimatePresence>
				{projectcliked && (
					<motion.div
						className="projectInfo"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.2 }}
						onMouseEnter={() => setProjectcliked(true)}
						onMouseLeave={() => setProjectcliked(false)}
					>
						<h2 className="flex center align-center">{nom}</h2>
						<p>{description}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default CardProjectPhone;
