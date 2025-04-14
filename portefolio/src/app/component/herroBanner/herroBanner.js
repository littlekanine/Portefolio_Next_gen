import React from 'react';
import './herroBanner.scss';
// import { InstagramIcon, LinkedinIcon } from 'lucide-react';

export const HeroBanner = () => {
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
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact Me</a>
				</div>
			</nav>

			<div className="hero-banner__content">
				<div className="text-container">
					<div className="title-container">
						<p>Hi, I am</p>
						<h1>ELIA KOPFF</h1>
						<h2>WEB DEVELOPER</h2>
					</div>

					<p className="description">Creating clean code for ambitious ideas, transforming concepts into elegant digital solutions.</p>
				</div>

				<div className="background-blur"></div>
			</div>
		</div>
	);
};

export default HeroBanner;
