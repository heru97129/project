'use client'
import {Work} from '../works/Work';
import React, {useEffect, useRef, useState} from 'react'
import styles from './portfolio.module.scss'
import {Span} from '../topspan/Span'
import Verify from '../hooks/VerifyWidth';

let tab = new Array(8).fill(0)

function Portfolio({getboxArea}) {
    let portfolioRef = useRef()
    let [widthPosition,
        setWidthPosition] = useState(0)

    let VerifyWidth = new Verify(setWidthPosition,'port')

    useEffect(() => {
        getboxArea({Portfolio: portfolioRef.current.offsetTop})
        VerifyWidth.FindWidth()
        console.log(widthPosition,'portfo')
    }, [widthPosition])
    return (
        <div className={styles['portfolio']} ref={portfolioRef}>
            <div className={styles['portfolio__title']}>
                <Span text='🔗 Portfólio'/>
                <h1>Travaux et projets</h1>
            </div>

            <div className={styles['portfolio__gallerie']}>
                {tab.map((_, i) => {
                    return <Work key={i}/>

                })
}

            </div>
        </div>
    )
}

export default Portfolio