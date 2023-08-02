import React from "react";
import styles from './presentation.module.scss'
import { Span } from "../topspan/Span";
export function Presentation({}) {
    return <div className={styles['presentation']}>
        <div className={styles['presentation__image']}>

            <img src="images/photo profil.jpg"/>

        </div>
        <div className={styles['presentation__text']}>

            <div>
                <Span text='🧐 Sur moi' />
                <h1>Mon expérience <br/>en tant que developpeur</h1>
                <p>
                    👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de
                    Henrique. Prazer! 👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces
                    com JavaScript, React JS e Typescript. 🎓 Graduado em Análise e Desenvolvimento
                    de Sistemas pela Fatec de São José dos Campos 💡 Interesses em desenvolvimento
                    Front-end com React, React Native, VueJS e UX/UI Design. 🚀 Tentando ser um
                    pouquinho melhor do que ontem todos dias.

                </p>
            </div>

        </div>

    </div>;
}
