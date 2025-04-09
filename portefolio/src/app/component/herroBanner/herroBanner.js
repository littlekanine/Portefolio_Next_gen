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
					<a href="#">About</a>
					<a href="#">Projects</a>
					<button>Contact Me</button>
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

					{/* <div className="social-container">
						<a href="#" aria-label="Instagram">
							<InstagramIcon size={28} />
						</a>
						<a href="#" aria-label="LinkedIn">
							<LinkedinIcon size={28} />
						</a>
					</div> */}
				</div>

				<div className="background-blur"></div>
			</div>
		</div>
	);
};

export default HeroBanner;
