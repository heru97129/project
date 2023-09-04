'use client'
import {Work} from '../works/Work';
import React, {useEffect, useRef, useState} from 'react'
import styles from './portfolio.module.scss'
import {Span} from '../topspan/Span'
import Verify from '../hooks/VerifyWidth';

let tab = [{
    title : 'Tehuti',
    desc : 'Project personnel qui propose des livres à achetés ainsi que des articles à consultées pour les lecteurs.',
    techno : ['Next.js','sass','firebase'],
    imge: 'images/tehuti.PNG',
    link : "https://www.tehuti-book.com/"
},{
    title : 'Chagpt Clone',
    desc : 'Project personnel qui propose des services identiques à chatgpt utilisant l\'api de openai pour la partie chatbot.',
    techno : ['Next.js','sass','ApiRest'],
    imge: 'images/apichatgpt.PNG',
    link : "https://apichagpt-8h1o-2yfe0z287-heru97129.vercel.app/"
},
{
    title : 'World We Act',
    desc : 'Projets permettant de mettre en visibilités et de soutenir activement des causes dans le mondes.',
    techno : ['Next.js','firebase','typescript'],
    imge: 'images/world we act.PNG',
    link : "https://worldweact-git-main-rickyseezy.vercel.app/"
},
{
    title : 'Tehuti',
    desc : 'Project personnel qui propose des livres à achetés ainsi que des articles à consultées pour les lecteurs',
    techno : ['Next.js','sass','firebase'],
    imge: 'images/tehuti.PNG'
},
{
    title : 'Tehuti',
    desc : 'Project personnel qui propose des livres à achetés ainsi que des articles à consultées pour les lecteurs',
    techno : ['Next.js','sass','firebase'],
    imge: 'images/tehuti.PNG'
},
{
    title : 'Tehuti',
    desc : 'Project personnel qui propose des livres à achetés ainsi que des articles à consultées pour les lecteurs',
    techno : ['Next.js','sass','firebase'],
    imge: 'images/tehuti.PNG'
},
{
    title : 'Tehuti',
    desc : 'Project personnel qui propose des livres à achetés ainsi que des articles à consultées pour les lecteurs',
    techno : ['Next.js','sass','firebase'],
    imge: 'images/tehuti.PNG'
},
{
    title : 'Tehuti',
    desc : 'Project personnel qui propose des livres à achetés ainsi que des articles à consultées pour les lecteurs',
    techno : ['Next.js','sass','firebase'],
    imge: 'images/tehuti.PNG'
},]

function Portfolio({getboxArea}) {
    let portfolioRef = useRef()
    let [widthPosition,
        setWidthPosition] = useState(0)

    let VerifyWidth = new Verify(setWidthPosition,'port')

    useEffect(() => {
        getboxArea({Portfolio:{
            top :  portfolioRef.current.offsetTop,
            bottom :  portfolioRef.current.offsetTop + portfolioRef.current.offsetHeight
        }})
        VerifyWidth.FindWidth()
    }, [widthPosition])
    return (
        <div className={styles['portfolio']} ref={portfolioRef}>
            <div className={styles['portfolio__title']}>
                <Span text='🔗 Portfólio'/>
                <h1>Travaux et projets</h1>
            </div>

            <div className={styles['portfolio__gallerie']}>
                {tab.map((data, i) => {
                    const {techno,title,desc,imge,link} = data
                    return <Work techno={techno} link={link} title={title} desc={desc} imge={imge} key={i}/>

                })
}

            </div>
        </div>
    )
}

export default Portfolio