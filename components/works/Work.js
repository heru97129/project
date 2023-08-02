import React from "react";
import styles from './work.module.scss'
export function Work({}) {
    return <div className={styles['travaux']}>
        <div className={styles['travaux__title']}>
            <h3>Move it</h3>
            <p>Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de
                Pomodoro com exercícios.</p>
        </div>
        <div className={styles['travaux__description']}>
            <span>Online</span>
            <span>Typescript</span>

            <img src='images/image 1.png'/>

        </div>

    </div>;
}
