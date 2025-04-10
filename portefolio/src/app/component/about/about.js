import React from "react";
import { MapPinIcon, LayoutIcon, CodeIcon, GlobeIcon, HeartHandshakeIcon } from "lucide-react";
import "./about.scss";
import Image from "next/image";

export const AboutSection = () => {
    return (
        <div className=" flex column about">
            <div className="about__background">
                <div className="about__circle about__circle--large" />
                <div className="about__circle about__circle--small" />
            </div>

            <div className="about__container">
                <h2 className="about__title">ABOUT ME</h2>

                <div className="about__content">
                    <div className="about__column about__column--left flex column align-center center">
                        <div className=" relative">
                            <Image src="/PhotoPortFolio.jpg" alt="Professional headshot" className="about__image shadow" width={300} height={400} />{" "}
                        </div>
                        <div className="about__location">
                            <MapPinIcon size={20} />
                            <span>Toulouse</span>
                        </div>
                    </div>

                    <div className="about__column about__column--right">
                        <p className="about__description">Je suis un développeur web passionné par la création de sites internet et d'applications web. J'aime relever des défis techniques et trouver des solutions innovantes pour répondre aux besoins de mes clients.</p>

                        <div className="about__whatido">
                            <h3 className="about__subtitle">WHAT I DO</h3>

                            <div className="about__cards">
                                <div className="about__card">
                                    <LayoutIcon size={24} className="about__icon" />
                                    <h4 className="about__card-title">UX/UI design</h4>
                                    <p className="about__card-text">Création du design et adaptation en fonction des besoins client.</p>
                                </div>

                                <div className="about__card">
                                    <CodeIcon size={24} className="about__icon" />
                                    <h4 className="about__card-title">Development</h4>
                                    <p className="about__card-text">Intégration du design, ajout des fonctionnalités.</p>
                                </div>

                                <div className="about__card">
                                    <GlobeIcon size={24} className="about__icon" />
                                    <h4 className="about__card-title">SEO</h4>
                                    <p className="about__card-text">Mise en place du référencement du site, ainsi que son accessibilité.</p>
                                </div>

                                <div className="about__card">
                                    <HeartHandshakeIcon size={24} className="about__icon" />
                                    <h4 className="about__card-title">Support</h4>
                                    <p className="about__card-text">Accompagnement au delà du projet, résolution des problèmes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
