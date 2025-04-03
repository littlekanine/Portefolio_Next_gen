// src/app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
	try {
		const { name, email, message } = await req.json(); // Récupérer les données JSON de la requête

		// Vérification des champs
		if (!name || !email || !message) {
			return new Response(JSON.stringify({ message: 'Tous les champs sont obligatoires.' }), { status: 400 });
		}

		// Configuration du transporteur Nodemailer
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER, // Ton email Gmail
				pass: process.env.EMAIL_PASS, // Mot de passe d'application Gmail
			},
			tls: {
				rejectUnauthorized: false, // Pour éviter les erreurs de certificat auto-signé
			},
		});

		// Options de l'email
		const mailOptions = {
			from: `"${name}" <${email}>`,
			to: process.env.EMAIL_USER, // Ton email de destination
			subject: `Nouveau message de ${name}`,
			text: message,
			html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
		};

		// Envoi de l'email
		await transporter.sendMail(mailOptions);

		// Réponse en cas de succès
		return new Response(JSON.stringify({ message: 'Email envoyé avec succès !' }), { status: 200 });
	} catch (error) {
		console.error("Erreur lors de l'envoi:", error);
		return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }), { status: 500 });
	}
}
