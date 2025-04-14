import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Portfolio Elia Kopff',
	description: 'Portfolio du développeur Web Toulousain, Elia Kopff',
	keywords: ['développeur web', 'portfolio', 'Next.js', 'Toulouse', 'React', 'Elia Kopff'],
	authors: [{ name: 'Elia Kopff', url: 'https://tonsite.com' }],
	creator: 'Elia Kopff',
	metadataBase: new URL('https://tonsite.com'),
	icons: {
		icon: '/favicon.ico',
	},

	openGraph: {
		title: 'Portefolio Elia Kopff',
		description: 'Créer un code propre pour des idées ambitieuses. Découvrez mon univers.',
		url: 'https://tonsite.com',
		siteName: 'Elia Kopff',
		images: [
			{
				url: './imageOpenGraph.png',
				width: 1200,
				height: 630,
				alt: 'Aperçu du portfolio d’Elia Kopff',
			},
		],
		locale: 'fr_FR',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<LanguageProvider>
					<main>{children}</main>
				</LanguageProvider>
			</body>
		</html>
	);
}
