import React from "react";
import styles from './workdoneorformation.module.scss'

export function WorkDoneOrFormation({}) {
    return <div className={styles['card-exp']}>
        <h3>Desenvolvedor Front-end na Ensinio</h3>
        <p>Desenvolvimento de features na aplicação principal e site. com React Js e
            Typescript, além do auxíllio de outras tecnologias como Next, Styled Components
            e padrões de arquitetura.</p>

        <div className={styles['card-exp__details']}>
            <span>1ans et 6 mois</span>
            <span>avril/2021 - actuellement</span>

        </div>
    </div>;
}
