import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/header/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Portefolio Elia Kopff",
    description: "Portefolio du devellopeur Web Toulousain, Elia Kopff",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
