'use client'
import {Work} from '../works/Work';
import React, { useEffect, useRef } from 'react'
import styles from './portfolio.module.scss'
import {Span} from '../topspan/Span'

let tab = new Array(8).fill(0)

function Portfolio({getboxArea}) {
    let portfolioRef = useRef()
    useEffect(()=>{
     getboxArea({Portfolio:portfolioRef.current.offsetTop})
    },[])
    return (
        <div className={styles['portfolio']} ref={portfolioRef}>
            <div className={styles['portfolio__title']}>
                <Span text='🔗 Portfólio'/>
                <h1>Travaux et projets</h1>
            </div>

            <div className={styles['portfolio__gallerie']}>
                {tab.map((_,i)=> {
                    return <Work key={i}/>

                })
}

            </div>
        </div>
    )
}

export default Portfolio