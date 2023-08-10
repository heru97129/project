import React from "react";
import styles from './recom.module.scss'
export function Recom({}) {
    return <div className={styles['recoms']}>
        <img src='images\Quotes.png'/>
        <p>O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo
            que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos,
            com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz
            bem feito. Sempre!
        </p>
        <div className={styles['recoms__profil']}>
            <img src='images\image 3.png'/>
            <div>
                <h3>Romario Lima</h3>
                <p>Ingénieur systéme</p>
            </div>
        </div>
    </div>;
}
