"use client";

import "./formContact.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [messageAlerte, setMessageAlerte] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setMessageAlerte("Veuillez remplir tous les champs.");
            return;
        }

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setMessageAlerte(result.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setMessageAlerte("Erreur lors de l'envoi du message. Veuillez réessayer.");
            console.error(error);
        }
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="background-decor">
                    <div className="circle-border" />
                    <div className="circle-blur" />
                </div>
                <div className="form-wrapper">
                    <div className="form-header">
                        <h2>Entrons en contact</h2>
                        <p>Parlons de votre prochain projet</p>
                    </div>
                    <form onSubmit={handleSubmit} className="form-content">
                        {messageAlerte && <p className="alert-message">{messageAlerte}</p>}
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
