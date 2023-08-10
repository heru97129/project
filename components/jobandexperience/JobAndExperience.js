'use client'
import React, { useEffect } from 'react'
import styles from './jobandexperience.module.scss'

function JobAndExperience() {


    return (
        <div className={styles['jobandexperience']}>
            <div className={styles['jobandexperience__container']}>
            <div className={styles['competence']}>
                <div className={styles['tag']}>
                    <span>
                    <img src='images/CodeIcon.png' />
              
                    </span>
                    <h4>4 année</h4>
                    <h2>Developpeur</h2>
                </div>
                <div className={styles['tag']}>
                <span>
         
                <img src='images/ProjectsIcon.png' />
                    </span>
                    <h4>1 année</h4>
                    <h2>Free-lance</h2>

                </div>
            </div>
            <div className={styles['exp']}>
                <div>
                   <h4>Formation</h4> 
                   <h2>Front-end dev</h2>

                </div>
                <div>
                   <h4>Plateforme</h4> 
                   <h2>Applications</h2>

                </div>
            </div>
            </div>
        </div>
    )
}

export default JobAndExperience