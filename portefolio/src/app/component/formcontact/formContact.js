'use client';

import './formContact.scss';
import '../../vendors/variable.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext'; // 🔁 import

const ContactForm = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [messageAlerte, setMessageAlerte] = useState('');
	const { isFrench } = useLanguage(); // 🔁 langue active

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			setMessageAlerte(isFrench ? 'Veuillez remplir tous les champs.' : 'Please fill out all fields.');
			return;
		}

		try {
			const response = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			setMessageAlerte(result.message); // suppose que l’API retourne déjà un message traduit
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			setMessageAlerte(isFrench ? "Erreur lors de l'envoi du message. Veuillez réessayer." : 'An error occurred while sending the message. Please try again.');
			console.error(error);
		}
	};

	return (
		<section id="contact">
			<div className="contact-container">
				<div className="background-decor">
					<div className="circle-blur" />
				</div>
				<div className="form-wrapper">
					<div className="form-header">
						<h2>{isFrench ? 'Entrons en contact' : 'Get in touch'}</h2>
						<p>{isFrench ? 'Parlons de votre prochain projet' : 'Let’s talk about your next project'}</p>
					</div>
					<form onSubmit={handleSubmit} className="form-content">
						{messageAlerte && <p className="alert-message">{messageAlerte}</p>}
						<div>
							<label htmlFor="name">{isFrench ? 'Nom' : 'Name'}</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder={isFrench ? 'Votre nom' : 'Your name'}
								required
							/>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
						</div>
						<div>
							<label htmlFor="message">{isFrench ? 'Message' : 'Message'}</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder={isFrench ? 'Votre message' : 'Your message'}
								required
							/>
						</div>
						<button type="submit flex gap10 center">
							<FontAwesomeIcon icon={faPaperPlane} className="icon" />
							{isFrench ? 'Envoyer le message' : 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
