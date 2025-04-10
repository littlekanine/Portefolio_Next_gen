// 'use client';

// import './Project.scss';
// import { useState } from 'react';
// import CardProjectPhone from '../cardProjectPhone/cardProjectPhone';
// import projectsData from '../../data/projectsData.json';

// const Project = () => {
// 	const [openedProjectIndex, setOpenedProjectIndex] = useState(null);

// 	return (
// 		<div className="project-list flex column center gap20 mt-30 shadow">
// 			{projectsData.map((project, index) => (
// 				<div key={index}>
// 					<CardProjectPhone
// 						nom={project.nom}
// 						img={project.img}
// 						langages={project.langages}
// 						website={project.website}
// 						gitHubSite={project.gitHubSite}
// 						description={project.description}
// 						isOpen={openedProjectIndex === index}
// 						onClick={() => setOpenedProjectIndex(openedProjectIndex === index ? null : index)}
// 					/>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Project;
