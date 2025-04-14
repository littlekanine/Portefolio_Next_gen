'use client';

import React from 'react';
import './herroBanner.scss';
import LangueButton from '../langueButton/langueButton';
import { useLanguage } from '../../context/LanguageContext';

export const HeroBanner = () => {
	const { isFrench } = useLanguage();

	return (
		<div className="hero-banner">
			<div className="hero-banner__background">
				<div className="circle-large" />
				<div className="circle-medium" />
				<div className="circle-small" />
				<div className="circle-tiny" />
			</div>

			<nav className="hero-banner__nav">
				<div className="nav-container">
					<a href="#about">{isFrench ? 'À propos' : 'About'}</a>
					<a href="#projects">{isFrench ? 'Projets' : 'Projects'}</a>
					<a href="#contact">{isFrench ? 'Contactez-moi' : 'Contact me'}</a>
					<LangueButton />
				</div>
			</nav>

			<div className="hero-banner__content">
				<div className="text-container">
					<div className="title-container">
						<p>{isFrench ? 'Salut, je suis' : 'Hi, I am'}</p>
						<h1>ELIA KOPFF</h1>
						<h2>{isFrench ? 'DÉVELOPPEUR WEB' : 'WEB DEVELOPER'}</h2>
					</div>

					<p className="description">
						{isFrench
							? 'Créer un code propre pour des idées ambitieuses, transformer les concepts en solutions numériques élégantes.'
							: 'Writing clean code for ambitious ideas, turning concepts into elegant digital solutions.'}
					</p>
				</div>

				<div className="background-blur"></div>
			</div>
		</div>
	);
};

export default HeroBanner;
