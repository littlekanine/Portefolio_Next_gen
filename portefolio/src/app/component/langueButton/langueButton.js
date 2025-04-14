'use client';

import React from 'react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './langueButton.scss';
import Image from 'next/image';

const LangueButton = () => {
	const { isFrench, toggleLanguage } = useLanguage();
	const [open, setOpen] = useState(false);

	const handleLanguageChange = (lang) => {
		if ((lang === 'fr' && !isFrench) || (lang === 'en' && isFrench)) {
			toggleLanguage();
		}
		setOpen(false);
	};
	return (
		<div className="flex center align-center gap5">
			<Image src="/french.svg" alt="French flag" className="flag" width={30} height={20} style={{ opacity: isFrench ? 1 : 0.4 }} />
			<label className="switch">
				<input type="checkbox" onChange={toggleLanguage} checked={!isFrench} />
				<span className="slider round"></span>
			</label>
			<Image src="/uk.svg" alt="UK flag" className="flag" width={30} height={20} style={{ opacity: isFrench ? 0.4 : 1 }} />
		</div>
	);
};

export default LangueButton;
