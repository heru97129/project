'use client'

import {WorkDoneOrFormation} from '../workdoneorformation/WorkDoneOrFormation';
import React, {useEffect, useRef, useState} from 'react'
import styles from './journey.module.scss'
import {Span} from '../topspan/Span'
import Verify from '../hooks/VerifyWidth';

let tabJob = [
    {
        title: "Word we act",
        text: `Création d'une application pour faire accroitre la visibilité pour des associations dans le monde entier.
        Grâce à système de création de cause et de soutien implémenté dans l'application Word we act, j'ai été sollicté pour 
        m'occuper de la partie Front de l'application faite avec next js, sass et firebase, je suis actuellement en charge de la finissions de
        cette App reliant la base de donnée firebase et les requétes implémenté dans la partie front. Projet trés interssant qui m'as permis 
        de parfaire mes connaissances avec React et next.js ainsi que de découvrir Firebase.`,
        date: '6  mois',
        finish: 'actuellement'

    }, {
        title: "The Wire",
        text: `En tant que développeur, j'ai eu l'opportunité exceptionnelle de travailler en partenariat avec l'agence TheWire pour créer une application Next.js sur mesure, spécialement conçue pour optimiser leurs services de closing et d'acquisition de clients. Cette application représente une fusion parfaite entre la technologie de pointe et la stratégie d'affaires de TheWire. J'ai intégré des fonctionnalités avancées,
         telles que le routage dynamique et le rendu côté serveur, pour garantir une expérience utilisateur optimale. `,
        date: '2 semaines',
        finish: 'juin/2022'

    }, {
        title: "Agence Black Lemon",
        text: `
        En tant que développeur, j'ai eu le privilège de collaborer avec l'agence Black Lemon pour concevoir une newsletter exceptionnelle. 
        Mon objectif était de créer une newsletter qui reflète parfaitement la vision créative de l'agence tout en offrant une expérience utilisateur optimale.
         J'ai travaillé avec diligence pour mettre en place un design élégant et moderne, en harmonie avec l'esthétique distinctive de Black Lemon. `,
        date: '2 semaines',
        finish: 'juin/2022'

    }, {
        title: "prevhealth",
        text: `
        En tant que développeur, j'ai eu le plaisir de collaborer avec l'agence PrevHealth pour concevoir une application WordPress sur mesure qui répond parfaitement à leurs besoins uniques. 
        Cette application a été conçue pour simplifier et améliorer leurs processus internes, en offrant une plateforme conviviale et efficace pour gérer leurs données et leurs opérations.
         J'ai travaillé en étroite collaboration avec l'équipe de PrevHealth pour comprendre leurs exigences spécifiques, 
        en veillant à ce que chaque aspect de l'application réponde à leurs attentes.  `,
        date: '2  mois',
        finish: 'avril/2020'

    }
]
let tabFormation = [
    {
        title: "Créez une application JavaScript complète ",
        text: `Cette formation ma permis d'appréhender de nombreux sujets : 

    \n- Créer des scripts JavaScript client et manipuler le DOM  
    
    - Créer un serveur JavaScript Node.JS avec le module Express.JS
    
    - Mettre en place une base de données MongoDB et la manipuler avec Mongoose`,
        date: '2 mois',
        finish: 'avril/2020'

    }, {
        title: "Apprenez à faire des animations en JavaScript ",
        text: `Dans cette formation j'ai appris à créer des animations professionnelles de qualité en JavaScript, avec la fameuse librairie GreenSock.
    Cette librairie est le pilier de l'animation dans le développement web, en effet 70% des sites élus "Meilleurs WebDesign de l'année" s'en servent de près ou de loin.`,
        date: '1 mois',
        finish: 'janvier/2020'

    }, {
        title: "Comprendre les notions avancées de JavaScript ",
        text: `Apprentissage sur les notions essentielles  de javascript comme les prototypes, les closures, programation object orienté.
    Comprehenssion de javascript par des exercises pratiques et de la théorie sur les methodes et fonctionnement du languages .      
    `,
        date: '1 mois',
        finish: 'juin/2021'

    }, {
        title: "JavaScript : la formation ULTIME",
        text: `Cette formation complète et immersive m'a permis de plonger au cœur du langage de programmation JavaScript,
         l'une des technologies les plus essentielles et dynamiques du développement web. Durant cette formation, 
         j'ai acquis une compréhension approfondie des concepts fondamentaux de JavaScript, de la manipulation du DOM à la gestion des événements,
          en passant par les requêtes AJAX et les frameworks modernes tels que React et Next.js.`,
        date: '1/5 mois',
        finish: 'septembre/2021'

    }, {
        title: "Hands-on Three.js 3D Web Visualisations",
        text: `
        La formation en ligne sur Three.js a été une expérience incroyablement enrichissante pour moi en tant qu'étudiant. Grâce à cette formation,
         j'ai plongé dans l'univers fascinant de la création d'environnements 3D interactifs en utilisant JavaScript. Les modules étaient bien structurés,
         avec des tutoriels détaillés et des exemples concrets qui m'ont aidé à comprendre les concepts complexes de la bibliothèque Three.js.`,
        date: '1 mois',
        finish: 'novembre/2021'

    }, {
        title: "Next.js & React ",
        text: `Grâce à cette formation, j'ai acquis une compréhension approfondie de Next.js, un framework de développement React révolutionnaire. 
        Les cours étaient bien structurés, avec des explications claires et des exercices pratiques qui m'ont permis de maîtriser rapidement les concepts
         essentiels, tels que le routage dynamique, le rendu côté serveur, et la gestion des données avec l'API getStaticProps. L'e-learning m'a donné la
          flexibilité nécessaire pour apprendre à mon propre rythme,
         ce qui était essentiel pour concilier mes études avec d'autres engagements. `,
        date: '2 mois',
        finish: 'janvier/2022'

    }
]

function Journey({getboxArea}) {
    let journeyRef = useRef()
    let [widthPosition,
        setWidthPosition] = useState(0)
    let VerifyWidth = new Verify(setWidthPosition, 'pres')

    useEffect(() => {
        getboxArea({
            Carriere: {
                top: journeyRef.current.offsetTop,
                bottom: journeyRef.current.offsetTop + journeyRef.current.offsetHeight
            }
        })
        VerifyWidth.FindWidth()
    }, [widthPosition])

    return (
        <div className={styles['journey']} ref={journeyRef}>
            <div className={styles['journey__title']}>
                <Span text='💼 Carrière'/>
                <h1>Ma trajectoire jusqu'ici</h1>
            </div>
            <div className={styles['journey__exp']}>
                <div className={styles['pro']}>
                    <div className={styles['pro__title']}>
                        <h2>Professionnelment</h2>
                        <p>2022 à maintenant</p>
                    </div>

                    <div className={styles['pro__desc']}>
                        <div className={styles['inner-desk']}>
                            {tabJob.map((data, i) => {

                                const {title, text, finish, date} = data

                                return <WorkDoneOrFormation
                                    key={i}
                                    text={text}
                                    title={title}
                                    finish={finish}
                                    date={date}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles['school']}>
                    <div className={styles['school__title']}>
                        <h2>Formation</h2>
                        <p>2019 à maintenant</p>
                    </div>

                    <div className={styles['school__desc']}>
                        <div className={styles['inner-school']}>
                            {tabFormation.map((data, j) => {
                                const {title, text, finish, date} = data
                                return <WorkDoneOrFormation
                                    text={text}
                                    title={title}
                                    finish={finish}
                                    date={date}
                                    key={j}/>
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Journey