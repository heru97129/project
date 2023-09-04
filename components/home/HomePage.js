import {Span} from '../topspan/Span';
import React from "react";
import styles from './home.module.scss'

export function HomePage({}) {
    return <div className={styles['home']}>
        <div className={styles['home__pres']}>
            <div className={styles['svgLogo']}>
       
                <h2>A.D.N.A</h2>
            </div>
            <div>
                <Span text='👋 Salutations !'/>
                <h1>Beaujour
                    <br/>
                    Grégory
                </h1>
                <h3>Front - end developpeur</h3>
                <div className={styles['reseau']}>
                    <img src="images/behance.png"/>
                    <img src="images/github.png"/>

                    <img src="images/linkedin.png"/>

                </div>
            </div>
        </div>
        <div className={styles['home__image']}>
            <img src="images/anime perso (2).png"/>
        </div>
        <div className={styles['home__cv']}>
            <div className={styles['cv']}>
                <h3>téléchargé le cv</h3>
            </div>
        </div>
    </div>;
}
