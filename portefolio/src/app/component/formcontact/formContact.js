'use client';

import './formContact.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const FormContact = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [messageAlerte, setMessageAlerte] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			setMessageAlerte('Veuillez remplir tous les champs.');
			return;
		}

		try {
			const response = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			setMessageAlerte(result.message);
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			setMessageAlerte("Erreur lors de l'envoi du message. Veuillez réessayer.");
			console.error(error);
		}
	};

	return (
		<div className="formulaire flex center column gap10 relative shadow">
			<form className="flex center column gap10 relative" onSubmit={handleSubmit}>
				<div className="flex center column gap10">
					<label htmlFor="name">Nom</label>
					<input type="text" id="name" name="name" placeholder="Votre nom" required onChange={handleChange} value={formData.name} />
				</div>
				<div className="flex center column gap10">
					<label htmlFor="email">email</label>
					<input type="email" id="email" name="email" placeholder="Votre@email.com" required onChange={handleChange} value={formData.email} />
				</div>
				<div className="flex center column gap10">
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" rows="4" required onChange={handleChange} value={formData.message}></textarea>
				</div>
				<div className="flex center align-center column gap10">
					<button type="submit" className="submit-button flex center align-center gap10">
						<FontAwesomeIcon icon={faPaperPlane} className="icon" />
						<p>Envoyer</p>
					</button>
				</div>
			</form>
			{messageAlerte ? (
				<div className="flex center align-center messageAlerte">
					<p className="messageForm">{messageAlerte}</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default FormContact;
