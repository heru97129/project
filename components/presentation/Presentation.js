'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from './presentation.module.scss'
import {Span} from "../topspan/Span";
import Verify from '../hooks/VerifyWidth';

export function Presentation({getboxArea}) {
    let presentationRef = useRef()
    let [widthPosition,
        setWidthPosition] = useState(0)
    let VerifyWidth = new Verify(setWidthPosition, 'pres')
    useEffect(() => {

        getboxArea({
            'Présentation': {
                top: presentationRef.current.offsetTop,
                bottom: presentationRef.current.offsetTop + presentationRef.current.offsetHeight
            }
        })
        VerifyWidth.FindWidth()

    }, [widthPosition])

    return <div className={styles['presentation']} ref={presentationRef}>
        <div className={styles['presentation__image']}>

            <img src="images/photo profil.jpg"/>

        </div>
        <div className={styles['presentation__text']}>

            <div>
                <Span text='🧐 Sur moi'/>
                <h1>Mon expérience
                    <br/>en tant que developpeur</h1>
                <p>
                👋 Il y a trois ans, je me suis lancé
                    dans un voyage passionnant en tant que développeur front-end autodidacte, et
                    depuis lors, chaque jour a été une nouvelle aventure dans le monde de la
                    programmation web. Au début, tout était un défi, depuis l'apprentissage des
                    langages de base tels que HTML, CSS et JavaScript, jusqu'à la compréhension des
                    concepts plus avancés comme les frameworks et les bibliothèques 💡. J'ai passé des
                    heures à coder, à déboguer et à créer des projets personnels pour mettre en
                    pratique ce que j'apprenais. Les tutoriels en ligne, les forums de développeurs,
                    et les livres techniques sont devenus mes compagnons constants. Progressivement,
                    j'ai acquis la confiance nécessaire pour collaborer sur des projets réels, ce
                    qui m'a permis de perfectionner mes compétences et d'explorer de nouvelles
                    technologies 🚀.

                </p>
            </div>

        </div>

    </div>;
}
