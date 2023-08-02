'use client'
import {Work} from '../works/Work';
import React from 'react'
import styles from './portfolio.module.scss'
import {Span} from '../topspan/Span'

let tab = new Array(8).fill(0)

function Portfolio() {
    console.log(tab)

    return (
        <div className={styles['portfolio']}>
            <div className={styles['portfolio__title']}>
                <Span text='🔗 Portfólio'/>
                <h1>Travaux et projets</h1>
            </div>

            <div className={styles['portfolio__gallerie']}>
                {tab.map(_ => {
                    return <Work/>

                })
}

            </div>
        </div>
    )
}

export default Portfolio