'use client';

import { useState } from 'react';
import './cardProjectPhone.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CardProjectPhone = ({ nom, img, langages, website, gitHubSite, description }) => {
	const [projectHover, setProjectHover] = useState(false);

	return (
		<div className={`cardProject relative ${projectHover ? 'hover' : ''}`}>
			<Image src={img} alt={nom} className="projectImage cover  border10" width={90} height={90} />
			<AnimatePresence>
				{/* <motion.div className="projectInfo">
				<h2>{nom}</h2>
				<p>{description}</p>
				<p>
					<strong>Langages :</strong> {langages.join(', ')}
				</p>
				<a href={website} target="_blank" rel="noopener noreferrer">
					Voir le site
				</a>
				<a href={gitHubSite} target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</motion.div> */}
			</AnimatePresence>
		</div>
	);
};

export default CardProjectPhone;
